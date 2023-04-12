import React, { useState, useEffect, useRef } from "react";
import styles from "./Hero.module.scss";
import { images } from "../../constants";
import { Button1Popup } from "@/components";
import Image from "next/image";
import Modal from "@mui/material/Modal";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Hero = () => {
  // const [triggerAnimation, setTriggerAnimation] = useState(false);
  const [modal, setModal] = useState(false);
  const videoRef = useRef(null);
  const { ref, inView } = useInView({ threshold: 0.1 });
  const videoRefs = {
    videoRef1: useRef(null),
    videoRef2: useRef(null),
  };

  const [isPlaying, setIsPlaying] = useState({
    videoRef1: false,
    videoRef2: false,
  });

  useEffect(() => {
    const playVideoOnce = (videoRefName) => {
      if (
        inView &&
        videoRefs[videoRefName].current &&
        !isPlaying[videoRefName]
      ) {
        setIsPlaying((prevState) => ({
          ...prevState,
          [videoRefName]: true,
        }));
        videoRefs[videoRefName].current.play();
      }
    };

    playVideoOnce("videoRef1");
    playVideoOnce("videoRef2");
  }, [inView, isPlaying]);

  return (
    <section id="home" className={styles.container} ref={ref}>
      <Modal
        open={modal}
        onClose={() => {
          // videoRef.current.play();
          setModal(false);
          // setTriggerAnimation(true);
        }}
        sx={{
          overflow: "scroll",
          maxHeight: "100vh",
        }}
      >
        <div className={styles["modal-container"]}>
          <div className={styles["modal"]}>
            <Image
              src={images.coverImage}
              loading="eager"
              alt="cover-image"
              className={styles["cover-image"]}
            />
            <div className={styles["content"]}>
              <IconButton
                onClick={() => {
                  // videoRef.current.play();
                  setModal(false);
                  // setTriggerAnimation(true);
                }}
                className={styles["close-container"]}
              >
                <CloseIcon className={styles["close"]} />
              </IconButton>
              <div className={styles["text-container"]}>
                <h3 className={styles.title}>cover rationale</h3>
                <p className={styles.text}>
                  UMW's approach to comprehensive growth is encircled in our
                  CREST@UMW strategy framework. Launched in January <span className={styles['modal-number']}>2021</span> as
                  CREST@<span className={styles['modal-number']}>2021</span>, it has since been retitled to CREST@UMW. The
                  numbers <span className={styles['modal-number']}>20-2-1</span> inscribed in the CREST@UMW logo not only refers
                  to the year it was launched but also the strategic framework’s
                  aspirations: to achieve <span className={styles['modal-number']}>RM20</span> billion in revenue, <span className={styles['modal-number']}>RM2</span> billion
                  PBT and <span className={styles['modal-number']}>RM1</span> billion PATAMI by <span className={styles['modal-number']}>2030</span>. The goal is to lead the
                  way with sustainable core businesses based on our five vital
                  pillars,{" "}
                  <span className={styles.bold}>
                    Customer, Relationship, Excellence, Sustainability and
                    Teamwork
                  </span>
                  , as we at UMW commit to driving change and delivering on our
                  promises. In order to fully realise the objectives of CREST@
                  UMW, the core framework is bolstered by distinct underlying
                  enablers. These include the ingenuity to innovate, a
                  continuous push towards digitalisation and the cultivation of
                  a shared attitude towards success. In meeting challenges and
                  allaying prevailing uncertainties, our CREST@UMW strategy
                  creates a firm pathway toward resolving emergent economic and
                  sustainability concerns.
                </p>
                <p className={styles.text}>
                  As one of the industry leaders, it is our responsibility to
                  forge new and innovative paths, paving the way for long-term
                  sustainable growth. We cultivate strategic global alliances,
                  adopt the latest technological advances and pursue excellence
                  and sustained stakeholder value, while at all times striving
                  to break new ground.
                </p>
                <p className={styles.text}>
                  The cover reflects UMW's central role, sustained by its five
                  core pillars of its CREST@UMW transformation strategy, in a
                  constantly evolving ecosystem. Spearheading support, each core
                  pillar and enabler drives UMW's determination to reinvigorate
                  the various industries in which we operate. The design's
                  dynamic shapes encapsulate UMW's diverse endeavours within the
                  automotive, equipment, manufacturing & engineering, aerospace
                  and property development sectors.
                </p>
                <p className={styles.text}>
                  The cyclical aesthetic of the design, as well as the
                  shape-shifting shades of green, highlight UMW’s dedication to
                  long-term sustainability in innovising mobility. CREST@UMW
                  core components are embedded within the cover to accentuate
                  the framework's augmentation of UMW's overall performance,
                  accelerating progress in realising our CREST@UMW aspirations.
                  Hence, accelerating CREST@UMW.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      <div className={styles["video-col"]}>
        <video
          className={styles.video}
          ref={videoRefs.videoRef1}
          muted
          playsInline
        >
          <source src="assets/cover.mp4" type="video/mp4" />
        </video>
        <video
          className={styles["video-small"]}
          ref={videoRefs.videoRef2}
          muted
          playsInline
        >
          <source src="assets/cover-small.mp4" type="video/mp4" />
        </video>
      </div>

      <motion.div
        whileInView={{
          opacity: [0, 1],
          x: [-50, 0],
        }}
        transition={{ duration: 0.5 }}
        className={styles["text-col"]}
      >
        <div className={styles["hero-text-container"]}>
          <h1 className={styles.header}>
            accelerating <span className={styles.bold}>crest@UMW</span>
          </h1>
          <h2 className={styles["header-subtitle"]}>
            INTEGRATED ANNUAL REPORT <span className={styles.number}>2022</span>
          </h2>
          {/* <p className={styles["header-subtitle-1"]}>UMW Holdings Berhad</p> */}
        </div>
        <Button1Popup
          link="/"
          text="Read our cover rationale"
          backgroundColor="#112F5E"
          textColor="white"
          icon="touch"
          onClick={() => setModal(true)}
        />
      </motion.div>
      <a href="#who-we-are" className={styles["scroll"]}>
        <Image
          src={images.scroll}
          priority
          alt="scroll"
          className={styles["scroll-icon"]}
        />
      </a>
    </section>
  );
};

export default Hero;
