import React from 'react';
import { motion } from 'framer-motion';

export function Contact() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name');
    const email = formData.get('email');
    const whatsappCode = formData.get('whatsappCode');
    const whatsapp = formData.get('whatsapp');
    const message = formData.get('message');
    
    const subject = encodeURIComponent(`Contato pelo site: ${name}`);
    const body = encodeURIComponent(`Nome: ${name}\nEmail: ${email}\nWhatsApp: ${whatsappCode} ${whatsapp}\n\nMensagem:\n${message}`);
    
    window.location.href = `mailto:contato@vollyconnect.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contato" className="py-32 bg-[#09090b]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-br from-[#27272a] to-[#18181b] rounded-[2rem] p-8 md:p-16 border border-white/10 shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#7C3AED]/10 rounded-full blur-[80px]" />
          
          <div className="relative z-10 text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ficou com alguma dúvida?</h2>
            <p className="text-zinc-400">Nossa equipe está pronta para te ajudar a transformar a gestão dos seus voluntários.</p>
          </div>

          <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-zinc-400 mb-2">Nome Completo</label>
                <input name="name" required type="text" className="w-full bg-[#18181b] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#DF721B] focus:ring-1 focus:ring-[#DF721B] transition-colors" placeholder="João da Silva" />
              </div>
              <div>
                <label className="block text-sm font-medium text-zinc-400 mb-2">Email</label>
                <input name="email" required type="email" className="w-full bg-[#18181b] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#DF721B] focus:ring-1 focus:ring-[#DF721B] transition-colors" placeholder="joao@igreja.com" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-zinc-400 mb-2">WhatsApp</label>
              <div className="flex gap-2">
                <select name="whatsappCode" className="w-32 bg-[#18181b] border border-white/10 rounded-xl px-3 py-3 text-white focus:outline-none focus:border-[#DF721B] focus:ring-1 focus:ring-[#DF721B] transition-colors appearance-none">
                  <option value="+55">+55 (BR)</option>
                  <option value="+1">+1 (US)</option>
                  <option value="+351">+351 (PT)</option>
                </select>
                <input name="whatsapp" required type="tel" className="flex-1 bg-[#18181b] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#DF721B] focus:ring-1 focus:ring-[#DF721B] transition-colors" placeholder="(11) 99999-9999" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-zinc-400 mb-2">Sua Mensagem</label>
              <textarea name="message" required rows={4} className="w-full bg-[#18181b] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#DF721B] focus:ring-1 focus:ring-[#DF721B] transition-colors resize-none" placeholder="Como podemos te ajudar?"></textarea>
            </div>
            <button type="submit" className="w-full bg-white text-black font-bold text-lg py-4 rounded-xl hover:bg-zinc-200 transition-colors">
              Enviar Mensagem
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
