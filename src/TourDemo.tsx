import React, { useState, useEffect } from 'react';
import * as JoyrideModule from 'react-joyride';
import type { Step } from 'react-joyride';
import { PhoneMockup } from './components/PhoneMockup';
import { BottomTabs } from './components/BottomTabs';
import type { TabType } from './components/BottomTabs';
import { Play } from 'lucide-react';

// @ts-ignore
const Joyride = JoyrideModule.default || JoyrideModule.Joyride || JoyrideModule;

const CustomBeacon = React.forwardRef<HTMLButtonElement, any>((props, ref) => {
  return (
    <button
      ref={ref}
      {...props}
      style={{ ...props.style, transform: 'translate(40px, 20px)' }}
      className="flex items-center gap-2 animate-bounce bg-[#DF721B] text-white px-4 py-2 rounded-full shadow-[0_4px_20px_rgba(223,114,27,0.5)] font-bold text-sm whitespace-nowrap z-50 border-2 border-white"
    >
      <span className="relative flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
      </span>
      Clique aqui para começar!
    </button>
  );
});

import { FeedScreen } from './screens/FeedScreen';
import { GestaoScreen } from './screens/GestaoScreen';
import { EventosScreen } from './screens/EventosScreen';
import { EscalasScreen } from './screens/EscalasScreen';
import { PerfilScreen } from './screens/PerfilScreen';

export function TourDemo() {
  const [activeTab, setActiveTab] = useState<TabType>('feed');
  const [runTour, setRunTour] = useState(false);

  const steps: any[] = [
    {
      target: '.tour-logo',
      content: 'Bem-vindo ao Volly! Esta é uma demonstração interativa do nosso aplicativo.',
    },
    {
      target: '.tour-first-event',
      content: 'Aqui no seu Feed, você verá rapidamente todos os seus próximos eventos e escalas.',
      disableBeacon: true,
    },
    {
      target: '.tour-tab-gestao',
      content: 'Líderes podem gerenciar suas equipes de forma simples e intuitiva por aqui.',
      disableBeacon: true,
    },
    {
      target: '.tour-tab-eventos',
      content: 'Crie e organize os eventos da sua igreja com poucos cliques.',
      disableBeacon: true,
    },
    {
      target: '.tour-tab-escalas',
      content: 'Escale seus voluntários e gerencie a disponibilidade de cada um sem dor de cabeça.',
      disableBeacon: true,
    }
  ];

  const handleJoyrideCallback = (data: any) => {
    const { status, type, index, action } = data;
    
    // Sincroniza a aba ativa com o passo do tour ANTES dele renderizar
    if (type === 'step:before') {
      if (index === 0 || index === 1) setActiveTab('feed');
      if (index === 2) setActiveTab('gestao');
      if (index === 3) setActiveTab('eventos');
      if (index === 4) setActiveTab('escalas');
    }

    if (['finished', 'skipped'].includes(status) || action === 'close') {
      setRunTour(false);
      setActiveTab('feed');
    }
  };

  const startTourManually = () => {
    setActiveTab('feed');
    // Para reiniciar limpo, desmontamos (runTour=false) e montamos (runTour=true) com pequeno delay
    setRunTour(false);
    setTimeout(() => {
      setRunTour(true);
    }, 100);
  };

  const renderScreen = () => {
    switch (activeTab) {
      case 'feed':
        return <FeedScreen />;
      case 'gestao':
        return <GestaoScreen />;
      case 'eventos':
        return <EventosScreen />;
      case 'escalas':
        return <EscalasScreen />;
      case 'perfil':
        return <PerfilScreen />;
      default:
        return <FeedScreen />;
    }
  };

  return (
    <div className="bg-gray-950 w-full min-h-[calc(100vh-64px)] py-12 flex justify-center relative overflow-hidden">
      
      {!runTour && (
        <div className="absolute right-10 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-4 z-50">
          <p className="text-zinc-400 font-medium text-sm tracking-wide uppercase">Dúvidas de como funciona?</p>
          <button 
            onClick={startTourManually}
            className="flex items-center gap-3 animate-bounce bg-[#DF721B] hover:bg-[#c96213] text-white px-8 py-4 rounded-full shadow-[0_4px_20px_rgba(223,114,27,0.4)] font-bold text-lg transition-colors"
          >
            <Play fill="currentColor" size={20} />
            Iniciar Tour Guiado
          </button>
        </div>
      )}

      {/* Botão de tour manual para telas menores */}
      {!runTour && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 lg:hidden z-50">
          <button 
            onClick={startTourManually}
            className="flex items-center gap-2 animate-bounce bg-[#DF721B] text-white px-6 py-3 rounded-full shadow-[0_4px_20px_rgba(223,114,27,0.4)] font-bold text-sm"
          >
            <Play fill="currentColor" size={16} />
            Iniciar Tour
          </button>
        </div>
      )}

      <Joyride
        steps={steps}
        run={runTour}
        continuous={true}
        disableScrolling={true}
        disableScrollParentFix={true}
        showProgress={true}
        showSkipButton={true}
        callback={handleJoyrideCallback}
        beaconComponent={CustomBeacon}
        styles={{
          options: {
            primaryColor: '#DF721B',
            zIndex: 1000,
            arrowColor: '#DF721B',
          },
          tooltip: {
            backgroundColor: '#DF721B',
            color: '#FFFFFF',
            borderRadius: '12px',
            border: 'none',
          },
          tooltipContainer: {
            textAlign: 'left',
            fontWeight: '500',
            color: '#FFFFFF',
          },
          tooltipContent: {
            color: '#FFFFFF',
          },
          buttonNext: {
            backgroundColor: '#121212',
            color: '#FFFFFF',
            borderRadius: '8px',
            fontWeight: 'bold',
            padding: '8px 16px',
          },
          buttonBack: {
            color: '#FFFFFF',
            marginRight: 10,
          },
          buttonSkip: {
            color: '#FFFFFF',
            opacity: 0.9,
            fontWeight: '500',
          }
        }}
        locale={{
          back: 'Anterior',
          close: 'Fechar',
          last: 'Finalizar',
          next: 'Próximo',
          skip: 'Pular'
        }}
      />
      <PhoneMockup>
        <div className="h-full relative">
          {renderScreen()}
          <BottomTabs activeTab={activeTab} onChangeTab={setActiveTab} />
        </div>
      </PhoneMockup>
    </div>
  );
}

