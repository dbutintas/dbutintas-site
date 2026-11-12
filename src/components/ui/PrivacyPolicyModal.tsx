import { useEffect } from 'react';
import { X } from 'lucide-react';

interface PrivacyPolicyModalProps {
  open: boolean;
  onClose: () => void;
}

export function PrivacyPolicyModal({ open, onClose }: PrivacyPolicyModalProps) {
  useEffect(() => {
    if (!open) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-ink-900/60 p-4 backdrop-blur-sm" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }}>
      <section role="dialog" aria-modal="true" aria-labelledby="privacy-policy-title" className="relative max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-3xl bg-white p-6 shadow-lift sm:p-8">
        <button type="button" onClick={onClose} aria-label="Fechar política de privacidade" className="absolute right-4 top-4 rounded-full p-2 text-ink-500 transition-colors hover:bg-paper-100 hover:text-ink-900">
          <X size={20} />
        </button>
        <p className="text-xs font-semibold uppercase tracking-widest text-ember-600">D&amp;Bu Tintas</p>
        <h2 id="privacy-policy-title" className="mt-2 pr-10 font-display text-2xl font-bold text-ink-900">Política de Privacidade</h2>
        <div className="mt-6 space-y-4 text-sm leading-relaxed text-ink-600">
          <p>A D&amp;Bu Tintas respeita sua privacidade e trata os dados enviados pelo formulário somente para responder à sua solicitação e entrar em contato sobre produtos e serviços.</p>
          <p>O formulário pode solicitar seu nome, telefone e mensagem. O telefone é opcional. Ao clicar em “Enviar via WhatsApp”, o conteúdo preenchido é colocado em uma conversa no WhatsApp, serviço operado pela Meta. Este site não armazena os dados enviados pelo formulário; depois de abrir o WhatsApp, o tratamento também segue as práticas e políticas do serviço.</p>
          <p>A D&amp;Bu Tintas usa esses dados para atender sua solicitação e não os utiliza para publicidade. A conversa poderá ser mantida no WhatsApp pelo tempo necessário ao atendimento e às obrigações legais aplicáveis.</p>
          <p>Você pode solicitar confirmação do tratamento, acesso ou correção dos seus dados e, quando aplicável, a eliminação. Para exercer seus direitos ou tirar dúvidas, fale com a D&amp;Bu Tintas pelo e-mail <a className="font-medium text-ember-600 underline" href="mailto:debutintas@gmail.com">debutintas@gmail.com</a>.</p>
        </div>
        <button type="button" onClick={onClose} className="mt-7 rounded-xl bg-ember-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-ember-700">Entendi</button>
      </section>
    </div>
  );
}
