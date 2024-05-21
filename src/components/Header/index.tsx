import React from 'react';
import HeaderNav from './HeaderNav';
import Container from '../Container';

export default function Header() {
  return (
    <div className="absolute w-screen">
      <Container>
        <div className="mx-auto flex justify-between py-4">
          <a href="#">
            <span className="text-primary">{'<hr />'}</span>
          </a>
          <HeaderNav />
        </div>
      </Container>
    </div>
  );
}
