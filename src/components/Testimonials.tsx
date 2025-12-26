import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';

const testimonials = [
  {
    id: 1,
    name: 'Carolina M.',
    age: 34,
    achievement: 'Perdió 15 kg en 6 meses',
    quote: 'CEMDON cambió mi relación con la comida. No es solo una dieta, es un estilo de vida que puedo mantener para siempre.',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
  },
  {
    id: 2,
    name: 'Roberto G.',
    age: 52,
    achievement: 'Controló su diabetes tipo 2',
    quote: 'Gracias al seguimiento constante con la app y mi equipo médico, mis niveles de glucosa están mejor que nunca.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
  },
  {
    id: 3,
    name: 'María José L.',
    age: 28,
    achievement: 'Superó su ansiedad',
    quote: 'Las sesiones de mindfulness y el apoyo integral me ayudaron a manejar mi estrés de una manera que nunca imaginé.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face',
  },
];

export const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-24 bg-wellness-cream overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Testimonios
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold">
            Lo que nuestros pacientes logran
          </h2>
        </motion.div>

        {/* Testimonial Slider */}
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-[2rem] p-8 md:p-12 shadow-soft relative"
            >
              {/* Quote icon */}
              <div className="absolute top-8 right-8 md:top-12 md:right-12">
                <Quote className="w-12 h-12 text-primary/20" strokeWidth={1} />
              </div>

              <div className="flex flex-col md:flex-row gap-8 items-center">
                {/* Avatar */}
                <div className="flex-shrink-0">
                  <div className="relative">
                    <div className="w-24 h-24 md:w-32 md:h-32 rounded-[2rem] overflow-hidden border-4 border-primary/20">
                      <img
                        src={testimonials[current].avatar}
                        alt={testimonials[current].name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-primary rounded-xl flex items-center justify-center shadow-glow">
                      <span className="text-lg">💚</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 text-center md:text-left">
                  <p className="text-lg md:text-xl text-secondary font-body leading-relaxed mb-6">
                    "{testimonials[current].quote}"
                  </p>

                  <div>
                    <p className="font-display font-semibold text-secondary">
                      {testimonials[current].name}, {testimonials[current].age} años
                    </p>
                    <p className="text-sm text-primary font-medium">
                      {testimonials[current].achievement}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prev}
              className="rounded-full w-12 h-12"
            >
              <ChevronLeft className="w-5 h-5" strokeWidth={1.5} />
            </Button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    index === current ? 'bg-primary w-8' : 'bg-primary/30'
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={next}
              className="rounded-full w-12 h-12"
            >
              <ChevronRight className="w-5 h-5" strokeWidth={1.5} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
