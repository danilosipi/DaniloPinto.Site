import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

import { allProjects } from 'contentlayer/generated';
import { getCanonicalPath } from '@/lib/seo';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ['/', '/contato', '/cv'].map((path) => ({
    url: getCanonicalPath(path),
    lastModified: new Date(),
  }));

  const projectRoutes = allProjects.map((project) => ({
    url: getCanonicalPath(`/projetos/${project.slug}`),
    lastModified: project.date ? new Date(project.date) : undefined,
  }));

  return [...staticRoutes, ...projectRoutes];
}
