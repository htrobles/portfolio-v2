import React from 'react';
import SectionHead from '../SectionHead';
import './WhatIDo.scss';
import Card from '../Card';

export default function WhatIDo() {
  return (
    <section id="what-i-do" className="py-24 bg-white bg-opacity-5">
      <div className="container mx-auto max-w-screen-lg px-8">
        <SectionHead>What I Do</SectionHead>
        <div className="flex flex-col lg:flex-row gap-8 items-center">
          <div className="flex gap-4 flex-col sm:flex-row lg:flex-col w-full basis-2/5">
            <div className="h-40 w-full relative rounded-lg overflow-hidden">
              <img
                className="h-40 w-full object-cover absolute -z-10"
                src="/design.png"
                alt="Design image"
              />
              <h4 className="service-card--title absolute bottom-0 left-0 right-0 p-5 text-center font-bold text-xl">
                Design.
              </h4>
            </div>
            <div className="h-40 w-full relative rounded-lg overflow-hidden">
              <img
                className="h-40 w-full object-cover absolute -z-10"
                src="/build.png"
                alt="Design image"
              />
              <h4 className="service-card--title absolute bottom-0 left-0 right-0 p-5 text-center font-bold text-xl">
                Build.
              </h4>
            </div>
            <div className="h-40 w-full relative rounded-lg overflow-hidden">
              <img
                className="h-40 w-full object-cover absolute -z-10"
                src="/solve.png"
                alt="Design image"
              />
              <h4 className="service-card--title absolute bottom-0 left-0 right-0 p-5 text-center font-bold text-xl">
                Solve.
              </h4>
            </div>
          </div>
          <div className="w-full basis-3/5 flex justify-center">
            <Card>
              <p className="pb-4">
                As a versatile full-stack developer with a designer's eye, I
                bring a unique blend of creativity and technical expertise to
                every project. My journey begins with design, where I craft
                visually appealing and user-centric interfaces that ensure a
                seamless user experience. I then move to the build phase, where
                I transform these designs into robust, high-performance
                applications using the latest web technologies. My skills in
                coding allow me to bring your ideas to life with precision and
                efficiency.
              </p>
              <p className="pb-4">
                But I don't stop there. I am dedicated to solving complex
                problems with innovative solutions, whether it's optimizing
                application performance, enhancing security, or ensuring
                scalability. My approach is holistic, considering every aspect
                of the project to deliver not just a product, but a solution
                that exceeds expectations.
              </p>
              <p>
                From concept to deployment, I am committed to turning your
                vision into reality with a perfect blend of design, development,
                and problem-solving skills.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
