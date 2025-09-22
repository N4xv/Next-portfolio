import React, { useRef } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

const Orb = ({ size, color, duration }) => (
  <motion.div
    className="absolute border rounded-full"
    style={{
      width: size,
      height: size,
      borderColor: color,
      boxShadow: `0 0 10px ${color}, inset 0 0 10px ${color}`,
    }}
    animate={{ rotate: 360 }}
    transition={{
      duration,
      ease: 'linear',
      repeat: Infinity,
    }}
  />
);

const ProfileOrb = () => {
  const containerRef = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-200, 200], [15, -15]);
  const rotateY = useTransform(x, [-200, 200], [-15, 15]);

  const handleMouseMove = (event) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      x.set(event.clientX - rect.left - rect.width / 2);
      y.set(event.clientY - rect.top - rect.height / 2);
    }
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        width: 400,
        height: 400,
        display: 'flex',
        placeItems: 'center',
        placeContent: 'center',
        borderRadius: '50%',
        perspective: 800,
      }}
    >
      <motion.div
        style={{
          width: '100%',
          height: '100%',
          transformStyle: 'preserve-3d',
          rotateX,
          rotateY,
        }}
        className="relative flex items-center justify-center"
      >
        <motion.div
          className="absolute w-56 h-56 rounded-full overflow-hidden border-2 border-cyan-400/50"
          style={{
            boxShadow: '0 0 30px rgba(0, 255, 255, 0.5)',
            transform: 'translateZ(50px)',
          }}
        >
          <img
            className="w-full h-full object-cover"
            alt="Foto de perfil de N4x"
           src="https://images.unsplash.com/photo-1672810842120-16e56ef86b57" />
        </motion.div>

        <motion.div
          style={{ transform: 'rotateX(85deg)' }}
          className="absolute"
        >
          <Orb size={300} color="rgba(0, 255, 255, 0.8)" duration={20} />
        </motion.div>
        <motion.div
          style={{ transform: 'rotateX(85deg)' }}
          className="absolute"
        >
          <Orb size={360} color="rgba(139, 92, 246, 0.7)" duration={25} />
        </motion.div>
        <motion.div
          style={{ transform: 'rotateX(85deg)' }}
          className="absolute"
        >
          <Orb size={420} color="rgba(0, 255, 255, 0.5)" duration={30} />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ProfileOrb;
