import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
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
            {/* Line */}
            <div className="absolute top-6 left-0 right-0 h-0.5 bg-muted" />
            <div
              className="absolute top-6 left-0 h-0.5 bg-primary transition-all duration-500"
              style={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }}
            />

            {/* Steps */}
            <div className="flex justify-between relative">
              {steps.map((step, index) => {
                const Icon = step.icon;
                const isActive = index === activeStep;
                const isPast = index < activeStep;

                return (
                  <button
                    key={step.id}
                    onClick={() => setActiveStep(index)}
                    className="flex flex-col items-center group"
                  >
                    <motion.div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                        isActive
                          ? `${step.color} text-white shadow-lg`
                          : isPast
                          ? 'bg-primary text-white'
                          : 'bg-muted text-muted-foreground group-hover:bg-muted/80'
                      }`}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
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
                  </button>
                );
              })}
            </div>
          </div>

          {/* Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-3xl p-8 md:p-12 shadow-soft text-center"
            >
              <div
                className={`w-20 h-20 ${steps[activeStep].color} rounded-3xl mx-auto mb-6 flex items-center justify-center`}
              >
                {(() => {
                  const Icon = steps[activeStep].icon;
                  return <Icon className="w-10 h-10 text-white" strokeWidth={1.5} />;
                })()}
              </div>

              <h3 className="font-display text-2xl font-bold mb-4">
                {steps[activeStep].title}
              </h3>
              <p className="text-muted-foreground font-body max-w-lg mx-auto text-lg">
                {steps[activeStep].description}
              </p>

              {/* Progress indicator */}
              <div className="mt-8 flex justify-center gap-2">
                {steps.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveStep(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === activeStep ? 'bg-primary w-6' : 'bg-muted hover:bg-primary/50'
                    }`}
                  />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
