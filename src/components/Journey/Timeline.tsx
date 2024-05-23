import React from 'react';
import TimelineEntry from './TimelineEntry';
import { experiences } from '../../data/experience';

type TimelineProps = {
  activeJourneyIndex: number;
};

export default function Timeline({ activeJourneyIndex }: TimelineProps) {
  const left = activeJourneyIndex * -200;

  return (
    <div className="timeline-container relative">
      <div className="timeline relative" style={{ left: `${left}px` }}>
        {experiences.map(({ period, company, position }, index) => (
          <TimelineEntry
            key={period}
            index={index}
            period={period}
            company={company}
            position={position}
            isActive={index === activeJourneyIndex}
          />
        ))}
        <div className="timeline-bar absolute h-1 bg-white -z-10"></div>
      </div>
    </div>
  );
}
