import React from 'react';
import { motion } from 'framer-motion';
import { Check, Star } from 'lucide-react';

const plans = [
  {
    name: 'Básico',
    volunteers: 'Até 30 voluntários',
    description: 'Ideal para equipes pequenas começando a se organizar de forma profissional.',
    price: 'R$ 49,90',
    buttonText: 'Assinar Básico',
    popular: false,
  },
  {
    name: 'Intermediário',
    volunteers: 'Até 60 voluntários',
    description: 'Perfeito para igrejas ou projetos em ritmo acelerado de crescimento.',
    price: 'R$ 79,90',
    buttonText: 'Assinar Intermediário',
    popular: true,
  },
  {
    name: 'Plus',
    volunteers: 'Até 100 voluntários',
    description: 'Para ministérios robustos que precisam de controle total e agilidade.',
    price: 'R$ 119,90',
    buttonText: 'Assinar Plus',
    popular: false,
  },
  {
    name: 'Premium',
    volunteers: 'Acima de 100',
    description: 'Solução sob medida e dedicada para mega equipes e organizações complexas.',
    price: 'Sob Consulta',
    buttonText: 'Falar com Especialista',
    popular: false,
  }
];

const allFeaturesIncluded = [
  'Mural VollyConnect (Rede Social Exclusiva)',
  'Gestão Completa de Equipes e Funções',
  'Criação de Eventos com Data, Hora e Repertório',
  'Geração Mágica de Escalas (Com 1 toque)',
  'Painel Inteligente do Próximo Compromisso',
  'Visão Mensal de Escalas e Disponibilidade',
  'Músicas para se Inspirar & Playlists Oficiais',
  'Chat Flutuante Integrado',
  'Notificações Push e Alertas Interativos',
  'Perfil Inteligente do Voluntário'
];

export function Pricing() {
  return (
    <section id="planos" className="py-32 bg-[#18181b] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Escolha o seu plano</h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            O Volly Connect é um aplicativo exclusivo. Entregamos todo o nosso poder em todos os planos, você só escolhe de acordo com o tamanho da sua equipe.
          </p>
        </div>

        {/* Cards de Preço */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {plans.map((plan, index) => {
            const message = encodeURIComponent(`Olá! Tenho interesse em assinar o Plano ${plan.name} do Volly Connect para gerenciar minha equipe.`);
            const whatsappUrl = `https://wa.me/5567992803713?text=${message}`;

            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-[#27272a] rounded-3xl p-8 border ${plan.popular ? 'border-[#DF721B] shadow-[0_0_30px_rgba(223,114,27,0.15)]' : 'border-white/5'} relative flex flex-col h-full`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#DF721B] text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg flex items-center gap-1">
                    <Star className="w-4 h-4 fill-current" /> Mais Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-[#DF721B] font-semibold mb-4 text-lg">{plan.volunteers}</p>
                <p className="text-zinc-400 text-sm mb-8 flex-grow">{plan.description}</p>
                
                <div className="mb-8">
                  <span className="text-4xl font-extrabold text-white">{plan.price}</span>
                  {plan.price !== 'Sob Consulta' && <span className="text-zinc-400">/mês</span>}
                </div>

                <a 
                  href={whatsappUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={`w-full py-4 rounded-xl font-bold transition-all mt-auto text-center block ${plan.popular ? 'bg-[#DF721B] hover:bg-[#c96213] text-white shadow-[0_4px_15px_rgba(223,114,27,0.4)]' : 'bg-white/10 hover:bg-white/20 text-white'}`}
                >
                  {plan.buttonText}
                </a>
              </motion.div>
            );
          })}
        </div>

        {/* Todas as Funcionalidades Incluídas */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-b from-[#27272a] to-[#09090b] rounded-[2rem] p-8 md:p-12 border border-white/5"
        >
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Todos os planos têm acesso <span className="text-[#DF721B]">completo</span> a:</h3>
            <p className="text-zinc-400">Nenhum recurso fica de fora. A magia inteira na palma da sua mão.</p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-y-6 gap-x-8 max-w-5xl mx-auto">
            {allFeaturesIncluded.map((feature, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-[#10B981]/20 flex items-center justify-center shrink-0">
                  <Check className="w-4 h-4 text-[#10B981]" />
                </div>
                <span className="text-zinc-300 font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
