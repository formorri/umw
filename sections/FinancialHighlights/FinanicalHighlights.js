import React, { useState, useEffect, useRef } from "react";
import styles from "./FinancialHighlights.module.scss";
import { images } from "../../constants";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button1 } from "@/components";
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
  // const { ref, inView } = useInView({ threshold: 0.1 });

  // const videoRefs = {
  //   videoRef1: useRef(null),
  //   videoRef2: useRef(null),
  //   videoRef3: useRef(null),
  //   videoRef4: useRef(null),
  //   videoRef5: useRef(null),
  //   videoRef6: useRef(null),
  // };
  
  // const [isPlaying, setIsPlaying] = useState({
  //   videoRef1: false,
  //   videoRef2: false,
  //   videoRef3: false,
  //   videoRef4: false,
  //   videoRef5: false,
  //   videoRef6: false,
  // });
  
  // useEffect(() => {
  //   const playVideoOnce = (videoRefName) => {
  //     if (inView && videoRefs[videoRefName].current && !isPlaying[videoRefName]) {
  //       setIsPlaying((prevState) => ({
  //         ...prevState,
  //         [videoRefName]: true,
  //       }));
  //       videoRefs[videoRefName].current.play();
  //     }
  //   };
  
  //   playVideoOnce("videoRef1");
  //   playVideoOnce("videoRef2");
  //   playVideoOnce("videoRef3");
  //   playVideoOnce("videoRef4");
  //   playVideoOnce("videoRef5");
  //   playVideoOnce("videoRef6");
  // }, [inView, isPlaying]);
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
  
  const { ref: ref1, inView: inView1 } = useInView({ threshold: 0.3 });
  const { ref: ref2, inView: inView2 } = useInView({ threshold: 0.3 });
  const { ref: ref3, inView: inView3 } = useInView({ threshold: 0.3 });
  const { ref: ref4, inView: inView4 } = useInView({ threshold: 0.3 });
  const { ref: ref5, inView: inView5 } = useInView({ threshold: 0.3 });
  const { ref: ref6, inView: inView6 } = useInView({ threshold: 0.3 });

  useEffect(() => {
    const playVideoOnce = (videoRefName) => {
      if (videoRefs[videoRefName].current && !isPlaying[videoRefName]) {
        setIsPlaying((prevState) => ({
          ...prevState,
          [videoRefName]: true,
        }));
        videoRefs[videoRefName].current.play();
      }
    };

    if (inView1) playVideoOnce("videoRef1");
    if (inView2) playVideoOnce("videoRef2");
    if (inView3) playVideoOnce("videoRef3");
    if (inView4) playVideoOnce("videoRef4");
    if (inView5) playVideoOnce("videoRef5");
    if (inView6) playVideoOnce("videoRef6");
  }, [inView1, inView2, inView3, inView4, inView5, inView6, isPlaying]);  

  return (
    <div id='financial-highlights' className={styles.financial}>
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
        <div className={`${styles.card} ${styles["card1"]}`} ref={ref1}>
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
        <div className={`${styles.card} ${styles["card2"]}`} ref={ref2}>
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
        <div className={`${styles.card} ${styles["card3"]}`} ref={ref3}>
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
        <div className={`${styles.card} ${styles["card4"]}`} ref={ref4}>
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
        <div className={`${styles.card} ${styles["card5"]}`} ref={ref5}>
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
        <div className={`${styles.card} ${styles["card6"]}`} ref={ref6}>
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

        <Button1
            link="pdf/financial-highlights.pdf"
            text="Download This Section"
            backgroundColor="#112F5E"
            textColor="white"
            icon="touch"
            className={styles["download"]}
          />
      </motion.div>
    </div>
  );
};

export default FinanicalHighlights;
