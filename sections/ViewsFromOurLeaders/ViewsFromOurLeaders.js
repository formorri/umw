import React, { useState, useEffect } from "react";
import styles from "./ViewsFromOurLeaders.module.scss";
import { images } from "../../constants";
import CountUp from "react-countup";
import Image from "next/image";
import { Button1, Button1Popup } from "@/components";
import { useWindowSize } from "react-use";
import { motion, AnimatePresence } from "framer-motion";

const ViewsFromOurLeaders = () => {
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
      <h2 className={styles.title}>Views From Our Leaders</h2>
      <div className={styles["leader-wrapper"]}>
        <div className={styles["chairman-wrapper"]}>
          <div className={styles["background-container"]}>
            <Image
              src={images.leaderBackground}
              loading="lazy"
              alt="background"
              className={styles["background"]}
            />
          </div>
          <motion.div
            whileInView={{
              y: [10, 0],
              opacity: [0, 1],
            }}
            transition={{ duration: 0.8 }}
            className={styles["leader-container"]}
          >
            <Image
              src={images.chairman}
              loading="lazy"
              alt="chairman"
              className={styles["leader-image"]}
            />
          </motion.div>
          <motion.div
            whileInView={whileInView1}
            transition={{ duration: 0.8 }}
            className={styles["quote-container"]}
          >
            <p className={styles["quote-header"]}>Group Chairman message</p>
            <p className={styles["quote-dear"]}>Dear Valued Shareholders,</p>
            <p className={styles["quote-text"]}>
              The Board's priority in 2022 for the UMW Group was to strengthen
              resilience by actively managing risks, while operating in a world
              facing global macro-economic and geo-political headwinds.
            </p>
            <div className={styles["designation-container"]}>
              <p className={styles["leader-name"]}>
                Tan Sri Dato’ Sri Hamad Kama Piah Che Othman
              </p>
              <p className={styles["leader-title"]}>Chairman</p>
            </div>
          </motion.div>
          <motion.div
            whileInView={whileInView1}
            transition={{ duration: 0.8 }}
            className={styles["data-container"]}
          >
            <div className={styles["data-card"]}>
              <CountUp
                start={0}
                end={43.0}
                delay={0}
                decimal="."
                decimals={1}
                enableScrollSpy={true}
                scrollSpyDelay={1}
              >
                {({ countUpRef }) => (
                  <div className={styles["data-card-inner"]}>
                    <p className={styles.unit}>Group Revenue Growth</p>
                    <p style={{ margin: 0 }}>
                      <span className={styles.number} ref={countUpRef}></span>
                      <span className={styles.unit}> %</span>
                    </p>
                  </div>
                )}
              </CountUp>
            </div>
            <div className={styles["data-card"]}>
              <CountUp
                start={0}
                end={15.8}
                delay={0}
                decimal="."
                decimals={1}
                enableScrollSpy={true}
                scrollSpyDelay={1}
              >
                {({ countUpRef }) => (
                  <div className={styles["data-card-inner"]}>
                    <p style={{ margin: 0 }}>
                      <span className={styles.number}>RM</span>
                      <span className={styles.number} ref={countUpRef}></span>
                      <span className={styles.unit}> billion</span>
                    </p>
                    <p className={styles["unit"]}>
                      Compared with{" "}
                      <span className={styles["number-text"]}>RM 11.1 </span>
                      billion in 2021
                    </p>
                  </div>
                )}
              </CountUp>
            </div>
          </motion.div>
          <motion.div
            whileInView={whileInView1}
            transition={{ duration: 0.8 }}
            className={styles["download-container"]}
          >
            <Button1
              link="/"
              text="Download This Section"
              backgroundColor="#112F5E"
              textColor="white"
              icon="download"
            />
          </motion.div>
        </div>
        <div className={styles["ceo-wrapper"]}>
          <div className={styles["background-container"]}>
            <Image
              src={images.leaderBackground1}
              loading="lazy"
              alt="background"
              className={styles["background"]}
            />
          </div>
          <motion.div
            whileInView={{
              y: [10, 0],
              opacity: [0, 1],
            }}
            transition={{ duration: 0.8 }}
            className={styles["leader-container"]}
          >
            <Image
              src={images.president}
              loading="lazy"
              alt="president"
              className={styles["leader-image"]}
            />
          </motion.div>
          <motion.div
            whileInView={whileInView1}
            transition={{ duration: 0.8 }}
            className={styles["quote-container"]}
          >
            <p className={styles["quote-header"]}>
              President & Group Chief Executive Officer’s Review
            </p>
            <p className={styles["quote-dear"]}>Dear Valued Shareholders,</p>
            <p className={styles["quote-text"]}>
              2022 was a good year for Malaysia and the UMW Group. The recovery,
              buoyed by the transition of COVID-19 from pandemic to endemic
              phase, improved business and consumer confidence.
            </p>
            <div className={styles["designation-container"]}>
              <p className={styles["leader-name"]}>Dato’ Ahmad Fuaad Kenali</p>
              <p className={styles["leader-title"]}>
                President & Group Chief Executive Officer
              </p>
            </div>
          </motion.div>
          <motion.div
            whileInView={whileInView1}
            transition={{ duration: 0.8 }}
            className={styles["data-container"]}
          >
            <div className={styles["data-card"]}>
              <CountUp
                start={0}
                end={15.8}
                delay={0}
                decimal="."
                decimals={1}
                enableScrollSpy={true}
                scrollSpyDelay={1}
              >
                {({ countUpRef }) => (
                  <div className={styles["data-card-inner"]}>
                    <p className={styles.unit}>Group Revenue Growth</p>
                    <p style={{ margin: 0 }}>
                      <span className={styles.number}>RM</span>
                      <span className={styles.number} ref={countUpRef}></span>
                    </p>
                    <p className={styles.unit}> billion</p>
                  </div>
                )}
              </CountUp>
            </div>
            <div className={styles["data-card"]}>
              <CountUp
                start={0}
                end={869.5}
                delay={0}
                decimal="."
                decimals={1}
                enableScrollSpy={true}
                scrollSpyDelay={1}
              >
                {({ countUpRef }) => (
                  <div className={styles["data-card-inner"]}>
                    <p className={styles.unit}>Group's Profit Before Tax</p>
                    <p style={{ margin: 0 }}>
                      <span className={styles.number}>RM</span>
                      <span className={styles.number} ref={countUpRef}></span>
                      <span className={styles.unit}> million</span>
                    </p>
                  </div>
                )}
              </CountUp>
            </div>
          </motion.div>
          <motion.div
            whileInView={whileInView1}
            transition={{ duration: 0.8 }}
            className={styles["download-container"]}
          >
            <Button1
              link="/"
              text="Download This Section"
              backgroundColor="#112F5E"
              textColor="white"
              icon="download"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ViewsFromOurLeaders;
