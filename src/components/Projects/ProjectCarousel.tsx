import { CSSProperties } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  Autoplay,
  EffectCoverflow,
  Pagination,
  Parallax,
} from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import projects from './projects';
import ProjectItem from './ProjectItem';
// import 'swiper/css/parallax';

const swiperStyle = {
  '--swiper-pagination-color': '#92018C',
  '--swiper-pagination-bullet-inactive-color': '#fff',
  '--swiper-pagination-bullet-inactive-opacity': '1',
  '--swiper-pagination-bullet-size': '16px',
  '--swiper-pagination-bullet-horizontal-gap': '8px',
};

export default function ProjectCarousel() {
  return (
    <Swiper
      wrapperClass='pb-12'
      spaceBetween={50}
      speed={1000}
      pagination={{
        dynamicBullets: true,
        clickable: true,
      }}
      modules={[Parallax, Pagination, Autoplay, EffectCoverflow]}
      autoplay
      parallax={true}
      effect={'coverflow'}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      style={swiperStyle as CSSProperties}
    >
      {projects.map((project) => (
        <SwiperSlide key={project.title}>
          <ProjectItem project={project} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
