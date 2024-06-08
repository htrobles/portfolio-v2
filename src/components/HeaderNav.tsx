import React, { RefObject } from 'react';
import Button from './Button';

export default function HeaderNav() {
  return (
    <ul className="hidden lg:flex gap-4 text-white items-center">
      <li>
        <a href="#about-me">About Me</a>
      </li>
      <li>
        <a href="#my-journey">My Journey</a>
      </li>
      <li>
        <a href="#what-i-do">What I Do</a>
      </li>
      <li>
        <a href="#technologies">Technologies</a>
      </li>
      <li>
        <a href="#projects">Projects</a>
      </li>
      <a href="#contact">
        <Button type="outline" color="primary">
          Let's Collaborate
        </Button>
      </a>
    </ul>
  );
}
