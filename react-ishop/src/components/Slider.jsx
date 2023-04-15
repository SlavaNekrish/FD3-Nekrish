import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Autoplay } from 'swiper';
import 'swiper/swiper-bundle.min.css';

export const Slider = ({ slides }) => {
  return (
    <Swiper
      modules={[A11y, Autoplay]}
      spaceBetween={50}
      slidesPerView={5}
      autoplay={{ delay: 3000 }}
      pagination={{ clickable: true }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}>
      {slides.map((slide) => (
        <SwiperSlide key={slide.id}>
          <Link to={`/fullItem/${slide.id}`}>
            <img src={slide.imageURL} alt={slide.title} />
            <h5>{slide.price} Br</h5>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
