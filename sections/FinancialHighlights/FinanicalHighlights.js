import React, { useState, useEffect, useRef } from 'react'
import styles from './FinancialHighlights.module.scss'
import { images } from '../../constants';
import CountUp from "react-countup";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
const containerVariants = {
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // This is the property to stagger children
    },
  },
  hidden: {
    opacity: 0,
  },
};

const itemVariants = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: 30 },
};

const FinanicalHighlights = () => {
  const { ref, inView } = useInView({ threshold: 0.5 });
  return (
    <div className={styles.financial}>
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={{ duration: 0.8 }}
      className={styles.financial}
    >
      <div>
        <h2 className={styles.title}>financial highlights</h2>
      </div>
      <div className={styles.wrapper}>
        <motion.div
          variants={itemVariants}
          className={`${styles.card1} ${styles["data1"]}`}
        >
          <p className={styles["data-text1"]}>revenue</p>
          <p className={styles["data-text2"]}>(rm million)</p>
          <CountUp
            start={0}
            end={15814.4}
            delay={0}
            enableScrollSpy={true}
            scrollSpyDelay={1}
          >
            {({ countUpRef }) => (
              <div>
                <p className={styles["data-number"]} ref={countUpRef}></p>
              </div>
            )}
          </CountUp>
        </motion.div>
        <motion.div
          variants={itemVariants}
          className={`${styles.card2} ${styles["data2"]}`}
        >
          <p className={styles["data-text1"]}>
            PROFIT BEFORE ZAKAT AND TAXATION*
          </p>
          <p className={styles["data-text2"]}>(RM MILLION)</p>
          <CountUp
            start={0}
            end={896.5}
            delay={0}
            enableScrollSpy={true}
            scrollSpyDelay={1}
          >
            {({ countUpRef }) => (
              <div>
                <p className={styles["data-number"]} ref={countUpRef}></p>
              </div>
            )}
          </CountUp>
        </motion.div>
        <motion.div
          variants={itemVariants}
          className={`${styles.card1} ${styles["data3"]}`}
        >
          <p className={styles["data-text1"]}>
            PROFIT FOR THE FINANCIAL YEAR
          </p>
          <p className={styles["data-text2"]}>(rm million)</p>
          <CountUp
            start={0}
            end={677.9}
            delay={0}
            enableScrollSpy={true}
            scrollSpyDelay={1}
          >
            {({ countUpRef }) => (
              <div>
                <p className={styles["data-number"]} ref={countUpRef}></p>
              </div>
            )}
          </CountUp>
        </motion.div>
        <motion.div
          variants={itemVariants}
          className={`${styles.card2} ${styles["data4"]}`}
        >
          <p className={styles["data-text1"]}>SHAREHOLDERS’ FUNDS</p>
          <p className={styles["data-text2"]}>(RM MILLION)</p>
          <CountUp
            start={0}
            end={4350.0}
            delay={0}
            enableScrollSpy={true}
            scrollSpyDelay={1}
          >
            {({ countUpRef }) => (
              <div>
                <p className={styles["data-number"]} ref={countUpRef}></p>
              </div>
            )}
          </CountUp>
        </motion.div>
        <motion.div
          variants={itemVariants}
          className={`${styles.card1} ${styles["data5"]}`}
        >
          <p className={styles["data-text1"]}>BASIC EARNINGS PER SHARE</p>
          <p className={styles["data-text2"]}>(sen)</p>
          <CountUp
            start={0}
            end={35.5}
            delay={0}
            enableScrollSpy={true}
            scrollSpyDelay={1}
          >
            {({ countUpRef }) => (
              <div>
                <p className={styles["data-number"]} ref={countUpRef}></p>
              </div>
            )}
          </CountUp>
        </motion.div>
        <motion.div
          variants={itemVariants}
          className={`${styles.card2} ${styles["data6"]}`}
        >
          <p className={styles["data-text1"]}>NET ASSETS PER SHARE</p>
          <p className={styles["data-text2"]}>(RM)</p>
          <CountUp
            start={0}
            end={3.7}
            delay={0}
            enableScrollSpy={true}
            scrollSpyDelay={1}
          >
            {({ countUpRef }) => (
              <div>
                <p className={styles["data-number"]} ref={countUpRef}></p>
              </div>
            )}
          </CountUp>
        </motion.div>
      </div>
    </motion.div>
  </div>
  )
}

export default FinanicalHighlights