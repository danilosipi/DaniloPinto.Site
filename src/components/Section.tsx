import React from 'react';
import clsx from 'clsx';
import { Container } from './Container';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

// Este componente `Section` foi refatorado para usar o sistema de temas atual.
// No entanto, a página principal `page.tsx` usa seções manuais com classes `bg-section`.
// Para consistência, as seções em `page.tsx` devem ser reavaliadas.
export default function Section({ children, className, ...props }: SectionProps) {
  return (
    <section role="region" className={clsx('py-16', className)} {...props}>
      <Container>{children}</Container>
    </section>
  );
}
