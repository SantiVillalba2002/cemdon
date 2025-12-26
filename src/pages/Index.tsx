import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { MetodoCemdon } from '@/components/MetodoCemdon';
import { ProcessStepper } from '@/components/ProcessStepper';
import { Staff } from '@/components/Staff';
import { AppCemdon } from '@/components/AppCemdon';
import { Blog } from '@/components/Blog';
import { Testimonials } from '@/components/Testimonials';
import { AppointmentWidget } from '@/components/AppointmentWidget';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <MetodoCemdon />
      <ProcessStepper />
      <Staff />
      <AppCemdon />
      <AppointmentWidget />
      <Blog />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
