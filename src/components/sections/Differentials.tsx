import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { RevealOnScroll } from '../ui/RevealOnScroll';
import { IconCard } from '../ui/IconCard';
import { differentials } from '../../data/differentials';

export function Differentials() {
  return (
    <section id="diferenciais" className="bg-paper-100 py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Por que escolher a D&Bu"
          title="Diferenciais que fazem a diferença no resultado final"
          align="center"
          className="mx-auto"
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {differentials.map((item, index) => (
            <RevealOnScroll key={item.id} delay={index * 0.06}>
              <IconCard icon={item.icon} title={item.title} description={item.description} />
            </RevealOnScroll>
          ))}
        </div>
      </Container>
    </section>
  );
}
