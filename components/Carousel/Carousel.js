import styles from "./Carousel.module.scss";
import React, { useRef } from "react";
import Slider from "react-slick";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Button1Popup from "../Button1Popup";

const Carousel = ({ children }) => {
  const slider = useRef(null);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
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
          slidesToScroll: 3,
          infinite: true,
          dots: true,
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
        <Button1Popup
          backgroundColor="#B5DCDE"
          icon="play"
          onClick={() => slider?.current?.slickPrev()}
          buttonClassName={styles.prev}
        />
        <Slider ref={slider} {...settings} className={styles.slider}>
          {children}
        </Slider>

        <Button1Popup
          backgroundColor="#B5DCDE"
          icon="play"
          onClick={() => slider?.current?.slickNext()}
          buttonClassName={styles.next}
        />
      </div>
    </div>
  );
};

export default Carousel;
