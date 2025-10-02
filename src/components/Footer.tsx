import Link from 'next/link';
import React from 'react';

import { Container } from '@/components/Container';
import { siteConfig } from '@/config/site';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-primary-900/10 bg-background">
      <Container className="flex flex-col gap-4 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-base font-semibold text-default">{siteConfig.name}</p>
          <p className="text-soft">{siteConfig.role}</p>
          <p className="text-subtle">{siteConfig.location}</p>
        </div>
        <div className="flex flex-col items-start gap-2 text-soft sm:items-end">
          <Link href="mailto:danilo.sipi@gmail.com" className="hover:text-primary-500">
            {siteConfig.email}
          </Link>
          <Link href="/cv" className="text-primary-500 hover:text-primary-700">
            Abrir CV (PDF)
          </Link>
          <span className="text-xs text-subtle">
            &copy; {year} Portfólio de {siteConfig.name}
          </span>
        </div>
      </Container>
      <div
        className="text-center p-4"
        style={{ background: 'var(--section-even-bg)', color: 'var(--section-even-text)' }}
      >
        <p>© {new Date().getFullYear()} Danilo Pinto. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
