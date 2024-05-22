import React from 'react';

export default function HeaderNav() {
  return (
    <ul className="hidden md:flex gap-4 text-white">
      <li>
        <a href="#about-me">About Me</a>
      </li>
      <li>
        <a href="#my-journey">My Journey</a>
      </li>
      <li>
        <a href="#services">What I Do</a>
      </li>
      <li>
        <a href="#technologies">Technologies</a>
      </li>
      <li>
        <a href="#projects">Projects</a>
      </li>
    </ul>
  );
}
