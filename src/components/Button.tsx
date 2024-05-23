import React, { ReactNode } from 'react';
import { IconType } from 'react-icons';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6';

type ButtonProps = {
  children: ReactNode;
  type?: 'default' | 'outline' | 'icon' | 'link';
  color?: 'primary' | 'white' | 'secondary';
  icon?: string;
  onClick?: (...args: any) => any;
};

const icons: { [key: string]: IconType } = {
  'chevron-left': FaChevronLeft,
  'chevron-right': FaChevronRight,
};

export default function Button({
  children,
  type,
  color,
  icon,
  onClick,
}: ButtonProps) {
  let classes: string;
  const finalType = type || 'default';
  const finalColor = color || 'primary';

  switch (finalType) {
    case 'outline':
      classes = `outline outline-${finalColor} text-${finalColor} hover:bg-${finalColor} py-2 px-8 rounded-sm hover:text-black font-semibold select-none`;
      break;
    case 'icon':
      classes = `text-${finalColor} hover:bg-${finalColor} py-2 px-2 rounded-sm hover:text-black font-semibold select-none stroke-black`;
      break;
    default:
      classes = `bg-${finalColor} text-black py-2 px-8 rounded-sm hover:text-white font-semibold select-none`;
      break;
  }

  const Icon = icon ? icons[icon] : null;

  return (
    <button onClick={onClick} className={classes}>
      {finalType === 'icon' && Icon ? <Icon /> : children}
    </button>
  );
}
