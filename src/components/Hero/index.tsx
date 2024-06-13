import './Hero.scss';
import Button from '../Button';
import { Variants, motion } from 'framer-motion';

export default function Hero() {
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.5,
      },
    },
  };

  const heading1: Variants = {
    hidden: { x: -100, opacity: 0 },
    show: { x: 0, opacity: 1 },
  };

  const heading2: Variants = {
    hidden: { y: -32, opacity: 0 },
    show: { y: 0, opacity: 1 },
  };

  const subhead: Variants = {
    hidden: { opacity: 0, y: 32 },
    show: {
      opacity: 1,
      y: 0,
    },
  };

  const copyItem: Variants = {
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
    <div className='h-screen flex flex-col justify-center items-center'>
      <motion.div
        className='container mx-auto px-8'
        style={{ maxWidth: 850 }}
        variants={container}
        initial='hidden'
        animate='show'
      >
        <motion.h1
          className='hero-copy font-display font-bold text-2xl sm:text-3xl md:text-4xl leading-none tracking-wide'
          variants={heading1}
        >
          IF YOU CAN THINK IT,
        </motion.h1>
        <motion.h1
          className='hero-copy font-display font-bold text-2xl sm:text-3xl md:text-4xl leading-none tracking-wide'
          variants={heading2}
        >
          WE CAN BUILD IT.
        </motion.h1>
        <motion.h2
          className='text-white text-lg sm:text-xl md:text-2xl mb-8'
          variants={subhead}
        >
          Turn your ideas into great solutions.
        </motion.h2>
        <motion.p
          className='text-white mb-10 tracking-widest overflow-hidden'
          variants={copyItem}
        >
          Transforming your concepts into high-performance applications is my
          specialty. From the initial brainstorming session to the final
          deployment, every detail is carefully crafted to ensure top-notch
          results. Whether it's designing sleek mobile interfaces, developing
          robust web platforms, or creating innovative software solutions, your
          ideas are brought to life in extraordinary digital realities.
        </motion.p>
        <motion.div variants={copyItem} className='w-fit'>
          <a href='#contact'>
            <Button type='outline' color='white'>
              Let's Collaborate
            </Button>
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
}
