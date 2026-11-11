import { Outlet } from 'react-router-dom';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { WhatsAppFloatButton } from '../components/layout/WhatsAppFloatButton';
import { useScrollToHash } from '../hooks/useScrollToHash';

export function MainLayout() {
  useScrollToHash();

  return (
    <div className="flex min-h-screen flex-col bg-paper">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppFloatButton />
    </div>
  );
}
