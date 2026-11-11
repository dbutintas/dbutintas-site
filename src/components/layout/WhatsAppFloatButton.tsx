import { motion } from 'framer-motion';
import { buildWhatsAppLink } from '../../services/whatsapp';
import { WhatsAppIcon } from '../ui/icons/WhatsAppIcon';

export function WhatsAppFloatButton() {
  return (
    <motion.a
      href={buildWhatsAppLink('Olá! Vim pelo site da D&Bu Tintas e gostaria de mais informações.')}
      target="_blank"
      rel="noreferrer"
      aria-label="Falar no WhatsApp"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.96 }}
      className="fixed bottom-6 right-5 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-card transition-colors hover:bg-[#20bd5a] sm:bottom-8 sm:right-8"
    >
      <motion.span
        aria-hidden="true"
        className="absolute inset-0 -z-10 rounded-full bg-[#25D366]"
        animate={{ scale: [1, 1.6, 1], opacity: [0.5, 0, 0.5] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
      />
      <WhatsAppIcon size={24} />
    </motion.a>
  )
}
