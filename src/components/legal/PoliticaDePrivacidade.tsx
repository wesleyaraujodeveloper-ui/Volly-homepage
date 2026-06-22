import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

export function PoliticaDePrivacidade() {
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
        <h1 className="text-4xl font-extrabold text-white mb-8">Política de Privacidade</h1>
        
        <div className="space-y-8 text-base leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Nosso Compromisso com a Privacidade</h2>
            <p>
              O Volly Connect valoriza a privacidade dos seus usuários e compromete-se a proteger as informações pessoais coletadas na plataforma. Esta política detalha como coletamos, usamos, armazenamos e protegemos seus dados.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. Dados que Coletamos</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Dados de Conta:</strong> Nome, e-mail, telefone e senha do administrador.</li>
              <li><strong>Dados de Voluntários:</strong> Nome, telefone, disponibilidade e funções de membros da equipe (inseridos pelo administrador da Instituição).</li>
              <li><strong>Dados de Uso:</strong> Informações de acesso, logs do sistema e navegação dentro do aplicativo para melhorias contínuas.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. Como Usamos os Dados</h2>
            <p>
              As informações coletadas são utilizadas exclusivamente para:
            </p>
            <ul className="list-disc pl-5 space-y-2 mt-2">
              <li>Fornecer, manter e aprimorar os serviços do Volly Connect.</li>
              <li>Autenticar o acesso à plataforma.</li>
              <li>Enviar notificações essenciais via WhatsApp ou e-mail sobre escalas e avisos da igreja.</li>
              <li>Oferecer suporte técnico aos usuários.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. LGPD e Papel da Igreja</h2>
            <p>
              Em obediência à Lei Geral de Proteção de Dados Pessoais (Lei nº 13.709/2018), o Volly Connect atua estritamente como <strong>Operador</strong> dos dados. A Instituição (Igreja) é a <strong>Controladora</strong> e responsável legal por obter o consentimento explícito dos membros antes de cadastrá-los no sistema.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. Compartilhamento de Dados</h2>
            <p>
              Nós <strong>não vendemos, alugamos ou comercializamos</strong> seus dados pessoais sob nenhuma circunstância. Os dados podem ser compartilhados apenas com provedores de infraestrutura estritamente necessários para o funcionamento do app (ex: servidores de nuvem, envio de e-mails), que também obedecem a rigorosos padrões de segurança.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">6. Segurança e Armazenamento</h2>
            <p>
              Implementamos medidas de segurança de ponta a ponta (como criptografia de dados em trânsito e em repouso) para evitar acessos não autorizados. No entanto, nenhum sistema é 100% infalível e recomendamos o uso de senhas fortes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">7. Direitos do Usuário</h2>
            <p>
              Você pode, a qualquer momento, solicitar acesso, retificação ou exclusão permanente dos seus dados e dos dados da sua Instituição entrando em contato com o nosso suporte.
            </p>
          </section>
        </div>
      </motion.div>
    </div>
  );
}
