import React from 'react';
import SectionHead from '../SectionHead';
import { Variants, motion } from 'framer-motion';

type Technology = {
  src: string;
  alt: string;
};

const technologies: Technology[] = [
  { src: '/tech/js.png', alt: 'Javascript' },
  { src: '/tech/ts.png', alt: 'Typescript' },
  { src: '/tech/php.png', alt: 'PHP' },
  { src: '/tech/react.png', alt: 'ReactJS' },
  { src: '/tech/nodejs.png', alt: 'NodeJS' },
  { src: '/tech/nextjs.png', alt: 'NextJS' },
  { src: '/tech/graphql.png', alt: 'GraphQL' },
  { src: '/tech/laravel.png', alt: 'Laravel' },
  { src: '/tech/mongodb.png', alt: 'MongoDB' },
  { src: '/tech/firebase.png', alt: 'Firebase' },
  { src: '/tech/mysql.png', alt: 'MySQL' },
  { src: '/tech/tailwindcss.png', alt: 'TailwindCSS' },
  { src: '/tech/html.png', alt: 'HTML5' },
  { src: '/tech/css.png', alt: 'CSS3' },
];

export default function Technologies() {
  const container: Variants = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.125,
      },
    },
  };

  const tech: Variants = {
    hidden: {
      opacity: 0,
      top: -32,
    },
    show: {
      opacity: 1,
      top: 0,
    },
  };

  const head: Variants = {
    hidden: {
      opacity: 0,
      left: -32,
    },
    show: {
      opacity: 1,
      left: 0,
    },
  };

  const copy: Variants = {
    hidden: {
      opacity: 0,
      bottom: -32,
    },
    show: {
      opacity: 1,
      bottom: 0,
    },
  };

  return (
    <section id='technologies' className='py-24'>
      <div className='container mx-auto max-w-screen-lg px-8'>
        <motion.div
          variants={head}
          initial='hidden'
          whileInView='show'
          viewport={{ margin: '-25%', once: true }}
          className='relative'
        >
          <SectionHead>Technologies</SectionHead>
        </motion.div>
        <div className='flex flex-col md:flex-row gap-8'>
          <motion.div
            className='grid grid-cols-3 sm:grid-cols-5 md:grid-cols-4 w-full gap-8 order-2 md:order-1'
            initial='hidden'
            variants={container}
            whileInView='show'
            viewport={{ margin: '-25%', once: true }}
          >
            {technologies.map(({ src, alt }) => (
              <motion.div variants={tech} className='relative'>
                <img className='block' key={alt} src={src} alt={alt} />
              </motion.div>
            ))}
          </motion.div>
          <div className='w-full order-1 md:order-2'>
            <motion.p
              variants={copy}
              initial='hidden'
              whileInView='show'
              viewport={{ margin: '-25%', once: true }}
              className='relative'
            >
              At the heart of my craft lies a passion for innovation and
              exploration. While my expertise primarily centers around the MERN
              stack—utilizing MongoDB, Express.js, React, and Node.js to build
              dynamic and responsive web applications—I'm not bound by
              limitations. Embracing versatility, I delve into diverse
              technologies such as PHP, WordPress, Laravel, and MySQL, adapting
              to varying project requirements with ease. But it doesn't stop
              there. I thrive on the thrill of learning new frameworks,
              libraries, and languages, eager to expand my repertoire and stay
              at the forefront of technological advancements. Whether it's
              diving into emerging trends or mastering established tools, I am
              committed to harnessing the power of technology to bring
              innovative solutions to life.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
