'use client';
import React, { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [theme, setTheme] = useState<'dark' | 'light' | null>(null);

  useEffect(() => {
    // Este código só roda no cliente, após a montagem inicial.
    // O tema inicial é definido pelo script inline no `layout.tsx`.
    // Aqui, apenas sincronizamos o estado do React com o estado real do DOM.
    const isDark = document.documentElement.classList.contains('dark');
    setTheme(isDark ? 'dark' : 'light');
  }, []);

  const toggle = () => {
    const currentTheme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
    const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';

    setTheme(nextTheme);
    localStorage.setItem('theme', nextTheme);

    if (nextTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  if (theme === null) {
    // Retorna um placeholder ou null para evitar piscar durante a renderização inicial no servidor.
    return <div className="w-[58px] h-[38px]"></div>;
  }

  return (
    <button aria-pressed={theme === 'dark'} onClick={toggle} className="btn">
      {theme === 'dark' ? '☀️' : '🌙'}
    </button>
  );
}
