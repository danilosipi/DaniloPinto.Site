import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import dayjs from 'dayjs';

import { allProjects } from 'contentlayer/generated';
import { Container } from '@/components/Container';
import { CTAButton } from '@/components/CTAButton';
import { MDXContent } from '@/components/MDXContent';
import { EmailIcon } from '@/components/icons/EmailIcon';
import { WhatsAppIcon } from '@/components/icons/WhatsAppIcon';
import { FloatingBackButton } from '@/components/FloatingBackButton';
import { getMailtoLink, getWhatsappUrl } from '@/utils/contact';
import { getCanonicalPath, getDefaultSeo } from '@/lib/seo';

export function generateStaticParams() {
  return allProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = allProjects.find((item) => item.slug === slug);

  if (!project) {
    return { title: 'Projeto não encontrado | Danilo Pinto' };
  }

  const canonical = getCanonicalPath(`/projetos/${project.slug}`);
  const defaultSeo = getDefaultSeo();
  const fullTitle = `${project.title} | Projeto de Danilo Pinto`;

  return {
    title: fullTitle,
    description: project.excerpt,
    alternates: {
      canonical,
    },
    openGraph: {
      ...defaultSeo.openGraph,
      title: fullTitle,
      description: project.excerpt,
      url: canonical,
      images: project.coverImage ? [{ url: project.coverImage }] : defaultSeo.openGraph.images,
    },
    twitter: {
      ...defaultSeo.twitter,
      title: fullTitle,
      description: project.excerpt,
    },
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = allProjects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  const canonical = getCanonicalPath(`/projetos/${project.slug}`);
  const whatsappMessage = `Olá Danilo, li sobre o projeto ${project.title} e gostaria de conversar.`;
  const emailSubject = `Quero saber mais sobre ${project.title}`;

  const breadcrumbJsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: getCanonicalPath('/'),
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Projetos',
          item: getCanonicalPath('/projetos'),
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: project.title,
          item: canonical,
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'CreativeWork',
      headline: project.title,
      description: project.excerpt,
      author: {
        '@type': 'Person',
        name: 'Danilo Pinto',
      },
      datePublished: project.date,
    },
  ];

  return (
    <Container as="article" className="mt-16 mb-24 space-y-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <div className="space-y-3">
        <span className="text-xs uppercase tracking-[0.25em] text-primary-500">Projeto</span>
        <h1 className="text-3xl font-semibold text-default lg:text-4xl">{project.title}</h1>
        <p className="text-soft">{project.excerpt}</p>
        <div className="flex flex-wrap items-center gap-3 text-xs text-subtle">
          <time dateTime={project.date}>{dayjs(project.date).format('DD/MM/YYYY')}</time>
          <span className="rounded-full bg-primary-500/10 px-3 py-1 uppercase tracking-wide">
            {project.status}
          </span>
          {project.tags?.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-primary-500/10 px-3 py-1 uppercase tracking-wide"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="prose prose-slate max-w-none dark:prose-invert">
        <MDXContent code={project.body.code} />
      </div>

      <div className="flex flex-wrap items-center gap-3 rounded-2xl border border-primary-500/10 bg-surface p-6 shadow-soft">
        <div className="flex-1">
          <h2 className="text-lg font-semibold text-default">
            Quer saber como este projeto pode ajudar a sua equipe?
          </h2>
          <p className="text-sm text-muted">
            Vamos conversar sobre desafios de transformação, confiabilidade ou automação na sua
            empresa.
          </p>
        </div>
        <CTAButton
          href={getWhatsappUrl(whatsappMessage)}
          label="Conversar agora"
          ariaLabel={`Conversar com Danilo sobre o projeto ${project.title}`}
          variant="whatsapp"
          icon={<WhatsAppIcon />}
          external
        />
        <CTAButton
          href={getMailtoLink(emailSubject)}
          label="Enviar email"
          variant="secondary"
          ariaLabel={`Enviar email sobre o projeto ${project.title}`}
          icon={<EmailIcon />}
          external
        />
      </div>
      <FloatingBackButton />
    </Container>
  );
}
