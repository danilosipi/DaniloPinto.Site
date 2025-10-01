import { ReactNode } from 'react';
import clsx from 'clsx';

type ContainerProps = {
  as?: 'div' | 'section' | 'header' | 'footer' | 'main' | 'nav' | 'article';
  id?: string;
  className?: string;
  children: ReactNode;
};

export function Container({ as: Component = 'div', id, className, children }: ContainerProps) {
  return (
    <Component
      id={id}
      className={clsx('container mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8', className)}
    >
      {children}
    </Component>
  );
}
