import React from 'react';
import './About.scss';

export default function About() {
  return (
    <section className="py-24 bg-white bg-opacity-5">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-screen-lg px-4">
        <div>
          <div className="relative flex justify-end w-full">
            <img src="/crosses.png" className="absolute w-2/3 z-0 left-0" />
            <div className="relative profile-container flex justify-end items-end w-4/5">
              <div className="profile-bg absolute aspect-square w-full bottom-0 rounded-2xl right-0"></div>
              <img
                src="/profile.png"
                alt="Hector's photo"
                className="relative z-10 w-full object-contain rounded-b-2xl"
              />
            </div>
          </div>
        </div>
        <div className="text-left">
          <h3 className="pb-10 text-3xl font-display">About Me</h3>
          <p className="pb-4">
            As a developer with a designer's heart, I believe that websites and
            web apps should be both functional and visually captivating. My
            approach is UI/UX-driven, prioritizing ease of use and comfort to
            ensure users achieve their goals effortlessly and enjoyably.
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
