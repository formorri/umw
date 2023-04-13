import React, { useState, useEffect, useRef } from "react";
import styles from "./Downloads.module.scss";
import { images } from "../../constants";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Button1 } from "@/components";
import { useWindowSize } from "react-use";
import Link from "next/link";
import { useInView } from "react-intersection-observer";

const Downloads = () => {
  const { width } = useWindowSize();
  const videoRef1 = useRef(null);
  const { ref, inView } = useInView({ threshold: 0.1 });
  const [isPlaying1, setIsPlaying1] = useState(false);

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

  useEffect(() => {
    if (inView && videoRef1.current && !isPlaying1) {
      setIsPlaying1(true);
      videoRef1.current.play();
    } else if (!inView && videoRef1.current && isPlaying1) {
      setIsPlaying1(false);
      videoRef1.current.pause();
      videoRef1.current.currentTime = 0;
    }
  }, [inView, isPlaying1]);

  return (
    <div id='downloads' className={styles.container}>
      <motion.div
        whileInView={whileInView2}
        transition={{ duration: 0.8 }}
        className={styles["report-wrapper"]}
        ref={ref}
      >
        <video className={styles.mockup} ref={videoRef1} muted playsInline>
          <source src="assets/mockup.mp4" type="video/mp4" />
        </video>
      </motion.div>
      <motion.div
        whileInView={whileInView1}
        transition={{ duration: 0.8 }}
        className={styles["link-wrapper"]}
      >
        <div className={styles["download-wrapper"]}>
          <h2 className={styles.title}>Downloads</h2>
          <div className={`${styles.item} ${styles["border-bottom"]}`}>
            <Link href="pdf/IR2022.pdf" target="_blank">
              <p className={styles["item-text"]}>
                Integrated Annual Report <span>2022</span>
              </p>
              <div className={styles["icon-container"]}>
                <Image
                  src={images.touch}
                  loading="lazy"
                  alt="download"
                  className={styles["download-icon"]}
                />
              </div>
            </Link>
          </div>
          <div className={`${styles.item} ${styles["border-bottom"]}`}>
            <Link href="pdf/SR-report.pdf" target="_blank">
              <p className={styles["item-text"]}>Sustainability Report <span>2022</span></p>
              <div className={styles["icon-container"]}>
                <Image
                  src={images.touch}
                  loading="lazy"
                  alt="download"
                  className={styles["download-icon"]}
                />
              </div>
            </Link>
          </div>
          <div className={`${styles.item} ${styles["border-bottom"]}`}>
            <Link href="pdf/CG-report.pdf" target="_blank">
              <p className={styles["item-text"]}>
                Corporate Governance Report <span>2022</span>
              </p>
              <div className={styles["icon-container"]}>
                <Image
                  src={images.touch}
                  loading="lazy"
                  alt="download"
                  className={styles["download-icon"]}
                />
              </div>
            </Link>
          </div>
          <div className={`${styles.item} ${styles["border-bottom"]}`}>
            <Link href="pdf/circular-to-shareholders.pdf" target="_blank">
              <p className={styles["item-text"]}>Circular To Shareholders</p>
              <div className={styles["icon-container"]}>
                <Image
                  src={images.touch}
                  loading="lazy"
                  alt="download"
                  className={styles["download-icon"]}
                />
              </div>
            </Link>
          </div>
          <div className={`${styles.item} ${styles["border-bottom"]}`}>
            <Link href="pdf/notice-of-agm.pdf" target="_blank">
              <p className={styles["item-text"]}>Notice of <span>41</span><sup>st</sup> AGM</p>
              <div className={styles["icon-container"]}>
                <Image
                  src={images.touch}
                  loading="lazy"
                  alt="download"
                  className={styles["download-icon"]}
                />
              </div>
            </Link>
          </div>
          <div className={`${styles.item} ${styles["border-bottom"]}`}>
            <Link href="pdf/proxy-form.pdf" target="_blank">
              <p className={styles["item-text"]}>Proxy Form</p>
              <div className={styles["icon-container"]}>
                <Image
                  src={images.touch}
                  loading="lazy"
                  alt="download"
                  className={styles["download-icon"]}
                />
              </div>
            </Link>
          </div>
          <div className={styles.item}>
            <Link href="pdf/administrative-guide.pdf" target="_blank">
              <p className={styles["item-text"]}>Administrative Guide</p>
              <div className={styles["icon-container"]}>
                <Image
                  src={images.touch}
                  loading="lazy"
                  alt="download"
                  className={styles["download-icon"]}
                />
              </div>
            </Link>
          </div>
        </div>
        <div className={styles["archive-wrapper"]}>
          <Link href="https://www.umw.com.my/web/guest/financial-report" target="_blank">
            <p className={styles["archive-text"]}>Annual Reports Archive</p>
            <div className={styles["icon-container"]}>
              <Image
                src={images.link}
                loading="lazy"
                alt="link"
                className={styles.icon}
              />
            </div>
          </Link>
        </div>
        <div className={styles["archive-wrapper"]}>
          <Link href="https://www.umw.com.my/web/guest/sustain-report" target="_blank">
            <p className={styles["archive-text"]}>
              Sustainability Reports Archive
            </p>
            <div className={styles["icon-container"]}>
              <Image
                src={images.link}
                loading="lazy"
                alt="link"
                className={styles.icon}
              />
            </div>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Downloads;
