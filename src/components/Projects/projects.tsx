export type ProjectType = {
  title: string;
  description: string;
  tech: string[];
  imgUrl: string;
  url: string;
  isMini?: boolean;
};

const projects: ProjectType[] = [
  {
    title: 'Gospeltrend London Website',
    description:
      'This school app project was developed by a team consisting of Leviel Nicolas, Socheat Keo, Tanya Masiala, Charie Hare, and myself. As the tech lead, I was responsible for selecting the technology stack, designing the database architecture, and establishing the initial codebases for both the React Native web and mobile app (not published) and the server. Additionally, I contributed to the UI/UX design. Please note that due to the use of a free server, there may be a startup delay of over 50 seconds for the backend server.',
    tech: ['React', 'StrapiJS', 'TailwindCSS', 'Vercel'],
    imgUrl: './projects/gospeltrend.jpg',
    url: 'https://www.gospeltrendlondon.org/',
  },
  {
    title: 'Lazy Pizza',
    description:
      'This school project was developed by a team consisting of Leviel Nicolas, Socheat Keo, and myself. The project is simple pizza ordering website where you can build your own pizza and review your orders.',
    tech: ['HTML', 'CSS', 'Sass'],
    imgUrl: './projects/lazy-pizza.jpg',
    url: 'https://lazypizza.netlify.app/',
  },
  {
    title: 'Inkwell Publishing Inc. Website',
    description:
      'A website for a small publishing company called Inkwell showcasing their services.',
    tech: ['HTML', 'CSS', 'Sass'],
    imgUrl: './projects/inkwell.jpg',
    url: 'https://inkwellphilippines.com/',
  },
  {
    title: 'The Red Brick Oven',
    description: 'A static website for a pizza restaurant.',
    tech: ['HTML', 'CSS', 'Sass', 'Bootstrap'],
    imgUrl: './projects/red-brick-oven.jpg',
    url: 'https://robleshector.gitlab.io/the-red-brick-oven/',
  },
];

export default projects;
