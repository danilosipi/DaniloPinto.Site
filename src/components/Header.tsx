'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

import { Container } from '@/components/Container';
import { CTAButton } from '@/components/CTAButton';
import { siteConfig } from '@/config/site';
import { getWhatsappUrl } from '@/utils/contact';

const navigation = [
  { href: '#experiencia', label: 'Experiencia' },
  { href: '#projetos', label: 'Projetos' },
  { href: '/contato', label: 'Contato' },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const renderNavLink = (href: string, label: string) => {
    if (href.startsWith('#')) {
      return (
        <a
          href={href}
          className="transition-colors hover:text-primary-500 focus-visible:text-primary-500"
        >
          {label}
        </a>
      );
    }

    return (
      <Link
        href={href as Parameters<typeof Link>[0]['href']}
        className="transition-colors hover:text-primary-500 focus-visible:text-primary-500"
      >
        {label}
      </Link>
    );
  };

  return (
    <header className="sticky top-0 z-50 border-b border-primary-900/10 bg-white/90 backdrop-blur">
      <Container
        as="nav"
        className="flex items-center justify-between py-4"
        aria-label="Navegacao principal"
      >
        <Link
          href="/"
          className="flex items-center gap-3"
          aria-label="Voltar para a pagina inicial"
        >
          <div className="relative h-12 w-12 overflow-hidden rounded-full border border-primary-500/20 bg-primary-500/10">
            <Image
              src="/images/headshot-placeholder.jpg"
              alt={`Foto de ${siteConfig.name}`}
              fill
              sizes="48px"
              className="object-cover"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-primary-500">{siteConfig.name}</span>
            <span className="text-xs text-primary-700/80">{siteConfig.role}</span>
          </div>
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          <ul className="flex items-center gap-6 text-sm font-medium text-primary-800">
            {navigation.map((item) => (
              <li key={item.href}>{renderNavLink(item.href, item.label)}</li>
            ))}
          </ul>
          <div className="flex items-center gap-3">
            <CTAButton
              href={getWhatsappUrl()}
              label="Falar no WhatsApp"
              ariaLabel="Abrir conversa com Danilo no WhatsApp"
              external
            />
            <CTAButton
              href={siteConfig.linkedin}
              label="LinkedIn"
              variant="secondary"
              ariaLabel="Visitar perfil de Danilo no LinkedIn"
              external
            />
          </div>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md border border-primary-500/20 px-3 py-2 text-sm font-semibold text-primary-700 lg:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          {isOpen ? 'Fechar' : 'Menu'}
        </button>
      </Container>

      {isOpen && (
        <div id="mobile-menu" className="border-t border-primary-500/10 bg-white lg:hidden">
          <Container className="flex flex-col gap-4 py-4">
            <ul className="flex flex-col gap-3 text-sm font-medium text-primary-800">
              {navigation.map((item) => (
                <li key={item.href}>
                  {item.href.startsWith('#') ? (
                    <a
                      href={item.href}
                      className="block rounded-md px-2 py-2 transition-colors hover:bg-primary-500/10"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link
                      href={item.href as Parameters<typeof Link>[0]['href']}
                      className="block rounded-md px-2 py-2 transition-colors hover:bg-primary-500/10"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
            <div className="flex flex-col gap-2">
              <CTAButton
                href={getWhatsappUrl()}
                label="Conversar no WhatsApp"
                ariaLabel="Abrir conversa com Danilo no WhatsApp"
                className="w-full"
                external
              />
              <CTAButton
                href={siteConfig.linkedin}
                label="LinkedIn"
                variant="secondary"
                ariaLabel="Visitar perfil de Danilo no LinkedIn"
                className="w-full"
                external
              />
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
