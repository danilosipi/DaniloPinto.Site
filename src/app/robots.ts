import type { MetadataRoute } from 'next';

import { getCanonicalPath } from '@/lib/seo';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: ['/', '/contato', '/cv', '/projetos/'],
    },
    sitemap: getCanonicalPath('/sitemap.xml'),
  };
}
