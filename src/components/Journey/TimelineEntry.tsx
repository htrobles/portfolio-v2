import React from 'react';

type TimelineEntryProps = {
  index: number;
  period: string;
  company: string;
  position: string;
  isActive: boolean;
  onSelectJourney: (index: number) => void;
};

const dotBgClass = {
  active: 'bg-secondary-500',
  inactive: 'bg-white',
};

export default function TimelineEntry({
  index,
  company,
  period,
  position,
  isActive,
  onSelectJourney,
}: TimelineEntryProps) {
  let colStart = index + 1;
  const rowStart = index % 2 === 0 ? 1 : 2;
  const isTop = rowStart === 1;

  const dotClassName = `w-5 h-5 ${
    isActive ? dotBgClass.active : dotBgClass.inactive
  } ${
    isActive ? 'outline-4' : 'outline-0'
  } rounded-full relative transition ease-in-out duration-1000 outline`;

  return (
    <div
      className={`text-center flex flex-col items-center relative cursor-pointer`}
      onClick={() => onSelectJourney(index)}
      style={{
        gridColumn: `${colStart}/${colStart + 1}`,
        gridRow: `${rowStart}/${rowStart + 1}`,
        bottom: isTop ? `-10px` : 'auto',
        top: isTop ? 'auto' : `-10px`,
      }}
    >
      <div className={isTop ? 'mb-5' : 'mt-5'} style={{ order: isTop ? 1 : 2 }}>
        <p className='text-sm whitespace-nowrap	'>{period}</p>
        <h5 className='font-bold whitespace-nowrap	'>{company}</h5>
        <p className='whitespace-nowrap	'>{position}</p>
      </div>
      <div className={dotClassName} style={{ order: isTop ? 2 : 1 }} />
    </div>
  );
}
