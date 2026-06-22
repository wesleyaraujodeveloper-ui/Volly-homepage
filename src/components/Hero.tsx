import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, Smartphone } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-black">
      {/* Background gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#DF721B]/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] bg-[#7C3AED]/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-1/4 w-[600px] h-[600px] bg-[#2563EB]/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-white/10 text-[#DF721B] text-sm font-semibold mb-6 border border-white/10">
              O mais completo do mercado
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6 tracking-tight">
              Organize sua <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#DF721B] to-[#7C3AED]">
                equipe como nunca
              </span>
            </h1>
            <p className="text-lg text-zinc-400 mb-6 max-w-xl leading-relaxed">
              Volly Connect é a ferramenta definitiva para gestão de escalas, murais, equipes e eventos. Tudo integrado em um único lugar para potencializar seus resultados.
            </p>

            <div className="flex items-center gap-4 mb-10 text-zinc-300 font-medium text-sm flex-wrap">
              <span className="text-zinc-500 mr-2">Disponível em:</span>
              <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10">
                <Monitor className="w-4 h-4 text-[#DF721B]" /> Web Browser
              </div>
              <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10">
                <Smartphone className="w-4 h-4 text-[#DF721B]" /> iOS
              </div>
              <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10">
                <Smartphone className="w-4 h-4 text-[#DF721B]" /> Android
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <a href="#planos" className="bg-white text-black px-8 py-4 rounded-full font-bold text-lg transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                Começar Agora
              </a>
              <a href="#funcionalidades" className="bg-white/10 text-white border border-white/20 px-8 py-4 rounded-full font-semibold text-lg transition-all hover:bg-white/20 hover:scale-105 active:scale-95">
                Ver Funcionalidades
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="relative hidden lg:block"
          >
            <div className="relative w-[400px] xl:w-[450px] mx-auto z-20">
              <motion.img 
                animate={{ 
                  y: [0, -20, 0],
                  scale: [1, 1.05, 1],
                  filter: [
                    "drop-shadow(0 20px 50px rgba(223,114,27,0.3))", 
                    "drop-shadow(0 20px 80px rgba(223,114,27,0.6))", 
                    "drop-shadow(0 20px 50px rgba(223,114,27,0.3))"
                  ]
                }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                src="/assets/volly_promotion_mural_1776343229791.png" 
                alt="App Interface" 
                className="w-full rounded-[2rem]"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
