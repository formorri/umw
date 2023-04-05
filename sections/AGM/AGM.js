import React, { useState, useEffect } from "react";
import styles from "./AGM.module.scss";
import { images } from "../../constants";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Button1 } from "@/components";
import { useWindowSize } from "react-use";
import AddIcon from "@mui/icons-material/Add";
import Link from "next/link";

const AGM = () => {
  const { width } = useWindowSize();

  const whileInView1 = {
    x: width > 1200 ? [-50, 0] : 0,
    y: width <= 1200 ? [50, 0] : 0,
    opacity: [0, 1],
  };
  const whileInView2 = {
    x: width > 1200 ? [50, 0] : 0,
    y: width <= 1200 ? [50, 0] : 0,
    opacity: [0, 1],
  };
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("May 17, 2023 10:00:00").getTime();

    const intervalId = setInterval(() => {
      const now = new Date().getTime();
      const timeRemaining = targetDate - now;

      const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (timeRemaining % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });

      if (timeRemaining <= 0) {
        clearInterval(intervalId);
      }
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className={styles["container"]}>
      <motion.div
        whileInView={whileInView1}
        transition={{ duration: 0.8 }}
        className={styles["text-wrapper"]}
      >
        <h2 className={styles.title}>
          41<sup className={styles.superscript}>st</sup> Annual General Meeting
        </h2>
        <div className={styles["paragraph-wrapper"]}>
          <p className={styles.paragraph}>
            Notice is hereby given that the 41st Annual General Meeting (AGM) of
            the Company will be held virtually via live streaming from the
            broadcast venue at Menara UMW, Jalan Puncak, Off Jalan P. Ramlee,
            50250 Kuala Lumpur, Malaysia on Wednesday, 17 May 2023 at 10.00 a.m.
            to transact the following businesses.
          </p>
        </div>
        <div className={styles.button}>
          <div className={styles.before}>
            <p className={styles["button-text"]}>Add to calendar</p>
            <AddIcon />
          </div>
          <div className={styles.after}>
            <Link href="/" target="_blank">
              <Image
                src={images.apple}
                loading="lazy"
                alt="apple"
                className={styles.icon}
              />
            </Link>
            <Link href="/" target="_blank">
              <Image
                src={images.google}
                loading="lazy"
                alt="google"
                className={styles.icon}
              />
            </Link>
            <Link href="/" target="_blank">
              <Image
                src={images.outlook}
                loading="lazy"
                alt="outlook"
                className={styles.icon}
              />
            </Link>
          </div>
        </div>
      </motion.div>
      <motion.div
        whileInView={whileInView2}
        transition={{ duration: 0.8 }}
        className={styles["info-container"]}
      >
        <div className={styles["countdown-wrapper"]}>
          <div className={styles.countdown}>
            <p className={styles["countdown-number"]}>{timeLeft.days}</p>
            <p className={styles["text"]}>DAYS</p>
          </div>
          <div className={styles.countdown}>
            <p className={styles["countdown-number"]}>{timeLeft.hours}</p>
            <p className={styles["text"]}>HOURS</p>
          </div>
          <div className={styles.countdown}>
            <p className={styles["countdown-number"]}>{timeLeft.minutes}</p>
            <p className={styles["text"]}>MINUTES</p>
          </div>
          <div className={styles.countdown}>
            <p className={styles["countdown-number"]}>{timeLeft.seconds}</p>
            <p className={styles["text"]}>SECONDS</p>
          </div>
        </div>
        <div className={styles["info-wrapper"]}>
          <div className={styles.info}>
            <Image
              src={images.calendar}
              loading="lazy"
              alt="calendar"
              className={styles.icon}
            />
            <div className={styles["info-info"]}>
              <p className={styles.bold}>DATE</p>
              <p className={styles.text}>Wednesday, 17 May 2023</p>
            </div>
          </div>
          <div className={styles.info}>
            <Image
              src={images.time}
              loading="lazy"
              alt="time"
              className={styles.icon}
            />
            <div className={styles["info-info"]}>
              <p className={styles.bold}>TIME</p>
              <p className={styles.text}>10.30 am</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AGM;
