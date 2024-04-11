'use client'
import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import style from './carrousel.module.css'

export default function Carrousel() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 8000,
  };

  return (
    <div className={style.wrapper}>
      <Slider {...settings}>
        <a>
          <img src='./banner/banner_1.png' className={style.banner_image}/>
        </a>
        <a>
          <img src='./banner/banner_2.png' className={style.banner_image}/>
        </a>         
      </Slider>
    </div>
  )
} 