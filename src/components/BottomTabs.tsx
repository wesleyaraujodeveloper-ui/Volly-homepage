import React from 'react';
import { Home, Users, Calendar, ClipboardList, User } from 'lucide-react';

export type TabType = 'feed' | 'gestao' | 'eventos' | 'escalas' | 'perfil';

interface BottomTabsProps {
  activeTab: TabType;
  onChangeTab: (tab: TabType) => void;
}

export const BottomTabs: React.FC<BottomTabsProps> = ({ activeTab, onChangeTab }) => {
  const tabs = [
    { id: 'feed', icon: Home, label: 'Início' },
    { id: 'gestao', icon: Users, label: 'Equipe' },
    { id: 'eventos', icon: Calendar, label: 'Eventos' },
    { id: 'escalas', icon: ClipboardList, label: 'Escalas' },
    { id: 'perfil', icon: User, label: 'Perfil' },
  ] as const;

  return (
    <div className="absolute bottom-0 inset-x-0 h-[85px] bg-volly-surface border-t border-volly-border/50 flex justify-around items-center px-4 pb-6 pt-2 rounded-b-3xl z-40 shadow-[0_-5px_10px_rgba(0,0,0,0.2)]">
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = activeTab === tab.id;

        return (
          <button
            key={tab.id}
            onClick={() => onChangeTab(tab.id as TabType)}
            className={`tour-tab-${tab.id} flex flex-col items-center justify-center w-14 transition-colors ${
              isActive ? 'text-volly-primary' : 'text-volly-text-sec hover:text-gray-300'
            }`}
          >
            <Icon size={26} strokeWidth={isActive ? 2.5 : 2} />
            <span className={`text-[10px] mt-1 ${isActive ? 'font-bold' : 'font-medium'}`}>{tab.label}</span>
          </button>
        );
      })}
    </div>
  );
};
