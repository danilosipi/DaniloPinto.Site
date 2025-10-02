import type { Metadata } from 'next';

import { CTAButton } from '@/components/CTAButton';
import { Container } from '@/components/Container';
import { siteConfig } from '@/config/site';
import { getCanonicalPath, getDefaultSeo } from '@/lib/seo';

const defaultSeo = getDefaultSeo();

export const metadata: Metadata = {
  title: 'CV | Danilo Pinto',
  description: 'Baixe o currículo em PDF de Danilo Pinto.',
  alternates: {
    canonical: getCanonicalPath('/cv'),
  },
  openGraph: {
    ...defaultSeo.openGraph,
    title: 'CV | Danilo Pinto',
    description: 'Baixe o currículo em PDF de Danilo Pinto.',
    url: getCanonicalPath('/cv'),
  },
  twitter: {
    ...defaultSeo.twitter,
    title: 'CV | Danilo Pinto',
    description: 'Baixe o currículo em PDF de Danilo Pinto.',
  },
};

export default function CvPage() {
  return (
    <Container className="py-16">
      <div className="mx-auto max-w-3xl rounded-2xl border border-primary-500/10 bg-surface p-10 text-center shadow-soft">
        <span className="text-xs uppercase tracking-[0.25em] text-primary-500">Currículo</span>
        <h1 className="mt-2 text-4xl font-semibold text-default">Resumo profissional</h1>
        <p className="mt-4 text-soft">
          Acesse o PDF completo com experiências corporativas, projetos conduzidos e certificações.
          Atualize com a versão oficial quando houver mudanças.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <CTAButton
            href="/cv/cvDaniloPinto_lideranca.pdf"
            label="Abrir CV (PDF)"
            ariaLabel="Abrir o arquivo de currículo em PDF"
            external
          />
          <CTAButton
            href={`mailto:${siteConfig.email}`}
            label="Solicitar versão atualizada"
            variant="secondary"
            ariaLabel="Solicitar CV atualizado por e-mail"
            external
          />
        </div>
      </div>
    </Container>
  );
}
