import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { MobileMenu } from './MobileMenu';
import { navLinks } from '../../data/navigation';
import { buildWhatsAppLink } from '../../services/whatsapp';
import logo from '../../assets/images/logo.jpeg';
import { cn } from '../../utils/cn';

export function Header() {
  const { pathname, hash } = useLocation();
  const isHome = pathname === '/';
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname, hash]);

  const transparent = isHome && !scrolled && !mobileOpen;

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        transparent ? 'bg-transparent py-5' : 'bg-paper/95 py-3 shadow-soft backdrop-blur-md'
      )}
    >
      <Container className="flex items-center justify-between gap-4">
        <Link to="/#inicio" className="flex items-center gap-3">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-full bg-white shadow-soft ring-1 ring-black/5">
            <img src={logo} alt="D&Bu Tintas" className="h-full w-full object-cover" />
          </span>
          <span
            className={cn(
              'hidden font-display text-sm font-bold leading-tight sm:block',
              transparent ? 'text-white' : 'text-ink-900'
            )}
          >
            D&amp;Bu Tintas
            <span
              className={cn(
                'block text-[11px] font-medium uppercase tracking-wider',
                transparent ? 'text-white/70' : 'text-ink-500'
              )}
            >
              Butantã · SP
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.hash}
              to={`/#${link.hash}`}
              className={cn(
                'text-sm font-medium transition-colors',
                transparent ? 'text-white/85 hover:text-white' : 'text-ink-600 hover:text-ink-900'
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex">
          <Button
            preset="whatsapp"
            href={buildWhatsAppLink('Olá! Vim pelo site da D&Bu Tintas.')}
            target="_blank"
            rel="noreferrer"
            size="sm"
          >
            WhatsApp
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen((v) => !v)}
          className={cn(
            'flex h-10 w-10 items-center justify-center rounded-full transition-colors lg:hidden',
            transparent ? 'text-white' : 'text-ink-900'
          )}
          aria-label={mobileOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </Container>

      <AnimatePresence>
        {mobileOpen && <MobileMenu onClose={() => setMobileOpen(false)} />}
      </AnimatePresence>
    </header>
  );
}
