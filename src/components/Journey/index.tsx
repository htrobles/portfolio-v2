import React, { useState } from 'react';
import SectionHead from '../SectionHead';
import Card from '../Card';
import Timeline from './Timeline';
import './Journey.scss';
import JourneyCards from './JourneyCards';
import Button from '../Button';
import { experiences } from '../../data/experience';

export default function Journey() {
  const [activeJourneyIndex, setActiveJourneyIndex] = useState(0);

  const handleClickPrevious = () => {
    setActiveJourneyIndex(activeJourneyIndex - 1);
  };

  const handleClickNext = () => {
    setActiveJourneyIndex(activeJourneyIndex + 1);
  };

  return (
    <section id="my-journey" className="py-24 overflow-x-hidden">
      <div className="container mx-auto max-w-screen-lg px-8">
        <SectionHead>My Journey</SectionHead>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="order-1 lg:order-2 lg:mt-10">
            <Timeline activeJourneyIndex={activeJourneyIndex} />
          </div>
          <div className="journey-card-container order-2 lg:order-1 max-w-96">
            <JourneyCards
              activeJourneyIndex={activeJourneyIndex}
              onClickPrevious={handleClickPrevious}
              onClickNext={handleClickNext}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
