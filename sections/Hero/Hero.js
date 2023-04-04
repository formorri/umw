import React, { useState, useEffect, useRef } from "react";
import styles from "./Hero.module.scss";
import { images } from "../../constants";
import { Button1Popup } from "@/components";
import Image from "next/image";
import Modal from "@mui/material/Modal";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { motion, AnimatePresence } from "framer-motion";

const Hero = () => {
  // const [triggerAnimation, setTriggerAnimation] = useState(false);
  const [modal, setModal] = useState(false);
  const videoRef = useRef(null);

  return (
    <section className={styles.container}>
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
                  CREST@UMW strategy framework. Launched in January 2021 as
                  CREST@2021, it has since been retitled to CREST@UMW. The
                  numbers 20-2-1 inscribed in the CREST@UMW logo not only refers
                  to the year it was launched but also the strategic framework’s
                  aspirations: to achieve RM20 billion in revenue, RM2 billion
                  PBT and RM1 billion PATAMI by 2030. The goal is to lead the
                  way with sustainable core businesses based on our five vital
                  pillars, Customer, Relationship, Excellence, Sustainability
                  and Teamwork, as we at UMW commit to driving change and
                  delivering on our promises. In order to fully realise the
                  objectives of CREST@ UMW, the core framework is bolstered by
                  distinct underlying enablers. These include the ingenuity to
                  innovate, a continuous push towards digitalisation and the
                  cultivation of a shared attitude towards success. In meeting
                  challenges and allaying prevailing uncertainties, our
                  CREST@UMW strategy creates a firm pathway toward resolving
                  emergent economic and sustainability concerns.
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
      <AnimatePresence>
        {/* {triggerAnimation && ( */}
        <motion.div
          // initial={{ x: -50, opacity: 0 }}
          // animate={{ x: 0, opacity: 1 }}
          // exit={{ y: -10, opacity: 0 }}
          whileInView={{
            opacity: [0, 1],
            x: [50, 0],
          }}
          transition={{ duration: 0.5 }}
          className={styles["text-col"]}
        >
          <p className={styles["header-subtitle"]}>
            INTEGRATED ANNUAL REPORT 2022
          </p>
          <h1 className={styles.header}>
            accelerating <span className={styles.bold}>crest@UMW</span>
          </h1>
          <Button1Popup
            link="/"
            text="Read our cover rationale"
            backgroundColor="#112F5E"
            textColor="white"
            icon="add"
            onClick={() => setModal(true)}
          />
        </motion.div>
        {/* )} */}
      </AnimatePresence>
      <div className={styles["video-col"]}>
        <video className={styles.video} autoPlay={true} muted>
          <source src="assets/cover.mp4" type="video/mp4" />
        </video>
      </div>
      <Image
        src={images.scroll}
        priority
        alt="scroll"
        className={styles.scroll}
      />
    </section>
  );
};

export default Hero;
