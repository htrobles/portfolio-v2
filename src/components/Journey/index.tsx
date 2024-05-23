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

  return (
    <section id="my-journey" className="py-24 overflow-x-hidden min-h-screen">
      <div className="container mx-auto max-w-screen-lg px-8">
        <SectionHead>My Journey</SectionHead>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
          <div className="order-1 md:order-2 md:pt-8">
            <Timeline activeJourneyIndex={activeJourneyIndex} />
            <div className="flex justify-between mt-10">
              <div
                className={activeJourneyIndex === 0 ? 'invisible' : 'visible'}
              >
                <Button
                  type="outline"
                  color="white"
                  onPress={() => setActiveJourneyIndex(activeJourneyIndex - 1)}
                >
                  Previous
                </Button>
              </div>
              <div
                className={
                  activeJourneyIndex === experiences.length - 1
                    ? 'invisible'
                    : 'visible'
                }
              >
                <Button
                  type="outline"
                  color="white"
                  onPress={() => setActiveJourneyIndex(activeJourneyIndex + 1)}
                >
                  Next
                </Button>
              </div>
            </div>
          </div>
          <div className="order-2 md:order-1">
            <JourneyCards activeJourneyIndex={activeJourneyIndex} />
          </div>
        </div>
      </div>
    </section>
  );
}
