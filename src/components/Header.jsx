import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Github } from 'lucide-react';

const Header = ({ activeSection, onTerminalToggle }) => {
  const navItems = [
    { id: 'home', label: 'Inicio' },
    { id: 'about', label: 'Sobre Mí' },
    { id: 'skills', label: 'Habilidades' },
    { id: 'projects', label: 'Proyectos' },
    { id: 'contact', label: 'Contacto' }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-cyan-500/20"
    >
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="text-2xl font-bold neon-text text-cyan-400"
        >
          N4x.dev
        </motion.div>

        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <motion.button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className={`relative px-4 py-2 transition-all duration-300 ${
                activeSection === item.id
                  ? 'text-cyan-400 neon-text'
                  : 'text-gray-300 hover:text-cyan-400'
              }`}
            >
              {item.label}
              {activeSection === item.id && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyan-400 neon-border"
                />
              )}
            </motion.button>
          ))}
        </div>

        <div className="flex items-center space-x-4">
          <motion.button
            onClick={onTerminalToggle}
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            className="p-2 rounded-lg glass-effect border border-cyan-500/30 text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            <Terminal size={20} />
          </motion.button>

          <motion.a
            href="https://github.com/N4xv"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            className="p-2 rounded-lg glass-effect border border-purple-500/30 text-purple-400 hover:text-purple-300 transition-colors"
          >
            <Github size={20} />
          </motion.a>
        </div>
      </nav>
    </motion.header>
  );
};

export default Header;
