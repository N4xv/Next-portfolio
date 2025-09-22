import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Send, User, Mail, MessageSquare } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Por favor, rellena todos los campos.",
        variant: "destructive"
      });
      return;
    }

    toast({
      description: "🚧 Esta función aún no está implementada, ¡pero no te preocupes! ¡Puedes solicitarla en tu próximo mensaje! 🚀"
    });

    setFormData({ name: '', email: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/N4xv',
      link: 'https://github.com/N4xv',
      color: 'text-purple-400'
    }
  ];

  const handleContactClick = (link) => {
    if (link === '#') {
      toast({
        description: "🚧 Esta función aún no está implementada, ¡pero no te preocupes! ¡Puedes solicitarla en tu próximo mensaje! 🚀"
      });
    } else {
      window.open(link, '_blank');
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
          <h2 className="text-5xl font-bold mb-6 neon-text text-purple-400">
            Ponte en Contacto
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-cyan-500 mx-auto neon-border" />
          <p className="text-gray-300 mt-6 max-w-2xl mx-auto">
            ¿Listo para colaborar en algo increíble? Construyamos el futuro juntos.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="glass-effect p-8 rounded-2xl border border-purple-500/20">
              <h3 className="text-2xl font-bold text-cyan-400 mb-6">Conectemos</h3>
              <p className="text-gray-300 leading-relaxed mb-8">
                Siempre estoy emocionado de discutir nuevas oportunidades, colaborar en proyectos innovadores 
                o simplemente charlar sobre lo último en desarrollo web. Si tienes un proyecto en mente 
                o simplemente quieres conectar, ¡me encantaría saber de ti!
              </p>

              <div className="space-y-6">
                {contactInfo.map((info) => (
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center space-x-4 p-4 glass-effect rounded-xl border border-gray-700/30 cursor-pointer hover:border-cyan-500/30 transition-all duration-300"
                    onClick={() => handleContactClick(info.link)}
                  >
                    <div className={`p-3 rounded-lg glass-effect border border-gray-600/30 ${info.color}`}>
                      <info.icon size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">{info.label}</p>
                      <p className="text-white font-medium">{info.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="glass-effect p-8 rounded-2xl border border-cyan-500/20"
          >
            <h3 className="text-2xl font-bold text-purple-400 mb-6">Enviar un Mensaje</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm text-gray-400 flex items-center space-x-2">
                  <User size={16} />
                  <span>Tu Nombre</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-black/50 border border-gray-600/30 rounded-lg text-white placeholder-gray-500 focus:border-cyan-400/50 focus:outline-none transition-colors"
                  placeholder="Escribe tu nombre"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm text-gray-400 flex items-center space-x-2">
                  <Mail size={16} />
                  <span>Dirección de Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-black/50 border border-gray-600/30 rounded-lg text-white placeholder-gray-500 focus:border-cyan-400/50 focus:outline-none transition-colors"
                  placeholder="Escribe tu email"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm text-gray-400 flex items-center space-x-2">
                  <MessageSquare size={16} />
                  <span>Mensaje</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  className="w-full px-4 py-3 bg-black/50 border border-gray-600/30 rounded-lg text-white placeholder-gray-500 focus:border-cyan-400/50 focus:outline-none transition-colors resize-none"
                  placeholder="¡Cuéntame sobre tu proyecto o simplemente saluda!"
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-8 py-4 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg font-semibold text-black hover:from-purple-400 hover:to-cyan-400 transition-all duration-300 flex items-center justify-center space-x-2 neon-border"
              >
                <Send size={20} />
                <span>Enviar Mensaje</span>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
