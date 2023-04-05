import styles from "./Carousel.module.scss";
import React, { useRef } from "react";
import Slider from "react-slick";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Button1Popup from "../Button1Popup";
import Image from "next/image";
import { images } from "../../constants";


const Carousel = ({ children }) => {
  const slider = useRef(null);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    // autoplay: true,
    // autoplaySpeed: 3000,
    responsive: [
      {
        // desktop
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        // tablet
        breakpoint: 960,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        // phone
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <div className={styles.wrapper}>
        <div
          className={`${styles.navigation} ${styles['prev']}`}
          onClick={() => slider?.current?.slickPrev()}
        >
          <ArrowBackIcon/>
        </div>
        <Slider ref={slider} {...settings} className={styles.slider}>
          {children}
        </Slider>
        <div
          className={`${styles.navigation} ${styles['next']}`}
          onClick={() => slider?.current?.slickNext()}
        >
          <ArrowForwardIcon/>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
