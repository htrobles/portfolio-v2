import React, { ReactNode } from 'react';

type SectionHeadProps = {
  children: ReactNode;
};

export default function SectionHead({ children }: SectionHeadProps) {
  return (
    <h3 className="mb-4 md:mb-6 text-2xl md:text-3xl font-display">
      {children}
    </h3>
  );
}
