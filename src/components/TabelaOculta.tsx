import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2, XCircle, DollarSign, TrendingUp, Users, ShieldAlert } from 'lucide-react';

export function TabelaOculta() {
  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-300 py-12 px-4 sm:px-6 lg:px-8 font-sans selection:bg-[#DF721B] selection:text-white">
      <div className="max-w-4xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="flex items-center gap-4 border-b border-white/10 pb-6">
          <a href="#" className="p-2 hover:bg-white/5 rounded-full transition-colors text-zinc-400 hover:text-white">
            <ArrowLeft className="w-6 h-6" />
          </a>
          <div>
            <h1 className="text-3xl font-bold text-white">Playbook de Vendas Interno 🤫</h1>
            <p className="text-zinc-400">Argumentos, tabela de preços e estratégias do Volly Connect.</p>
          </div>
        </div>

        {/* Seção 1: Tabela Oficial e Custo por Usuário */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <DollarSign className="w-6 h-6 text-[#10B981]" />
            <h2 className="text-2xl font-bold text-white">Preços Oficiais (Site)</h2>
          </div>
          
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="bg-[#18181b] p-6 rounded-2xl border border-white/5">
              <h3 className="text-xl font-bold text-white mb-2">Básico</h3>
              <p className="text-[#DF721B] font-semibold mb-4">Até 30 voluntários</p>
              <p className="text-3xl font-bold text-white mb-2">R$ 49,90</p>
              <p className="text-zinc-400 text-sm">~R$ 1,66 por usuário</p>
            </div>
            
            <div className="bg-[#18181b] p-6 rounded-2xl border border-[#DF721B]/30 relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#DF721B] text-xs font-bold text-white px-3 py-1 rounded-full">
                Alvo Principal
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Intermediário</h3>
              <p className="text-[#DF721B] font-semibold mb-4">Até 60 voluntários</p>
              <p className="text-3xl font-bold text-white mb-2">R$ 79,90</p>
              <p className="text-zinc-400 text-sm">~R$ 1,33 por usuário</p>
            </div>

            <div className="bg-[#18181b] p-6 rounded-2xl border border-white/5">
              <h3 className="text-xl font-bold text-white mb-2">Plus</h3>
              <p className="text-[#DF721B] font-semibold mb-4">Até 100 voluntários</p>
              <p className="text-3xl font-bold text-white mb-2">R$ 119,90</p>
              <p className="text-zinc-400 text-sm">~R$ 1,19 por usuário</p>
            </div>
          </div>
        </section>

        {/* Seção 2: Estratégia Premium (Negociação no WhatsApp) */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <TrendingUp className="w-6 h-6 text-[#DF721B]" />
            <h2 className="text-2xl font-bold text-white">Negociação: Plano Premium (100+ vol)</h2>
          </div>
          <p className="text-zinc-400">Cartas na manga para fechar pelo WhatsApp quando o cliente pedir "Sob Consulta".</p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#18181b] p-6 rounded-2xl border border-white/5 space-y-4">
              <h3 className="text-lg font-bold text-white">Opção A: Preço Fixo (Agressivo)</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex justify-between items-center border-b border-white/5 pb-2">
                  <span>Até 150 voluntários</span>
                  <span className="font-bold text-[#10B981]">R$ 189,90 <span className="text-zinc-500 font-normal">(R$ 1,26/usuário)</span></span>
                </li>
                <li className="flex justify-between items-center border-b border-white/5 pb-2">
                  <span>Até 200 voluntários</span>
                  <span className="font-bold text-[#10B981]">R$ 229,90 <span className="text-zinc-500 font-normal">(R$ 1,14/usuário)</span></span>
                </li>
                <li className="flex justify-between items-center pb-2">
                  <span>Até 300 voluntários</span>
                  <span className="font-bold text-[#10B981]">R$ 299,90 <span className="text-zinc-500 font-normal">(R$ 0,99/usuário)</span></span>
                </li>
              </ul>
            </div>

            <div className="bg-[#18181b] p-6 rounded-2xl border border-white/5 space-y-4">
              <h3 className="text-lg font-bold text-white">Opção B: Pacotes de Expansão</h3>
              <p className="text-sm text-zinc-400">Base: Plano Plus (100 vol por R$ 119,90). Você vende blocos adicionais se eles estourarem o limite:</p>
              <ul className="space-y-3 text-sm">
                <li className="flex gap-2 items-center">
                  <div className="w-2 h-2 rounded-full bg-[#DF721B]"></div>
                  <span><strong className="text-white">Pacote +50 vagas:</strong> Adiciona R$ 40,00 na fatura.</span>
                </li>
                <li className="flex gap-2 items-center">
                  <div className="w-2 h-2 rounded-full bg-[#DF721B]"></div>
                  <span><strong className="text-white">Pacote +100 vagas:</strong> Adiciona R$ 70,00 na fatura.</span>
                </li>
              </ul>
              <div className="mt-4 p-3 bg-white/5 rounded-lg border border-[#DF721B]/20">
                <p className="text-xs text-[#DF721B] font-semibold mb-1">Gatilho de Venda Premium:</p>
                <p className="text-xs text-zinc-300">"Não cobramos taxa de adesão e te dou de bônus o Onboarding VIP (uma videochamada para cadastrar a liderança)".</p>
              </div>
            </div>
          </div>
        </section>

        {/* Seção 3: Concorrência (Como esmagar a Voluts) */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <ShieldAlert className="w-6 h-6 text-red-500" />
            <h2 className="text-2xl font-bold text-white">Argumentos vs Concorrência (Voluts)</h2>
          </div>
          
          <div className="bg-[#18181b] p-8 rounded-3xl border border-white/5 space-y-8">
            <div>
              <h3 className="text-lg font-bold text-white mb-4">1. Onde somos BEM mais baratos (Preço):</h3>
              <div className="flex items-center gap-4 bg-red-500/10 p-4 rounded-xl border border-red-500/20 mb-3">
                <XCircle className="w-6 h-6 text-red-500 shrink-0" />
                <p className="text-sm">A Voluts cobra em Dólar. O plano deles de <strong>30 voluntários</strong> sai por <strong>$11 USD (Aprox. R$ 60,00)</strong>.</p>
              </div>
              <div className="flex items-center gap-4 bg-[#10B981]/10 p-4 rounded-xl border border-[#10B981]/20">
                <CheckCircle2 className="w-6 h-6 text-[#10B981] shrink-0" />
                <p className="text-sm">O Volly cobra em Real. Nosso plano de <strong>30 voluntários</strong> sai por <strong>R$ 49,90</strong>. E o nosso de 60 pessoas ganha do deles de 50 pessoas!</p>
              </div>
            </div>

            <div className="h-px bg-white/10 w-full"></div>

            <div>
              <h3 className="text-lg font-bold text-white mb-4">2. Nossa Bala de Prata (Produto):</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-white/5 rounded-xl">
                  <p className="font-bold text-[#DF721B] mb-2">Comunidade e Mural</p>
                  <p className="text-xs text-zinc-400">A Voluts foca só em escala. O Volly cria uma comunidade. Temos nosso próprio feed/mural onde a igreja respira, sem depender do Instagram ou grupos bagunçados.</p>
                </div>
                <div className="p-4 bg-white/5 rounded-xl">
                  <p className="font-bold text-[#DF721B] mb-2">Chat Interno</p>
                  <p className="text-xs text-zinc-400">Eles dependem 100% de mandar notificações pro WhatsApp da pessoa. Nós temos Chat Integrado flutuante para resolver as coisas DENTRO de casa.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
