import React from 'react';
import { Bell, MapPin, Clock, Users, ChevronRight, MessageCircle } from 'lucide-react';

export const FeedScreen: React.FC = () => {
  const events = [
    {
      id: 1,
      title: 'Culto de Domingo - Manhã',
      date: 'Domingo, 15 de Junho',
      time: '09:00 - 11:30',
      location: 'Sede Principal',
      role: 'Música - Violão',
      status: 'confirmed'
    },
    {
      id: 2,
      title: 'Ensaio Geral',
      date: 'Quinta, 12 de Junho',
      time: '20:00 - 22:00',
      location: 'Sala 02',
      role: 'Vocal',
      status: 'pending'
    }
  ];

  return (
    <div className="flex flex-col h-full bg-volly-bg text-white">
      {/* Cabeçalho */}
      <div className="bg-volly-bg pt-12 pb-2 px-4 border-b border-volly-border flex justify-between items-center z-10 sticky top-0">
        <div className="tour-logo">
          <p className="text-volly-text-sec text-xs font-bold uppercase tracking-widest">Quinta, 18 de Junho</p>
          <h1 className="text-2xl font-bold mt-1 text-volly-text">Olá, Wesley! 👋</h1>
        </div>
        <div className="flex items-center gap-4">
          <button className="relative p-1">
            <Bell size={26} className="text-volly-text" />
            <span className="absolute top-1 right-1 w-4 h-4 bg-volly-error text-[9px] font-bold flex items-center justify-center rounded-full border-2 border-volly-bg">3</span>
          </button>
          <div className="w-[50px] h-[50px] rounded-full border-2 border-volly-primary p-0.5">
            <img src="https://ui-avatars.com/api/?name=Wesley&background=242424&color=fff" alt="Avatar" className="w-full h-full rounded-full" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 flex-1 pb-32">
        
        {/* Card de Próxima Missão */}
        <div className="mb-6 tour-first-event">
          <h2 className="text-lg font-bold text-volly-text mb-4">Sua Próxima Missão</h2>
          
          <div className="bg-volly-surface rounded-[20px] p-5 border-l-4 border-volly-primary shadow-volly-elevation">
            <div className="flex justify-between items-center mb-3">
              <span className="bg-volly-primary/15 text-volly-primary text-[10px] font-bold px-2 py-1 rounded-md">EM BREVE</span>
              <span className="text-volly-text-sec text-xs font-bold">18:00</span>
            </div>
            
            <h3 className="text-xl font-bold text-volly-text mb-1">Culto de Celebração</h3>
            <p className="text-sm text-volly-text-sec mb-5">
              Sua função: <span className="text-volly-primary font-medium">Bateria</span>
            </p>

            <div className="flex justify-between items-center pt-4 border-t border-volly-border/40">
              <div className="flex items-center text-volly-text-sec">
                <Users size={14} />
                <span className="text-xs ml-1.5">Ministério de Louvor</span>
              </div>
              <ChevronRight size={18} className="text-volly-primary" />
            </div>
          </div>
        </div>
        
        {/* Feed de Atualizações (Mural) */}
        <div>
          <div className="bg-volly-surface rounded-2xl p-4 mb-4 border border-volly-border">
            <div className="flex items-center mb-3">
              <div className="w-10 h-10 bg-volly-border rounded-full mr-3">
                <img src="https://ui-avatars.com/api/?name=Lider&background=333333&color=fff" className="rounded-full" />
              </div>
              <div>
                <p className="text-sm font-bold text-volly-text">Liderança Geral</p>
                <p className="text-[11px] text-volly-text-sec">Hoje às 10:30</p>
              </div>
            </div>
            <p className="text-[15px] text-volly-text leading-[22px] mb-3">
              Equipe, lembrem-se do ensaio geral amanhã às 19h. O repertório já está disponível no app! 🎶
            </p>
            <div className="flex pt-3 border-t border-volly-border/40 text-volly-text-sec font-medium text-xs">
              <span className="mr-5">❤️ 12</span>
              <span>💬 3</span>
            </div>
          </div>
        </div>

      </div>

      {/* FAB do Chat */}
      <div className="absolute bottom-[100px] right-6 z-50">
        <button className="bg-volly-primary w-[60px] h-[60px] rounded-full flex justify-center items-center shadow-volly-fab hover:scale-105 transition-transform relative">
          <MessageCircle size={28} color="#FFFFFF" />
          <div className="absolute top-[15px] right-[15px] w-3 h-3 rounded-full bg-volly-success border-2 border-volly-primary" />
        </button>
      </div>
    </div>
  );
};

const TextLogo = () => (
  <span className="text-volly-primary text-2xl" style={{ fontFamily: 'cursive' }}>
    Volly
  </span>
);
