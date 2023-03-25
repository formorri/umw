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
    image: 'malaysia',
    countryName: 'Malaysia',
    info: 'Automotive, Equipment, Manufacturing & Engineering, Aerospace',
    color: '#C5D5E8'
  },
  {
    image: 'singapore',
    countryName: 'Singapore',
    info: 'Equipment',
    color: '#CFE7E8'
  },
  {
    image: 'china',
    countryName: 'china',
    info: 'Equipment, Manufacturing & Engineering',
    color: '#F5F3CC'
  },
  {
    image: 'papua',
    countryName: 'papua new guinea',
    info: 'Equipment , Manufacturing & Engineering',
    color: '#F7E5CC'
  },
  {
    image: 'vietnam',
    countryName: 'vietnam',
    info: 'Equipment',
    color: '#F4E7DA'
  },
  {
    image: 'myanmar',
    countryName: 'myanmar',
    info: 'Equipment',
    color: '#FBD8DD'
  },
  {
    image: 'indonesia',
    countryName: 'indonesia',
    info: 'Manufacturing & Engineering',
    color: '#D6E2CC'
  },
  {
    image: 'brunei',
    countryName: 'brunei',
    info: 'Equipment',
    color: '#D9CEE1'
  },
];

const WhoWeAre = () => {
  const { width } = useWindowSize();
  const [modal, setModal] = useState(false);
  const { ref, inView } = useInView({ threshold: 0.5 });
  console.log(modal);

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
          <p className={styles.paragraph}>
            A catalyst for progressively transforming the energy transition, UMW
            Holdings Berhad leads by committing to sustainable core businesses,
            driving change and delivering promises.
          </p>
          <Button1
            link="/"
            text="Download This Section"
            backgroundColor="#112F5E"
            textColor="white"
            icon="download"
          />
        </motion.div>
        <motion.div
          whileInView={{
            opacity: [0, 1],
          }}
          transition={{ duration: 0.8 }}
          className={styles.col2}
        >
          <Image
            src={images.wow}
            loading="lazy"
            alt="wow"
            className={styles.wow}
          />
          <div className={styles.wow1}>
            <Image
              src={images.wowLogo1}
              loading="lazy"
              alt="wowLogo1"
              className={styles.wowLogo}
            />
            <div className={styles["wow-text"]}>
              <Image
                src={images.wowText1}
                loading="lazy"
                alt="wowText1"
                className={styles.wowText}
              />
              <ul className={styles.list}>
                <li className={styles["inner-text"]}>
                  <span className={styles.bold}>Respect</span> and{" "}
                  <span className={styles.bold}>appreciate</span> each other
                </li>
                <li className={styles["inner-text"]}>
                  <span className={styles.bold}>Support</span> and make each
                  other better
                </li>
                <li className={styles["inner-text"]}>
                  <span className={styles.bold}>Collaborate</span> and{" "}
                  <span className={styles.bold}>unite</span>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.wow2}>
            <Image
              src={images.wowLogo2}
              loading="lazy"
              alt="wowLogo2"
              className={styles.wowLogo}
            />
            <div className={styles["wow-text"]}>
              <Image
                src={images.wowText2}
                loading="lazy"
                alt="wowText2"
                className={styles.wowText}
              />
              <ul className={styles.list}>
                <li className={styles["inner-text"]}>
                  <span className={styles.bold}>Embrace</span> change
                </li>
                <li className={styles["inner-text"]}>
                  <span className={styles.bold}>Try</span> new ways
                </li>
                <li className={styles["inner-text"]}>
                  Be <span className={styles.bold}>quick</span> and{" "}
                  <span className={styles.bold}>decisive</span>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.wow3}>
            <Image
              src={images.wowLogo3}
              loading="lazy"
              alt="wowLogo3"
              className={styles.wowLogo}
            />
            <div className={styles["wow-text"]}>
              <Image
                src={images.wowText3}
                loading="lazy"
                alt="wowText3"
                className={styles.wowText}
              />
              <ul className={styles.list}>
                <li className={styles["inner-text"]}>
                  Take <span className={styles.bold}>ownership</span> of all
                  deliverables
                </li>
                <li className={styles["inner-text"]}>
                  Be <span className={styles.bold}>accountable</span> for our
                  actions
                </li>
                <li className={styles["inner-text"]}>
                  Continuously <span className={styles.bold}>improve</span> to
                  maintain{" "}
                  <span className={styles.bold}>sustainable growth</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
        <motion.div
          whileInView={whileInView2}
          transition={{ duration: 0.8 }}
          className={styles.col3}
        >
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
          <div className={styles.card2}>
            <div className={styles["value-title-deco"]}>
              <h3 className={styles["value-title"]}>vision</h3>
            </div>
            <p className={styles["bold"]}>
              To be an innovative global conglomerate with sustainable core
              businesses.
            </p>
          </div>
          <div className={styles.card3}>
            <div className={styles["value-title-deco"]}>
              <h3 className={styles["value-title"]}>mission</h3>
            </div>
            <p className={styles["bold"]}>
              Committed to delivering excellence and sustained value creation
              for our stakeholders through products and services.
            </p>
          </div>
        </motion.div>
      </div>

      <div className={styles.reach}>
        <div className={styles["background-1"]}>
          <div className={styles["background-inner"]}></div>
        </div>
        <div className={styles["background-2"]}>
          <div className={styles["background-inner"]}></div>
        </div>
        <motion.div
          whileInView={whileInView1}
          transition={{ duration: 0.8 }}
          className={styles.col1}
        >
          <h2 className={styles.title}>our reach</h2>
          <div className={styles["map-container"]}>
            <Image
              src={images.reachMapHorizontal}
              loading="lazy"
              alt="map"
              className={styles["map"]}
            />
            <div className={styles["map-text"]}>
              <CountUp
                start={0}
                end={17813}
                delay={0}
                enableScrollSpy={true}
                scrollSpyDelay={1}
              >
                {({ countUpRef }) => (
                  <div>
                    <p className={styles.text}>employees</p>
                    <p className={styles.number} ref={countUpRef}></p>
                  </div>
                )}
              </CountUp>
              <Button1Popup
                text="Click To Find Out More"
                backgroundColor="#1683BA"
                textColor="white"
                icon="add"
                onClick={() => setModal(true)}
              />
            </div>
            <Modal
              open={modal}
              onClose={() => {
                setModal(false);
              }}
              sx={{
                overflow: 'scroll',
                maxHeight: '100vh'
              }}
            >
              <div className={styles["modal-container"]}>
                <div className={styles["modal"]}>
                  <IconButton
                    onClick={() => {
                      setModal(false);
                    }}
                    className={styles["close-container"]}
                  >
                    <CloseIcon className={styles["close"]} />
                  </IconButton>
                  <div className={styles["wrapper"]}>
                    <Image
                      src={images.reachMapVertical}
                      loading="lazy"
                      alt="map"
                      className={styles["modal-map"]}
                    />
                  </div>
                  <div className={styles.content}>
                    {countries.map(({ image, countryName, info, color,index }) => (
                      <div
                        key={index}
                        className={styles.country}
                        style={{ backgroundColor: color }}
                      >
                      <div className={styles['country-intro']}>
                        <Image
                          src={images[image]}
                          loading="lazy"
                          alt={countryName}
                          className={styles["country-image"]}
                        />
                        <p className={styles['country-name']}>{countryName}</p>
                      </div>
                        <ul className={styles['country-info']}>
                          <li>{info}</li>
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Modal>
          </div>
        </motion.div>
        <motion.div
          whileInView={whileInView2}
          transition={{ duration: 0.8 }}
          className={styles.col2}
        >
          <div className={styles["data1"]}>
            <p className={styles["data-text1"]}>asset value</p>
            <p className={styles["data-text2"]}>(rm million)</p>
            <CountUp
              start={0}
              end={12417.1}
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
          </div>
          <div className={styles["data2"]}>
            <p className={styles["data-text1"]}>net profit</p>
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
          </div>
          <div className={styles["data3"]}>
            <p className={styles["data-text1"]}>market capitalisation</p>
            <p className={styles["data-text2"]}>(rm million)</p>
            <CountUp
              start={0}
              end={4.1}
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
          </div>
          <div className={styles["data4"]}>
            <p className={styles["data-text1"]}>automotive market share</p>
            <p className={styles["data-text1"]}>(TOYOTA, LEXUS & PERODUA)</p>
            <p className={styles["data-text2"]}>(rm million)</p>
            <CountUp
              start={0}
              end={53.1}
              delay={0}
              enableScrollSpy={true}
              scrollSpyDelay={1}
            >
              {({ countUpRef }) => (
                <div>
                  <p>
                    <span
                      ref={countUpRef}
                      className={styles["data-number"]}
                    ></span>{" "}
                    <span className={styles["data-number"]}>% </span>{" "}
                    <span className={styles["data-text3"]}>In Malaysia</span>
                  </p>
                </div>
              )}
            </CountUp>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhoWeAre;
