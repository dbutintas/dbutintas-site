import { type FormEvent, useState } from 'react';
import { Instagram, Mail } from 'lucide-react';
import { WhatsAppIcon } from '../ui/icons/WhatsAppIcon';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { RevealOnScroll } from '../ui/RevealOnScroll';
import { Button } from '../ui/Button';
import { CONTACT } from '../../data/contact';
import { buildContactWhatsAppLink } from '../../services/contactForm';

const contactCards = [
  {
    icon: WhatsAppIcon,
    label: 'WhatsApp',
    value: CONTACT.whatsappDisplay,
    href: `https://wa.me/${CONTACT.whatsappNumber}`,
  },
  {
    icon: Mail,
    label: 'E-mail',
    value: CONTACT.email,
    href: `mailto:${CONTACT.email}`,
  },
  {
    icon: Instagram,
    label: 'Instagram',
    value: CONTACT.instagram,
    href: CONTACT.instagramUrl,
  },
];

export function ContactSection() {
  const [values, setValues] = useState({ name: '', phone: '', message: '' });

  const isValid = values.name.trim().length > 1 && values.message.trim().length > 3;

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!isValid) return;
    window.open(buildContactWhatsAppLink(values), '_blank', 'noreferrer');
  };

  return (
    <section id="contato" className="py-20 sm:py-28">
      <Container className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div>
          <SectionHeading
            eyebrow="Contato"
            title="Vamos falar sobre o seu projeto"
            description="Envie sua mensagem pelo formulário ou fale diretamente por um dos nossos canais."
          />

          <div className="mt-8 space-y-3">
            {contactCards.map((card) => (
              <a
                key={card.label}
                href={card.href}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-4 rounded-2xl border border-ink-900/5 bg-white p-4 shadow-soft transition-all hover:shadow-lift"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-ember-50 text-ember-600">
                  <card.icon size={18} />
                </span>
                <span>
                  <span className="block text-xs font-medium uppercase tracking-wide text-ink-500">
                    {card.label}
                  </span>
                  <span className="block text-sm font-semibold text-ink-900">{card.value}</span>
                </span>
              </a>
            ))}
          </div>
        </div>

        <RevealOnScroll delay={0.1}>
          <form
            onSubmit={handleSubmit}
            className="rounded-3xl border border-ink-900/5 bg-white p-6 shadow-card sm:p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block text-sm">
                <span className="mb-1.5 block font-medium text-ink-800">Nome</span>
                <input
                  type="text"
                  required
                  value={values.name}
                  onChange={(e) => setValues((v) => ({ ...v, name: e.target.value }))}
                  placeholder="Seu nome"
                  className="w-full rounded-xl border border-ink-900/10 bg-paper-100 px-4 py-3 text-ink-900 outline-none transition-colors focus:border-ember-400 focus:bg-white"
                />
              </label>
              <label className="block text-sm">
                <span className="mb-1.5 block font-medium text-ink-800">Telefone</span>
                <input
                  type="tel"
                  value={values.phone}
                  onChange={(e) => setValues((v) => ({ ...v, phone: e.target.value }))}
                  placeholder="(11) 90000-0000"
                  className="w-full rounded-xl border border-ink-900/10 bg-paper-100 px-4 py-3 text-ink-900 outline-none transition-colors focus:border-ember-400 focus:bg-white"
                />
              </label>
            </div>

            <label className="mt-5 block text-sm">
              <span className="mb-1.5 block font-medium text-ink-800">Mensagem</span>
              <textarea
                required
                rows={5}
                value={values.message}
                onChange={(e) => setValues((v) => ({ ...v, message: e.target.value }))}
                placeholder="Conte o que você precisa: produto, cor, prazo..."
                className="w-full resize-none rounded-xl border border-ink-900/10 bg-paper-100 px-4 py-3 text-ink-900 outline-none transition-colors focus:border-ember-400 focus:bg-white"
              />
            </label>

            <Button preset = "whatsapp" type="submit" disabled={!isValid} className="mt-6 w-full justify-center sm:w-auto">
              Enviar via WhatsApp
            </Button>
            <p className="mt-3 text-xs text-ink-500">
              Ao enviar, sua mensagem é aberta diretamente no WhatsApp para continuarmos a conversa.
            </p>
          </form>
        </RevealOnScroll>
      </Container>
    </section>
  );
}
