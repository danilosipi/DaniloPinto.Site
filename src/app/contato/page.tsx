import type { Metadata } from 'next';

import { ContactForm } from '@/app/contato/ContactForm';
import { CTAButton } from '@/components/CTAButton';
import { Container } from '@/components/Container';
import { WhatsAppIcon } from '@/components/icons/WhatsAppIcon';
import { getCanonicalPath, getDefaultSeo } from '@/lib/seo';
import { getMailtoLink, getWhatsappUrl } from '@/utils/contact';

const defaultSeo = getDefaultSeo();

export const metadata: Metadata = {
  title: 'Contato | Danilo Pinto',
  description: 'Fale comigo sobre transformacao digital, automacao e confiabilidade.',
  keywords: defaultSeo.keywords,
  alternates: {
    canonical: getCanonicalPath('/contato'),
  },
  openGraph: {
    ...defaultSeo.openGraph,
    title: 'Contato | Danilo Pinto',
    description: 'Fale com comigo sobre transformacao digital, automacao e confiabilidade.',
    url: getCanonicalPath('/contato'),
  },
  twitter: {
    ...defaultSeo.twitter,
    title: 'Contato | Danilo Pinto',
    description: 'Fale comigo sobre transformacao digital, automacao e confiabilidade.',
  },
};

export default function ContactPage() {
  return (
    <div className="bg-background">
      <Container className="space-y-12 py-16">
        <header className="max-w-3xl space-y-4">
          <h1 className="text-4xl font-semibold text-default">
            Vamos desenhar o proximo ciclo do seu time
          </h1>
          <p className="text-lg text-soft">
            Conte como posso ajudar: transformacao de operacoes, automacao inteligente ou
            estruturacao de SRE e governanca. Respondo em ate um dia util.
          </p>
          <div className="flex flex-wrap gap-3">
            <CTAButton
              href={getWhatsappUrl(
                'Ola, gostaria de conversar sobre uma oportunidade. Podemos marcar uma call?',
              )}
              label="Conversar via WhatsApp"
              ariaLabel="Abrir conversa comigo no WhatsApp"
              variant="whatsapp"
              icon={<WhatsAppIcon />}
              external
            />
            <CTAButton
              href={getMailtoLink('Convite para conversar sobre oportunidade')}
              label="Enviar email"
              variant="secondary"
              ariaLabel="Enviar email para mim"
              external
            />
          </div>
        </header>

        <ContactForm />
      </Container>
    </div>
  );
}
