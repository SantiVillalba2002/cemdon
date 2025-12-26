import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  ClipboardCheck, 
  FileText, 
  Utensils, 
  LineChart, 
  RefreshCw 
} from 'lucide-react';

const steps = [
  {
    id: 'diagnostico',
    title: 'Diagnóstico Integral',
    description: 'Evaluamos tu estado de salud actual con estudios completos y una consulta detallada con nuestro equipo médico.',
    icon: ClipboardCheck,
    color: 'bg-primary',
  },
  {
    id: 'plan',
    title: 'Plan Personalizado',
    description: 'Diseñamos un programa único basado en tus objetivos, preferencias y condiciones de salud específicas.',
    icon: FileText,
    color: 'bg-accent',
  },
  {
    id: 'implementacion',
    title: 'Implementación',
    description: 'Te acompañamos paso a paso en la adopción de nuevos hábitos, con recetas, rutinas y apoyo constante.',
    icon: Utensils,
    color: 'bg-orange-500',
  },
  {
    id: 'seguimiento',
    title: 'Seguimiento',
    description: 'Monitoreamos tu progreso con métricas claras, ajustando el plan según tus resultados y necesidades.',
    icon: LineChart,
    color: 'bg-indigo-500',
  },
  {
    id: 'optimizacion',
    title: 'Optimización',
    description: 'Refinamos continuamente tu programa para mantener resultados sostenibles y mejorar tu calidad de vida.',
    icon: RefreshCw,
    color: 'bg-rose-500',
  },
];

export const ProcessStepper = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Map scroll progress to step index
  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (value) => {
      const stepIndex = Math.min(
        Math.floor(value * steps.length),
        steps.length - 1
      );
      setActiveStep(stepIndex);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  const progressWidth = useTransform(
    scrollYProgress,
    [0, 1],
    ['0%', '100%']
  );

  return (
    <section 
      ref={containerRef} 
      className="relative bg-background"
      style={{ height: `${steps.length * 100}vh` }}
    >
      {/* Sticky container */}
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        <div className="container mx-auto px-4 py-12">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto mb-12"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
              Nuestro Proceso
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Tu camino hacia el bienestar
            </h2>
            <p className="text-muted-foreground font-body">
              Un proceso probado que te guía desde el diagnóstico hasta una vida más saludable.
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="max-w-4xl mx-auto">
            {/* Horizontal timeline */}
            <div className="relative mb-12">
              {/* Background line */}
              <div className="absolute top-6 left-0 right-0 h-1 bg-muted rounded-full" />
              
              {/* Progress line */}
              <motion.div
                className="absolute top-6 left-0 h-1 bg-primary rounded-full"
                style={{ width: progressWidth }}
              />

              {/* Steps */}
              <div className="flex justify-between relative">
                {steps.map((step, index) => {
                  const Icon = step.icon;
                  const isActive = index === activeStep;
                  const isPast = index < activeStep;

                  return (
                    <div
                      key={step.id}
                      className="flex flex-col items-center"
                    >
                      <motion.div
                        className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-500 ${
                          isActive
                            ? `${step.color} text-white shadow-lg scale-110`
                            : isPast
                            ? 'bg-primary text-white'
                            : 'bg-muted text-muted-foreground'
                        }`}
                        animate={{
                          scale: isActive ? 1.15 : 1,
                        }}
                      >
                        <Icon className="w-5 h-5" strokeWidth={1.5} />
                      </motion.div>
                      <span
                        className={`mt-3 text-xs font-medium transition-colors hidden md:block ${
                          isActive ? 'text-secondary' : 'text-muted-foreground'
                        }`}
                      >
                        {step.title.split(' ')[0]}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Content */}
            <div className="relative h-64">
              {steps.map((step, index) => {
                const Icon = step.icon;
                const isActive = index === activeStep;

                return (
                  <motion.div
                    key={step.id}
                    className="absolute inset-0"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{
                      opacity: isActive ? 1 : 0,
                      y: isActive ? 0 : 30,
                      pointerEvents: isActive ? 'auto' : 'none',
                    }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="bg-white rounded-3xl p-8 md:p-12 shadow-soft text-center h-full flex flex-col items-center justify-center">
                      <div
                        className={`w-20 h-20 ${step.color} rounded-3xl mx-auto mb-6 flex items-center justify-center`}
                      >
                        <Icon className="w-10 h-10 text-white" strokeWidth={1.5} />
                      </div>

                      <h3 className="font-display text-2xl font-bold mb-4">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground font-body max-w-lg mx-auto text-lg">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Scroll hint */}
            <motion.div
              className="flex justify-center mt-8"
              animate={{ opacity: activeStep < steps.length - 1 ? 1 : 0 }}
            >
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <motion.div
                  className="w-5 h-8 border-2 border-muted-foreground/30 rounded-full flex justify-center"
                  animate={{ y: [0, 3, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <motion.div
                    className="w-1 h-2 bg-primary rounded-full mt-1.5"
                    animate={{ opacity: [1, 0.3, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                </motion.div>
                <span>Desliza para continuar</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
