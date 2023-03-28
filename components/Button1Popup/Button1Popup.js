import styles from "./Button1Popup.module.scss";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import images from "@/constants/images";

const Button1Popup = ({ text, icon, backgroundColor, textColor, onClick, buttonClassName }) => {
  return (
    <div className={styles["container"]}>
      <div
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
      </div>
    </div>
  );
};


export default Button1Popup;
