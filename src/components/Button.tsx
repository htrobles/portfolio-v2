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
  const finalType = type || 'default';
  const finalColor = color || 'primary';

  switch (finalType) {
    case 'outline':
      classes = `outline outline-${finalColor} text-${finalColor} hover:bg-${finalColor} py-2 px-8 rounded-sm hover:text-black font-semibold select-none flex gap-2 items-center`;
      break;
    case 'block':
      classes = `bg-${finalColor} text-black py-2 px-8 rounded-sm hover:text-white font-semibold select-none flex gap-2 items-center`;
      break;
    default:
      classes = `text-${finalColor} hover:bg-${finalColor} hover:text-white font-semibold select-none flex gap-2 items-center`;
      break;
  }

  return (
    <button
      onClick={onClick}
      className={classes}
      type={isSubmit ? 'submit' : 'button'}
    >
      {iconPosition === 'left' && icon && icon}
      {children}
      {iconPosition === 'right' && icon && icon}
    </button>
  );
}
