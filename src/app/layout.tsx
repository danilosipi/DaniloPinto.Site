import type { Metadata } from 'next';

import '@/styles/globals.css';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { ThemeProvider } from '@/components/ThemeProvider'; // Importado
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

// O script de tema inicial foi removido, pois o `next-themes` gerencia isso.

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
      <head />
      <body
        className={`${fontSans.variable} ${fontMono.variable} flex min-h-screen flex-col antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
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
        </ThemeProvider>
      </body>
    </html>
  );
}
