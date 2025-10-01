import type { Metadata } from 'next';

import { CTAButton } from '@/components/CTAButton';
import { Container } from '@/components/Container';
import { siteConfig } from '@/config/site';
import { getCanonicalPath, getDefaultSeo } from '@/lib/seo';

const defaultSeo = getDefaultSeo();

export const metadata: Metadata = {
  title: 'CV | Danilo Pinto',
  description: 'Baixe o curriculum em PDF de Danilo Pinto.',
  alternates: {
    canonical: getCanonicalPath('/cv'),
  },
  openGraph: {
    ...defaultSeo.openGraph,
    title: 'CV | Danilo Pinto',
    description: 'Baixe o curriculum em PDF de Danilo Pinto.',
    url: getCanonicalPath('/cv'),
  },
  twitter: {
    ...defaultSeo.twitter,
    title: 'CV | Danilo Pinto',
    description: 'Baixe o curriculum em PDF de Danilo Pinto.',
  },
};

export default function CvPage() {
  return (
    <Container className="py-16">
      <div className="mx-auto max-w-3xl rounded-2xl border border-primary-500/10 bg-white p-10 text-center shadow-soft">
        <span className="text-xs uppercase tracking-[0.25em] text-primary-500">Curriculum</span>
        <h1 className="mt-2 text-4xl font-semibold text-primary-900">Resumo profissional</h1>
        <p className="mt-4 text-primary-700/90">
          Acesse o PDF completo com experiencias corporativas, projetos conduzidos e certificacoes.
          Atualize com a versao oficial quando houver mudancas.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <CTAButton
            href="/cv/cv.pdf"
            label="Abrir CV (PDF)"
            ariaLabel="Abrir o arquivo de curriculum em PDF"
            external
          />
          <CTAButton
            href={`mailto:${siteConfig.email}`}
            label="Solicitar versao atualizada"
            variant="secondary"
            ariaLabel="Solicitar CV atualizado por email"
            external
          />
        </div>
      </div>
    </Container>
  );
}
