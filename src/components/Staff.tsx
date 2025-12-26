import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const staff = [
  {
    id: 1,
    name: 'Dra. María García',
    specialty: 'Nutrición Clínica',
    bio: 'Especialista en metabolismo y nutrición deportiva con 15 años de experiencia.',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face',
  },
  {
    id: 2,
    name: 'Dr. Carlos Mendoza',
    specialty: 'Medicina Interna',
    bio: 'Experto en medicina preventiva y diagnóstico integral.',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=face',
  },
  {
    id: 3,
    name: 'Lic. Ana Rodríguez',
    specialty: 'Mindfulness & Bienestar',
    bio: 'Certificada en MBSR y técnicas de reducción de estrés.',
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=400&fit=crop&crop=face',
  },
  {
    id: 4,
    name: 'Dr. Roberto Silva',
    specialty: 'Cardiología',
    bio: 'Especialista en prevención cardiovascular y rehabilitación cardíaca.',
    image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400&h=400&fit=crop&crop=face',
  },
  {
    id: 5,
    name: 'Lic. Laura Torres',
    specialty: 'Fitness Médico',
    bio: 'Especializada en ejercicio terapéutico y recuperación funcional.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face',
  },
];

export const Staff = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const visibleCards = 3;
  const maxIndex = staff.length - visibleCards;

  const next = () => {
    if (currentIndex < maxIndex) {
      setDirection(1);
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const prev = () => {
    if (currentIndex > 0) {
      setDirection(-1);
      setCurrentIndex((prev) => prev - 1);
    }
  };

  return (
    <section id="equipo" className="py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-12"
        >
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
              Profesionales
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold">
              Nuestro Equipo Médico
            </h2>
          </div>

          {/* Navigation */}
          <div className="flex gap-2 mt-6 md:mt-0">
            <Button
              variant="outline"
              size="icon"
              onClick={prev}
              disabled={currentIndex === 0}
              className="rounded-full w-12 h-12 disabled:opacity-30"
            >
              <ChevronLeft className="w-5 h-5" strokeWidth={1.5} />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={next}
              disabled={currentIndex >= maxIndex}
              className="rounded-full w-12 h-12 disabled:opacity-30"
            >
              <ChevronRight className="w-5 h-5" strokeWidth={1.5} />
            </Button>
          </div>
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          <motion.div
            className="flex gap-6"
            animate={{ x: -currentIndex * (100 / visibleCards + 2) + '%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            {staff.map((member, index) => (
              <motion.div
                key={member.id}
                className="flex-shrink-0 w-full md:w-[calc(33.333%-16px)]"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="group relative bg-white rounded-3xl overflow-hidden shadow-soft hover:shadow-float transition-shadow duration-300">
                  {/* Image with organic mask */}
                  <div className="relative h-72 overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 via-transparent to-transparent" />

                    {/* Hover overlay with actions */}
                    <motion.div
                      className="absolute inset-0 bg-secondary/80 flex items-center justify-center gap-4"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Button
                        variant="secondary"
                        size="icon"
                        className="rounded-full bg-white/20 hover:bg-white/30 text-white border-0"
                      >
                        <Linkedin className="w-5 h-5" strokeWidth={1.5} />
                      </Button>
                      <Button
                        variant="secondary"
                        size="icon"
                        className="rounded-full bg-white/20 hover:bg-white/30 text-white border-0"
                      >
                        <Mail className="w-5 h-5" strokeWidth={1.5} />
                      </Button>
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <p className="text-sm text-accent font-medium mb-1">{member.specialty}</p>
                    <h3 className="font-display font-semibold text-xl mb-2">{member.name}</h3>
                    <p className="text-sm text-muted-foreground font-body line-clamp-2">
                      {member.bio}
                    </p>
                    <Button variant="link" className="p-0 h-auto mt-3 text-primary">
                      Ver Perfil
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
