import { motion } from 'framer-motion';
import { ArrowRight, Clock } from 'lucide-react';

const articles = [
  {
    id: 1,
    category: 'Nutrición',
    title: '5 alimentos que transforman tu metabolismo',
    excerpt: 'Descubre cómo pequeños cambios en tu dieta pueden acelerar tu metabolismo naturalmente.',
    readTime: '4 min',
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&q=80',
    color: 'bg-primary/10 text-primary',
  },
  {
    id: 2,
    category: 'Mindfulness',
    title: 'La técnica de respiración que reduce el estrés en 5 minutos',
    excerpt: 'Aprende la técnica 4-7-8 respaldada por la ciencia para calmar tu mente.',
    readTime: '3 min',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80',
    color: 'bg-accent/10 text-accent',
  },
  {
    id: 3,
    category: 'Prevención',
    title: 'Chequeos médicos: cuándo y por qué hacerlos',
    excerpt: 'Una guía completa sobre los exámenes preventivos según tu edad.',
    readTime: '6 min',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80',
    color: 'bg-secondary/10 text-secondary',
  },
];

export const Blog = () => {
  return (
    <section id="blog" className="py-24">
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
            <span className="inline-block px-4 py-1.5 rounded-full bg-wellness-sage text-secondary text-sm font-medium mb-4">
              Blog & Recursos
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold">
              Novedades de Salud
            </h2>
          </div>
          <a
            href="#"
            className="flex items-center gap-2 text-primary font-medium mt-4 md:mt-0 group"
          >
            <span>Ver todos los artículos</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" strokeWidth={1.5} />
          </a>
        </motion.div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="bg-white rounded-3xl overflow-hidden shadow-soft hover:shadow-float transition-all duration-300">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${article.color}`}>
                      {article.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-display font-semibold text-lg mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-sm text-muted-foreground font-body line-clamp-2 mb-4">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Clock className="w-3.5 h-3.5 mr-1" strokeWidth={1.5} />
                    <span>{article.readTime} de lectura</span>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
