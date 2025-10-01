'use client';

import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { siteConfig } from '@/config/site';
import { getMailtoLink, getWhatsappUrl } from '@/utils/contact';

const contactSchema = z.object({
  name: z
    .string()
    .min(2, 'Informe seu nome completo para seguirmos')
    .max(80, 'Use no maximo 80 caracteres'),
  email: z.string().email('Informe um email valido'),
  company: z.string().optional(),
  message: z
    .string()
    .min(10, 'Compartilhe um pouco mais sobre o desafio ou oportunidade')
    .max(1000, 'Mensagem muito longa, tente resumir em ate 1000 caracteres'),
});

type ContactFormData = z.infer<typeof contactSchema>;

type DirectChannel = {
  label: string;
  href: string;
  description: string;
};

const directChannels: DirectChannel[] = [
  {
    label: 'Email',
    href: getMailtoLink('Convite para conversar'),
    description: 'Resposta em ate 1 dia util',
  },
  {
    label: 'LinkedIn',
    href: siteConfig.linkedin,
    description: 'Networking, artigos e atualizacoes',
  },
  {
    label: 'WhatsApp',
    href: getWhatsappUrl('Ola Danilo, vi seu portfolio e gostaria de conversar.'),
    description: 'Mensagens rapidas e follow-ups',
  },
];

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      company: '',
      message: '',
    },
  });

  const onSubmit = (data: ContactFormData) => {
    console.info('Contato simulado enviado:', data);
    setSubmitted(true);
    reset();
  };

  return (
    <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-6 rounded-2xl border border-primary-500/10 bg-white p-8 shadow-soft"
        aria-label="Formulario de contato"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-sm font-semibold text-primary-900">
              Nome completo
            </label>
            <input
              id="name"
              type="text"
              {...register('name')}
              className="rounded-lg border border-primary-500/20 px-4 py-2 text-sm text-primary-900 shadow-sm focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/30"
              placeholder="Como podemos te chamar?"
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? 'name-error' : undefined}
              required
            />
            {errors.name && (
              <span id="name-error" className="text-sm text-red-600">
                {errors.name.message}
              </span>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-sm font-semibold text-primary-900">
              Email
            </label>
            <input
              id="email"
              type="email"
              {...register('email')}
              className="rounded-lg border border-primary-500/20 px-4 py-2 text-sm text-primary-900 shadow-sm focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/30"
              placeholder="nome@empresa.com"
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? 'email-error' : undefined}
              required
            />
            {errors.email && (
              <span id="email-error" className="text-sm text-red-600">
                {errors.email.message}
              </span>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="company" className="text-sm font-semibold text-primary-900">
            Empresa / Squad (opcional)
          </label>
          <input
            id="company"
            type="text"
            {...register('company')}
            className="rounded-lg border border-primary-500/20 px-4 py-2 text-sm text-primary-900 shadow-sm focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/30"
            placeholder="Qual time quer conversar?"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="message" className="text-sm font-semibold text-primary-900">
            Mensagem
          </label>
          <textarea
            id="message"
            rows={6}
            {...register('message')}
            className="rounded-lg border border-primary-500/20 px-4 py-3 text-sm text-primary-900 shadow-sm focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/30"
            placeholder="Compartilhe o contexto, dores atuais e o que espera evoluir."
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? 'message-error' : undefined}
            required
          />
          {errors.message && (
            <span id="message-error" className="text-sm text-red-600">
              {errors.message.message}
            </span>
          )}
        </div>

        <button
          type="submit"
          className="inline-flex w-full items-center justify-center rounded-md bg-[var(--color-primary-500)] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[var(--color-primary-700)] disabled:cursor-not-allowed disabled:opacity-70"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Enviando...' : 'Enviar mensagem'}
        </button>

        {submitted && (
          <div className="rounded-lg border border-primary-500/10 bg-primary-500/10 px-4 py-3 text-sm text-primary-700">
            Obrigado! Mensagem registrada. Em breve entro em contato.
          </div>
        )}
      </form>

      <aside className="space-y-6 rounded-2xl border border-primary-500/10 bg-primary-500/5 p-8">
        <div className="space-y-1">
          <h2 className="text-lg font-semibold text-primary-900">Canais diretos</h2>
          <p className="text-sm text-primary-700/90">
            Prefere falar agora? Escolha o canal ideal e mencione que encontrou o portfolio digital.
          </p>
        </div>
        <ul className="space-y-3 text-sm text-primary-700/90">
          {directChannels.map((channel) => {
            const isExternal = channel.href.startsWith('http');
            const target = isExternal ? '_blank' : undefined;
            const rel = isExternal ? 'noreferrer noopener' : undefined;

            return (
              <li
                key={channel.label}
                className="rounded-lg border border-primary-500/20 bg-white p-3"
              >
                <p className="font-semibold text-primary-900">{channel.label}</p>
                <a
                  href={channel.href}
                  target={target}
                  rel={rel}
                  className="mt-1 inline-flex items-center gap-2 text-sm font-semibold text-primary-500 hover:text-primary-700"
                >
                  Acessar canal
                  <span aria-hidden>{'>'}</span>
                </a>
                <p className="text-xs text-primary-600/80">{channel.description}</p>
              </li>
            );
          })}
        </ul>
        <div className="space-y-2 text-sm text-primary-700/90">
          <p>{siteConfig.phoneDisplay}</p>
          <p>{siteConfig.email}</p>
          <a
            href={siteConfig.linkedin}
            className="text-primary-500 hover:text-primary-700"
            target="_blank"
            rel="noreferrer noopener"
          >
            LinkedIn
          </a>
        </div>
      </aside>
    </div>
  );
}
