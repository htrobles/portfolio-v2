export type ProjectType = {
  title: string;
  description: string;
  tech: string[];
  imgUrl: string;
  url: string;
};

const projects: ProjectType[] = [
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
    url: 'https://robleshector.gitlab.io/the-red-brick-oven/index.html',
  },
];

export default projects;
