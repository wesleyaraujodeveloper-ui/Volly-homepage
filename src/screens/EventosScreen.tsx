import React from 'react';
import { Calendar as CalendarIcon, Plus, Clock, MapPin } from 'lucide-react';

export const EventosScreen: React.FC = () => {
  return (
    <div className="flex flex-col h-full bg-volly-bg text-white">
      <div className="bg-volly-bg pt-12 pb-4 px-6 border-b border-volly-border flex justify-between items-center z-10 sticky top-0">
        <div>
          <h1 className="text-2xl font-bold text-volly-text">Eventos</h1>
          <p className="text-sm text-volly-text-sec">Próximas programações</p>
        </div>
        <button className="flex items-center gap-1 px-4 py-2 bg-volly-primary rounded-full text-white text-[13px] font-bold shadow-volly-elevation">
          <Plus size={16} /> Criar
        </button>
      </div>

      <div className="p-4 flex-1 pb-32">
        {/* Placeholder para mini-calendário */}
        <div className="flex justify-between items-center mb-6 px-2">
          {['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'].map((day, i) => (
            <div key={i} className={`flex flex-col items-center p-2 rounded-lg ${i === 0 ? 'bg-volly-primary text-white' : 'text-volly-text-sec'}`}>
              <span className="text-xs mb-1 font-medium uppercase">{day}</span>
              <span className="font-bold text-[15px]">{15 + i}</span>
            </div>
          ))}
        </div>

        <h2 className="text-lg font-bold text-volly-text mb-4">Hoje</h2>

        <div className="space-y-4">
          {[
            { id: 1, title: 'Culto de Celebração', time: '18:00 - 20:30', loc: 'Templo Principal' },
            { id: 2, title: 'Reunião de Liderança', time: '16:00 - 17:30', loc: 'Sala 05' },
          ].map((evento) => (
            <div key={evento.id} className="p-5 bg-volly-surface rounded-[20px] border border-volly-border border-l-4 border-l-volly-primary shadow-sm">
              <h3 className="font-bold text-xl text-volly-text mb-2">{evento.title}</h3>
              <div className="flex items-center text-[13px] text-volly-text-sec mb-1">
                <Clock size={15} className="mr-2" /> {evento.time}
              </div>
              <div className="flex items-center text-[13px] text-volly-text-sec">
                <MapPin size={15} className="mr-2" /> {evento.loc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
