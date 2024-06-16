import { useState } from 'react';
import SectionHead from '../SectionHead';
import Timeline from './Timeline';
import './Journey.scss';
import JourneyCards from './JourneyCards';
import { motion } from 'framer-motion';

export default function Journey() {
  const [activeJourneyIndex, setActiveJourneyIndex] = useState(0);

  const handleClickPrevious = () => {
    setActiveJourneyIndex(activeJourneyIndex - 1);
  };

  const handleClickNext = () => {
    setActiveJourneyIndex(activeJourneyIndex + 1);
  };

  return (
    <motion.section
      id='my-journey'
      className='py-24 overflow-x-hidden'
      onViewportLeave={() => setActiveJourneyIndex(0)}
    >
      <div className='container mx-auto max-w-screen-lg px-8'>
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ margin: '-25%', once: true }}
        >
          <SectionHead>My Journey</SectionHead>
        </motion.div>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
          <motion.div
            className='order-1 lg:order-2 lg:mt-10'
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ margin: '-25%', once: true }}
          >
            <Timeline
              activeJourneyIndex={activeJourneyIndex}
              onSelectJourney={setActiveJourneyIndex}
            />
          </motion.div>
          <motion.div
            className='journey-card-container order-2 lg:order-1 max-w-96'
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ margin: '-25%', once: true }}
          >
            <JourneyCards
              activeJourneyIndex={activeJourneyIndex}
              onClickPrevious={handleClickPrevious}
              onClickNext={handleClickNext}
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
