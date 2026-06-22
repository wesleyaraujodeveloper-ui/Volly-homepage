import React from 'react';
import { motion } from 'framer-motion';

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <img src="/assets/Logo Volly.png" alt="Volly Logo" className="w-8 h-8 object-contain" />
            <div className="flex items-baseline gap-1.5 mt-2">
              <span className="text-4xl text-[#DF721B]" style={{ fontFamily: "'Cream Cake', cursive" }}>Volly</span>
              <span className="text-xl font-bold text-white tracking-tight">Connect</span>
            </div>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#funcionalidades" className="text-sm font-medium text-zinc-300 hover:text-white transition-colors">Funcionalidades</a>
            <a href="#tour" className="text-sm font-medium text-zinc-300 hover:text-white transition-colors">Demonstração</a>
            <a href="#planos" className="text-sm font-medium text-zinc-300 hover:text-white transition-colors">Planos</a>
            <a href="#contato" className="text-sm font-medium text-zinc-300 hover:text-white transition-colors">Contato</a>
          </div>
          <div className="flex items-center gap-3">
            <a href="#connector" className="hidden lg:flex items-center gap-2 text-sm font-medium text-zinc-300 hover:text-white transition-colors border border-zinc-800 hover:border-zinc-600 bg-zinc-900/50 px-4 py-2 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#DF721B]"><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"/><path d="M12 12v9"/><path d="m8 16 4-4 4 4"/></svg>
              Volly Connector
            </a>
            <a href="#teste-gratis" className="bg-[#10B981] hover:bg-[#059669] text-white px-5 py-2 rounded-full font-bold text-sm transition-all hover:scale-105 active:scale-95 shadow-[0_0_15px_rgba(16,185,129,0.4)] relative overflow-hidden group">
              <span className="relative z-10">Teste Grátis</span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            </a>
            <a href="#planos" className="hidden sm:block bg-white/10 hover:bg-white/20 border border-white/10 text-white px-5 py-2 rounded-full font-medium text-sm transition-all hover:scale-105 active:scale-95">
              Assinar
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
