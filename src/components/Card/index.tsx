import React, { ReactNode } from 'react';
import './Card.scss';

type CardProps = {
  children: ReactNode;
};

export default function Card({ children }: CardProps) {
  return (
    <div className="card backdrop-blur-3xl p-8">
      {children}
      <div className="card-border absolute top-0 right-0 left-0 bottom-0"></div>
    </div>
  );
}
