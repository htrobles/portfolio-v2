import React from 'react';
import HeaderNav from './HeaderNav';

export default function Header() {
  return (
    <div className="absolute w-screen">
      <div className="container mx-auto px-4">
        <div className="mx-auto flex justify-between py-4">
          <a href="#">
            <span className="text-primary">{'<hr />'}</span>
          </a>
          <HeaderNav />
        </div>
      </div>
    </div>
  );
}
