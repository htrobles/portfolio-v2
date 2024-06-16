import SectionHead from '../SectionHead';
import ProjectCarousel from './ProjectCarousel';
import { Variants, motion } from 'framer-motion';

export default function Projects() {
  const container: Variants = {
    show: {
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.75,
      },
    },
  };

  const items: Variants = {
    hidden: {
      opacity: 0,
      left: -100,
    },
    show: {
      opacity: 1,
      left: 0,
    },
  };

  return (
    <section id='projects' className='py-24 bg-white bg-opacity-5'>
      <motion.div
        className='container mx-auto max-w-screen-lg px-8'
        initial='hidden'
        whileInView='show'
        variants={container}
        viewport={{ margin: '-25%', once: true }}
      >
        <motion.div variants={items} className='relative'>
          <SectionHead>Projects</SectionHead>
        </motion.div>
        <motion.div variants={items} className='relative'>
          <ProjectCarousel />
        </motion.div>
      </motion.div>
    </section>
  );
}
