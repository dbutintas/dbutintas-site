import { Link } from 'react-router-dom';
import { Instagram, Mail, MapPin, ArrowUp } from 'lucide-react';
import { Container } from '../ui/Container';
import { navLinks } from '../../data/navigation';
import { CONTACT } from '../../data/contact';
import { buildWhatsAppLink } from '../../services/whatsapp';
import { WhatsAppIcon } from '../ui/icons/WhatsAppIcon';
import logo from '../../assets/images/logo.jpeg';
import { useState } from 'react';
import { PrivacyPolicyModal } from '../ui/PrivacyPolicyModal';

export function Footer() {
  const year = new Date().getFullYear();
  const [policyOpen, setPolicyOpen] = useState(false);

  return (
    <footer className="relative overflow-hidden bg-ink-900 text-white">
      <div className="absolute inset-x-0 top-0 h-px bg-ember-gradient" />

      <Container className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
        <div className="sm:col-span-2 lg:col-span-1">
          <Link to="/#inicio" className="flex items-center gap-3">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-full bg-white shadow-soft">
              <img src={logo} alt="D&Bu Tintas" className="h-full w-full object-cover" />
            </span>
            <span className="font-display text-base font-bold">D&amp;Bu Tintas</span>
          </Link>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/60">
            Tintas automotivas, vernizes, primers e acerto de cor personalizado para funilarias,
            oficinas, pintores e clientes particulares no Butantã.
          </p>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-white/50">
            Navegação
          </h3>
          <ul className="mt-5 space-y-3">
            {navLinks.map((link) => (
              <li key={link.hash}>
                <Link
                  to={`/#${link.hash}`}
                  className="text-sm text-white/75 transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-white/50">
            Contato
          </h3>
          <ul className="mt-5 space-y-3 text-sm text-white/75">
            <li>
              <a
                href={buildWhatsAppLink('Olá! Vim pelo site da D&Bu Tintas.')}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 transition-colors hover:text-white"
              >
                <WhatsAppIcon size={16} className="text-ember-400" />
                {CONTACT.whatsappDisplay}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${CONTACT.email}`}
                className="flex items-center gap-2 transition-colors hover:text-white"
              >
                <Mail size={16} className="text-ember-400" />
                {CONTACT.email}
              </a>
            </li>
            <li>
              <a
                href={CONTACT.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 transition-colors hover:text-white"
              >
                <Instagram size={16} className="text-ember-400" />
                {CONTACT.instagram}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-white/50">
            Região de atuação
          </h3>
          <p className="mt-5 flex items-start gap-2 text-sm leading-relaxed text-white/75">
            <MapPin size={18} className="mt-0.5 shrink-0 text-ember-400" />
            Atendemos com destaque a região do {CONTACT.region}, com agilidade para funilarias e
            oficinas parceiras.
          </p>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col items-center justify-between gap-4 py-6 text-xs text-white/50 sm:flex-row">
          <p>© {year} D&amp;Bu Tintas — Sua loja de tintas. Todos os direitos reservados.</p>
          <div className="flex items-center gap-5">
            <button type="button" onClick={() => setPolicyOpen(true)} className="transition-colors hover:text-white">
              Política de Privacidade
            </button>
            <a href="#inicio" className="flex items-center gap-1.5 transition-colors hover:text-white">
              Voltar ao topo <ArrowUp size={14} />
            </a>
          </div>
        </Container>
      </div>
      <PrivacyPolicyModal open={policyOpen} onClose={() => setPolicyOpen(false)} />
    </footer>
  );
}
