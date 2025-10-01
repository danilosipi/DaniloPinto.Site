'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // Garante que o componente só seja renderizado no cliente
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Retorna um placeholder para evitar hydration mismatch
    return <div className="w-[58px] h-[38px]" />;
  }

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <button
      onClick={toggleTheme}
      className="btn"
      aria-label={theme === 'dark' ? 'Ativar modo claro' : 'Ativar modo escuro'}
    >
      {theme === 'dark' ? '☀️' : '🌙'}
    </button>
  );
}
