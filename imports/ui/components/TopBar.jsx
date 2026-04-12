import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function TopBar({ title, backPath, rightIcon, onRightClick, dark = false }) {
  const navigate = useNavigate();

  const bg    = dark ? 'bg-admin-900' : 'bg-brand-800';
  const text  = 'text-white';

  return (
    <div className={`${bg} ${text} flex items-center justify-between px-4 py-3 sticky top-0 z-40`}>
      <button
        onClick={() => backPath ? navigate(backPath) : navigate(-1)}
        className="w-9 h-9 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
      >
        <span className="text-lg">←</span>
      </button>
      <h1 className="font-semibold text-base">{title}</h1>
      <button
        onClick={onRightClick}
        className="w-9 h-9 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
      >
        <span className="text-lg">{rightIcon || '☰'}</span>
      </button>
    </div>
  );
}
