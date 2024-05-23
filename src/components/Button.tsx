import React, { ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
  type?: 'default' | 'outline';
  color?: 'primary' | 'white' | 'secondary';
  onPress?: (...args: any) => any;
};

export default function Button({
  children,
  type,
  color,
  onPress,
}: ButtonProps) {
  let classes: string;
  const finalType = type || 'default';
  const finalColor = color || 'primary';

  if (finalType === 'outline') {
    classes = `outline outline-${finalColor} text-${finalColor} hover:bg-${finalColor} py-2 px-8 rounded-sm hover:text-black font-semibold`;
  } else {
    classes = `bg-${finalColor} text-black py-2 px-8 rounded-sm hover:text-white font-semibold`;
  }

  return (
    <button onClick={onPress} className={classes}>
      {children}
    </button>
  );
}
