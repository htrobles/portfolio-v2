import React, { useEffect } from 'react';
import Card from '../Card';
import { ExperienceType } from '../../data/experience';
import Button from '../Button';

type JourneyCardProps = {
  experience: ExperienceType;
  isFirst: boolean;
  isLast: boolean;
};

export default function JourneyCard({
  experience,
  isFirst,
  isLast,
}: JourneyCardProps) {
  const { period, company, position, description } = experience;

  return (
    <div className="journey-card">
      <Card>
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
