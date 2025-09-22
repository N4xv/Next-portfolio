import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Minimize2, Maximize2 } from 'lucide-react';

const Terminal = ({ onClose }) => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    { type: 'output', content: 'Welcome to N4x Terminal v2.0.1' },
    { type: 'output', content: 'Type "help" to see available commands.' },
    { type: 'prompt', content: '' }
  ]);
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [isMinimized, setIsMinimized] = useState(false);
  const inputRef = useRef(null);
  const terminalRef = useRef(null);

  const commands = {
    help: {
      description: 'Show available commands',
      action: () => [
        'Available commands:',
        '  help       - Show this help message',
        '  about      - Learn about N4x',
        '  skills     - View technical skills',
        '  projects   - List recent projects',
        '  contact    - Get contact information',
        '  github     - Open GitHub profile',
        '  clear      - Clear terminal',
        '  whoami     - Display current user',
        '  date       - Show current date and time',
        '  matrix     - Enter the matrix...',
        '  exit       - Close terminal'
      ]
    },
    about: {
      description: 'Learn about N4x',
      action: () => [
        'N4x - Futuristic Web Developer',
        '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━',
        'Age: 19 years old',
        'Location: Madrid, Spain',
        'Education: Web Application Development Student',
        'Passion: Creating next-generation digital experiences',
        '',
        'I\'m a self-taught developer who started coding at a young age.',
        'I love exploring new technologies and building innovative solutions.'
      ]
    },
    skills: {
      description: 'View technical skills',
      action: () => [
        'Technical Skills:',
        '━━━━━━━━━━━━━━━━',
        'Frontend: React, Next.js, TypeScript, Tailwind CSS',
        'Backend: Node.js, Express, MongoDB, PostgreSQL',
        'Tools: Git, Docker, Linux, AWS, Figma',
        'Languages: JavaScript, TypeScript, Python',
        '',
        'Always learning and expanding my skill set!'
      ]
    },
    projects: {
      description: 'List recent projects',
      action: () => [
        'Recent Projects:',
        '━━━━━━━━━━━━━━━━',
        '1. Futuristic Portfolio - Interactive terminal-based portfolio',
        '2. AI Chat Interface - Modern chat app with AI integration',
        '3. Blockchain Explorer - Decentralized data visualization',
        '4. E-commerce Platform - Full-stack shopping solution',
        '',
        'Visit my GitHub for more: github.com/N4xv'
      ]
    },
    contact: {
      description: 'Get contact information',
      action: () => [
        'Contact Information:',
        '━━━━━━━━━━━━━━━━━━━━',
        'GitHub: github.com/N4xv',
        'Email: Available on request',
        'Location: Madrid, Spain',
        '',
        'Feel free to reach out for collaborations!'
      ]
    },
    github: {
      description: 'Open GitHub profile',
      action: () => {
        window.open('https://github.com/N4xv', '_blank');
        return ['Opening GitHub profile...'];
      }
    },
    clear: {
      description: 'Clear terminal',
      action: () => {
        setHistory([{ type: 'prompt', content: '' }]);
        return [];
      }
    },
    whoami: {
      description: 'Display current user',
      action: () => ['n4x@futuristic-portfolio:~$']
    },
    date: {
      description: 'Show current date and time',
      action: () => [new Date().toString()]
    },
    matrix: {
      description: 'Enter the matrix...',
      action: () => [
        'Entering the matrix...',
        '01001000 01100101 01101100 01101100 01101111',
        '01010111 01101111 01110010 01101100 01100100',
        'Welcome to the real world, Neo.',
        'The matrix has you...'
      ]
    },
    exit: {
      description: 'Close terminal',
      action: () => {
        onClose();
        return ['Goodbye!'];
      }
    }
  };

  useEffect(() => {
    if (inputRef.current && !isMinimized) {
      inputRef.current.focus();
    }
  }, [isMinimized]);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (cmd) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    const newHistory = [...history];
    
    // Add the command to history
    newHistory[newHistory.length - 1] = { type: 'input', content: `n4x@terminal:~$ ${cmd}` };
    
    if (trimmedCmd === '') {
      newHistory.push({ type: 'prompt', content: '' });
    } else if (commands[trimmedCmd]) {
      const output = commands[trimmedCmd].action();
      if (output.length > 0) {
        output.forEach(line => {
          newHistory.push({ type: 'output', content: line });
        });
      }
      if (trimmedCmd !== 'clear' && trimmedCmd !== 'exit') {
        newHistory.push({ type: 'prompt', content: '' });
      }
    } else {
      newHistory.push({ type: 'error', content: `Command not found: ${trimmedCmd}` });
      newHistory.push({ type: 'output', content: 'Type "help" to see available commands.' });
      newHistory.push({ type: 'prompt', content: '' });
    }
    
    setHistory(newHistory);
    
    // Add to command history
    if (trimmedCmd !== '') {
      setCommandHistory(prev => [...prev, cmd]);
    }
    setHistoryIndex(-1);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleCommand(input);
      setInput('');
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const newIndex = historyIndex === -1 ? commandHistory.length - 1 : Math.max(0, historyIndex - 1);
        setHistoryIndex(newIndex);
        setInput(commandHistory[newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex !== -1) {
        const newIndex = historyIndex + 1;
        if (newIndex >= commandHistory.length) {
          setHistoryIndex(-1);
          setInput('');
        } else {
          setHistoryIndex(newIndex);
          setInput(commandHistory[newIndex]);
        }
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      className="fixed inset-4 z-50 flex items-center justify-center"
    >
      <div className={`w-full max-w-4xl ${isMinimized ? 'h-12' : 'h-96'} terminal-glow rounded-lg overflow-hidden transition-all duration-300`}>
        {/* Terminal Header */}
        <div className="bg-gray-900 border-b border-cyan-500/30 px-4 py-2 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="ml-4 text-cyan-400 font-mono text-sm">N4x Terminal</span>
          </div>
          
          <div className="flex items-center space-x-2">
            <motion.button
              onClick={() => setIsMinimized(!isMinimized)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="text-gray-400 hover:text-cyan-400 transition-colors"
            >
              {isMinimized ? <Maximize2 size={16} /> : <Minimize2 size={16} />}
            </motion.button>
            <motion.button
              onClick={onClose}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="text-gray-400 hover:text-red-400 transition-colors"
            >
              <X size={16} />
            </motion.button>
          </div>
        </div>

        {/* Terminal Content */}
        <AnimatePresence>
          {!isMinimized && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="bg-black/90 backdrop-blur-sm h-full flex flex-col"
            >
              <div
                ref={terminalRef}
                className="flex-1 p-4 overflow-y-auto scrollbar-hide font-mono text-sm"
              >
                {history.map((line, index) => (
                  <div key={index} className="mb-1">
                    {line.type === 'input' && (
                      <div className="text-cyan-400">{line.content}</div>
                    )}
                    {line.type === 'output' && (
                      <div className="text-gray-300">{line.content}</div>
                    )}
                    {line.type === 'error' && (
                      <div className="text-red-400">{line.content}</div>
                    )}
                    {line.type === 'prompt' && index === history.length - 1 && (
                      <div className="flex items-center text-cyan-400">
                        <span className="mr-2">n4x@terminal:~$</span>
                        <input
                          ref={inputRef}
                          type="text"
                          value={input}
                          onChange={(e) => setInput(e.target.value)}
                          onKeyDown={handleKeyDown}
                          className="bg-transparent outline-none flex-1 text-white"
                          autoComplete="off"
                          spellCheck="false"
                        />
                        <span className="animate-pulse">|</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default Terminal;
