import React from 'react'
import "./Testimonials.css"
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper';

const Testimonials = () => {
  return (
    <div>
         <div className="container">
      <h1 className="heading">Flower Gallery</h1>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide>
          <img src='https://images.pexels.com/photos/935985/pexels-photo-935985.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src='https://images.pexels.com/photos/936119/pexels-photo-936119.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src='https://images.pexels.com/photos/1191503/pexels-photo-1191503.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src='https://images.pexels.com/photos/871495/pexels-photo-871495.jpeg?auto=compress&cs=tinysrgb&w=600' alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src='https://images.pexels.com/photos/935951/pexels-photo-935951.jpeg?auto=compress&cs=tinysrgb&w=600' alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src='https://images.pexels.com/photos/2033447/pexels-photo-2033447.jpeg?auto=compress&cs=tinysrgb&w=600' alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src='https://images.pexels.com/photos/1139243/pexels-photo-1139243.jpeg?auto=compress&cs=tinysrgb&w=600' alt="slide_image" />
        </SwiperSlide>

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
    </div>
  )
}

export default Testimonials