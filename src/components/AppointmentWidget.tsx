import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Check, 
  ArrowRight, 
  ArrowLeft,
  Apple, 
  Brain, 
  Activity, 
  Stethoscope,
  Calendar,
  User,
  Clock
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

const areas = [
  { id: 'nutricion', name: 'Nutrición', icon: Apple, color: 'bg-primary/10 text-primary' },
  { id: 'mindfulness', name: 'Mindfulness', icon: Brain, color: 'bg-accent/10 text-accent' },
  { id: 'cardiologia', name: 'Cardiología', icon: Activity, color: 'bg-red-100 text-red-500' },
  { id: 'medicina', name: 'Medicina General', icon: Stethoscope, color: 'bg-secondary/10 text-secondary' },
];

const timeSlots = [
  '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
  '14:00', '14:30', '15:00', '15:30', '16:00', '16:30',
];

export const AppointmentWidget = () => {
  const { toast } = useToast();
  const [step, setStep] = useState(1);
  const [selectedArea, setSelectedArea] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [formData, setFormData] = useState({ name: '', phone: '', email: '' });

  // Generate next 14 days
  const dates = Array.from({ length: 14 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() + i + 1);
    return date;
  });

  const handleSubmit = () => {
    toast({
      title: '¡Turno confirmado!',
      description: `Te esperamos el ${selectedDate?.toLocaleDateString('es-AR')} a las ${selectedTime}hs`,
    });
    // Reset
    setStep(1);
    setSelectedArea(null);
    setSelectedDate(null);
    setSelectedTime(null);
    setFormData({ name: '', phone: '', email: '' });
  };

  const canProceed = () => {
    switch (step) {
      case 1: return !!selectedArea;
      case 2: return !!selectedDate && !!selectedTime;
      case 3: return formData.name && formData.phone && formData.email;
      default: return false;
    }
  };

  return (
    <section className="py-24 bg-gradient-to-b from-wellness-mist to-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-8">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Agenda Online
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold">
              Reserva tu turno
            </h2>
          </div>

          {/* Stepper */}
          <div className="flex items-center justify-center gap-4 mb-8">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-display font-semibold transition-all ${
                    step >= s
                      ? 'bg-primary text-white'
                      : 'bg-muted text-muted-foreground'
                  }`}
                >
                  {step > s ? <Check className="w-5 h-5" /> : s}
                </div>
                {s < 3 && (
                  <div
                    className={`w-16 h-1 mx-2 rounded-full transition-all ${
                      step > s ? 'bg-primary' : 'bg-muted'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>

          {/* Widget container */}
          <div className="bg-white rounded-3xl p-6 md:p-8 shadow-soft">
            <AnimatePresence mode="wait">
              {/* Step 1: Select Area */}
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="font-display font-semibold text-lg mb-6 text-center">
                    ¿Qué área necesitás?
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    {areas.map((area) => {
                      const Icon = area.icon;
                      const isSelected = selectedArea === area.id;
                      return (
                        <motion.button
                          key={area.id}
                          onClick={() => setSelectedArea(area.id)}
                          className={`p-6 rounded-2xl border-2 transition-all flex flex-col items-center gap-3 ${
                            isSelected
                              ? 'border-primary bg-primary/5'
                              : 'border-border/50 hover:border-primary/50'
                          }`}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <div className={`w-14 h-14 rounded-2xl ${area.color} flex items-center justify-center`}>
                            <Icon className="w-7 h-7" strokeWidth={1.5} />
                          </div>
                          <span className="font-display font-medium">{area.name}</span>
                        </motion.button>
                      );
                    })}
                  </div>
                </motion.div>
              )}

              {/* Step 2: Select Date & Time */}
              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="font-display font-semibold text-lg mb-6 text-center">
                    Elegí fecha y horario
                  </h3>

                  {/* Date picker */}
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Calendar className="w-5 h-5 text-primary" strokeWidth={1.5} />
                      <span className="font-medium text-sm">Fecha</span>
                    </div>
                    <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                      {dates.map((date) => {
                        const isSelected = selectedDate?.toDateString() === date.toDateString();
                        const dayName = date.toLocaleDateString('es-AR', { weekday: 'short' });
                        const dayNum = date.getDate();
                        const isWeekend = date.getDay() === 0 || date.getDay() === 6;

                        return (
                          <button
                            key={date.toISOString()}
                            onClick={() => setSelectedDate(date)}
                            disabled={isWeekend}
                            className={`flex-shrink-0 w-16 py-3 rounded-xl text-center transition-all ${
                              isWeekend
                                ? 'opacity-30 cursor-not-allowed'
                                : isSelected
                                ? 'bg-primary text-white'
                                : 'bg-muted hover:bg-primary/10'
                            }`}
                          >
                            <p className="text-xs uppercase font-medium opacity-70">{dayName}</p>
                            <p className="text-lg font-display font-bold">{dayNum}</p>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Time picker */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Clock className="w-5 h-5 text-primary" strokeWidth={1.5} />
                      <span className="font-medium text-sm">Horario</span>
                    </div>
                    <div className="grid grid-cols-4 gap-2">
                      {timeSlots.map((time) => {
                        const isSelected = selectedTime === time;
                        return (
                          <button
                            key={time}
                            onClick={() => setSelectedTime(time)}
                            className={`py-2 rounded-xl text-sm font-medium transition-all ${
                              isSelected
                                ? 'bg-primary text-white'
                                : 'bg-muted hover:bg-primary/10'
                            }`}
                          >
                            {time}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 3: Contact Info */}
              {step === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="font-display font-semibold text-lg mb-6 text-center">
                    Tus datos de contacto
                  </h3>

                  <div className="space-y-4">
                    <div>
                      <label className="flex items-center gap-2 mb-2 text-sm font-medium">
                        <User className="w-4 h-4 text-primary" strokeWidth={1.5} />
                        Nombre completo
                      </label>
                      <Input
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Tu nombre"
                        className="h-12 rounded-xl"
                      />
                    </div>
                    <div>
                      <label className="flex items-center gap-2 mb-2 text-sm font-medium">
                        Teléfono
                      </label>
                      <Input
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+54 11 1234-5678"
                        className="h-12 rounded-xl"
                      />
                    </div>
                    <div>
                      <label className="flex items-center gap-2 mb-2 text-sm font-medium">
                        Email
                      </label>
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="tu@email.com"
                        className="h-12 rounded-xl"
                      />
                    </div>

                    {/* Summary */}
                    <div className="bg-wellness-cream rounded-2xl p-4 mt-6">
                      <p className="text-sm text-muted-foreground mb-2">Resumen del turno:</p>
                      <p className="font-display font-semibold">
                        {areas.find((a) => a.id === selectedArea)?.name}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {selectedDate?.toLocaleDateString('es-AR', {
                          weekday: 'long',
                          day: 'numeric',
                          month: 'long',
                        })}{' '}
                        a las {selectedTime}hs
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex justify-between mt-8">
              {step > 1 ? (
                <Button
                  variant="outline"
                  onClick={() => setStep((s) => s - 1)}
                  className="gap-2"
                >
                  <ArrowLeft className="w-4 h-4" strokeWidth={1.5} />
                  Anterior
                </Button>
              ) : (
                <div />
              )}

              {step < 3 ? (
                <Button
                  variant="primary"
                  onClick={() => setStep((s) => s + 1)}
                  disabled={!canProceed()}
                  className="gap-2"
                >
                  Siguiente
                  <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
                </Button>
              ) : (
                <Button
                  variant="primary"
                  onClick={handleSubmit}
                  disabled={!canProceed()}
                  className="gap-2"
                >
                  <Check className="w-4 h-4" strokeWidth={1.5} />
                  Confirmar turno
                </Button>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
