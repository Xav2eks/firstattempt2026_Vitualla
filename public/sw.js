const CACHE_VERSION = "v3";

const CACHES = {
  static: `addu-static-${CACHE_VERSION}`,
  bundles: `addu-bundles-${CACHE_VERSION}`,
};

// Pre-cache these app shell routes on install
const PRECACHE_URLS = [
  "/",
  "/login",
  "/signup",
  "/home",
  "/donations",
  "/events",
  "/notifications",
  "/profile",
  "/admin/home",
  "/admin/campaigns",
  "/admin/notifications",
  "/manifest.json", // MUST be precached for installability
];

const CACHE_FIRST_ORIGINS = [
  "https://www.addu.edu.ph",
  "https://fonts.gstatic.com",
  "https://fonts.googleapis.com",
  "https://cdnjs.cloudflare.com",
  "https://brandlogos.net",
  "https://upload.wikimedia.org",
  "https://cdn-icons-png.flaticon.com",
];

const BUNDLE_PATTERNS = [
  /\/[a-f0-9]+\.js(\?.*)?$/,
  /\/[a-f0-9]+\.css(\?.*)?$/,
  /\/packages\//,
  /\/app\//,
];

// ── Helpers ──────────────────────────────────────────────────

function matchesBundlePattern(url) {
  return BUNDLE_PATTERNS.some((re) => re.test(url));
}

function matchesCacheFirstOrigin(url) {
  return CACHE_FIRST_ORIGINS.some((origin) => url.startsWith(origin));
}

async function cacheFirst(request, cacheName) {
  const cache = await caches.open(cacheName);
  const cached = await cache.match(request);
  if (cached) return cached;

  try {
    const response = await fetch(request);
    if (response && response.ok) {
      cache.put(request, response.clone());
    }
    return response;
  } catch (err) {
    return new Response("Offline – resource unavailable.", { status: 503 });
  }
}

async function staleWhileRevalidate(request, cacheName) {
  const cache = await caches.open(cacheName);
  const cached = await cache.match(request);

  const networkFetch = fetch(request)
    .then((res) => {
      if (res && res.ok) cache.put(request, res.clone());
      return res;
    })
    .catch(() => null);

  if (cached) {
    return cached; 
  }

  const networkRes = await networkFetch;
  if (networkRes) return networkRes;

  return new Response("Offline", { status: 503 });
}


self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(CACHES.bundles)
      .then((cache) => cache.addAll(PRECACHE_URLS))
      .then(() => self.skipWaiting()),
  );
});

// ── Activate ─────────────────────────────────────────────────

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys
            .filter((k) => !Object.values(CACHES).includes(k))
            .map((k) => caches.delete(k)),
        ),
      )
      .then(() => self.clients.claim()),
  );
});

// ── Fetch ─────────────────────────────────────────────────────

self.addEventListener("fetch", (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // 1. Bypass real-time traffic
  if (
    url.href.includes("sockjs") ||
    url.pathname.includes("sockjs") ||
    url.href.includes("__webpack")
  ) {
    return;
  }

  // 2. Security & Method
  if (request.method !== "GET") return;
  if (!url.protocol.startsWith("http")) return;

  if (
    url.pathname.includes("favicon") ||
    url.pathname.includes("manifest.json")
  ) {
    event.respondWith(
      caches.match(request).then((response) => {
        return response || fetch(request); // Try cache, then network. NO hardcoded 404.
      }),
    );
    return;
  }

  // 4. EXTERNAL ASSETS (CDN)
  if (matchesCacheFirstOrigin(url.href)) {
    event.respondWith(cacheFirst(request, CACHES.static));
    return;
  }

  // 5. BUNDLES
  if (matchesBundlePattern(url.pathname)) {
    event.respondWith(staleWhileRevalidate(request, CACHES.bundles));
    return;
  }

  // 6. NAVIGATION
  if (request.mode === "navigate") {
    event.respondWith(
      fetch(request).catch(async () => {
        const cache = await caches.open(CACHES.bundles);
        return (
          (await cache.match("/")) || new Response("Offline", { status: 503 })
        );
      }),
    );
  }
});
