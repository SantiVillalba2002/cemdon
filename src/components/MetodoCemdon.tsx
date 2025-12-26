import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Apple, 
  Brain, 
  Activity, 
  Stethoscope, 
  Dumbbell, 
  Moon,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const specialties = [
  {
    id: 'nutricion',
    title: 'Nutrición',
    description: 'Planes personalizados basados en tu metabolismo y objetivos.',
    icon: Apple,
    color: 'bg-primary/10 text-primary',
  },
  {
    id: 'mindfulness',
    title: 'Mindfulness',
    description: 'Técnicas de meditación y manejo del estrés.',
    icon: Brain,
    color: 'bg-accent/10 text-accent',
  },
  {
    id: 'cardiologia',
    title: 'Cardiología',
    description: 'Monitoreo cardíaco y prevención de enfermedades.',
    icon: Activity,
    color: 'bg-red-100 text-red-500',
  },
  {
    id: 'medicina',
    title: 'Medicina Preventiva',
    description: 'Chequeos integrales y detección temprana.',
    icon: Stethoscope,
    color: 'bg-secondary/10 text-secondary',
  },
  {
    id: 'fitness',
    title: 'Fitness Médico',
    description: 'Ejercicio adaptado a tu condición de salud.',
    icon: Dumbbell,
    color: 'bg-orange-100 text-orange-500',
  },
  {
    id: 'sueno',
    title: 'Salud del Sueño',
    description: 'Optimiza tu descanso para mejor rendimiento.',
    icon: Moon,
    color: 'bg-indigo-100 text-indigo-500',
  },
];

export const MetodoCemdon = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 320;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="metodo" className="py-24 bg-wellness-cream">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-12"
        >
          <div className="max-w-xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Nuestro Enfoque
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              El Método CEMDON
            </h2>
            <p className="text-muted-foreground font-body">
              Un enfoque integral que combina seis pilares de la salud moderna 
              para crear un plan único para ti.
            </p>
          </div>

          {/* Navigation arrows */}
          <div className="flex gap-2 mt-6 md:mt-0">
            <Button
              variant="outline"
              size="icon"
              onClick={() => scroll('left')}
              className="rounded-full w-12 h-12"
            >
              <ChevronLeft className="w-5 h-5" strokeWidth={1.5} />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => scroll('right')}
              className="rounded-full w-12 h-12"
            >
              <ChevronRight className="w-5 h-5" strokeWidth={1.5} />
            </Button>
          </div>
        </motion.div>

        {/* Horizontal Carousel */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory"
        >
          {specialties.map((specialty, index) => {
            const Icon = specialty.icon;
            const isHovered = hoveredId === specialty.id;

            return (
              <motion.div
                key={specialty.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex-shrink-0 w-72 snap-start"
                onMouseEnter={() => setHoveredId(specialty.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <motion.div
                  className={`h-full min-h-[280px] p-6 rounded-3xl bg-white border border-border/50 cursor-pointer transition-all duration-300 ${
                    isHovered ? 'shadow-float' : 'shadow-soft'
                  }`}
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                  <div className="flex flex-col h-full">
                    <motion.div
                      className={`w-14 h-14 rounded-2xl ${specialty.color} flex items-center justify-center mb-4`}
                      animate={isHovered ? { scale: 1.1, rotate: 5 } : { scale: 1, rotate: 0 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                    >
                      <Icon className="w-7 h-7" strokeWidth={1.5} />
                    </motion.div>

                    <h3 className="font-display font-semibold text-xl mb-2">
                      {specialty.title}
                    </h3>

                    <motion.p
                      className="text-sm text-muted-foreground font-body flex-grow"
                      initial={{ opacity: 0.7 }}
                      animate={{ opacity: isHovered ? 1 : 0.7 }}
                    >
                      {specialty.description}
                    </motion.p>

                    <motion.div
                      className="mt-4 flex items-center text-primary font-medium text-sm"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : -10 }}
                    >
                      <span>Conocer más</span>
                      <ArrowUpRight className="w-4 h-4 ml-1" strokeWidth={1.5} />
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
