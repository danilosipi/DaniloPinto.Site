import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

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
