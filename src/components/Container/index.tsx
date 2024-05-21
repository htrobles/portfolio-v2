import React, { ReactNode } from 'react';

type ContainerProps = {
  children: ReactNode;
  maxWidth?: number;
};

export default function Container({ children, maxWidth }: ContainerProps) {
  return (
    <div className="container mx-auto px-4" style={{ maxWidth }}>
      {children}
    </div>
  );
}
