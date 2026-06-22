import React from 'react';

export function Footer() {
  return (
    <footer className="bg-black py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-3 mb-2">
            <img src="/assets/Logo Volly.png" alt="Volly Logo" className="w-6 h-6 object-contain opacity-50 grayscale" />
            <span className="text-zinc-500 font-medium">
              © {new Date().getFullYear()} <span className="text-2xl text-[#DF721B] pr-1" style={{ fontFamily: "'Cream Cake', cursive" }}>Volly</span><span className="font-bold text-white">Connect</span>.
            </span>
          </div>
          <p className="text-xs text-zinc-600 max-w-sm">
            A plataforma definitiva para gestão de equipes e escalas. Desenvolvido com excelência para simplificar a organização da sua comunidade.
          </p>
        </div>
        
        <div className="flex flex-wrap gap-x-8 gap-y-4">
          <a href="#termos" className="text-zinc-500 hover:text-white transition-colors text-sm font-medium">Termos de Uso</a>
          <a href="#privacidade" className="text-zinc-500 hover:text-white transition-colors text-sm font-medium">Política de Privacidade</a>
          <a href="#contato" className="text-zinc-500 hover:text-white transition-colors text-sm font-medium">Fale Conosco</a>
        </div>
      </div>
    </footer>
  );
}
