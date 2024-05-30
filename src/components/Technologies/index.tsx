import React from 'react';
import SectionHead from '../SectionHead';

type Technology = {
  src: string;
  alt: string;
};

const technologies: Technology[] = [
  { src: '/js.png', alt: 'Javascript' },
  { src: '/ts.png', alt: 'Typescript' },
  { src: '/php.png', alt: 'PHP' },
  { src: '/react.png', alt: 'ReactJS' },
  { src: '/nodejs.png', alt: 'NodeJS' },
  { src: '/nextjs.png', alt: 'NextJS' },
  { src: '/graphql.png', alt: 'GraphQL' },
  { src: '/laravel.png', alt: 'Laravel' },
  { src: '/mongodb.png', alt: 'MongoDB' },
  { src: '/firebase.png', alt: 'Firebase' },
  { src: '/mysql.png', alt: 'MySQL' },
  { src: '/tailwindcss.png', alt: 'TailwindCSS' },
  { src: '/html.png', alt: 'HTML5' },
  { src: '/css.png', alt: 'CSS3' },
];

export default function Technologies() {
  return (
    <section id="technologies" className="py-24">
      <div className="container mx-auto max-w-screen-lg px-8">
        <SectionHead>Technologies</SectionHead>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-4 w-full gap-4 order-2 md:order-1">
            {technologies.map(({ src, alt }) => (
              <img key={alt} src={src} alt={alt} />
            ))}
          </div>
          <div className="w-full order-1 md:order-2">
            <p>
              At the heart of my craft lies a passion for innovation and
              exploration. While my expertise primarily centers around the MERN
              stack—utilizing MongoDB, Express.js, React, and Node.js to build
              dynamic and responsive web applications—I'm not bound by
              limitations. Embracing versatility, I delve into diverse
              technologies such as PHP, WordPress, Laravel, and MySQL, adapting
              to varying project requirements with ease. But it doesn't stop
              there. I thrive on the thrill of learning new frameworks,
              libraries, and languages, eager to expand my repertoire and stay
              at the forefront of technological advancements. Whether it's
              diving into emerging trends or mastering established tools, I am
              committed to harnessing the power of technology to bring
              innovative solutions to life.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
