import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { RevealOnScroll } from '../ui/RevealOnScroll';
import { brands } from '../../data/brands';

export function Brands() {
  return (
    <section id="marcas" className="bg-ink-900 py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Marcas trabalhadas"
          title="Parceria com marcas de referência no setor automotivo"
          align="center"
          tone="light"
          className="mx-auto"
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {brands.map((brand, index) => (
            <RevealOnScroll key={brand.id} delay={index * 0.06}>
              <div className="group relative h-56 overflow-hidden rounded-2xl">
                <img
                  src={brand.image}
                  alt={brand.name}
                  className="absolute inset-0 h-full w-full object-cover opacity-60 transition-all duration-500 group-hover:scale-105 group-hover:opacity-40"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/40 to-ink-900/10" />
                <div className="relative flex h-full flex-col justify-end p-5">
                  <span className="font-display text-base font-bold text-white">{brand.name}</span>
                  <p className="mt-1 text-xs leading-relaxed text-white/60">{brand.description}</p>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </Container>
    </section>
  );
}
