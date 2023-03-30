import React, { useState, useEffect } from "react";
import styles from "./Downloads.module.scss";
import { images } from "../../constants";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Button1 } from "@/components";
import { useWindowSize } from "react-use";

const Downloads = () => {
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

  return (
    <div className={styles.container}>
      <motion.div
        whileInView={{
          y: [10, 0],
          opacity: [0, 1],
        }}
        transition={{ duration: 0.8 }}
      >
        <h2 className={styles.title}>Downloads</h2>
      </motion.div>
      <div className={styles.wrapper}>
        <motion.div
          whileInView={whileInView1}
          transition={{ duration: 0.8 }}
          className={styles.mockup}
        >
          <Image
            src={images.mockup}
            loading="lazy"
            alt="mockup"
            className={styles["mockup-image"]}
          />
        </motion.div>

        <motion.div
          whileInView={{
            y: [10, 0],
            opacity: [0, 1],
          }}
          transition={{ duration: 0.8 }}
          className={styles["all-buttons"]}
        >
          <Button1
            link="/"
            text="Download Integrated Annual Report 2022"
            backgroundColor="#112F5E"
            textColor="white"
            icon="download"
            className={styles.download}
            textClass={styles["download-text"]}
          />
          <Button1
            link="/"
            text="Download Sustainability Report 2022"
            backgroundColor="#112F5E"
            textColor="white"
            icon="download"
            className={styles.download}
            textClass={styles["download-text"]}
          />
          <Button1
            link="/"
            text="Download Corporate Governance Report 2022"
            backgroundColor="#112F5E"
            textColor="white"
            icon="download"
            className={styles.download}
            textClass={styles["download-text"]}
          />
          <Button1
            link="/"
            text="Download Circular to Shareholders"
            backgroundColor="#1683BA"
            textColor="white"
            icon="download"
            className={styles.download}
            textClass={styles["download-text"]}
          />
          <Button1
            link="/"
            text="Download Notice of 40th AGM"
            backgroundColor="#1683BA"
            textColor="white"
            icon="download"
            className={styles.download}
            textClass={styles["download-text"]}
          />
          <Button1
            link="/"
            text="Download Proxy Form"
            backgroundColor="#1683BA"
            textColor="white"
            icon="download"
            className={styles.download}
            textClass={styles["download-text"]}
          />
          <Button1
            link="/"
            text="Download Administrative Guide"
            backgroundColor="#1683BA"
            textColor="white"
            icon="download"
            className={styles.download}
            textClass={styles["download-text"]}
          />
        </motion.div>

        <motion.div
          whileInView={whileInView2}
          transition={{ duration: 0.8 }}
          className={styles["widgets"]}
        >
          <div className={styles["feedback"]}>
            <p className={styles["text-bold"]}>we need your feedback</p>
            <Button1
              link="/"
              text="Click Here"
              backgroundColor="#DFDC39"
              textColor="white"
              icon="arrow"
              className={styles.download}
            />
          </div>
          <div className={styles["previous-reports"]}>
            <p className={styles["text"]}>
              You can find previous Annual Reports and other publications in our
            </p>
            <Button1
              link="/"
              text="Annual Reports Archive"
              backgroundColor="#82CECC"
              textColor="white"
              icon="arrow"
              className={styles.reports}
              textClass={styles["reports-text"]}
            />
            <Button1
              link="/"
              text="Sustainability Reports Archive"
              backgroundColor="#82CECC"
              textColor="white"
              icon="arrow"
              className={styles.reports}
              textClass={styles["reports-text"]}
            />
          </div>
        </motion.div>
      </div>
      <div className={styles.copyright}>
        <p className={styles["text"]}>
          © 2023 UMW Holdings Berhad 198201010554 (90278-P). All rights
          reserved.
        </p>
      </div>
    </div>
  );
};

export default Downloads;
