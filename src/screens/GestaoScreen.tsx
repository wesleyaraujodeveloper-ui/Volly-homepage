import React from 'react';
import { Plus, Search, Users, UserCheck } from 'lucide-react';

export const GestaoScreen: React.FC = () => {
  return (
    <div className="flex flex-col h-full bg-volly-bg text-white">
      <div className="bg-volly-bg pt-12 pb-4 px-6 border-b border-volly-border flex justify-between items-center z-10 sticky top-0">
        <div>
          <h1 className="text-2xl font-bold text-volly-text">Minha Equipe</h1>
          <p className="text-sm text-volly-text-sec">Gestão de Voluntários</p>
        </div>
        <button className="p-2 bg-volly-primary rounded-full text-white shadow-volly-elevation">
          <Plus size={22} />
        </button>
      </div>

      <div className="p-4 flex-1 pb-32">
        <div className="bg-volly-surface flex items-center p-4 rounded-[16px] border border-volly-border mb-6 shadow-sm">
          <Search size={20} className="text-volly-text-sec mr-3" />
          <input 
            type="text" 
            placeholder="Buscar voluntário..." 
            className="bg-transparent border-none text-volly-text outline-none w-full placeholder-volly-text-sec text-[15px]" 
          />
        </div>

        <div className="space-y-4">
          {[
            { id: 1, name: 'Lucas Silva', role: 'Baterista', status: 'Ativo' },
            { id: 2, name: 'Mariana Costa', role: 'Vocal principal', status: 'Ativo' },
            { id: 3, name: 'Pedro Alves', role: 'Mesa de Som', status: 'Férias' },
          ].map((member) => (
            <div key={member.id} className="flex items-center p-4 bg-volly-surface rounded-[16px] border border-volly-border shadow-sm">
              <div className="w-12 h-12 bg-volly-surface-high rounded-full flex items-center justify-center mr-4 border border-volly-border/50">
                <Users size={20} className="text-volly-primary" />
              </div>
              <div className="flex-1">
                <p className="font-bold text-[15px] text-volly-text">{member.name}</p>
                <p className="text-[13px] text-volly-text-sec">{member.role}</p>
              </div>
              <div>
                {member.status === 'Ativo' ? (
                  <UserCheck size={20} className="text-volly-success" />
                ) : (
                  <span className="text-[11px] font-bold bg-volly-surface-high text-volly-text-sec px-3 py-1 rounded-full border border-volly-border">Férias</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
