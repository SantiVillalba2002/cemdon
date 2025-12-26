import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Bell, Calendar, MessageCircle, Users, ExternalLink, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const notifications = [
  { id: 1, icon: '🥗', title: 'Tip del día', message: 'Añade más fibra a tu desayuno', time: 'Ahora' },
  { id: 2, icon: '💧', title: 'Recordatorio', message: 'Es hora de hidratarte', time: '5 min' },
  { id: 3, icon: '📅', title: 'Turno confirmado', message: 'Mañana 10:00 - Nutrición', time: '1 hora' },
];

export const AppCemdon = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });
  const [showNotifications, setShowNotifications] = useState(false);

  useEffect(() => {
    if (isInView) {
      // Show notifications with delay
      setTimeout(() => setShowNotifications(true), 800);
    }
  }, [isInView]);

  return (
    <section id="app" ref={sectionRef} className="py-24 bg-gradient-to-b from-background to-wellness-mist overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              Web App disponible
            </span>

            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Tu salud en la palma de tu mano
            </h2>

            <p className="text-muted-foreground font-body text-lg mb-8 max-w-md">
              Accede a tu plan personalizado, agenda turnos, recibe recordatorios y mantente 
              conectado con tu equipo médico las 24/7 desde cualquier dispositivo.
            </p>

            {/* Features list */}
            <div className="space-y-4 mb-8">
              {[
                { icon: Calendar, text: 'Agenda y gestiona tus turnos fácilmente' },
                { icon: Bell, text: 'Notificaciones y tips personalizados' },
                { icon: MessageCircle, text: 'Chat directo con tu equipo médico' },
                { icon: Users, text: 'Comunidad de pacientes CEMDON' },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <feature.icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
                  </div>
                  <span className="font-body text-foreground">{feature.text}</span>
                </motion.div>
              ))}
            </div>

            {/* Access button */}
            <Button variant="primary" size="lg" className="gap-2">
              <ExternalLink className="w-5 h-5" strokeWidth={1.5} />
              Acceder a la Web App
            </Button>

            {/* Rating */}
            <div className="flex items-center gap-2 mt-6">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <span className="text-sm text-muted-foreground font-body">4.9 • +2,500 usuarios activos</span>
            </div>
          </motion.div>

          {/* iPhone Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center"
          >
            {/* Phone frame */}
            <div className="relative w-72 h-[580px]">
              {/* Phone outer shadow */}
              <div className="absolute inset-0 bg-secondary/20 rounded-[3rem] blur-2xl translate-y-8" />

              {/* Phone body */}
              <div className="absolute inset-0 bg-secondary rounded-[3rem] p-2 shadow-2xl">
                {/* Screen */}
                <div className="relative h-full bg-white rounded-[2.5rem] overflow-hidden">
                  {/* Status bar */}
                  <div className="flex items-center justify-between px-6 py-3 bg-wellness-cream">
                    <span className="text-xs font-medium text-secondary">9:41</span>
                    <div className="w-24 h-6 bg-secondary rounded-full" /> {/* Dynamic island */}
                    <div className="flex items-center gap-1">
                      <div className="w-4 h-2 bg-secondary/40 rounded-sm" />
                    </div>
                  </div>

                  {/* App content with scroll */}
                  <div className="h-[calc(100%-48px)] overflow-y-auto scrollbar-hide bg-wellness-cream/50 px-4 py-4 space-y-4">
                    {/* Header */}
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs text-muted-foreground">Buenos días</p>
                        <p className="font-display font-semibold text-secondary">María</p>
                      </div>
                      <div className="relative">
                        <Bell className="w-5 h-5 text-secondary" strokeWidth={1.5} />
                        <span className="absolute -top-1 -right-1 w-2 h-2 bg-primary rounded-full" />
                      </div>
                    </div>

                    {/* Online indicator */}
                    <div className="flex items-center gap-2 px-3 py-2 bg-primary/10 rounded-xl">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                      </span>
                      <span className="text-xs text-primary font-medium">Tu equipo médico está en línea</span>
                    </div>

                    {/* Quick Actions */}
                    <div className="bg-white rounded-2xl p-4 shadow-sm">
                      <p className="text-xs font-medium text-secondary mb-3">Acciones rápidas</p>
                      <div className="grid grid-cols-3 gap-2">
                        {[
                          { icon: '📅', label: 'Turnos' },
                          { icon: '💬', label: 'Chat' },
                          { icon: '📋', label: 'Mi Plan' },
                        ].map((action) => (
                          <div
                            key={action.label}
                            className="flex flex-col items-center gap-1 p-2 rounded-xl bg-wellness-cream/50"
                          >
                            <span className="text-lg">{action.icon}</span>
                            <span className="text-[10px] text-muted-foreground">{action.label}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Next appointment */}
                    <div className="bg-white rounded-2xl p-4 shadow-sm">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-medium text-secondary">Próximo turno</span>
                        <span className="text-[10px] text-primary font-medium px-2 py-0.5 bg-primary/10 rounded-full">
                          Mañana
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                          <span className="text-lg">🥗</span>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-secondary">Nutrición</p>
                          <p className="text-[10px] text-muted-foreground">10:00 - Dra. García</p>
                        </div>
                      </div>
                    </div>

                    {/* Notifications */}
                    <div className="space-y-2">
                      <p className="text-xs font-medium text-secondary">Notificaciones</p>
                      {showNotifications &&
                        notifications.map((notif, index) => (
                          <motion.div
                            key={notif.id}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.15 }}
                            className="flex items-center gap-3 bg-white rounded-xl p-3 shadow-sm"
                          >
                            <div className="w-10 h-10 rounded-xl bg-wellness-sage flex items-center justify-center text-lg">
                              {notif.icon}
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-xs font-medium text-secondary truncate">{notif.title}</p>
                              <p className="text-[10px] text-muted-foreground truncate">{notif.message}</p>
                            </div>
                            <span className="text-[10px] text-muted-foreground">{notif.time}</span>
                          </motion.div>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
