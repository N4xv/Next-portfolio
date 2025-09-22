import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

const Projects = () => {
  const demoProjects = [
    {
      id: 1,
      name: 'Portafolio Futurista',
      description: 'Un portafolio de vanguardia con terminal integrada y diseño futurista para mostrar mis habilidades.',
      html_url: '#',
      homepage: '#',
      topics: ['react', 'tailwindcss', 'framer-motion']
    },
    {
      id: 2,
      name: 'Interfaz de Chat con IA',
      description: 'Moderna interfaz de chat con mensajería en tiempo real y respuestas inteligentes simuladas.',
      html_url: '#',
      homepage: '#',
      topics: ['typescript', 'ai', 'chat']
    },
    {
      id: 3,
      name: 'Explorador Blockchain',
      description: 'Explorador de blockchain descentralizado con análisis avanzado y visualización de datos.',
      html_url: '#',
      homepage: '#',
      topics: ['nextjs', 'web3', 'analytics']
    }
  ];

  const handleProjectClick = (url) => {
    if (url === '#') {
      toast({
        description: "🚧 Esta función aún no está implementada, ¡pero no te preocupes! ¡Puedes solicitarla en tu próximo mensaje! 🚀"
      });
    } else {
      window.open(url, '_blank');
    }
  };

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6 neon-text text-cyan-400">
            Proyectos Destacados
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto neon-border" />
          <p className="text-gray-300 mt-6 max-w-2xl mx-auto">
            Explora algunas de mis creaciones y contribuciones conceptuales.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {demoProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="glass-effect p-6 rounded-2xl border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 cursor-pointer group"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                  {project.name}
                </h3>
                <div className="flex space-x-2">
                  <motion.button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleProjectClick(project.html_url);
                    }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 rounded-lg glass-effect border border-purple-500/30 text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    <Github size={16} />
                  </motion.button>
                  {project.homepage && (
                    <motion.button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleProjectClick(project.homepage);
                      }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-2 rounded-lg glass-effect border border-cyan-500/30 text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      <ExternalLink size={16} />
                    </motion.button>
                  )}
                </div>
              </div>

              <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                {project.description}
              </p>

              <div className="flex items-center justify-end">
                {project.topics && project.topics.length > 0 && (
                  <div className="flex space-x-1">
                    {project.topics.slice(0, 3).map((topic) => (
                      <span
                        key={topic}
                        className="px-2 py-1 text-xs bg-purple-500/20 text-purple-300 rounded-full border border-purple-500/30"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.button
            onClick={() => handleProjectClick('https://github.com/N4xv')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 glass-effect border border-cyan-500/30 rounded-lg font-semibold text-cyan-400 hover:text-cyan-300 hover:border-cyan-400/50 transition-all duration-300"
          >
            Ver Todos los Proyectos en GitHub
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
