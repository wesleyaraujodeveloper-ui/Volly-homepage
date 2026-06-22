import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Bell, User, Calendar, Music, ListMusic, Globe, Zap } from 'lucide-react';

const mainFeatures = [
  {
    title: 'O Poder das Escalas',
    description: 'Gestão completa com visão mensal. Diga qual evento estará disponível, gere escalas com apenas um toque (a mágica acontece!) e notifique automaticamente todos os voluntários envolvidos.',
    image: '/assets/volly_promotion_escalas_1776343477654.png',
    reverse: false,
    color: 'from-[#DF721B] to-[#7C3AED]'
  },
  {
    title: 'Criação e Gestão de Eventos',
    description: 'Tudo o que o evento precisa em um só lugar. Defina data, hora, monte as escalas específicas, organize o repertório musical e faça a manutenção completa de cada detalhe.',
    image: '/assets/volly_promotion_mural_1776343229791.png', 
    reverse: true,
    color: 'from-[#7C3AED] to-[#2563EB]'
  },
  {
    title: 'Gestão Completa de Equipes',
    description: 'Tenha o controle absoluto da sua instituição. Gerencie múltiplas equipes, atribua funções específicas para cada membro e acompanhe seus voluntários em tempo real.',
    image: '/assets/volly_promotion_equipe_1776343502719.png',
    reverse: false,
    color: 'from-[#2563EB] to-[#10B981]'
  }
];

const gridFeatures = [
  {
    icon: <Globe className="w-8 h-8 text-[#DF721B]" />,
    title: 'Mural VollyConnect',
    description: 'Nossa rede social exclusiva que engloba todas as instituições que utilizam o app. Conecte-se!'
  },
  {
    icon: <Calendar className="w-8 h-8 text-[#7C3AED]" />,
    title: 'Seu Próximo Compromisso',
    description: 'Um painel inteligente no Feed que diz exatamente quando será o próximo evento.'
  },
  {
    icon: <Bell className="w-8 h-8 text-[#2563EB]" />,
    title: 'Notificações Interativas',
    description: 'Botão de notificações no feed para você visualizar e interagir com alertas em tempo real.'
  },
  {
    icon: <MessageCircle className="w-8 h-8 text-[#10B981]" />,
    title: 'Chat Flutuante',
    description: 'Atalho rápido e flutuante direto do Feed para acessar o chat do evento em instantes.'
  },
  {
    icon: <User className="w-8 h-8 text-[#DF721B]" />,
    title: 'Perfil Inteligente',
    description: 'Veja quais equipes você faz parte, confira e ative/desative notificações com facilidade.'
  },
  {
    icon: <Zap className="w-8 h-8 text-[#7C3AED]" />,
    title: 'Escala Geral',
    description: 'Exibe a visão geral de todas as escalas dos eventos da sua instituição direto no Feed.'
  }
];

export function Features() {
  return (
    <section id="funcionalidades" className="py-32 bg-[#09090b] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho */}
        <div className="text-center mb-24 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-[#DF721B]/20 text-[#DF721B] text-sm font-bold mb-4 border border-[#DF721B]/30">
              O Arsenal Completo
            </span>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">Tudo o que um Líder <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#DF721B] to-[#7C3AED]">sempre sonhou</span></h2>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
              O Volly Connect não é apenas um app, é um ecossistema. Ferramentas poderosas desenhadas para caberem perfeitamente na palma da sua mão.
            </p>
          </motion.div>
        </div>

        {/* Pilares Principais */}
        <div className="space-y-32 mb-32 relative z-10">
          {mainFeatures.map((feature, index) => (
            <div key={index} className={`flex flex-col ${feature.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-16`}>
              <motion.div 
                initial={{ opacity: 0, x: feature.reverse ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="lg:w-1/2"
              >
                <div className={`w-16 h-2 mb-6 bg-gradient-to-r ${feature.color} rounded-full`} />
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">{feature.title}</h3>
                <p className="text-xl text-zinc-400 leading-relaxed">{feature.description}</p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="lg:w-1/2 flex justify-center"
              >
                <div className="relative">
                  <div className={`absolute inset-0 bg-gradient-to-tr ${feature.color} blur-[80px] opacity-20 rounded-full`} />
                  <img 
                    src={feature.image} 
                    alt={feature.title} 
                    className="relative w-64 md:w-80 object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] rounded-[2rem]"
                  />
                </div>
              </motion.div>
            </div>
          ))}
        </div>

        {/* Seção Exclusiva: Música e Repertório */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-[#DF721B]/10 to-transparent border border-[#DF721B]/20 rounded-[2rem] p-8 md:p-12 mb-32 relative overflow-hidden"
        >
          <div className="absolute right-0 top-0 w-64 h-64 bg-[#DF721B]/10 rounded-full blur-[80px]" />
          <div className="relative z-10 grid md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-1">
              <div className="w-16 h-16 bg-[#DF721B]/20 rounded-2xl flex items-center justify-center mb-6">
                <Music className="w-8 h-8 text-[#DF721B]" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">Música e Repertório</h3>
              <p className="text-zinc-400">Recursos feitos sob medida para Ministérios de Louvor e Bandas não perderem a harmonia.</p>
            </div>
            <div className="md:col-span-2 grid sm:grid-cols-2 gap-6">
              <div className="bg-[#18181b] p-6 rounded-2xl border border-white/5">
                <Music className="w-6 h-6 text-[#DF721B] mb-4" />
                <h4 className="text-xl font-bold text-white mb-2">Para se Inspirar</h4>
                <p className="text-zinc-400 text-sm">Navegue pelas sugestões de músicas que estão em alta e sendo mais tocadas no momento.</p>
              </div>
              <div className="bg-[#18181b] p-6 rounded-2xl border border-white/5">
                <ListMusic className="w-6 h-6 text-[#DF721B] mb-4" />
                <h4 className="text-xl font-bold text-white mb-2">Playlists Oficiais</h4>
                <p className="text-zinc-400 text-sm">Acesse listas completas das canções mais populares em toda a comunidade VollyConnect.</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Grid de Funcionalidades Menores */}
        <div className="relative z-10">
          <div className="text-center mb-16">
            <h3 className="text-2xl md:text-4xl font-bold text-white mb-4">Um Ecossistema na sua mão</h3>
            <p className="text-zinc-400">Tudo conectado de forma inteligente no seu Feed e Perfil.</p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {gridFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#18181b] p-8 rounded-3xl border border-white/5 hover:border-[#DF721B]/30 transition-colors group cursor-default"
              >
                <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h4 className="text-xl font-bold text-white mb-3">{feature.title}</h4>
                <p className="text-zinc-400 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
