import React from 'react';
import './About.scss';
import SectionHead from '../SectionHead';
import { Variants, motion } from 'framer-motion';

export default function About() {
  const container: Variants = {
    show: {
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.75,
      },
    },
  };

  const image: Variants = {
    hidden: {
      opacity: 0,
      scale: 0,
    },
    show: {
      opacity: 1,
      scale: 1,
    },
  };

  const copyVariant: Variants = {
    hidden: {
      opacity: 0,
      x: -32,
    },
    show: {
      opacity: 1,
      x: 0,
    },
  };

  return (
    <section id='about-me' className='py-24 bg-white bg-opacity-5'>
      <motion.div
        className='container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-screen-lg px-8'
        variants={container}
        initial='hidden'
        whileInView='show'
        // viewport={{ once: true }}
      >
        <motion.div className='flex justify-center' variants={container}>
          <motion.div
            className='max-w-[464px] relative flex justify-end w-full'
            variants={container}
          >
            <motion.img
              src='/crosses.png'
              alt='Cross-graphics'
              className='absolute w-2/3 z-0 left-0'
              variants={image}
            />
            <motion.div
              className='relative profile-container flex justify-end items-end w-4/5'
              variants={image}
            >
              <div className='profile-bg absolute aspect-square w-full bottom-0 rounded-2xl right-0'></div>
              <div className='profile-bg-border absolute aspect-square w-full bottom-0 rounded-2xl right-0'></div>
              <img
                src='/profile.png'
                alt="Hector's portrait"
                className='relative z-10 w-full object-contain rounded-b-2xl'
              />
              <div className='profile-border absolute aspect-square w-full bottom-0 rounded-2xl right-0 z-20'></div>
            </motion.div>
          </motion.div>
        </motion.div>
        <motion.div
          className='text-left flex flex-col justify-center'
          variants={container}
        >
          <motion.div variants={copyVariant}>
            <SectionHead>About Me</SectionHead>
          </motion.div>
          <motion.p className='pb-4' variants={copyVariant}>
            Hi, My name is{' '}
            <span className='font-bold text-primary-500'>Hector</span>. As a
            developer with a designer's heart, I believe that websites and web
            apps should be both functional and visually captivating. My approach
            is UI/UX-driven, prioritizing ease of use and comfort to ensure
            users achieve their goals effortlessly and enjoyably.
          </motion.p>
          <motion.p variants={copyVariant}>
            I code to breathe life into my designs. Unlike printed media,
            websites and apps offer a dynamic, interactive canvas for
            creativity. The endless possibilities of coding allow me to create
            engaging and functional digital experiences. From planning to
            deployment, I thrive on every aspect of web development. My passion
            for both art and coding drives me to create seamless and beautiful
            user experiences.
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  );
}
