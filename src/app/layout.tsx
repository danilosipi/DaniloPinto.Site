import type { Metadata } from 'next';

import '@/styles/globals.css';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { fontMono, fontSans } from '@/lib/fonts';
import { getDefaultSeo } from '@/lib/seo';
import { siteConfig } from '@/config/site';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: siteConfig.name,
  jobTitle: siteConfig.role,
  email: `mailto:${siteConfig.email}`,
  telephone: siteConfig.phone,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Sao Paulo',
    addressCountry: 'BR',
  },
  url: siteConfig.website,
  sameAs: [siteConfig.linkedin],
};

const defaultSeo = getDefaultSeo();

const initialThemeScript = `(() => {
  try {
    const storageKey = 'theme-preference';
    const classNameDark = 'dark';
    const stored = window.localStorage.getItem(storageKey);
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = stored || (prefersDark ? 'dark' : 'light');
    if (theme === 'dark') {
      document.documentElement.classList.add(classNameDark);
    } else {
      document.documentElement.classList.remove(classNameDark);
    }
  } catch (error) {}
})();`;

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.website),
  title: {
    default: defaultSeo.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: defaultSeo.description,
  keywords: defaultSeo.keywords,
  openGraph: {
    ...defaultSeo.openGraph,
  },
  twitter: {
    ...defaultSeo.twitter,
  },
  alternates: {
    canonical: siteConfig.website,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: initialThemeScript }} />
      </head>
      <body
        className={`${fontSans.variable} ${fontMono.variable} flex min-h-screen flex-col bg-[var(--color-bg)] text-[var(--color-text)] antialiased`}
      >
        <Header />
        <main id="conteudo-principal" className="flex-1">
          {children}
        </main>
        <Footer />
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
