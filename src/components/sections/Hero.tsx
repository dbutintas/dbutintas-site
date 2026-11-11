import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { buildWhatsAppLink } from '../../services/whatsapp';
import heroImage from '../../assets/images/loja/carro-leque.jpg';

const stats = [
  { label: 'Funilarias' },
  { label: 'Oficinas mecânicas' },
  { label: 'Pintores automotivos' },
  { label: 'Clientes particulares' },
];

export function Hero() {
  return (
    <section id="inicio" className="relative flex min-h-[100svh] items-center overflow-hidden bg-ink-900">
      <img
        src={heroImage}
        alt="Acerto de cor automotivo com leque de tintas profissional"
        className="absolute inset-0 h-full w-full object-cover object-[65%_40%] opacity-70"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink-900 via-ink-900/85 to-ink-900/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-transparent to-ink-900/40" />
      <div className="absolute inset-0 bg-splash-gradient mix-blend-screen" />

      <Container className="relative z-10 pt-24">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="max-w-2xl"
        >
          <span className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-display font-semibold uppercase tracking-[0.16em] text-white/90 ring-1 ring-white/15 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-ember-400" />
            Sua loja de tintas no Butantã
          </span>

          <h1 className="text-balance font-display text-4xl font-bold leading-[1.08] text-white sm:text-5xl lg:text-6xl">
            A cor certa, o acabamento perfeito.
          </h1>

          <p className="mt-6 max-w-xl text-balance text-base leading-relaxed text-white/75 sm:text-lg">
            Tintas automotivas, vernizes, primers, massas, lixas e acessórios de pintura — com
            acerto de cor personalizado feito com precisão para funilarias, oficinas, pintores e
            clientes particulares.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button
              href={buildWhatsAppLink('Olá! Vim pelo site da D&Bu Tintas e gostaria de mais informações.')}
              target="_blank"
              rel="noreferrer"
              preset="whatsapp"
            >
              Falar no WhatsApp
            </Button>
            <Button to="/#catalogo" variant="ghost" className="border-white/25 text-white hover:border-white/60" icon={<ArrowRight size={18} />}>
              Ver catálogo
            </Button>
          </div>

          <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 border-t border-white/10 pt-6">
            {stats.map((stat) => (
              <span key={stat.label} className="text-xs font-medium uppercase tracking-wide text-white/55">
                {stat.label}
              </span>
            ))}
          </div>
        </motion.div>
      </Container>

      <motion.a
        href="#sobre"
        aria-label="Rolar para a próxima seção"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-7 left-1/2 z-10 -translate-x-1/2 text-white/60 transition-colors hover:text-white"
      >
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="flex"
        >
          <ChevronDown size={26} />
        </motion.span>
      </motion.a>
    </section>
  );
}
