'use client';

import { motion } from 'framer-motion';
import React from 'react';
import Image from 'next/image';

const icons = {
  insta: '/assets/icons/insta.png',
  meta: '/assets/icons/meta.png',
  whatsapp: '/assets/icons/whatsapp.png',
  facebook: '/assets/icons/facebook.png',
  html: '/assets/icons/html.png',
  css: '/assets/icons/css.png',
  js: '/assets/icons/js.png',
  tailwind: '/assets/icons/tailwind.png',
  node: '/assets/icons/node.png',
  express: '/assets/icons/express.png',
  mongodb: '/assets/icons/mongodb.png',
  sql: '/assets/icons/sql.png',
  vs: '/assets/icons/vs.png',
  postman: '/assets/icons/postman.png',
  git: '/assets/icons/git.png',
  browser: '/assets/icons/browser.png',
  react: '/assets/icons/react.png',
  angular: '/assets/icons/angular.png'
};

const Planet = ({
  iconSrc,
  initialAngle,
  orbitRadius,
  alt,
}: {
  iconSrc: string;
  initialAngle: number;
  orbitRadius: number;
  alt: string;
}) => {
  const size = 40;
  return (
    <motion.div
      className="absolute flex items-center justify-center"
      style={{
        width: size,
        height: size,
        left: '50%',
        top: '50%',
        marginLeft: -size / 2,
        marginTop: -size / 2,
        transform: `rotate(${initialAngle}deg) translateX(${orbitRadius}px) rotate(${-initialAngle}deg)`,
        transformOrigin: 'center center',
      }}
    >
      <Image src={iconSrc} alt={alt} width={40} height={40} />
    </motion.div>
  );
};

const Orbit = ({
  radius,
  duration,
  children,
  ...props
}: {
  radius: number;
  duration: number;
  children?: React.ReactNode;
}) => (
  <motion.div
    className="absolute top-1/2 left-1/2 border-2 border-dashed border-primary/20 rounded-full"
    style={{
      width: radius * 2,
      height: radius * 2,
      marginLeft: -radius,
      marginTop: -radius,
    }}
    animate={{ rotate: 360 }}
    transition={{ duration, repeat: Infinity, ease: 'linear' }}
    {...props}
  >
    {children}
  </motion.div>
);

export default function FuturisticAnimation() {
  return (
    <div className="relative flex items-center justify-center w-full h-full scale-75 sm:scale-90 md:scale-100">
      <div className="relative w-[460px] h-[460px]">
        {/* Central Logo */}
        <motion.div
          className="
            absolute
            top-[39%] sm:top-[39%] md:top-[39%] lg:top-[39%] xl:top-[39%]
            left-[36%] sm:left-[39%] md:left-[39%] lg:left-[39%] xl:left-[39%]
            w-32 h-32
          "
          style={{
            transform: 'translate(-50%, -50%)',
            filter: 'drop-shadow(0 0 15px hsl(var(--primary)))',
          }}
          animate={{ scale: [1, 1.05, 1], opacity: [0.9, 1, 0.9] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        >
          <Image
            src="/assets/logo/logo.png"
            alt="Trionex Digital Sphere Logo"
            width={105}
            height={105}
          />
        </motion.div>

        {/* Orbits */}
        <div className="w-full h-full">
          <Orbit radius={80} duration={10}>
            <Planet iconSrc={icons.insta} alt="Insta" initialAngle={0} orbitRadius={80} />
            <Planet iconSrc={icons.meta} alt="Meta" initialAngle={180} orbitRadius={80} />
            <Planet iconSrc={icons.whatsapp} alt="Whatsapp" initialAngle={90} orbitRadius={80} />
            <Planet iconSrc={icons.facebook} alt="Facebook" initialAngle={270} orbitRadius={80} />
          </Orbit>

          <Orbit radius={230} duration={16}>
            <Planet iconSrc={icons.vs} alt="VS Code" initialAngle={45} orbitRadius={130} />
            <Planet iconSrc={icons.postman} alt="Postman" initialAngle={135} orbitRadius={130} />
            <Planet iconSrc={icons.git} alt="GitHub" initialAngle={225} orbitRadius={130} />
            <Planet iconSrc={icons.browser} alt="Browser" initialAngle={315} orbitRadius={130} />
          </Orbit>

          <Orbit radius={180} duration={21}>
            <Planet iconSrc={icons.node} alt="Node" initialAngle={0} orbitRadius={180} />
            <Planet iconSrc={icons.express} alt="Express" initialAngle={90} orbitRadius={180} />
            <Planet iconSrc={icons.mongodb} alt="Mongo" initialAngle={180} orbitRadius={180} />
            <Planet iconSrc={icons.sql} alt="SQL" initialAngle={270} orbitRadius={180} />
          </Orbit>

          

          <Orbit radius={130} duration={33}>
            <Planet iconSrc={icons.js} alt="JavaScript" initialAngle={45} orbitRadius={240} />
            <Planet iconSrc={icons.react} alt="React" initialAngle={105} orbitRadius={240} />
            <Planet iconSrc={icons.html} alt="HTML" initialAngle={345} orbitRadius={240} />
            <Planet iconSrc={icons.css} alt="CSS" initialAngle={165} orbitRadius={240} />
            <Planet iconSrc={icons.tailwind} alt="Tailwind" initialAngle={225} orbitRadius={240} />
            <Planet iconSrc={icons.angular} alt="Angular" initialAngle={285} orbitRadius={240} />
          </Orbit>
        </div>
      </div>
    </div>
  );
}
