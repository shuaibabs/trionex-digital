
'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const Star = ({
  x,
  y,
  size,
  duration,
  delay,
  isMoving,
}: {
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  isMoving: boolean;
}) => {
  if (isMoving) {
    return (
      <motion.div
        className="absolute rounded-full bg-white"
        style={{
          left: `${x}%`,
          top: `${y}%`,
          width: size,
          height: size,
          boxShadow: '0 0 8px #fff, 0 0 16px #fff',
        }}
        animate={{
          x: [0, Math.random() * 200 - 100, 0],
          y: [0, Math.random() * 200 - 100, 0],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: duration,
          repeat: Infinity,
          repeatType: 'loop',
          ease: 'linear',
          delay,
        }}
      />
    );
  }

  return (
    <motion.div
      className="absolute rounded-full bg-white"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        width: size,
        height: size,
        boxShadow: '0 0 8px #fff, 0 0 16px #fff',
      }}
      animate={{
        opacity: [0.2, 1, 0.2],
        scale: [0.8, 1.2, 0.8],
      }}
      transition={{
        duration: duration,
        repeat: Infinity,
        repeatType: 'mirror',
        ease: 'easeInOut',
        delay,
      }}
    />
  );
};

const Moon = () => {
  return (
    <motion.div
      className="absolute rounded-full"
      style={{
        width: 50,
        height: 50,
        background: 'linear-gradient(145deg, #fdfdfd, #c3c3c3)',
        boxShadow:
          '0 0 15px 5px #ffffff, 0 0 25px 10px #ffffff, 0 0 5px #f0f0f0 inset',
      }}
      animate={{
        x: ['-20vw', '120vw'],
        y: ['10vh', '50vh'],
        rotate: [0, 20],
      }}
      transition={{
        duration: 180, // Slower movement for a majestic feel
        repeat: Infinity,
        repeatType: 'mirror',
        ease: 'easeInOut',
      }}
    />
  );
};

const Spaceship = ({
  initialX,
  initialY,
  finalX,
  duration,
  delay = 0,
  isFlipped = false,
}: {
  initialX: string;
  initialY: string;
  finalX: string;
  duration: number;
  delay?: number;
  isFlipped?: boolean;
}) => {
  return (
    <motion.div
      className="absolute text-white"
      style={{
        top: initialY,
        scale: 0.5,
      }}
      animate={{
        x: [initialX, finalX],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        repeatType: 'loop',
        ease: 'linear',
      }}
    >
      <div className="relative" style={{ transform: isFlipped ? 'scaleX(-1)' : 'scaleX(1)'}}>
        <svg
          width="50"
          height="50"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.5 11L11.5 3L14.5 6L11.5 9H16.5L21.5 4V9L18.5 12L21.5 15V20L16.5 15H11.5L14.5 18L11.5 21L3.5 13H9.5V11H3.5Z"
            fill="currentColor"
          />
        </svg>
        <motion.div
          style={{
            position: 'absolute',
            right: '-10px',
            top: '50%',
            y: '-50%',
            width: '10px',
            height: '4px',
            borderRadius: '2px',
            background: 'hsl(var(--primary))',
            boxShadow: '0 0 10px 2px hsl(var(--primary))',
          }}
          animate={{
            scaleX: [1, 2, 1],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 0.5,
            repeat: Infinity,
            repeatType: 'mirror',
          }}
        />
      </div>
    </motion.div>
  );
};

export function Starfield({
  starCount = 300,
  movingStarCount = 50,
  className,
}: {
  starCount?: number;
  movingStarCount?: number;
  className?: string;
}) {
  const [stars, setStars] = useState<any[]>([]);

  useEffect(() => {
    const generateStars = () => {
      const newStars = [];
      for (let i = 0; i < starCount + movingStarCount; i++) {
        const isMoving = i < movingStarCount;
        newStars.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * (isMoving ? 3 : 2) + 1,
          duration: isMoving
            ? Math.random() * 20 + 20
            : Math.random() * 5 + 3,
          delay: Math.random() * 5,
          isMoving,
        });
      }
      setStars(newStars);
    };

    generateStars();
  }, [starCount, movingStarCount]);

  return (
    <div
      className={cn(
        'absolute inset-0 -z-10 h-full w-full overflow-hidden',
        className
      )}
    >
      <Moon />
      {stars.map((star) => (
        <Star key={star.id} {...star} />
      ))}
      <Spaceship
        initialX="-10vw"
        initialY="20%"
        finalX="110vw"
        duration={20}
        delay={0}
      />
      <Spaceship
        initialX="110vw"
        initialY="40%"
        finalX="-10vw"
        duration={15}
        delay={5}
        isFlipped
      />
      <Spaceship
        initialX="-10vw"
        initialY="70%"
        finalX="110vw"
        duration={25}
        delay={10}
      />
    </div>
  );
}
