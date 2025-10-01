import Link from 'next/link';

import { Container } from '@/components/Container';
import { siteConfig } from '@/config/site';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-primary-900/10 bg-white">
      <Container className="flex flex-col gap-4 py-8 text-sm text-primary-700 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-base font-semibold text-primary-900">{siteConfig.name}</p>
          <p>{siteConfig.role}</p>
          <p>{siteConfig.location}</p>
        </div>
        <div className="flex flex-col items-start gap-2 sm:items-end">
          <Link href="mailto:danilo.sipi@gmail.com" className="hover:text-primary-500">
            {siteConfig.email}
          </Link>
          <Link href="/cv" className="text-primary-500 hover:text-primary-700">
            Abrir CV (PDF)
          </Link>
          <span className="text-xs text-primary-600/80">
            &copy; {year} Portfolio de {siteConfig.name}
          </span>
        </div>
      </Container>
    </footer>
  );
}
