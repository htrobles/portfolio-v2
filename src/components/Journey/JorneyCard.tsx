import React, { useEffect } from 'react';
import Card from '../Card';
import { ExperienceType } from '../../data/experience';
import Button from '../Button';

type JourneyCardProps = {
  experience: ExperienceType;
  isFirst: boolean;
  isLast: boolean;
  onClickPrevious: () => void;
  onClickNext: () => void;
};

export default function JourneyCard({
  experience,
  isFirst,
  isLast,
  onClickPrevious,
  onClickNext,
}: JourneyCardProps) {
  const { period, company, position, description } = experience;

  return (
    <div className="journey-card">
      <Card>
        <div className="flex justify-between mb-4">
          <div className={isFirst ? 'invisible' : 'visible'}>
            <Button
              type="icon"
              color="white"
              onClick={onClickPrevious}
              icon="chevron-left"
            >
              <img
                src="/chevron-left.svg"
                alt="Previous Experience Button"
                className="h-4"
              />
            </Button>
          </div>
          <div className={isLast ? 'invisible' : 'visible'}>
            <Button
              type="icon"
              color="white"
              onClick={onClickNext}
              icon="chevron-right"
            >
              <img
                src="/chevron-right.svg"
                alt="Next Experience Button"
                className="h-4"
              />
            </Button>
          </div>
        </div>
        <div className="flex justify-between items-end text-white">
          <h4 className="text-lg font-bold">{company}</h4>
          <p>{period}</p>
        </div>
        <p className="pb-4">{position}</p>
        <p>{description}</p>
      </Card>
    </div>
  );
}
