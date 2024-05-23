import React from 'react';
import './Hero.css';
import Button from '../Button';

export default function Hero() {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <div className="container mx-auto px-8" style={{ maxWidth: 850 }}>
        <h1 className="hero-copy font-display font-bold text-2xl sm:text-3xl md:text-4xl leading-none">
          IF YOU CAN THINK IT,
          <br /> WE CAN BUILD IT.
        </h1>
        <h2 className="text-white text-lg sm:text-xl md:text-2xl mb-8">
          Turn your ideas into great solutions.
        </h2>
        <p className="text-white mb-10 tracking-widest">
          Transforming your concepts into high-performance applications is my
          specialty. From the initial brainstorming session to the final
          deployment, every detail is carefully crafted to ensure top-notch
          results. Whether it's designing sleek mobile interfaces, developing
          robust web platforms, or creating innovative software solutions, your
          ideas are brought to life in extraordinary digital realities.
        </p>
        <Button type="outline">Let's Collaborate</Button>
      </div>
      <div className="mx-auto absolute bottom-10 flex flex-col justify-center items-center">
        <img
          className="w-10 object-contain"
          src="/double-down.svg"
          alt="Scroll Down"
        />
      </div>
    </div>
  );
}
