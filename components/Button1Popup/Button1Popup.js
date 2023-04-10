import styles from "./Button1Popup.module.scss";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import images from "@/constants/images";

const Button1Popup = ({
  text,
  icon,
  backgroundColor,
  textColor,
  onClick,
  className,
  buttonClassName,
  textClass
}) => {
  return (
    <div className={`${styles["container"]} ${className}`} onClick={onClick}>
      <div
        className={styles["text-container"]}
        style={{ background: backgroundColor }}
      >
        <div
          className={`${styles["text"]} ${textClass}`}
          style={{ color: textColor }}
        >
          {text}
        </div>
        <Image
          src={images[icon]}
          priority
          alt={`${icon}icon`}
          className={styles.icon}
        />
      </div>
      {/* <div
        className={styles["icon-container"]}
        style={{ background: backgroundColor }}
      >
      </div> */}
      {/* <div
        className={styles["inner"]}
        style={{ background: backgroundColor }}
        onClick={onClick}
      >
        <div className={styles["text"]} style={{ color: textColor }}>
          {text}
          <Image
            src={images[icon]}
            priority
            alt={`${icon}icon`}
            className={`${styles.icon} ${buttonClassName}`}
          />
        </div>
      </div> */}
    </div>
  );
};

export default Button1Popup;
