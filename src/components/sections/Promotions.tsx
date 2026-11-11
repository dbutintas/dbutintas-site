import { Instagram, Sparkles } from 'lucide-react';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { RevealOnScroll } from '../ui/RevealOnScroll';
import { Button } from '../ui/Button';
import { promotionHighlights } from '../../data/promotions';
import { CONTACT } from '../../data/contact';
import { buildWhatsAppLink } from '../../services/whatsapp';

export function Promotions() {
  return (
    <section id="promocoes" className="relative overflow-hidden bg-ember-gradient py-20 text-white sm:py-24">
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-ink-900/20 blur-3xl" />

      <Container className="relative">
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="Promoções"
            title="Fique de olho nas nossas condições especiais"
            description="Novidades, chegadas de estoque e condições especiais para clientes frequentes e parceiros comerciais."
            tone="light"
          />
          <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
            <Button
              href={CONTACT.instagramUrl}
              target="_blank"
              rel="noreferrer"
              variant="light"
              icon={<Instagram size={18} />}
            >
              Seguir no Instagram
            </Button>
            <Button
              href={buildWhatsAppLink('Olá! Quero saber sobre as promoções da D&Bu Tintas.')}
              target="_blank"
              rel="noreferrer"
              preset="whatsapp"
            >
              Perguntar no WhatsApp
            </Button>
          </div>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-3">
          {promotionHighlights.map((item, index) => (
            <RevealOnScroll key={item.id} delay={index * 0.08}>
              <div className="h-full rounded-2xl bg-white/10 p-6 backdrop-blur-sm ring-1 ring-white/15">
                <Sparkles size={20} className="text-white/80" />
                <h3 className="mt-4 font-display text-base font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/75">{item.description}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </Container>
    </section>
  );
}
