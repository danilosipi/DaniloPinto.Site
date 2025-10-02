'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

import { Container } from '@/components/Container';
import { CTAButton } from '@/components/CTAButton';
import { ThemeToggle } from '@/components/ThemeToggle';
import { LinkedInIcon } from '@/components/icons/LinkedInIcon';
import { WhatsAppIcon } from '@/components/icons/WhatsAppIcon';
import { siteConfig } from '@/config/site';
import { getWhatsappUrl } from '@/utils/contact';

const navigation = [
  { href: '/#experiencia', label: 'Experiência' },
  { href: '/#formacao', label: 'Formação/Cursos' },
  { href: '/projetos', label: 'Projetos' },
  { href: '/contato', label: 'Contato' },
];

const internalHref = (href: string) => href as Parameters<typeof Link>[0]['href'];

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
        href={internalHref(href)}
        className="transition-colors hover:text-primary-500 focus-visible:text-primary-500"
      >
        {label}
      </Link>
    );
  };

  return (
    <header className="sticky top-0 z-50 border-b border-primary-900/10 bg-[rgb(var(--color-bg)/0.92)] backdrop-blur dark:border-primary-500/20 dark:bg-[rgb(13_18_28/0.9)]">
      <Container
        as="nav"
        className="flex items-center justify-between gap-4 py-4"
        aria-label="Navegação principal"
      >
        <Link
          href="/"
          className="flex items-center gap-3"
          aria-label="Voltar para a página inicial"
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
          <div className="flex flex-col text-left">
            <span className="text-sm font-semibold text-primary-500 dark:text-primary-300">
              {siteConfig.name}
            </span>
            <span className="text-xs text-soft dark:text-primary-100/80">{siteConfig.role}</span>
          </div>
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          <ul className="flex items-center gap-6 text-sm font-medium text-default">
            {navigation.map((item) => (
              <li key={item.href}>{renderNavLink(item.href, item.label)}</li>
            ))}
          </ul>
          <div className="flex items-center gap-3">
            <CTAButton
              href={getWhatsappUrl()}
              ariaLabel="Abrir conversa comigo no WhatsApp"
              variant="whatsapp"
              icon={<WhatsAppIcon className="h-5 w-5" />}
              external
            />
            <CTAButton
              href={siteConfig.linkedin}
              ariaLabel="Visitar meu perfil no LinkedIn"
              variant="linkedin"
              icon={<LinkedInIcon className="h-5 w-5" />}
              external
            />
            <ThemeToggle />
          </div>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md border border-primary-500/20 px-3 py-2 text-sm font-semibold text-soft transition hover:border-primary-500 hover:text-primary-500 dark:border-primary-500/40 dark:text-primary-100 dark:hover:text-primary-300 lg:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          {isOpen ? 'Fechar' : 'Menu'}
        </button>
      </Container>

      {isOpen && (
        <div
          id="mobile-menu"
          className="border-t border-primary-500/10 bg-background dark:border-primary-500/20 dark:bg-[rgb(13_18_28/0.95)] lg:hidden"
        >
          <Container className="flex flex-col gap-4 py-4">
            <ul className="flex flex-col gap-3 text-sm font-medium text-default">
              {navigation.map((item) => (
                <li key={item.href}>
                  {item.href.startsWith('#') ? (
                    <a
                      href={item.href}
                      className="block rounded-md px-2 py-2 transition-colors hover:bg-primary-500/10 dark:hover:bg-primary-500/20"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link
                      href={internalHref(item.href)}
                      className="block rounded-md px-2 py-2 transition-colors hover:bg-primary-500/10 dark:hover:bg-primary-500/20"
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
                variant="whatsapp"
                icon={<WhatsAppIcon />}
                className="w-full"
                external
              />
              <CTAButton
                href={siteConfig.linkedin}
                label="LinkedIn"
                ariaLabel="Visitar perfil de Danilo no LinkedIn"
                variant="linkedin"
                icon={<LinkedInIcon />}
                className="w-full"
                external
              />
              <div className="flex justify-end">
                <ThemeToggle />
              </div>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
