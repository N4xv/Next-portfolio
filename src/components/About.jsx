import React from 'react';
import { motion } from 'framer-motion';
import { User, MapPin, Calendar, Heart } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Calendar, label: 'Edad', value: '19' },
    { icon: MapPin, label: 'Ubicación', value: 'Madrid' },
    { icon: User, label: 'Rol', value: 'Desarrollador Web' },
    { icon: Heart, label: 'Pasión', value: 'Programar' }
  ];

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
            Sobre Mí
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto neon-border" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="glass-effect p-8 rounded-2xl border border-cyan-500/20">
              <h3 className="text-2xl font-bold text-purple-400 mb-4">Mi Trayectoria</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Soy N4x, un apasionado desarrollador web de 19 años de Madrid. Mi viaje en la programación 
                comenzó a una edad temprana, impulsado por la curiosidad y el deseo de crear soluciones digitales que 
                marquen la diferencia.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                Como desarrollador autodidacta, he aceptado el desafío del aprendizaje continuo, 
                explorando constantemente nuevas tecnologías y superando los límites de lo posible 
                en el desarrollo web.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Actualmente estudiando desarrollo de aplicaciones web, combino el conocimiento académico con 
                experiencia práctica a través de proyectos personales y colaborativos.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="glass-effect p-4 rounded-xl border border-purple-500/20 text-center"
                >
                  <stat.icon className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-400">{stat.label}</p>
                  <p className="text-lg font-bold text-white">{stat.value}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="glass-effect p-8 rounded-2xl border border-purple-500/20 floating-animation">
              <h3 className="text-2xl font-bold text-cyan-400 mb-6">Lo Que Me Impulsa</h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 neon-border" />
                  <div>
                    <h4 className="font-semibold text-white">Innovación</h4>
                    <p className="text-gray-400 text-sm">Crear soluciones de vanguardia con tecnologías modernas</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 pulse-glow" />
                  <div>
                    <h4 className="font-semibold text-white">Colaboración</h4>
                    <p className="text-gray-400 text-sm">Trabajar en equipo para construir proyectos impactantes</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 neon-border" />
                  <div>
                    <h4 className="font-semibold text-white">Aprendizaje</h4>
                    <p className="text-gray-400 text-sm">Evolucionar y dominar constantemente nuevas habilidades</p>
                  </div>
                </div>
              </div>
            </div>

            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-4 -right-4 w-16 h-16 border-2 border-cyan-400/30 rounded-full"
            />
            
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-4 -left-4 w-12 h-12 border-2 border-purple-400/30 rounded-full"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
