import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { RevealOnScroll } from '../ui/RevealOnScroll';
import storeImage from '../../assets/images/loja/moto-leque.jpg';

const audiences = ['Funilarias', 'Oficinas mecânicas', 'Pintores automotivos', 'Empresas', 'Clientes particulares'];

export function About() {
  return (
    <section id="sobre" className="py-20 sm:py-28">
      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <RevealOnScroll className="relative order-2 lg:order-1">
          <div className="relative overflow-hidden rounded-3xl shadow-lift">
            <img
              src={storeImage}
              alt="Fachada da D&Bu Tintas com identidade visual e moto de entrega"
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="absolute -bottom-6 -right-4 hidden max-w-[220px] rounded-2xl bg-white p-5 shadow-lift sm:block"
          >
            <div className="flex items-center gap-2 text-ember-600">
              <MapPin size={18} />
              <span className="font-display text-sm font-bold">Butantã, SP</span>
            </div>
            <p className="mt-1 text-xs leading-relaxed text-ink-600">
              Atendimento local com destaque para toda a região.
            </p>
          </motion.div>
        </RevealOnScroll>

        <div className="order-1 lg:order-2">
          <SectionHeading
            eyebrow="Sobre a D&Bu Tintas"
            title="Especialistas em tintas e acabamento automotivo"
            description="A D&Bu Tintas é especializada na venda de tintas automotivas, vernizes, primers, massas, lixas e acessórios para pintura, além de acerto de cor personalizado feito com precisão."
          />

          <p className="mt-6 max-w-xl text-balance leading-relaxed text-ink-600">
            Do preparo da superfície ao acabamento final, oferecemos os insumos e o suporte técnico
            que funilarias, oficinas e pintores profissionais precisam para entregar um resultado
            de qualidade — sempre com atendimento próximo e ágil para quem está no Butantã e região.
          </p>

          <div className="mt-8 flex flex-wrap gap-2.5">
            {audiences.map((item) => (
              <span
                key={item}
                className="rounded-full bg-ink-900/5 px-4 py-2 text-xs font-medium text-ink-700"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
