import React, { ReactNode } from 'react';

const possibleClasses = [
  'outline',
  `outline-primary-500`,
  `outline-secondary`,
  `outline-white`,
  `text-primary-500`,
  `text-secondary`,
  `text-white`,
  `hover:bg-primary-500`,
  `hover:bg-secondary`,
  `hover:bg-white`,
  'py-2',
  'px-8',
  'rounded-sm',
  'hover:text-black',
  `bg-primary-500`,
  `bg-secondary`,
  `bg-white`,
];

type ButtonClasses = {
  [key: string]: {
    primary: string;
    secondary: string;
    white: string;
  };
};

const classes: ButtonClasses = {
  outline: {
    primary:
      'transition-colors duration-300 font-semibold select-none flex gap-2 items-center justify-center disabled:bg-gray-400 disabled:text-gray-500 disabled:cursor-not-allowed outline outline-primary-500 text-primary-500 hover:bg-primary-500 py-2 px-8 rounded-sm hover:text-black',
    secondary:
      'transition-colors duration-300 font-semibold select-none flex gap-2 items-center justify-center disabled:bg-gray-400 disabled:text-gray-500 disabled:cursor-not-allowed outline outline-secondary-500 text-secondary-500 hover:bg-secondary-500 py-2 px-8 rounded-sm hover:text-black',
    white:
      'transition-colors duration-300 font-semibold select-none flex gap-2 items-center justify-center disabled:bg-gray-400 disabled:text-gray-500 disabled:cursor-not-allowed outline outline-white text-white hover:bg-white py-2 px-8 rounded-sm hover:text-black',
  },
  block: {
    primary:
      'transition-colors duration-300 font-semibold select-none flex gap-2 items-center justify-center disabled:bg-gray-400 disabled:text-gray-500 disabled:cursor-not-allowed py-2 px-8 rounded-sm text-white bg-primary-500 hover:bg-primary-600',
    secondary:
      'transition-colors duration-300 font-semibold select-none flex gap-2 items-center justify-center disabled:bg-gray-400 disabled:text-gray-500 disabled:cursor-not-allowed py-2 px-8 rounded-sm text-white bg-secondary-500 hover:bg-secondary-600',
    white:
      'transition-colors duration-300 font-semibold select-none flex gap-2 items-center justify-center disabled:bg-gray-400 disabled:text-gray-500 disabled:cursor-not-allowed bg-white py-2 px-8 rounded-sm text-black hover:bg-primary-500 hover:outline-primary-500 hover:text-white',
  },
  default: {
    primary:
      'transition-colors duration-300 font-semibold select-none flex gap-2 items-center justify-center disabled:bg-gray-400 disabled:text-gray-500 disabled:cursor-not-allowed text-primary-500 hover:text-primary-600',
    secondary:
      'transition-colors duration-300 font-semibold select-none flex gap-2 items-center justify-center disabled:bg-gray-400 disabled:text-gray-500 disabled:cursor-not-allowed text-secondary-500 hover:text-secondary-600',
    white:
      'transition-colors duration-300 font-semibold select-none flex gap-2 items-center justify-center disabled:bg-gray-400 disabled:text-gray-500 disabled:cursor-not-allowed text-white hover:opacity-90',
  },
};

type ButtonProps = {
  children?: ReactNode;
  type?: 'default' | 'outline' | 'block';
  color?: 'primary' | 'white' | 'secondary';
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
  onClick?: (...args: any) => any;
  isSubmit?: boolean;
  disabled?: boolean;
};

export default function Button({
  children,
  type,
  color,
  icon,
  iconPosition,
  onClick,
  isSubmit,
  disabled,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={classes[type || 'default'][color ?? 'white']}
      type={isSubmit ? 'submit' : 'button'}
      disabled={disabled}
    >
      {iconPosition === 'left' && icon && icon}
      {children}
      {iconPosition === 'right' && icon && icon}
    </button>
  );
}
