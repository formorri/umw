import React, { useState, useEffect, useRef } from "react";
import styles from "./Hero.module.scss";
import { images } from "../../constants";
import { Button1 } from "@/components";
import Image from "next/image";
import Modal from "@mui/material/Modal";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { motion, AnimatePresence } from "framer-motion";

const Hero = () => {
  const [triggerAnimation, setTriggerAnimation] = useState(false);
  const [modal, setModal] = useState(true);
  const videoRef = useRef(null);

  return (
    <section className={styles.container}>
      <Modal
        open={modal}
        onClose={() => {
          videoRef.current.play();
          setModal(false);
          setTriggerAnimation(true);
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
                  videoRef.current.play();
                  setModal(false);
                  setTriggerAnimation(true);
                }}
                className={styles["close-container"]}
              >
                <CloseIcon className={styles["close"]} />
              </IconButton>
              <div className={styles["text-container"]}>
                <h3 className={styles.title}>cover rationale</h3>
                <p className={styles.text}>
                  UMW’s approach to comprehensive growth is encircled in our
                  Crest@2021 strategy framework. Leading the way with
                  sustainable core businesses based on our five vital pillars,
                  we at UMW commit to driving change and delivering on our
                  promises. In meeting challenges and allaying prevailing
                  uncertainties, our CREST@2021 strategy creates a firm pathway
                  toward resolving emergent economic and sustainability
                  concerns.
                </p>
                <p className={styles.text}>
                  As a major national industry leader, it is our responsibility
                  to forge new and innovative paths, paving the way for
                  long-term sustainable growth. We cultivate strategic global
                  alliances, adopt the latest technological advances and pursue
                  excellence and sustained stakeholder value, while at all times
                  striving to break new ground.
                </p>
                <p className={styles.text}>
                  The cover reflects UMW’s central role, sustained by its five
                  core pillars of its CREST@2021 transformation strategy, in a
                  constantly evolving ecosystem. Spearheading support, each core
                  pillar and enabler drives UMW’s determination to reinvigorate
                  the various industries in which we operate. The design’s
                  dynamic shapes encapsulate UMW’s diverse endeavours within the
                  automotive, equipment, engineering, aerospace and development
                  industries.
                </p>
                <p className={styles.text}>
                  The cyclical aesthetic of the design, as well as the
                  shape-shifting shades of green, highlight UMW’s dedication to
                  long-term sustainability. CREST@2021 core components are
                  embedded within the cover to accentuate the framework’s
                  augmentation of UMW’s overall performance, accelerating
                  progress in our CREST@2021 aspirations. Hence, Accelerating
                  CREST@2021.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Modal>
      <AnimatePresence>
        {triggerAnimation && (
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            // exit={{ y: -10, opacity: 0 }}
            whileInView={{
              opacity: [0, 1],
              x: [-50, 0],
            }}
            transition={{ duration: 0.5 }}
            className={styles.col1}
          >
            <h1 className={styles.header}>
              accelerating <span className={styles.bold}>crest@UMW</span>
            </h1>
            <Button1
              link="/"
              text="Download The Full Report"
              backgroundColor="#112F5E"
              textColor="white"
              icon="download"
            />
          </motion.div>
        )}
      </AnimatePresence>
      <div className={styles.col2}>
        <video className={styles.video} ref={videoRef}>
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
