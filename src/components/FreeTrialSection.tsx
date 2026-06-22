import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, CheckCircle2, ShieldCheck, Clock } from 'lucide-react';

export function FreeTrialSection() {
  const whatsappUrl = `https://wa.me/5567992803713?text=${encodeURIComponent(
    'Olá! Quero ativar meus 30 Dias Grátis do Volly Connect para testar na minha igreja! 🚀'
  )}`;

  return (
    <section id="teste-gratis" className="py-24 bg-[#09090b] relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[500px] bg-gradient-to-r from-[#DF721B]/20 to-[#7C3AED]/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-gradient-to-br from-[#18181b] to-[#121214] border border-[#DF721B]/30 rounded-[2.5rem] p-8 md:p-14 shadow-[0_0_50px_rgba(223,114,27,0.15)] text-center relative overflow-hidden"
        >
          {/* Subtle overlay texture removido para evitar erro 404/422 */}

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#10B981]/10 border border-[#10B981]/20 text-[#10B981] text-sm font-bold tracking-wide mb-8">
            <Clock size={16} />
            TEMPO LIMITADO
          </div>

          <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight leading-tight">
            Valide na prática.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#DF721B] to-[#ff9844]">
              30 Dias Totalmente Grátis!
            </span>
          </h2>

          <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Sabemos que mudar de sistema é um passo importante. Por isso, liberamos o acesso <strong className="text-white">completo para até 15 membros</strong> para você testar com a sua equipe real, no culto real. <strong>Risco Zero.</strong>
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-12">
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#DF721B] to-[#e65c00] text-white px-10 py-5 rounded-2xl font-bold text-xl transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(223,114,27,0.5)] active:scale-95 w-full md:w-auto"
            >
              <Rocket size={24} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
              Garantir Meus 30 Dias Grátis
              
              {/* Ping animation dot */}
              <span className="absolute -top-2 -right-2 flex h-4 w-4">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-4 w-4 bg-white"></span>
              </span>
            </a>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 text-sm font-medium text-zinc-400">
            <div className="flex items-center gap-2">
              <CheckCircle2 size={18} className="text-[#10B981]" />
              Sem cartão de crédito
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck size={18} className="text-[#DF721B]" />
              Acesso a 100% dos recursos
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={18} className="text-[#10B981]" />
              Cancele quando quiser
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
