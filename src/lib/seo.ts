import { siteConfig } from '@/config/site';

export function getCanonicalPath(path: string) {
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${siteConfig.website.replace(/\/$/, '')}${normalized}`;
}

export function getDefaultSeo() {
  return {
    title: siteConfig.seo.defaultTitle,
    description: siteConfig.seo.defaultDescription,
    keywords: siteConfig.seo.keywords,
    openGraph: {
      title: siteConfig.seo.defaultTitle,
      description: siteConfig.seo.defaultDescription,
      url: siteConfig.website,
      images: [
        {
          url: siteConfig.seo.ogImage,
          width: 1200,
          height: 630,
          alt: siteConfig.seo.defaultTitle,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: siteConfig.seo.defaultTitle,
      description: siteConfig.seo.defaultDescription,
      images: [siteConfig.seo.ogImage],
    },
  };
}
