import React, { useState, useEffect } from "react";
import styles from "./AGM.module.scss";
import { images } from "../../constants";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Button1 } from "@/components";
import { useWindowSize } from "react-use";
import moment from "moment";

const AGM = () => {
  const [timeLeft, setTimeLeft] = useState({});
  const [buttonActive, setButtonActive] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const then = moment("2023-05-17 10:30:00");
      const now = moment();
      const countdown = moment(then - now);
      const days = countdown.format("D");
      const hours = countdown.format("HH");
      const minutes = countdown.format("mm");
      const seconds = countdown.format("ss");
      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className={styles["container"]}>
      <div className={styles["text-wrapper"]}>
        <h2 className={styles.title}>
          41<sup>st</sup> Annual General Meeting
        </h2>
        <div className={styles["paragraph-wrapper"]}>
          Notice is hereby given that the 41st Annual General Meeting (AGM) of
          the Company will be held virtually via live streaming from the
          broadcast venue at Menara UMW, Jalan Puncak, Off Jalan P. Ramlee,
          50250 Kuala Lumpur, Malaysia on Wednesday, 17 May 2023 at 10.00 a.m.
          to transact the following businesses.
        </div>
        <div className={styles.button}>
        <div className={styles.before}>
          <p>Add to calendar</p>
        </div>
          <div className={styles.after}>
            <Image
              src={images.apple}
              loading="lazy"
              alt="apple"
              className={styles.icon}
            />
            <Image
              src={images.google}
              loading="lazy"
              alt="google"
              className={styles.icon}
            />
            <Image
              src={images.outlook}
              loading="lazy"
              alt="outlook"
              className={styles.icon}
            />
          </div>
        </div>
      </div>
      <p>{timeLeft.days} days</p>
      <p>{timeLeft.hours} hours</p>
      <p>{timeLeft.minutes} minutes</p>
      <p>{timeLeft.seconds} seconds</p>
    </div>
  );
};

export default AGM;
