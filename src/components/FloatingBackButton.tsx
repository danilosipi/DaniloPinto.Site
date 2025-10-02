'use client';

import { useEffect, useState } from 'react';
import { CTAButton } from './CTAButton';

export function FloatingBackButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div
      className={`fixed bottom-4 right-4 transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <CTAButton
        href="/#projetos"
        label="< Voltar"
        variant="secondary"
        ariaLabel="Voltar para a seção de projetos"
      />
    </div>
  );
}
