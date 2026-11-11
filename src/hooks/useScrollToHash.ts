import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function useScrollToHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: 'auto' });
      return;
    }

    const id = hash.replace('#', '');

    const scrollToTarget = () => {
      const el = document.getElementById(id);
      if (!el) return false;
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return true;
    };

    if (scrollToTarget()) return;

    const timeout = setTimeout(scrollToTarget, 120);
    return () => clearTimeout(timeout);
  }, [pathname, hash]);
}
