import React from 'react';
import './About.scss';
import SectionHead from '../SectionHead';

export default function About() {
  return (
    <section id='about-me' className='py-24 bg-white bg-opacity-5'>
      <div className='container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-screen-lg px-8'>
        <div className='flex justify-center'>
          <div className='max-w-[464px] relative flex justify-end w-full'>
            <img
              src='/crosses.png'
              alt='Cross-graphics'
              className='absolute w-2/3 z-0 left-0'
            />
            <div className='relative profile-container flex justify-end items-end w-4/5'>
              <div className='profile-bg absolute aspect-square w-full bottom-0 rounded-2xl right-0'></div>
              <div className='profile-bg-border absolute aspect-square w-full bottom-0 rounded-2xl right-0'></div>
              <img
                src='/profile.png'
                alt="Hector's portrait"
                className='relative z-10 w-full object-contain rounded-b-2xl'
              />
              <div className='profile-border absolute aspect-square w-full bottom-0 rounded-2xl right-0 z-20'></div>
            </div>
          </div>
        </div>
        <div className='text-left flex flex-col justify-center'>
          <SectionHead>About Me</SectionHead>
          <p className='pb-4'>
            Hi, My name is{' '}
            <span className='font-bold text-primary-500'>Hector</span>. As a
            developer with a designer's heart, I believe that websites and web
            apps should be both functional and visually captivating. My approach
            is UI/UX-driven, prioritizing ease of use and comfort to ensure
            users achieve their goals effortlessly and enjoyably.
          </p>
          <p>
            I code to breathe life into my designs. Unlike printed media,
            websites and apps offer a dynamic, interactive canvas for
            creativity. The endless possibilities of coding allow me to create
            engaging and functional digital experiences. From planning to
            deployment, I thrive on every aspect of web development. My passion
            for both art and coding drives me to create seamless and beautiful
            user experiences.
          </p>
        </div>
      </div>
    </section>
  );
}
