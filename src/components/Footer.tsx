import { motion } from 'framer-motion';
import { Heart, Instagram, Facebook, Linkedin, Youtube } from 'lucide-react';

const footerLinks = {
  servicios: [
    { label: 'Nutrición', href: '#' },
    { label: 'Mindfulness', href: '#' },
    { label: 'Cardiología', href: '#' },
    { label: 'Medicina Preventiva', href: '#' },
  ],
  empresa: [
    { label: 'Sobre nosotros', href: '#' },
    { label: 'Equipo médico', href: '#equipo' },
    { label: 'Trabaja con nosotros', href: '#' },
    { label: 'Blog', href: '#blog' },
  ],
  legal: [
    { label: 'Términos de uso', href: '#' },
    { label: 'Política de privacidad', href: '#' },
    { label: 'Política de cookies', href: '#' },
  ],
};

const socialLinks = [
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Youtube, href: '#', label: 'YouTube' },
];

export const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-2xl flex items-center justify-center">
                <span className="text-primary-foreground font-display font-bold text-lg">C</span>
              </div>
              <span className="font-display font-bold text-xl text-white">CEMDON</span>
            </div>
            <p className="text-white/60 text-sm font-body mb-6 max-w-xs">
              Encendemos tu salud, transformamos tu vida. Tu centro médico integral de confianza.
            </p>
            
            {/* Social links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
                >
                  <social.icon className="w-5 h-5" strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display font-semibold text-white mb-4">Servicios</h4>
            <ul className="space-y-2">
              {footerLinks.servicios.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/60 hover:text-primary transition-colors font-body"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-white mb-4">Empresa</h4>
            <ul className="space-y-2">
              {footerLinks.empresa.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/60 hover:text-primary transition-colors font-body"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/60 hover:text-primary transition-colors font-body"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white/40 font-body">
            © 2024 CEMDON. Todos los derechos reservados.
          </p>
          <p className="text-sm text-white/40 font-body flex items-center gap-1">
            Hecho con <Heart className="w-4 h-4 text-primary fill-primary" /> para tu bienestar
          </p>
        </div>
      </div>
    </footer>
  );
};
