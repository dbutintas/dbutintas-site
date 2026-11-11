import { CONTACT } from '../data/contact';
import { buildWhatsAppLink } from './whatsapp';

export interface ContactFormValues {
  name: string;
  phone: string;
  message: string;
}

export function buildContactWhatsAppLink(values: ContactFormValues): string {
  const text = [
    `Olá, D&Bu Tintas! Me chamo ${values.name}.`,
    values.phone ? `Meu telefone: ${values.phone}.` : null,
    values.message,
  ]
    .filter(Boolean)
    .join('\n');

  return buildWhatsAppLink(text);
}

export function buildContactMailtoLink(values: ContactFormValues): string {
  const subject = encodeURIComponent(`Contato pelo site - ${values.name}`);
  const body = encodeURIComponent(
    `Nome: ${values.name}\nTelefone: ${values.phone}\n\nMensagem:\n${values.message}`
  );
  return `mailto:${CONTACT.email}?subject=${subject}&body=${body}`;
}
