import React from 'react';
import { ClipboardList, CheckCircle, XCircle, AlertCircle } from 'lucide-react';

export const EscalasScreen: React.FC = () => {
  return (
    <div className="flex flex-col h-full bg-volly-bg text-white">
      <div className="bg-volly-bg pt-12 pb-4 px-6 border-b border-volly-border z-10 sticky top-0">
        <h1 className="text-2xl font-bold text-volly-text">Quadro de Escalas</h1>
        <p className="text-sm text-volly-text-sec">Visualização de turnos</p>
      </div>

      <div className="p-4 flex-1 pb-32">
        <div className="flex gap-2 mb-6 overflow-x-auto pb-2 scrollbar-hide">
          <button className="px-4 py-1.5 bg-volly-primary text-white rounded-full text-[13px] font-bold whitespace-nowrap">Todas</button>
          <button className="px-4 py-1.5 bg-volly-surface border border-volly-border text-volly-text-sec rounded-full text-[13px] font-medium whitespace-nowrap hover:bg-volly-surface-high">Meus Turnos</button>
          <button className="px-4 py-1.5 bg-volly-surface border border-volly-border text-volly-text-sec rounded-full text-[13px] font-medium whitespace-nowrap hover:bg-volly-surface-high">Pendentes</button>
        </div>

        <div className="space-y-4">
          <div className="bg-volly-surface rounded-[24px] p-5 border border-volly-border shadow-sm">
            <div className="flex justify-between items-center mb-4 bg-volly-surface-high p-3 rounded-lg -mx-1 -mt-1">
              <span className="text-[11px] font-extrabold text-volly-primary uppercase tracking-widest">Culto da Família</span>
              <span className="text-[11px] text-volly-text-sec font-bold">18 Jun</span>
            </div>
            
            <div className="space-y-3">
              <div className="flex justify-between items-center bg-volly-surface-high/50 p-2 rounded-xl">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-volly-bg border border-volly-border flex items-center justify-center font-bold text-volly-text">M</div>
                  <div>
                    <p className="text-[14px] font-bold text-volly-text">Mateus S.</p>
                    <p className="text-[12px] text-volly-text-sec">Guitarra</p>
                  </div>
                </div>
                <CheckCircle size={20} className="text-volly-success" />
              </div>
              
              <div className="flex justify-between items-center bg-volly-surface-high/50 p-2 rounded-xl">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-volly-bg border border-volly-border flex items-center justify-center font-bold text-volly-text">A</div>
                  <div>
                    <p className="text-[14px] font-bold text-volly-text">Amanda R.</p>
                    <p className="text-[12px] text-volly-text-sec">Teclado</p>
                  </div>
                </div>
                <AlertCircle size={20} className="text-yellow-500" />
              </div>

              <div className="flex justify-between items-center bg-volly-error/5 p-2 rounded-xl opacity-80">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-volly-bg border border-volly-border flex items-center justify-center font-bold text-volly-text">J</div>
                  <div>
                    <p className="text-[14px] font-bold text-volly-error">João P. <span className="text-[10px] bg-volly-error/20 px-1 rounded ml-1">Recusou</span></p>
                    <p className="text-[12px] text-volly-text-sec">Baixo</p>
                  </div>
                </div>
                <XCircle size={20} className="text-volly-error" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
