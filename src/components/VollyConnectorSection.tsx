import React from 'react';
import { Download, CloudUpload, Monitor, ShieldCheck } from 'lucide-react';

export function VollyConnectorSection() {
  return (
    <section className="py-24 bg-black relative overflow-hidden" id="connector">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#DF721B]/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#DF721B]/10 border border-[#DF721B]/20 text-[#DF721B] text-sm font-medium mb-6">
              <CloudUpload size={16} />
              Integração em Nuvem
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Conecte-se ao Holyrics <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#DF721B] to-[#ff9844]">
                sem complicação
              </span>
            </h2>
            
            <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
              Esqueça IPs, portas e problemas de rede local. Com o <strong>Volly Connector</strong>, você envia as playlists do culto diretamente da nuvem para o computador da igreja usando apenas um código de 6 dígitos.
            </p>

            <div className="space-y-6 mb-10">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0">
                  <Monitor size={24} className="text-[#DF721B]" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-1">Leve e Transparente</h3>
                  <p className="text-zinc-400">Roda em segundo plano no PC da igreja. Abra uma vez antes do culto e pronto.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0">
                  <ShieldCheck size={24} className="text-[#DF721B]" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-1">100% Seguro</h3>
                  <p className="text-zinc-400">Assinatura digital e código único por igreja. Só o seu time tem acesso à projeção.</p>
                </div>
              </div>
            </div>

            <a 
              href="/VollyConnector.zip"
              download
              className="inline-flex items-center justify-center gap-3 bg-[#DF721B] hover:bg-[#c96213] text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-[0_0_20px_rgba(223,114,27,0.3)] hover:shadow-[0_0_30px_rgba(223,114,27,0.5)] hover:-translate-y-1 w-full sm:w-auto"
            >
              <Download size={24} strokeWidth={2.5} />
              Baixar Volly Connector
            </a>
            <p className="text-zinc-500 text-sm mt-4 text-center sm:text-left">
              Para Windows 10/11 • Versão 1.1 (C/ Conversor Integrado)
            </p>
          </div>

          {/* Visual Showcase */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#DF721B]/20 to-transparent blur-3xl rounded-full" />
            <div className="relative bg-zinc-900/80 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl">
              
              <div className="flex items-center gap-3 mb-8 border-b border-white/5 pb-6">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="ml-2 text-zinc-500 text-sm font-mono">volly-connector.exe</span>
              </div>

              <div className="font-mono text-sm space-y-4">
                <div className="text-zinc-400">
                  <span className="text-[#DF721B]">❯</span> Iniciando Volly Connector v1.0...
                </div>
                <div className="text-green-400">
                  <span className="text-[#DF721B]">❯</span> ✓ Sistema conectado à Nuvem
                </div>
                <div className="text-zinc-300">
                  <span className="text-[#DF721B]">❯</span> 🔑 Código da Igreja: <span className="font-bold text-white bg-white/10 px-2 py-1 rounded">IBN2026</span>
                </div>
                <div className="text-zinc-400 animate-pulse">
                  <span className="text-[#DF721B]">❯</span> 📡 Aguardando envio de playlists pelo App...
                </div>
              </div>

            </div>
            
            {/* Floating Elements */}
            <div className="absolute -bottom-6 -left-6 bg-zinc-900 border border-white/10 p-4 rounded-xl shadow-xl flex items-center gap-4 animate-bounce" style={{ animationDuration: '3s' }}>
              <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                <CloudUpload size={20} className="text-green-500" />
              </div>
              <div>
                <p className="text-white font-bold text-sm">Playlist Recebida!</p>
                <p className="text-zinc-400 text-xs">Há 2 segundos</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
