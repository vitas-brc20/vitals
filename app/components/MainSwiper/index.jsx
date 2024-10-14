'use client'
import Image from 'next/image';
import {useRef} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

function MainSwiper({sliderImages, delay}) {
    const sliderRef = useRef(null);

    return (
        <>
                <div className='vitals-swiper'>
                    <Swiper
                        ref={sliderRef}
                        loop={true}
                        slidesPerView={1}
                        spaceBetween={1}
                        className="w-full bg-white"
                        autoplay={{
                            delay: delay,
                            disableOnInteraction: false,
                        }}
                        onSwiper={(swiper)=>{
                            // swiperRef.current = swiper;
                        }}
                        onInit={(swiper) => {
                            swiper.navigation.init();
                            swiper.navigation.update();


                        }}
                        modules={[Navigation, Autoplay]}
                    >
                        {sliderImages.map((value, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <Image
                                        key={index}
                                        src={value.src}
                                        className="object-contain w-full h-full vitals-swiper-image"
                                        alt=""
                                    />
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                </div>
        </>
    );
}

export default MainSwiper;
