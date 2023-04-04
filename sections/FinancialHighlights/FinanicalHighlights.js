import React, { useState, useEffect, useRef } from "react";
import styles from "./FinancialHighlights.module.scss";
import { images } from "../../constants";
import CountUp from "react-countup";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
// const containerVariants = {
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.1, // This is the property to stagger children
//     },
//   },
//   hidden: {
//     opacity: 0,
//   },
// };

// const itemVariants = {
//   visible: { opacity: 1, y: 0 },
//   hidden: { opacity: 0, y: 30 },
// };

const FinanicalHighlights = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });
  const [isPlaying1, setIsPlaying1] = useState(false);
  const [isPlaying2, setIsPlaying2] = useState(false);
  const [isPlaying3, setIsPlaying3] = useState(false);
  const [isPlaying4, setIsPlaying4] = useState(false);
  const [isPlaying5, setIsPlaying5] = useState(false);
  const [isPlaying6, setIsPlaying6] = useState(false);
  const videoRef1 = useRef(null);
  const videoRef2 = useRef(null);
  const videoRef3 = useRef(null);
  const videoRef4 = useRef(null);
  const videoRef5 = useRef(null);
  const videoRef6 = useRef(null);

  useEffect(() => {
    if (inView && videoRef1.current && !isPlaying1) {
      setIsPlaying1(true);
      videoRef1.current.play();
    } else if (!inView && videoRef1.current && isPlaying1) {
      setIsPlaying1(false);
      videoRef1.current.pause();
      videoRef1.current.currentTime = 0;
    }

    if (inView && videoRef2.current && !isPlaying2) {
      setIsPlaying2(true);
      videoRef2.current.play();
    } else if (!inView && videoRef2.current && isPlaying2) {
      setIsPlaying2(false);
      videoRef2.current.pause();
      videoRef2.current.currentTime = 0;
    }

    if (inView && videoRef3.current && !isPlaying3) {
      setIsPlaying3(true);
      videoRef3.current.play();
    } else if (!inView && videoRef3.current && isPlaying3) {
      setIsPlaying3(false);
      videoRef3.current.pause();
      videoRef3.current.currentTime = 0;
    }

    if (inView && videoRef4.current && !isPlaying4) {
      setIsPlaying4(true);
      videoRef4.current.play();
    } else if (!inView && videoRef4.current && isPlaying4) {
      setIsPlaying4(false);
      videoRef4.current.pause();
      videoRef4.current.currentTime = 0;
    }

    if (inView && videoRef5.current && !isPlaying5) {
      setIsPlaying5(true);
      videoRef5.current.play();
    } else if (!inView && videoRef5.current && isPlaying5) {
      setIsPlaying5(false);
      videoRef5.current.pause();
      videoRef5.current.currentTime = 0;
    }

    if (inView && videoRef6.current && !isPlaying6) {
      setIsPlaying6(true);
      videoRef6.current.play();
    } else if (!inView && videoRef6.current && isPlaying6) {
      setIsPlaying6(false);
      videoRef6.current.pause();
      videoRef6.current.currentTime = 0;
    }
  }, [
    inView,
    isPlaying1,
    isPlaying2,
    isPlaying3,
    isPlaying4,
    isPlaying5,
    isPlaying6,
  ]);

  return (
    <div className={styles.financial}>
      <motion.div
        whileInView={{
          y: [10, 0],
          opacity: [0, 1],
        }}
        transition={{ duration: 0.8 }}
      >
        <h2 className={styles.title}>financial highlights</h2>
      </motion.div>
      <motion.div
        whileInView={{
          y: [10, 0],
          opacity: [0, 1],
        }}
        transition={{ duration: 0.8 }}
        className={styles.wrapper}
      >
        <div className={`${styles.card} ${styles["card1"]}`}>
          <div className={styles.header}>
            <p className={styles["header-text"]}>
              revenue <span className={styles["unit"]}>(RM million)</span>
            </p>
          </div>
          <div className={styles["graph-container"]} ref={ref}>
            <video className={styles.graph} ref={videoRef1} muted playsInline>
              <source src="assets/graph-1.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
        <div className={`${styles.card} ${styles["card2"]}`}>
          <div className={styles.header}>
            <p className={styles["header-text"]}>
            PROFIT BEFORE ZAKAT AND TAXATION <span className={styles["unit"]}>(RM million)</span>
            </p>
          </div>
          <div className={styles["graph-container"]} ref={ref}>
            <video className={styles.graph} ref={videoRef2} muted playsInline>
              <source src="assets/graph-2.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
        <div className={`${styles.card} ${styles["card3"]}`}>
          <div className={styles.header}>
            <p className={styles["header-text"]}>
            PROFIT FOR THE FINANCIAL YEAR <span className={styles["unit"]}>(RM million)</span>
            </p>
          </div>
          <div className={styles["graph-container"]} ref={ref}>
            <video className={styles.graph} ref={videoRef3} muted playsInline>
              <source src="assets/graph-3.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
        <div className={`${styles.card} ${styles["card4"]}`}>
          <div className={styles.header}>
            <p className={styles["header-text"]}>
            SHAREHOLDER’S FUNDS <span className={styles["unit"]}>(RM million)</span>
            </p>
          </div>
          <div className={styles["graph-container"]} ref={ref}>
            <video className={styles.graph} ref={videoRef4} muted playsInline>
              <source src="assets/graph-4.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
        <div className={`${styles.card} ${styles["card5"]}`}>
          <div className={styles.header}>
            <p className={styles["header-text"]}>
            BASIC EARNINGS PER SHARE <span className={styles["unit"]}>(RM million)</span>
            </p>
          </div>
          <div className={styles["graph-container"]} ref={ref}>
            <video className={styles.graph} ref={videoRef5} muted playsInline>
              <source src="assets/graph-5.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
        <div className={`${styles.card} ${styles["card6"]}`}>
          <div className={styles.header}>
            <p className={styles["header-text"]}>
            NET ASSETS PER SHARE <span className={styles["unit"]}>(RM million)</span>
            </p>
          </div>
          <div className={styles["graph-container"]} ref={ref}>
            <video className={styles.graph} ref={videoRef6} muted playsInline>
              <source src="assets/graph-6.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default FinanicalHighlights;
