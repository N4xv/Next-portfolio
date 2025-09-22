import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      color: 'cyan',
      skills: [
        { name: 'React', level: 90 },
        { name: 'Next.js', level: 85 },
        { name: 'TypeScript', level: 80 },
        { name: 'Tailwind CSS', level: 95 },
        { name: 'JavaScript', level: 90 }
      ]
    },
    {
      title: 'Backend',
      color: 'purple',
      skills: [
        { name: 'Node.js', level: 75 },
        { name: 'Express', level: 70 },
        { name: 'MongoDB', level: 65 },
        { name: 'PostgreSQL', level: 60 },
        { name: 'REST APIs', level: 80 }
      ]
    },
    {
      title: 'Herramientas y Otros',
      color: 'yellow',
      skills: [
        { name: 'Git', level: 85 },
        { name: 'Docker', level: 60 },
        { name: 'Figma', level: 70 },
        { name: 'Linux', level: 75 },
        { name: 'AWS', level: 55 }
      ]
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      cyan: {
        text: 'text-cyan-400',
        bg: 'bg-cyan-400',
        border: 'border-cyan-400/30',
        glow: 'shadow-cyan-400/20'
      },
      purple: {
        text: 'text-purple-400',
        bg: 'bg-purple-400',
        border: 'border-purple-400/30',
        glow: 'shadow-purple-400/20'
      },
      yellow: {
        text: 'text-yellow-400',
        bg: 'bg-yellow-400',
        border: 'border-yellow-400/30',
        glow: 'shadow-yellow-400/20'
      }
    };
    return colors[color];
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
          <h2 className="text-5xl font-bold mb-6 neon-text text-purple-400">
            Habilidades y Experiencia
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-cyan-500 mx-auto neon-border" />
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const colorClasses = getColorClasses(category.color);
            
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className={`glass-effect p-6 rounded-2xl border ${colorClasses.border} hover:shadow-2xl hover:${colorClasses.glow} transition-all duration-300`}
              >
                <h3 className={`text-2xl font-bold mb-6 ${colorClasses.text} neon-text`}>
                  {category.title}
                </h3>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="space-y-2"
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-white font-medium">{skill.name}</span>
                        <span className={`text-sm ${colorClasses.text}`}>{skill.level}%</span>
                      </div>
                      
                      <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.5 }}
                          viewport={{ once: true }}
                          className={`h-full ${colorClasses.bg} rounded-full relative`}
                        >
                          <div className={`absolute inset-0 ${colorClasses.bg} opacity-50 blur-sm`} />
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="glass-effect p-8 rounded-2xl border border-cyan-500/20 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-cyan-400 mb-4">Siempre Aprendiendo</h3>
            <p className="text-gray-300 leading-relaxed">
              La tecnología evoluciona rápidamente, y yo también. Exploro constantemente nuevos frameworks, 
              herramientas y metodologías para mantenerme a la vanguardia del desarrollo web. Mi viaje 
              autodidacta me ha enseñado que la habilidad más valiosa es la capacidad de aprender y adaptarse.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
