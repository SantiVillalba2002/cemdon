import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

export const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: '¡Mensaje enviado!',
      description: 'Nos pondremos en contacto contigo pronto.',
    });

    setFormData({ name: '', email: '', phone: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contacto" className="py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            Contacto
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Estamos aquí para ayudarte
          </h2>
          <p className="text-muted-foreground font-body">
            Agenda tu primera consulta o envíanos tus preguntas. Te responderemos en menos de 24 horas.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
          {/* Map - Google Maps Embed of San Francisco, Córdoba, Argentina */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 relative h-[400px] lg:h-auto rounded-3xl overflow-hidden shadow-soft"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27189.247391392!2d-62.09847!3d-31.428611!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95cb2f6e6a0d1a4b%3A0x7c6d4b8f0c3e1a2d!2sSan%20Francisco%2C%20C%C3%B3rdoba%2C%20Argentina!5e0!3m2!1ses!2sar!4v1703000000000!5m2!1ses!2sar"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '400px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación CEMDON - San Francisco, Córdoba"
              className="grayscale-[30%] contrast-[1.1]"
            />

            {/* Info cards overlay */}
            <div className="absolute bottom-6 left-6 right-6 flex flex-wrap gap-3">
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl px-4 py-3 shadow-soft flex items-center gap-3">
                <MapPin className="w-5 h-5 text-primary" strokeWidth={1.5} />
                <div>
                  <p className="text-xs text-muted-foreground">Dirección</p>
                  <p className="text-sm font-medium text-secondary">San Francisco, Córdoba</p>
                </div>
              </div>
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl px-4 py-3 shadow-soft flex items-center gap-3">
                <Clock className="w-5 h-5 text-primary" strokeWidth={1.5} />
                <div>
                  <p className="text-xs text-muted-foreground">Horarios</p>
                  <p className="text-sm font-medium text-secondary">Lun - Vie: 8 - 20hs</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="bg-white rounded-3xl p-6 md:p-8 shadow-soft">
              <h3 className="font-display font-semibold text-xl mb-6">Envíanos un mensaje</h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    name="name"
                    placeholder="Tu nombre"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="h-12 rounded-xl border-border/50 focus:border-primary"
                  />
                </div>
                <div>
                  <Input
                    name="email"
                    type="email"
                    placeholder="tu@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="h-12 rounded-xl border-border/50 focus:border-primary"
                  />
                </div>
                <div>
                  <Input
                    name="phone"
                    type="tel"
                    placeholder="Tu teléfono"
                    value={formData.phone}
                    onChange={handleChange}
                    className="h-12 rounded-xl border-border/50 focus:border-primary"
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="¿En qué podemos ayudarte?"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="rounded-xl border-border/50 focus:border-primary resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full gap-2"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                        className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                      />
                      <span>Enviando...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" strokeWidth={1.5} />
                      <span>Enviar mensaje</span>
                    </>
                  )}
                </Button>
              </form>

              {/* Quick contact */}
              <div className="mt-8 pt-6 border-t border-border/50">
                <p className="text-sm text-muted-foreground mb-4">O contáctanos directamente:</p>
                <div className="space-y-3">
                  <a
                    href="tel:+543564123456"
                    className="flex items-center gap-3 text-secondary hover:text-primary transition-colors"
                  >
                    <Phone className="w-5 h-5" strokeWidth={1.5} />
                    <span className="font-body">+54 3564 12-3456</span>
                  </a>
                  <a
                    href="mailto:contacto@cemdon.com"
                    className="flex items-center gap-3 text-secondary hover:text-primary transition-colors"
                  >
                    <Mail className="w-5 h-5" strokeWidth={1.5} />
                    <span className="font-body">contacto@cemdon.com</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
