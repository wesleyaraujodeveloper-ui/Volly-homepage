import React, { useState } from 'react';
import { User, Settings, Shield, LogOut, ChevronRight, Bell } from 'lucide-react';
import { requestNotificationPermission } from '../lib/pushNotifications';

export const PerfilScreen: React.FC = () => {
  const [notificationEnabled, setNotificationEnabled] = useState(false);

  const handleEnableNotifications = async () => {
    const granted = await requestNotificationPermission();
    if (granted) {
      setNotificationEnabled(true);
      alert('Notificações ativadas com sucesso!');
    } else {
      alert('Permissão de notificação negada ou não suportada.');
    }
  };

  return (
    <div className="flex flex-col h-full bg-volly-bg text-white">
      <div className="bg-volly-bg pt-12 pb-4 px-6 border-b border-volly-border z-10 sticky top-0">
        <h1 className="text-2xl font-bold text-volly-text">Perfil</h1>
      </div>

      <div className="p-4 flex-1 pb-6">
        <div className="flex flex-col items-center mt-2 mb-6">
          <div className="w-[80px] h-[80px] bg-volly-surface-high rounded-full border-[3px] border-volly-primary flex items-center justify-center mb-3 shadow-lg">
            <User size={35} className="text-volly-text-sec" />
          </div>
          <h2 className="text-xl font-bold text-volly-text">Wesley Araújo</h2>
          <p className="text-[11px] text-volly-primary font-bold uppercase tracking-wider mt-1 bg-volly-primary/10 px-3 py-1 rounded-full border border-volly-primary/20">Administrador / Líder</p>
        </div>

        <div className="space-y-3">
          <button 
            onClick={handleEnableNotifications}
            className="w-full flex items-center justify-between p-4 bg-volly-surface rounded-[16px] border border-volly-border hover:bg-volly-surface-high transition-colors"
          >
            <div className="flex items-center gap-4">
              <Bell size={22} className={notificationEnabled ? "text-volly-primary" : "text-volly-text-sec"} />
              <span className="font-bold text-[15px] text-volly-text">
                {notificationEnabled ? "Notificações Ativas" : "Ativar Notificações"}
              </span>
            </div>
            <ChevronRight size={22} className="text-volly-border" />
          </button>

          {[
            { icon: Settings, label: 'Configurações da Conta' },
            { icon: Shield, label: 'Privacidade e Segurança' },
          ].map((item, i) => (
            <button key={i} className="w-full flex items-center justify-between p-4 bg-volly-surface rounded-[16px] border border-volly-border hover:bg-volly-surface-high transition-colors">
              <div className="flex items-center gap-4">
                <item.icon size={22} className="text-volly-text-sec" />
                <span className="font-bold text-[15px] text-volly-text">{item.label}</span>
              </div>
              <ChevronRight size={22} className="text-volly-border" />
            </button>
          ))}
          
          <button className="w-full flex items-center justify-center gap-3 p-4 bg-volly-surface rounded-[16px] border border-volly-error/30 mt-4 text-volly-error hover:bg-volly-error/10 transition-colors">
            <LogOut size={20} />
            <span className="font-bold text-[15px]">Sair do Aplicativo</span>
          </button>
        </div>
      </div>
    </div>
  );
};
