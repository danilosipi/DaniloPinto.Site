import type { Metadata } from 'next';

import { ProjectsGallery } from '@/components/ProjectsGallery';
import { Container } from '@/components/Container';
import { getCanonicalPath, getDefaultSeo } from '@/lib/seo';
import { allProjects } from 'contentlayer/generated';

const defaultSeo = getDefaultSeo();

export const metadata: Metadata = {
  title: 'Projetos | Danilo Pinto',
  description: 'Conheça os projetos de transformação digital, automação e engenharia de software liderados por Danilo Pinto.',
  keywords: defaultSeo.keywords,
  alternates: {
    canonical: getCanonicalPath('/projetos'),
  },
  openGraph: {
    ...defaultSeo.openGraph,
    title: 'Projetos | Danilo Pinto',
    description: 'Conheça os projetos de transformação digital, automação e engenharia de software liderados por Danilo Pinto.',
    url: getCanonicalPath('/projetos'),
  },
  twitter: {
    ...defaultSeo.twitter,
    title: 'Projetos | Danilo Pinto',
    description: 'Conheça os projetos de transformação digital, automação e engenharia de software liderados por Danilo Pinto.',
  },
};

function sortProjects() {
  return [...allProjects].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export default function ProjectsPage() {
  const projects = sortProjects();

  return (
    <div className="bg-background">
      <Container className="space-y-12 py-16">
        <header className="max-w-3xl space-y-4">
          <h1 className="text-4xl font-semibold text-default">
            Projetos
          </h1>
          <p className="text-lg text-soft">
            Iniciativas e estudos de caso em transformação digital, automação e cultura de engenharia. 
            Cada projeto representa um desafio de negócio e uma solução técnica aplicada.
          </p>
        </header>

        <ProjectsGallery projects={projects} />
      </Container>
    </div>
  );
}
