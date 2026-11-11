import { MessageCircle } from 'lucide-react';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { RevealOnScroll } from '../ui/RevealOnScroll';
import { Button } from '../ui/Button';
import { buildWhatsAppLink } from '../../services/whatsapp';
import { categories } from '../../data/catalog';
import carroLeque from '../../assets/images/loja/carro-leque.jpg';
import anjoVerniz2 from '../../assets/images/produtos/anjoVerniz2.webp';
import nexus from '../../assets/images/produtos/nexus.webp';
import nsw from '../../assets/images/produtos/nsw.webp';
import pistolaDePintura from '../../assets/images/produtos/pistola-de-pintura.webp';
import type { ProductCategory } from '../../types/product';

const categoryImages: Record<ProductCategory, string> = {
  tintas: carroLeque,
  vernizes: anjoVerniz2,
  primers: nexus,
  'massas-lixas': nsw,
  acessorios: pistolaDePintura,
};

export function CatalogPreview() {
  return (
    <section id="catalogo" className="py-20 sm:py-28">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Catálogo de produtos"
            title="Uma prévia do que trabalhamos"
            description="Tintas, vernizes, primers, massas, lixas e acessórios para pintura automotiva. Fale com a gente para saber mais sobre marcas, disponibilidade e condições."
          />
          <Button
            href={buildWhatsAppLink('Olá! Gostaria de saber mais sobre os produtos da D&Bu Tintas.')}
            target="_blank"
            rel="noreferrer"
            variant="ghost"
            size="sm"
            icon={<MessageCircle size={16} />}
            className="shrink-0"
          >
            Consultar produtos
          </Button>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category, index) => (
            <RevealOnScroll key={category.id} delay={index * 0.06}>
              <a
                href={buildWhatsAppLink(`Olá! Gostaria de saber mais sobre ${category.label.toLowerCase()}.`)}
                target="_blank"
                rel="noreferrer"
                className="group relative block h-72 overflow-hidden rounded-2xl shadow-soft transition-shadow duration-300 hover:shadow-lift"
              >
                <img
                  src={categoryImages[category.id]}
                  alt={category.label}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-900/90 via-ink-900/25 to-transparent" />
                <div className="relative flex h-full flex-col justify-end p-6">
                  <span className="flex items-center gap-2 font-display text-lg font-bold text-white">
                    {category.label}
                    <MessageCircle
                      size={16}
                      className="translate-x-0 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100"
                    />
                  </span>
                  <p className="mt-1.5 text-sm leading-relaxed text-white/70">{category.description}</p>
                </div>
              </a>
            </RevealOnScroll>
          ))}
        </div>
      </Container>
    </section>
  );
}
