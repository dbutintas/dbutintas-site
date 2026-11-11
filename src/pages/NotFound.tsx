import { motion } from 'framer-motion';
import { Home, MessageCircle } from 'lucide-react';
import { Container } from '../components/ui/Container';
import { Button } from '../components/ui/Button';
import { buildWhatsAppLink } from '../services/whatsapp';

export function NotFound() {
  return (
    <section className="flex min-h-[100svh] items-center bg-ink-900 py-32 text-white">
      <Container className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <span className="font-display text-7xl font-bold text-ember-500 sm:text-8xl">404</span>
          <h1 className="mt-4 font-display text-2xl font-bold sm:text-3xl">Página não encontrada</h1>
          <p className="mx-auto mt-3 max-w-md text-white/65">
            A página que você procura não existe ou foi movida. Volte para o início ou fale
            diretamente com a gente.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button to="/" icon={<Home size={18} />}>
              Voltar ao início
            </Button>
            <Button
              href={buildWhatsAppLink('Olá! Vim pelo site da D&Bu Tintas.')}
              target="_blank"
              rel="noreferrer"
              variant="ghost"
              className="border-white/25 text-white hover:border-white/60"
              icon={<MessageCircle size={18} />}
            >
              Falar no WhatsApp
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
