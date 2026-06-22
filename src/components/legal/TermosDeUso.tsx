import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

export function TermosDeUso() {
  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-300 font-sans selection:bg-[#DF721B] selection:text-white">
      <div className="h-16 px-6 flex items-center border-b border-white/10 bg-black/50 sticky top-0 backdrop-blur-md z-50">
        <a href="#" className="text-zinc-400 hover:text-white transition-colors flex items-center gap-2 font-medium">
          <ArrowLeft size={18} />
          Voltar para a Home
        </a>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8"
      >
        <h1 className="text-4xl font-extrabold text-white mb-8">Termos de Uso</h1>
        
        <div className="space-y-8 text-base leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Aceitação dos Termos</h2>
            <p>
              Ao acessar e utilizar a plataforma Volly Connect, você (referido como "Usuário" ou "Instituição") concorda integralmente com estes Termos de Uso. Caso não concorde com qualquer parte destes termos, você não deve utilizar a plataforma.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. Descrição do Serviço</h2>
            <p>
              O Volly Connect é um Software as a Service (SaaS) projetado para facilitar a gestão de equipes, escalas e voluntários em igrejas e organizações. A plataforma é fornecida "no estado em que se encontra" (AS IS) e atualizações podem ser feitas periodicamente.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. Período de Teste Gratuito (Free Trial)</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>O Volly Connect disponibiliza um período de teste de 30 dias gratuitamente.</li>
              <li>Durante este período, o acesso aos recursos da plataforma é garantido para um <strong>limite máximo de 15 usuários</strong> por instituição.</li>
              <li>Não há obrigatoriedade de vínculo ou inserção de cartão de crédito para a ativação do teste.</li>
              <li>A instituição compromete-se a não criar múltiplas contas para burlar o período de teste. Contas duplicadas poderão ser suspensas sem aviso prévio.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Responsabilidade sobre os Dados</h2>
            <p>
              Em conformidade com a LGPD (Lei Geral de Proteção de Dados), o Volly Connect atua como <strong>Operador</strong> dos dados. A Instituição cadastrada atua como <strong>Controladora</strong> dos dados de seus membros. 
              É de responsabilidade exclusiva da Instituição garantir que possui o consentimento de seus voluntários e membros para inserir seus dados (como nome, e-mail e telefone) na plataforma.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. Retenção e Exclusão de Dados</h2>
            <p>
              Caso a Instituição opte por não assinar a plataforma após o período de teste, o Volly Connect reserva-se o direito de excluir permanentemente todos os dados vinculados à conta após um período de carência de 15 dias após o vencimento do teste.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">6. Limitação de Responsabilidade</h2>
            <p>
              O Volly Connect não se responsabiliza por quaisquer danos diretos, indiretos, incidentais ou consequenciais decorrentes da incapacidade de utilizar o serviço, de falhas de conexão à internet, ou da perda não autorizada de dados causada por negligência no uso de senhas pela Instituição.
            </p>
          </section>
        </div>
      </motion.div>
    </div>
  );
}
