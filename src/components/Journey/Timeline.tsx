import React from 'react';
import TimelineEntry from './TimelineEntry';
import { experiences } from '../../data/experience';

export default function Timeline() {
  return (
    <div>
      <div className="timeline-container relative">
        <div className="timeline relative" style={{ left: '0px' }}>
          {experiences.map(({ period, company, position }, index) => (
            <TimelineEntry
              key={period}
              index={index}
              period={period}
              company={company}
              position={position}
            />
          ))}
          <div className="timeline-bar absolute h-1 bg-white -z-10"></div>
        </div>
      </div>
    </div>
  );
}
