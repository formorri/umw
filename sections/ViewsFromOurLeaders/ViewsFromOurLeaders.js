import React, { useState, useEffect } from "react";
import styles from "./ViewsFromOurLeaders.module.scss";
import { images } from "../../constants";
import CountUp from "react-countup";
import Image from "next/image";
import { Button1 } from "@/components";
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
      <div className={styles["chairman-wrapper"]}>
        <Image
          src={images.leaderBackground}
          loading="lazy"
          alt="background"
          className={styles["background"]}
        />
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
          className={styles["title-container"]}
        >
          <h2 className={styles.title}>Views From Our Chairman</h2>
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
                <div>
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
              end={15.0}
              delay={0}
              decimal="."
              decimals={1}
              enableScrollSpy={true}
              scrollSpyDelay={1}
            >
              {({ countUpRef }) => (
                <div>
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
          whileInView={whileInView2}
          transition={{ duration: 0.8 }}
          className={styles["quote-container"]}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 459.52 9.217"
            className={styles["decoration"]}
          >
            <path
              id="Path_2944"
              data-name="Path 2944"
              d="M-8076.517-23817.2h46.939l11.733,8.109,11.738-8.109H-7617"
              transform="translate(8076.517 23817.701)"
              fill="none"
              stroke="#112f5e"
              stroke-width="1"
            />
          </svg>
          <div className={styles["quote-wrapper"]}>
            <div className={styles["quote-content"]}>
              <p className={styles["quote-header"]}>
                Dear Valued Shareholders,
              </p>
              <div className={styles["quote-quote"]}>
                <Image
                  src={images.quote}
                  loading="lazy"
                  alt="quote"
                  className={styles["quote-start"]}
                />
                <p className={styles["quote-text"]}>
                  The Board’s priority in 2022 for the UMW Group was to build
                  resilience by actively managing risk, while operating in a
                  world facing global macroeconomic and geo-political headwinds.
                </p>
                <Image
                  src={images.quote}
                  loading="lazy"
                  alt="quote"
                  className={styles["quote-end"]}
                />
              </div>
              <div className={styles["designation-container"]}>
                <p className={styles["leader-name"]}>
                  Tan Sri Dato’ Sri Hamad Kama Piah Che Othman
                </p>
                <p className={styles["leader-title"]}>Chairman</p>
                <Image
                  src={images.chairmanSignature}
                  loading="lazy"
                  alt="chairman-signature"
                  className={styles["signature"]}
                />
              </div>
            </div>
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
            className={styles.download}
          />
        </motion.div>
      </div>
      <div className={styles["ceo-wrapper"]}>
        <Image
          src={images.leaderBackground1}
          loading="lazy"
          alt="background"
          className={styles["background"]}
        />
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
          className={styles["title-container"]}
        >
          <h2 className={styles.title}>Views From Our President & CEO</h2>
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
                <div>
                  <p className={styles.unit}>Group Revenue Growth</p>
                  <p style={{ margin: 0 }}>
                    <span className={styles.number}>RM</span>
                    <span className={styles.number} ref={countUpRef}></span>
                    <span className={styles.unit}> billion</span>
                  </p>
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
                <div>
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
          whileInView={whileInView2}
          transition={{ duration: 0.8 }}
          className={styles["quote-container"]}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 459.52 9.217"
            className={styles["decoration"]}
          >
            <path
              id="Path_2944"
              data-name="Path 2944"
              d="M-8076.517-23817.2h46.939l11.733,8.109,11.738-8.109H-7617"
              transform="translate(8076.517 23817.701)"
              fill="none"
              stroke="#112f5e"
              stroke-width="1"
            />
          </svg>
          <div className={styles["quote-wrapper"]}>
            <div className={styles["quote-content"]}>
              <p className={styles["quote-header"]}>
                Dear Valued Shareholders,
              </p>
              <div className={styles["quote-quote"]}>
                <Image
                  src={images.quote}
                  loading="lazy"
                  alt="quote"
                  className={styles["quote-start"]}
                />
                <p className={styles["quote-text"]}>
                  2022 was a good year for Malaysia and the UMW Group. The
                  recovery, buoyed by the transition of COVID-19 from pandemic
                  to endemic phase, improved business and consumer confidence.
                </p>
                <Image
                  src={images.quote}
                  loading="lazy"
                  alt="quote"
                  className={styles["quote-end"]}
                />
              </div>
              <div className={styles["designation-container"]}>
                <p className={styles["leader-name"]}>
                  Dato’ Ahmad Fuaad Kenali
                </p>
                <p className={styles["leader-title"]}>
                  President & Group Chief Executive Officer
                </p>
                <Image
                  src={images.presidentSignature}
                  loading="lazy"
                  alt="president-signature"
                  className={styles["signature"]}
                />
              </div>
            </div>
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
            className={styles.download}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default ViewsFromOurLeaders;
