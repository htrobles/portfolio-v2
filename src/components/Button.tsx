import React, { ReactNode } from 'react';
import { IconType } from 'react-icons';

type ButtonProps = {
  children?: ReactNode;
  type?: 'default' | 'outline' | 'block';
  color?: 'primary' | 'white' | 'secondary';
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
  onClick?: (...args: any) => any;
  isSubmit?: boolean;
};

export default function Button({
  children,
  type,
  color,
  icon,
  iconPosition,
  onClick,
  isSubmit,
}: ButtonProps) {
  let classes: string;
  const finalColor = color || 'primary';

  const buttonClasses = [
    'font-semibold',
    'select-none',
    'flex ',
    'gap-2',
    'items-center',
    'justify-center',
  ];

  switch (type) {
    case 'outline':
      buttonClasses.push(
        'outline',
        `outline-${finalColor}`,
        `text-${finalColor}`,
        `hover:bg-${finalColor}`,
        'py-2',
        'px-8',
        'rounded-sm',
        'hover:text-black'
      );
      break;
    case 'block':
      buttonClasses.push(
        `bg-${finalColor}`,
        `text-black`,
        `py-2`,
        `px-8`,
        `rounded-sm`,
        `hover:text-white`
      );
      break;
    default:
      buttonClasses.push(`text-${finalColor}`, `hover:text-white`);
      break;
  }

  return (
    <button
      onClick={onClick}
      className={buttonClasses.join(' ')}
      type={isSubmit ? 'submit' : 'button'}
    >
      {iconPosition === 'left' && icon && icon}
      {children}
      {iconPosition === 'right' && icon && icon}
    </button>
  );
}
