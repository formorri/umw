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
    <div id="agm" className={styles["container"]}>
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
            <span className={styles.bold}>NOTICE IS HEREBY GIVEN THAT </span>
            the <span>41</span><sup>st</sup> Annual General Meeting
            <span className={styles.bold}> (AGM) </span>
            of the Company will be held virtually via live streaming from the
            broadcast venue at Menara UMW, Jalan Puncak, Off Jalan P. Ramlee,<span> 50250 </span>
             Kuala Lumpur, Malaysia on Wednesday, <span>17</span> May <span>2023</span> at <span>10.00</span> a.m.
            to transact the following businesses:
          </p>
        </div>
        <div className={styles.button}>
          <div className={styles.before}>
            <p className={styles["button-text"]}>Add to calendar</p>
            <AddIcon />
          </div>
          <div className={styles.after}>
            <a href="assets/myevents.ics">
              <Image
                src={images.apple}
                loading="lazy"
                alt="apple"
                className={styles.icon}
              />
            </a>
            <a
              href="https://www.google.com/calendar/render?action=TEMPLATE&text=41st+Annual+General+Meeting+%28AGM%29&details=NOTICE+IS+HEREBY+GIVEN+THAT+the+41st+Annual+General+Meeting+%28AGM%29+of+the+Company+will+be+held+virtually+via+live+streaming+from+the+broadcast+venue+at+Menara+UMW%2C+Jalan+Puncak%2C+Off+Jalan+P.+Ramlee%2C+50250+Kuala+Lumpur%2C+Malaysia+on+Wednesday%2C+17+May+2023+at+10.00+a.m.&location=Menara+UMW%2C+Jalan+Puncak%2C+Off+Jalan+P.+Ramlee%2C+50250+Kuala+Lumpur%2C+Malaysia&dates=20230517T020000Z%2F20230517T160000Z"
              target="_blank"
            >
              <Image
                src={images.google}
                loading="lazy"
                alt="google"
                className={styles.icon}
              />
            </a>
            <a href="assets/myevents.ics">
              <Image
                src={images.outlook}
                loading="lazy"
                alt="outlook"
                className={styles.icon}
              />
            </a>
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
              <p className={styles.text}>Wednesday, <span>17</span> May <span>2023</span></p>
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
              <p className={styles.text}><span>10.00</span> am</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AGM;
