import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';
import { navLinks } from '../../data/navigation';
import { buildWhatsAppLink } from '../../services/whatsapp';
import { Button } from '../ui/Button';

interface MobileMenuProps {
  onClose: () => void;
}

export function MobileMenu({ onClose }: MobileMenuProps) {
  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: 'auto' }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className="overflow-hidden border-t border-ink-900/5 bg-paper shadow-lift lg:hidden"
    >
      <nav className="flex flex-col gap-1 px-5 pb-6 pt-4">
        {navLinks.map((link) => (
          <Link
            key={link.hash}
            to={`/#${link.hash}`}
            onClick={onClose}
            className="rounded-lg px-3 py-3 text-base font-medium text-ink-700 transition-colors hover:bg-ink-900/5"
          >
            {link.label}
          </Link>
        ))}
        <Button
          href={buildWhatsAppLink('Olá! Vim pelo site da D&Bu Tintas.')}
          target="_blank"
          rel="noreferrer"
          icon={<MessageCircle size={16} />}
          className="mt-3 w-full justify-center"
        >
          Falar no WhatsApp
        </Button>
      </nav>
    </motion.div>
  );
}
