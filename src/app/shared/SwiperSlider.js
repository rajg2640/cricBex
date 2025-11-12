'use client'
import React from 'react'
import { Swiper } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';

const SwiperSlider = ({ ...props }) => {
    return (
        <Swiper modules={[Navigation, Pagination, Scrollbar, A11y]} {...props}>
            {props.children}
        </Swiper>
    )
}

export default SwiperSlider