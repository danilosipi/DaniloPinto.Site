import { siteConfig } from '@/config/site';

export function getWhatsappUrl(customMessage?: string) {
  const digitsOnly = siteConfig.phone.replace(/\D/g, '');
  const message = encodeURIComponent(customMessage ?? siteConfig.whatsappMessage);
  return `https://wa.me/${digitsOnly}?text=${message}`;
}

export function getMailtoLink(subject = 'Contato via portfólio digital', body?: string) {
  const params = new URLSearchParams({ subject, body: body ?? '' });
  return `mailto:${siteConfig.email}?${params.toString()}`;
}
