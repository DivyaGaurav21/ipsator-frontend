import React from 'react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Card from './Card';



const TeamDetail = ({ cards }) => {
    return (
        <div className='w-full md:w-[85%] p-8 bg-neutral-400 m-auto rounded-2xl'>
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={20}
                slidesPerView={3}
                navigation
                pagination={{ clickable: true }}
                loop
                autoplay={{ delay: 3000 }}
            >
                {cards.map((card, index) => (
                    <SwiperSlide key={index}>
                        <Card {...card} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default TeamDetail;


