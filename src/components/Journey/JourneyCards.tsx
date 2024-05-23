import React from 'react';
import Card from '../Card';
import { experiences } from '../../data/experience';
import JourneyCard from './JorneyCard';

type JourneyCardsProps = {
  activeJourneyIndex: number;
  onClickPrevious: () => void;
  onClickNext: () => void;
};

export default function JourneyCards({
  activeJourneyIndex,
  onClickNext,
  onClickPrevious,
}: JourneyCardsProps) {
  const experience = experiences[activeJourneyIndex];

  return (
    <div>
      <JourneyCard
        key={experience.period}
        experience={experience}
        isFirst={activeJourneyIndex === 0}
        isLast={activeJourneyIndex === experiences.length - 1}
        onClickPrevious={onClickPrevious}
        onClickNext={onClickNext}
      />
    </div>
  );
}
