import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const tutorialCategories = [
  {
    id: 'apresentacao',
    title: 'Apresentação',
    images: [
      '/tutoriais/APRESENTAcaO/APRESENTAcaO_1.png',
      '/tutoriais/APRESENTAcaO/APRESENTAcaO_2.png',
    ]
  },
  {
    id: 'equipes',
    title: 'Gestão de Equipes',
    images: [
      '/tutoriais/GESTaO_DE_EQUIPES/EQUIPES_1.png',
      '/tutoriais/GESTaO_DE_EQUIPES/EQUIPES_2.png',
      '/tutoriais/GESTaO_DE_EQUIPES/EQUIPES_3.png',
      '/tutoriais/GESTaO_DE_EQUIPES/EQUIPES_4.png',
    ]
  },
  {
    id: 'escalas',
    title: 'Gestão de Escalas',
    images: [
      '/tutoriais/GESTaO_DE_ESCALAS/ESCALAS_1.png',
      '/tutoriais/GESTaO_DE_ESCALAS/ESCALAS_2.png',
      '/tutoriais/GESTaO_DE_ESCALAS/ESCALAS_3.png',
    ]
  },
  {
    id: 'eventos',
    title: 'Gestão de Eventos',
    images: [
      '/tutoriais/GESTaO_DE_EVENTOS/1_APRESENTAcaO.png',
      '/tutoriais/GESTaO_DE_EVENTOS/2_HISTORICO.png',
      '/tutoriais/GESTaO_DE_EVENTOS/3_DETALHES_DO_EVENTO_INFO.png',
      '/tutoriais/GESTaO_DE_EVENTOS/4_DETALHES_DO_EVENTO_ESCALA.png',
      '/tutoriais/GESTaO_DE_EVENTOS/5_DETALHES_DO_EVENTO_CHAT.png',
      '/tutoriais/GESTaO_DE_EVENTOS/6_DETALHES_DO_EVENTO_FEEDBACK.png',
      '/tutoriais/GESTaO_DE_EVENTOS/7_ADD_NOVO_EVENTO.png',
      '/tutoriais/GESTaO_DE_EVENTOS/8_CRIAR_NOVOS_EVENTOS.png',
      '/tutoriais/GESTaO_DE_EVENTOS/9_GERENCIAR_EVENTOS.png',
    ]
  }
];

export default function Tutorials() {
  const [activeCategory, setActiveCategory] = useState(tutorialCategories[0]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % activeCategory.images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + activeCategory.images.length) % activeCategory.images.length);
  };

  const handleCategoryChange = (category: typeof tutorialCategories[0]) => {
    setActiveCategory(category);
    setCurrentIndex(0);
  };

  return (
    <section id="tutoriais" className="py-24 bg-zinc-950 relative overflow-hidden">
      {/* Background gradients for premium feel */}
      <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-4">
            Como funciona na prática?
          </h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Navegue pelos nossos tutoriais e descubra como o Volly pode simplificar a gestão da sua igreja passo a passo.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {tutorialCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleCategoryChange(cat)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory.id === cat.id
                  ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/25 scale-105'
                  : 'bg-zinc-900 text-zinc-400 hover:bg-zinc-800 hover:text-white'
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Carousel / Image Container */}
        <div className="relative max-w-6xl mx-auto flex items-center justify-center group">
          
          {/* Prev Button */}
          <button
            onClick={handlePrev}
            className="absolute left-4 sm:-left-12 z-20 p-3 rounded-full bg-zinc-900/80 text-white border border-zinc-800 hover:bg-orange-500 hover:border-orange-500 transition-colors backdrop-blur-sm opacity-0 group-hover:opacity-100 sm:opacity-100"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Image wrapper */}
          <div className="relative w-full aspect-video rounded-2xl bg-zinc-900/50 p-2 shadow-2xl shadow-black ring-1 ring-zinc-800/50 backdrop-blur-sm">
            {/* Inner screen content */}
            <div className="relative w-full h-full rounded-xl overflow-hidden bg-black flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeCategory.images[currentIndex]}
                  src={activeCategory.images[currentIndex]}
                  alt={`Tutorial step ${currentIndex + 1}`}
                  className="w-full h-full object-contain sm:object-cover"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                />
              </AnimatePresence>
            </div>
          </div>

          {/* Next Button */}
          <button
            onClick={handleNext}
            className="absolute right-4 sm:-right-12 z-20 p-3 rounded-full bg-zinc-900/80 text-white border border-zinc-800 hover:bg-orange-500 hover:border-orange-500 transition-colors backdrop-blur-sm opacity-0 group-hover:opacity-100 sm:opacity-100"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {activeCategory.images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                idx === currentIndex ? 'bg-orange-500 w-8' : 'bg-zinc-700 hover:bg-zinc-500'
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
