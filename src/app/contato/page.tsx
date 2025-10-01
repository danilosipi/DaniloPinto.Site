import type { Metadata } from 'next';

import { ContactForm } from '@/app/contato/ContactForm';
import { CTAButton } from '@/components/CTAButton';
import { Container } from '@/components/Container';
import { getCanonicalPath, getDefaultSeo } from '@/lib/seo';
import { getMailtoLink, getWhatsappUrl } from '@/utils/contact';

const defaultSeo = getDefaultSeo();

export const metadata: Metadata = {
  title: 'Contato | Danilo Pinto',
  description: 'Fale com Danilo Pinto sobre transformacao digital, automacao e confiabilidade.',
  keywords: defaultSeo.keywords,
  alternates: {
    canonical: getCanonicalPath('/contato'),
  },
  openGraph: {
    ...defaultSeo.openGraph,
    title: 'Contato | Danilo Pinto',
    description: 'Fale com Danilo Pinto sobre transformacao digital, automacao e confiabilidade.',
    url: getCanonicalPath('/contato'),
  },
  twitter: {
    ...defaultSeo.twitter,
    title: 'Contato | Danilo Pinto',
    description: 'Fale com Danilo Pinto sobre transformacao digital, automacao e confiabilidade.',
  },
};

export default function ContactPage() {
  return (
    <div className="bg-white">
      <Container className="space-y-12 py-16">
        <header className="max-w-3xl space-y-4">
          <h1 className="text-4xl font-semibold text-primary-900">
            Vamos desenhar o proximo ciclo do seu time
          </h1>
          <p className="text-lg text-primary-700/90">
            Conte como posso ajudar: transformacao de operacoes, automacao inteligente ou
            estruturacao de SRE e governanca. Respondo em ate um dia util.
          </p>
          <div className="flex flex-wrap gap-3">
            <CTAButton
              href={getWhatsappUrl(
                'Ola Danilo, gostaria de conversar sobre uma oportunidade. Podemos marcar uma call?',
              )}
              label="Conversar via WhatsApp"
              ariaLabel="Abrir conversa com Danilo no WhatsApp"
              external
            />
            <CTAButton
              href={getMailtoLink('Convite para conversar sobre oportunidade')}
              label="Enviar email"
              variant="secondary"
              ariaLabel="Enviar email para Danilo"
              external
            />
          </div>
        </header>

        <ContactForm />
      </Container>
    </div>
  );
}
