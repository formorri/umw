import React, { useState, useEffect, useRef } from "react";
import styles from "./FinancialHighlights.module.scss";
import { images } from "../../constants";
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

  const videoRefs = {
    videoRef1: useRef(null),
    videoRef2: useRef(null),
    videoRef3: useRef(null),
    videoRef4: useRef(null),
    videoRef5: useRef(null),
    videoRef6: useRef(null),
  };
  
  const [isPlaying, setIsPlaying] = useState({
    videoRef1: false,
    videoRef2: false,
    videoRef3: false,
    videoRef4: false,
    videoRef5: false,
    videoRef6: false,
  });
  
  useEffect(() => {
    const playVideoOnce = (videoRefName) => {
      if (inView && videoRefs[videoRefName].current && !isPlaying[videoRefName]) {
        setIsPlaying((prevState) => ({
          ...prevState,
          [videoRefName]: true,
        }));
        videoRefs[videoRefName].current.play();
      }
    };
  
    playVideoOnce("videoRef1");
    playVideoOnce("videoRef2");
    playVideoOnce("videoRef3");
    playVideoOnce("videoRef4");
    playVideoOnce("videoRef5");
    playVideoOnce("videoRef6");
  }, [inView, isPlaying]);

  return (
    <div className={styles.financial} ref={ref}>
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
          <div className={styles["graph-container"]}>
            <video className={styles.graph} ref={videoRefs.videoRef1} muted playsInline>
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
          <div className={styles["graph-container"]}>
            <video className={styles.graph} ref={videoRefs.videoRef2} muted playsInline>
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
          <div className={styles["graph-container"]}>
            <video className={styles.graph} ref={videoRefs.videoRef3} muted playsInline>
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
          <div className={styles["graph-container"]}>
            <video className={styles.graph} ref={videoRefs.videoRef4} muted playsInline>
              <source src="assets/graph-4.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
        <div className={`${styles.card} ${styles["card5"]}`}>
          <div className={styles.header}>
            <p className={styles["header-text"]}>
            BASIC EARNINGS PER SHARE <span className={styles["unit"]}>(Sen)</span>
            </p>
          </div>
          <div className={styles["graph-container"]}>
            <video className={styles.graph} ref={videoRefs.videoRef5} muted playsInline>
              <source src="assets/graph-5.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
        <div className={`${styles.card} ${styles["card6"]}`}>
          <div className={styles.header}>
            <p className={styles["header-text"]}>
            NET ASSETS PER SHARE <span className={styles["unit"]}>(RM)</span>
            </p>
          </div>
          <div className={styles["graph-container"]}>
            <video className={styles.graph} ref={videoRefs.videoRef6} muted playsInline>
              <source src="assets/graph-6.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default FinanicalHighlights;
