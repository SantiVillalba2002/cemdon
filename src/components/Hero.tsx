import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
export const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width * 100;
      const y = (e.clientY - rect.top) / rect.height * 100;
      containerRef.current.style.setProperty('--mouse-x', `${x}%`);
      containerRef.current.style.setProperty('--mouse-y', `${y}%`);
    };
    const container = containerRef.current;
    container?.addEventListener('mousemove', handleMouseMove);
    return () => container?.removeEventListener('mousemove', handleMouseMove);
  }, []);
  return <section ref={containerRef} className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-16" style={{
    background: `
          radial-gradient(ellipse 80% 50% at var(--mouse-x, 30%) var(--mouse-y, 30%), hsl(var(--wellness-sage)) 0%, transparent 50%),
          radial-gradient(ellipse 60% 40% at calc(100% - var(--mouse-x, 70%)) calc(100% - var(--mouse-y, 70%)), hsl(var(--wellness-mist)) 0%, transparent 50%),
          radial-gradient(ellipse 100% 100% at 50% 100%, hsl(var(--wellness-cream)) 0%, hsl(var(--background)) 70%)
        `
  }}>
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div initial={{
          opacity: 0,
          y: 40
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          ease: 'easeOut'
        }} className="order-2 lg:order-1">
            <motion.div initial={{
            opacity: 0,
            scale: 0.9
          }} animate={{
            opacity: 1,
            scale: 1
          }} transition={{
            delay: 0.2,
            duration: 0.5
          }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-soft text-accent font-body text-sm mb-6">
              <Sparkles className="w-4 h-4" strokeWidth={1.5} />
              <span>Tu bienestar integral comienza aquí</span>
            </motion.div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">Transformá tu vida en manos de expertos<span className="text-primary">Transformá</span> tu vida con salud integral
            </h1>

            <p className="text-lg text-muted-foreground max-w-lg mb-8 font-body">Integramos medicina de vanguardia, tecnología y un equipo interdisciplinario para el tratamiento integral de la Diabetes, Obesidad y Nutrición. Consultas presenciales y telemedicina.</p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="primary" size="lg" className="group">
                <span>Agenda tu turno</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" strokeWidth={1.5} />
              </Button>
              <Button variant="secondary" size="lg">
                <span>Conoce el método</span>
              </Button>
            </div>

            {/* Trust indicators */}
            <motion.div initial={{
            opacity: 0
          }} animate={{
            opacity: 1
          }} transition={{
            delay: 0.6,
            duration: 0.5
          }} className="mt-12 flex items-center gap-8">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map(i => <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gradient-to-br from-wellness-sage to-wellness-mist" />)}
              </div>
              <div>
                <p className="font-display font-semibold text-secondary">+2,500 pacientes</p>
                <p className="text-sm text-muted-foreground font-body">confían en nosotros</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Organic Illustration */}
          <motion.div initial={{
          opacity: 0,
          scale: 0.8
        }} animate={{
          opacity: 1,
          scale: 1
        }} transition={{
          duration: 1,
          ease: 'easeOut',
          delay: 0.3
        }} className="order-1 lg:order-2 relative flex items-center justify-center">
            {/* Main organic shape */}
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              {/* Outer glow */}
              <div className="absolute inset-0 organic-blob bg-primary/10 blur-3xl breathe" />
              
              {/* Middle ring */}
              <motion.div className="absolute inset-4 organic-blob border-2 border-primary/20" animate={{
              rotate: 360
            }} transition={{
              duration: 60,
              repeat: Infinity,
              ease: 'linear'
            }} />

              {/* Inner organic shape */}
              <div className="absolute inset-8 organic-blob bg-gradient-to-br from-primary/80 to-accent/60 breathe flex items-center justify-center shadow-glow">
                <span className="text-6xl md:text-7xl">🌿</span>
              </div>

              {/* Floating elements */}
              <motion.div className="absolute -top-4 right-8 w-16 h-16 rounded-2xl bg-white shadow-soft flex items-center justify-center" animate={{
              y: [0, -10, 0]
            }} transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut'
            }}>
                <span className="text-2xl">🥗</span>
              </motion.div>

              <motion.div className="absolute bottom-8 -left-4 w-14 h-14 rounded-2xl bg-white shadow-soft flex items-center justify-center" animate={{
              y: [0, 10, 0]
            }} transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 0.5
            }}>
                <span className="text-xl">🧘</span>
              </motion.div>

              <motion.div className="absolute top-1/2 -right-6 w-12 h-12 rounded-xl bg-white shadow-soft flex items-center justify-center" animate={{
              y: [0, -8, 0]
            }} transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 1
            }}>
                <span className="text-lg">💚</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div className="absolute bottom-8 left-1/2 -translate-x-1/2" initial={{
      opacity: 0
    }} animate={{
      opacity: 1
    }} transition={{
      delay: 1.5
    }}>
        <motion.div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center" animate={{
        y: [0, 5, 0]
      }} transition={{
        duration: 2,
        repeat: Infinity
      }}>
          <motion.div className="w-1.5 h-3 bg-primary rounded-full mt-2" animate={{
          opacity: [1, 0.3, 1]
        }} transition={{
          duration: 2,
          repeat: Infinity
        }} />
        </motion.div>
      </motion.div>
    </section>;
};