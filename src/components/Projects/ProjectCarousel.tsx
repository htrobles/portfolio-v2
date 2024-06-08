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
      wrapperClass="pb-12"
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
      {[1, 2, 3, 4].map((index) => (
        <SwiperSlide key={index}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <img
              src="/design.png"
              alt=""
              className="aspect-video object-cover"
            />
            <div>
              <h4 className="text-lg font-bold" data-swiper-parallax="-300">
                Project
              </h4>
              <div className="mb-2" data-swiper-parallax="-200">
                Subtitle
              </div>
              <div className="text" data-swiper-parallax="-100">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam dictum mattis velit, sit amet faucibus felis iaculis
                  nec. Nulla laoreet justo vitae porttitor porttitor.
                  Suspendisse in sem justo. Integer laoreet magna nec elit
                  suscipit, ac laoreet nibh euismod. Aliquam hendrerit lorem at
                  elit facilisis rutrum. Ut at ullamcorper velit. Nulla ligula
                  nisi, imperdiet ut lacinia nec, tincidunt ut libero. Aenean
                  feugiat non eros quis feugiat.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
