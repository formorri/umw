import React, { useState, useEffect } from "react";
import styles from "./WhoWeAre.module.scss";
import Image from "next/image";
import { images } from "../../constants";
import { Button1, Button1Popup } from "@/components";
import { useWindowSize } from "react-use";
import { motion, AnimatePresence } from "framer-motion";
import Modal from "@mui/material/Modal";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const countries = [
  {
    image: "malaysia",
    countryName: "Malaysia",
    info: "Automotive, Equipment, Manufacturing & Engineering, Aerospace",
    color: "#C5D5E8",
  },
  {
    image: "singapore",
    countryName: "Singapore",
    info: "Equipment",
    color: "#CFE7E8",
  },
  {
    image: "china",
    countryName: "china",
    info: "Equipment, Manufacturing & Engineering",
    color: "#F5F3CC",
  },
  {
    image: "papua",
    countryName: "papua new guinea",
    info: "Equipment",
    color: "#F7E5CC",
  },
  {
    image: "vietnam",
    countryName: "vietnam",
    info: "Equipment",
    color: "#F4E7DA",
  },
  {
    image: "myanmar",
    countryName: "myanmar",
    info: "Equipment",
    color: "#FBD8DD",
  },
  {
    image: "indonesia",
    countryName: "indonesia",
    info: "Manufacturing & Engineering",
    color: "#D6E2CC",
  },
  {
    image: "brunei",
    countryName: "brunei",
    info: "Equipment",
    color: "#D9CEE1",
  },
];

const WhoWeAre = () => {
  const { width } = useWindowSize();
  const { ref, inView } = useInView({ threshold: 0.5 });

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
    <section className={styles.container}>
      <div className={styles["who-we-are"]}>
        <motion.div
          className={styles.col1}
          whileInView={whileInView1}
          transition={{ duration: 0.8 }}
        >
          <h2 className={styles.title}>who we are</h2>
          <Image
            src={images.wow}
            loading="lazy"
            alt="wow"
            className={styles.wow}
          />

          <Button1
            link="/"
            text="Download This Section"
            backgroundColor="#112F5E"
            textColor="white"
            icon="download"
          />
        </motion.div>

        <motion.div
          whileInView={whileInView2}
          transition={{ duration: 0.8 }}
          className={styles.col3}
        >
          <div className={styles.card2}>
            <div className={styles["value-title-deco"]}>
              <h3 className={styles["value-title"]}>vision</h3>
            </div>
            <p className={styles["inner-text"]}>
              To be an innovative global conglomerate with sustainable core
              businesses.
            </p>
          </div>
          <div className={styles.card3}>
            <div className={styles["value-title-deco"]}>
              <h3 className={styles["value-title"]}>mission</h3>
            </div>
            <p className={styles["inner-text"]}>
              Committed to delivering excellence and sustained value creation
              for our stakeholders through products and services.
            </p>
          </div>
          <div className={styles.card1}>
            <div className={styles["value-title-deco"]}>
              <h3 className={styles["value-title"]}>our core values</h3>
            </div>
            <p className={styles["inner-text"]}>
              Ways of Working, or “WoW” for short, is the clarion call for our
              employees to pledge their unwavering commitment to this renowned
              industrial conglomerate.
            </p>
            <p className={styles["inner-text"]}>
              WoW encapsulates three core values –{" "}
              <span className={styles.bold}>
                We Are One, We Drive Change and We Deliver Promises.
              </span>
            </p>
          </div>
        </motion.div>
      </div>

      <div className={styles.reach}>
        <motion.div
          whileInView={{
            y: [10, 0],
            opacity: [0, 1],
          }}
          transition={{ duration: 0.8 }}
          className={styles['reach-title']}
        >
          <h2 className={styles.title}>OUR REGIONAL PRESENCE</h2>
        </motion.div>
        <motion.div
          whileInView={{
            y: [10, 0],
            opacity: [0, 1],
          }}
          transition={{ duration: 0.8 }}
          className={styles["reach-container"]}
        >
          <div className={styles["wrapper"]}>
            <Image
              src={images.reachMapVertical}
              loading="lazy"
              alt="map"
              className={styles["modal-map"]}
            />
            <CountUp
              start={0}
              end={6313}
              delay={0}
              enableScrollSpy={true}
              scrollSpyDelay={1}
            >
              {({ countUpRef }) => (
                <div className={styles["map-text"]}>
                  <p className={styles.text}>employees</p>
                  <p className={styles.number} ref={countUpRef}></p>
                </div>
              )}
            </CountUp>
          </div>
          <div className={styles.content}>
            <div
              className={styles.country}
              style={{ backgroundColor: "#DCEAF8" }}
            >
              <div className={styles["country-intro"]}>
                <Image
                  src={images.malaysia}
                  loading="lazy"
                  alt="malaysia"
                  className={styles["country-image"]}
                />
                <p className={styles["country-name"]}>Malaysia</p>
              </div>
              <ul className={styles["country-info"]}>
                <li>
                  <span className={styles.automotive}>Automotive</span>,
                  <span className={styles.equipment}> Equipment</span>,
                  <span className={styles.mnE}> Manufacturing & Engineering</span>
                  ,<span className={styles.aerospace}> Aerospace</span>
                </li>
              </ul>
            </div>
            <div
              className={styles.country}
              style={{ backgroundColor: "#D7EBEC" }}
            >
              <div className={styles["country-intro"]}>
                <Image
                  src={images.singapore}
                  loading="lazy"
                  alt="singapore"
                  className={styles["country-image"]}
                />
                <p className={styles["country-name"]}>Singapore</p>
              </div>
              <ul className={styles["country-info"]}>
                <li>
                  <span className={styles.equipment}>Equipment</span>
                </li>
              </ul>
            </div>
            <div
              className={styles.country}
              style={{ backgroundColor: "#FEF3B6" }}
            >
              <div className={styles["country-intro"]}>
                <Image
                  src={images.china}
                  loading="lazy"
                  alt="china"
                  className={styles["country-image"]}
                />
                <p className={styles["country-name"]}>China</p>
              </div>
              <ul className={styles["country-info"]}>
                <li>
                  <span className={styles.equipment}>Equipment</span>,
                  <span className={styles.mnE}> Manufacturing & Engineering</span>
                </li>
              </ul>
            </div>
            <div
              className={styles.country}
              style={{ backgroundColor: "#F7F6D4" }}
            >
              <div className={styles["country-intro"]}>
                <Image
                  src={images.papua}
                  loading="lazy"
                  alt="papua"
                  className={styles["country-image"]}
                />
                <p className={styles["country-name"]}>Papua New Guinea</p>
              </div>
              <ul className={styles["country-info"]}>
                <li>
                  <span className={styles.equipment}>Equipment</span>
                </li>
              </ul>
            </div>
            <div
              className={styles.country}
              style={{ backgroundColor: "#F5E8DA" }}
            >
              <div className={styles["country-intro"]}>
                <Image
                  src={images.vietnam}
                  loading="lazy"
                  alt="vietnam"
                  className={styles["country-image"]}
                />
                <p className={styles["country-name"]}>Vietnam</p>
              </div>
              <ul className={styles["country-info"]}>
                <li>
                  <span className={styles.equipment}>Equipment</span>
                </li>
              </ul>
            </div>
            <div
              className={styles.country}
              style={{ backgroundColor: "#FCDFE2" }}
            >
              <div className={styles["country-intro"]}>
                <Image
                  src={images.myanmar}
                  loading="lazy"
                  alt="myanmar"
                  className={styles["country-image"]}
                />
                <p className={styles["country-name"]}>Myanmar</p>
              </div>
              <ul className={styles["country-info"]}>
                <li>
                  <span className={styles.equipment}>Equipment</span>
                </li>
              </ul>
            </div>
            <div
              className={styles.country}
              style={{ backgroundColor: "#DEE7D5" }}
            >
              <div className={styles["country-intro"]}>
                <Image
                  src={images.indonesia}
                  loading="lazy"
                  alt="indonesia"
                  className={styles["country-image"]}
                />
                <p className={styles["country-name"]}>Indonesia</p>
              </div>
              <ul className={styles["country-info"]}>
                <li>
                  <span className={styles.mnE}>
                    Manufacturing & Engineering
                  </span>
                </li>
              </ul>
            </div>
            <div
              className={styles.country}
              style={{ backgroundColor: "#F4E8DA" }}
            >
              <div className={styles["country-intro"]}>
                <Image
                  src={images.brunei}
                  loading="lazy"
                  alt="brunei"
                  className={styles["country-image"]}
                />
                <p className={styles["country-name"]}>Brunei</p>
              </div>
              <ul className={styles["country-info"]}>
                <li>
                  <span className={styles.equipment}>Equipment</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhoWeAre;
