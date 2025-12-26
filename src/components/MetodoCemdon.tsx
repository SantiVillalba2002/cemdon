import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Apple, 
  Brain, 
  Activity, 
  Stethoscope, 
  Dumbbell, 
  Moon,
  ArrowUpRight 
} from 'lucide-react';

const specialties = [
  {
    id: 'nutricion',
    title: 'Nutrición',
    description: 'Planes personalizados basados en tu metabolismo y objetivos.',
    icon: Apple,
    color: 'bg-primary/10 text-primary',
    span: 'col-span-2 row-span-1',
  },
  {
    id: 'mindfulness',
    title: 'Mindfulness',
    description: 'Técnicas de meditación y manejo del estrés.',
    icon: Brain,
    color: 'bg-accent/10 text-accent',
    span: 'col-span-1 row-span-2',
  },
  {
    id: 'cardiologia',
    title: 'Cardiología',
    description: 'Monitoreo cardíaco y prevención de enfermedades.',
    icon: Activity,
    color: 'bg-red-100 text-red-500',
    span: 'col-span-1 row-span-1',
  },
  {
    id: 'medicina',
    title: 'Medicina Preventiva',
    description: 'Chequeos integrales y detección temprana.',
    icon: Stethoscope,
    color: 'bg-secondary/10 text-secondary',
    span: 'col-span-1 row-span-1',
  },
  {
    id: 'fitness',
    title: 'Fitness Médico',
    description: 'Ejercicio adaptado a tu condición de salud.',
    icon: Dumbbell,
    color: 'bg-orange-100 text-orange-500',
    span: 'col-span-1 row-span-1',
  },
  {
    id: 'sueno',
    title: 'Salud del Sueño',
    description: 'Optimiza tu descanso para mejor rendimiento.',
    icon: Moon,
    color: 'bg-indigo-100 text-indigo-500',
    span: 'col-span-1 row-span-1',
  },
];

export const MetodoCemdon = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section id="metodo" className="py-24 bg-wellness-cream">
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
            Nuestro Enfoque
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            El Método CEMDON
          </h2>
          <p className="text-muted-foreground font-body">
            Un enfoque integral que combina seis pilares de la salud moderna 
            para crear un plan único para ti.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
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
                className={`${specialty.span} relative`}
                onMouseEnter={() => setHoveredId(specialty.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <motion.div
                  className={`h-full p-6 md:p-8 rounded-3xl bg-white border border-border/50 cursor-pointer transition-all duration-300 ${
                    isHovered ? 'shadow-float' : 'shadow-soft'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                  <div className="flex flex-col h-full">
                    <motion.div
                      className={`w-12 h-12 md:w-14 md:h-14 rounded-2xl ${specialty.color} flex items-center justify-center mb-4`}
                      animate={isHovered ? { scale: 1.1, rotate: 5 } : { scale: 1, rotate: 0 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                    >
                      <Icon className="w-6 h-6 md:w-7 md:h-7" strokeWidth={1.5} />
                    </motion.div>

                    <h3 className="font-display font-semibold text-lg md:text-xl mb-2">
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
