import type { Metadata } from 'next';
import Image from 'next/image';

import { CTAButton } from '@/components/CTAButton';
import { Container } from '@/components/Container';
import { ExperienceTimeline } from '@/components/ExperienceTimeline';
import { ProjectsGallery } from '@/components/ProjectsGallery';
import { heroSection, skillTags, siteConfig } from '@/config/site';
import { getCanonicalPath, getDefaultSeo } from '@/lib/seo';
import { getWhatsappUrl } from '@/utils/contact';
import { allProjects } from 'contentlayer/generated';
import Section from '@/components/Section';

function sortProjects() {
  return [...allProjects].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

const defaultSeo = getDefaultSeo();

export const metadata: Metadata = {
  title: defaultSeo.title,
  description: defaultSeo.description,
  keywords: defaultSeo.keywords,
  alternates: {
    canonical: getCanonicalPath('/'),
  },
  openGraph: {
    ...defaultSeo.openGraph,
    url: getCanonicalPath('/'),
  },
  twitter: {
    ...defaultSeo.twitter,
  },
};

export default function HomePage() {
  const featuredProjects = sortProjects();

  return (
    <div className="space-y-24 pb-24">
      <section id="hero" className="bg-hero">
        <Container className="flex flex-col gap-10 py-16 lg:flex-row lg:items-center">
          <div className="flex-1 space-y-6">
            <span className="text-xs uppercase tracking-[0.4em] text-primary-500">
              Delivery manager & transformacao digital
            </span>
            <h1 className="text-4xl font-semibold leading-tight text-default lg:text-5xl">
              {heroSection.headline}
            </h1>
            <p className="text-lg text-soft">{heroSection.subheadline}</p>
            <p className="text-muted">{heroSection.bio}</p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <CTAButton
                href={getWhatsappUrl(
                  'Ola Danilo, gostaria de conversar sobre oportunidades ou desafios do meu time.',
                )}
                label="Conversar no WhatsApp"
                ariaLabel="Iniciar conversa com Danilo no WhatsApp"
                external
              />
              <CTAButton
                href={siteConfig.linkedin}
                label="LinkedIn"
                variant="secondary"
                ariaLabel="Abrir perfil de LinkedIn"
                external
              />
              <CTAButton href="/cv" label="Baixar CV" variant="ghost" ariaLabel="Abrir CV em PDF" />
            </div>
          </div>
          <div className="relative flex-1">
            <div
              className="absolute inset-4 rounded-[36px] bg-primary-500/10 blur-3xl"
              aria-hidden
            />
            <div className="relative mx-auto h-80 w-80 overflow-hidden rounded-[32px] border border-primary-500/10 bg-surface shadow-soft">
              <Image
                src="/images/headshot-placeholder.jpg"
                alt={`Foto profissional de ${siteConfig.name}`}
                fill
                className="object-cover"
                sizes="320px"
                priority
              />
            </div>
          </div>
        </Container>
      </section>

      <section id="experiencia" aria-labelledby="experiencia-heading" className="bg-section">
        <Container className="space-y-8">
          <div className="space-y-2">
            <h2 id="experiencia-heading" className="section-title">
              Experiencia corporativa
            </h2>
            <p className="section-subtitle">
              Programas liderados em seguradoras, consultorias e laboratorios de inovacao, com foco
              em confiabilidade, automacao e modelo operacional.
            </p>
          </div>
          <ExperienceTimeline />
        </Container>
      </section>

      <section id="skills" aria-labelledby="skills-heading" className="bg-section py-16">
        <Container className="space-y-6">
          <div className="space-y-2">
            <h2 id="skills-heading" className="section-title">
              Habilidades e temas de atuacao
            </h2>
            <p className="section-subtitle">
              Conjunto de disciplinas utilizadas para acelerar entregas, evoluir operacoes e escalar
              cultura digital.
            </p>
          </div>
          <ul className="flex flex-wrap gap-3" aria-label="Lista de habilidades">
            {skillTags.map((skill) => (
              <li key={skill} className="bg-surface px-4 py-2 text-sm font-medium text-soft">
                {skill}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section id="projetos" aria-labelledby="projetos-heading">
        <Container className="space-y-6">
          <div className="space-y-2">
            <h2 id="projetos-heading" className="section-title">
              Projetos fora do corporativo
            </h2>
            <p className="section-subtitle">
              Iniciativas autorais e pilotos que exploram automacao, assistentes digitais e novos
              modelos de entrega.
            </p>
          </div>
          <ProjectsGallery projects={featuredProjects} />
        </Container>
      </section>

      <section className="bg-section py-16" aria-labelledby="conectar-heading">
        <Container className="grid gap-8 rounded-2xl border border-primary-500/10 bg-surface p-8 shadow-soft lg:grid-cols-[2fr_1fr] lg:items-center">
          <div className="space-y-4">
            <h2 id="conectar-heading" className="text-3xl font-semibold text-default">
              Vamos conversar sobre o proximo ciclo de transformacao do seu time
            </h2>
            <p className="text-muted">
              Ajudo liderancas a conectar objetivos estrategicos com execucao, trazendo estrutura,
              indicadores e cultura de confiabilidade.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <CTAButton
              href={getWhatsappUrl(
                'Ola Danilo, gostaria de agendar uma conversa sobre transformacao digital.',
              )}
              label="Agendar conversa"
              ariaLabel="Agendar conversa via WhatsApp"
              external
            />
            <CTAButton
              href="/contato"
              label="Formulario de contato"
              variant="secondary"
              ariaLabel="Abrir pagina de contato"
            />
          </div>
        </Container>
      </section>

      {Array.from({ length: 8 }).map((_, i) => (
        <Section key={i} index={i + 1}>
          <h2 className="text-2xl font-bold mb-2">Sessão {i + 1}</h2>
          <p>Conteúdo de teste para verificar cores e contraste nesta sessão.</p>
          <div className="mt-4 space-x-2">
            <button className="btn">Botão Principal</button>
            <button className="btn-outline">Botão Secundário</button>
          </div>
        </Section>
      ))}
    </div>
  );
}
