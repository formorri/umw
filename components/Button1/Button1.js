import styles from "./Button1.module.scss";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import images from "@/constants/images";

const Button1 = ({
  link,
  text,
  icon,
  backgroundColor,
  textColor,
  className,
  textClass,
}) => {

  
  return (
    <div className={`${styles["container"]} ${className}`}>
      <Link className={styles.link} href={link} target="_blank">
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
        </div>
        <div
          className={styles["icon-container"]}
          style={{ background: backgroundColor }}
        >
          <Image
            src={images[icon]}
            priority
            alt={`${icon}icon`}
            className={styles.icon}
          />
        </div>
      </Link>
    </div>
  );
};

export default Button1;
