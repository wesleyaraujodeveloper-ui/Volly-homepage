import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { TourDemo } from './TourDemo';
import { VollyConnectorSection } from './components/VollyConnectorSection';
import { FreeTrialSection } from './components/FreeTrialSection';
import { Pricing } from './components/Pricing';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { TabelaOculta } from './components/TabelaOculta';
import { TermosDeUso } from './components/legal/TermosDeUso';
import { PoliticaDePrivacidade } from './components/legal/PoliticaDePrivacidade';

function App() {
  const [currentHash, setCurrentHash] = useState(window.location.hash);

  useEffect(() => {
    const handleHashChange = () => setCurrentHash(window.location.hash);
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  if (currentHash === '#tour') {
    return (
      <div className="min-h-screen bg-gray-950 text-white font-sans selection:bg-[#DF721B] selection:text-white">
        <div className="h-16 px-6 flex items-center border-b border-white/10 bg-black">
          <a href="#" className="text-zinc-400 hover:text-white transition-colors flex items-center gap-2 font-medium">
            ← Voltar para a Home
          </a>
        </div>
        <TourDemo />
        <FloatingWhatsApp />
      </div>
    );
  }

  if (currentHash === '#vendas') {
    return <TabelaOculta />;
  }

  if (currentHash === '#termos') {
    return <TermosDeUso />;
  }

  if (currentHash === '#privacidade') {
    return <PoliticaDePrivacidade />;
  }

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-[#DF721B] selection:text-white">
      <Navbar />
      <Hero />
      <Features />
      
      {/* Tour Interativo Section */}
      <section className="py-24 bg-[#09090b] relative overflow-hidden border-t border-white/5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#DF721B]/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Experimente na Prática</h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto mb-10">
            Sinta o poder do Volly Connect agora mesmo. Acesse nossa página de demonstração interativa e veja como é fácil.
          </p>
          <a href="#tour" className="inline-block bg-[#DF721B] hover:bg-[#c96213] text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-[0_0_20px_rgba(223,114,27,0.4)]">
            Acessar Tour Interativo
          </a>
        </div>
      </section>

      <VollyConnectorSection />
      
      <FreeTrialSection />

      <Pricing />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
