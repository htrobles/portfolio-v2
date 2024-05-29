import React, { useEffect } from 'react';
import Card from '../Card';
import { ExperienceType } from '../../data/experience';
import Button from '../Button';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6';

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
              icon={<FaChevronLeft />}
              color="primary"
              onClick={onClickPrevious}
              iconPosition="left"
            >
              Previous
            </Button>
          </div>
          <div className={isLast ? 'invisible' : 'visible'}>
            <Button
              color="primary"
              onClick={onClickNext}
              icon={<FaChevronRight />}
              iconPosition="right"
            >
              Next
            </Button>
          </div>
        </div>
        <div className="flex justify-between items-end">
          <h4 className="text-lg font-bold">{company}</h4>
          <p>{period}</p>
        </div>
        <p className="pb-4">{position}</p>
        <p>{description}</p>
      </Card>
    </div>
  );
}
