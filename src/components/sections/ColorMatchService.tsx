import { MessageCircle } from 'lucide-react';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { RevealOnScroll } from '../ui/RevealOnScroll';
import { Button } from '../ui/Button';
import { buildWhatsAppLink } from '../../services/whatsapp';
import serviceImage from '../../assets/images/loja/carro-leque.jpg';

const steps = [
  {
    title: 'Análise do veículo',
    description: 'Avaliamos a cor original considerando ano, fabricante e possível desbotamento da pintura.',
  },
  {
    title: 'Comparação com leque de cores',
    description: 'Usamos leques de cores profissionais para localizar a base mais próxima do tom real.',
  },
  {
    title: 'Ajuste fino da fórmula',
    description: 'A fórmula é ajustada ponto a ponto até a tonalidade bater com a pintura existente.',
  },
  {
    title: 'Validação antes da aplicação',
    description: 'Conferência final da cor para garantir um resultado indistinguível da pintura original.',
  },
];

export function ColorMatchService() {
  return (
    <section id="acerto-de-cor" className="py-20 sm:py-28">
      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionHeading
            eyebrow="Serviço especializado"
            title="Acerto de cor personalizado, com precisão"
            description="A cor é o detalhe que faz um reparo passar despercebido. Por isso, dedicamos atenção técnica especial ao acerto de cor de cada veículo."
          />

          <ol className="mt-8 space-y-5">
            {steps.map((step, index) => (
              <RevealOnScroll key={step.title} delay={index * 0.08} as="li" className="flex gap-4">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-ember-50 font-display text-sm font-bold text-ember-600">
                  {index + 1}
                </span>
                <div>
                  <h3 className="font-display text-base font-semibold text-ink-900">{step.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-ink-600">{step.description}</p>
                </div>
              </RevealOnScroll>
            ))}
          </ol>

          <Button
            href={buildWhatsAppLink('Olá! Gostaria de solicitar um acerto de cor.')}
            target="_blank"
            rel="noreferrer"
            icon={<MessageCircle size={18} />}
            className="mt-9"
          >
            Solicitar acerto de cor
          </Button>
        </div>

        <RevealOnScroll delay={0.1}>
          <div className="relative overflow-hidden rounded-3xl shadow-lift">
            <img
              src={serviceImage}
              alt="Profissional realizando acerto de cor com leque profissional"
              className="aspect-[4/5] w-full object-cover object-[30%_35%]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-900/50 via-transparent to-transparent" />
          </div>
        </RevealOnScroll>
      </Container>
    </section>
  );
}
