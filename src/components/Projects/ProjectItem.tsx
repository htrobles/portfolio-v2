import React from 'react';
import { ProjectType } from './projects';
import Button from '../Button';

export default function ProjectItem({
  project: { title, description, imgUrl, tech, url },
}: {
  project: ProjectType;
}) {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
      <img
        src={imgUrl}
        alt={title}
        className='aspect-video object-cover rounded-md'
      />
      <div className='flex flex-col justify-between px-1 md:px-0'>
        <div>
          <h4 className='text-lg font-bold mb-4' data-swiper-parallax='-400'>
            {title}
          </h4>
          <p className='mb-4' data-swiper-parallax='-300'>
            {description}
          </p>
          <div
            className='mb-4 flex flex-wrap gap-2'
            data-swiper-parallax='-200'
          >
            {tech.map((t) => (
              <div className='bg-primary-500 py-1 px-4 text-sm rounded-full hover:bg-secondary-500 transition-colors duration-300 cursor-default'>
                {t}
              </div>
            ))}
          </div>
        </div>
        <div data-swiper-parallax='-100'>
          <a href={url} target='_blank' rel='noreferrer'>
            <Button type='outline' color='primary'>
              View Project
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}
