import React from 'react';
import './Hero.css';
import Container from '../Container';

export default function Hero() {
  return (
    <div className="h-screen flex justify-center items-center">
      <Container maxWidth={850}>
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
        <button className="outline outline-primary text-primary py-2 px-4 rounded-sm hover:bg-primary hover:text-black font-semibold">
          Let's Collaborate
        </button>
      </Container>
    </div>
  );
}
