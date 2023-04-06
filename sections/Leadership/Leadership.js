import React, { useState, useEffect } from "react";
import styles from "./Leadership.module.scss";
import { images } from "../../constants";
import { Carousel } from "@/components";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Button1 } from "@/components";
import { useInView } from "react-intersection-observer";

const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30,
};

const leaderData = [
  {
    key: 0,
    switcherName: "Board of directors",
    switcher: [
      {
        key: 0,
        image: "A1",
        name: "TAN SRI DATO’ SRI HAMAD KAMA PIAH CHE OTHMAN",
        title: ["Group Chairman,", "Non-Independent Non-Executive Director"],
      },
      {
        key: 1,
        image: "AB",
        name: "DATO’ AHMAD FUAAD KENALI",
        title: [
          "President & Group Chief Executive Officer/",
          "Executive Director",
        ],
      },
      {
        key: 2,
        image: "A2",
        name: "DR. VEERINDERJEET SINGH",
        title: ["Senior Independent","Non-Executive Director"],
      },
      {
        key: 3,
        image: "A3",
        name: "DATO’ ESHAH MEOR SULEIMAN",
        title: ["Independent","Non-Executive Director"],
      },
      {
        key: 4,
        image: "A4",
        name: "DATIN PADUKA KARTINI HJ ABDUL MANAF",
        title: ["Non-Independent","Non-Executive Director"],
      },
      {
        key: 5,
        image: "A5",
        name: "RAZALEE AMIN",
        title: ["Independent","Non-Executive Director"],
      },
      {
        key: 6,
        image: "A6",
        name: "DATO’ SERI PROF. DR. IR. ZAINI UJANG",
        title: ["Independent","Non-Executive Director"],
      },
      {
        key: 7,
        image: "A7",
        name: "DATO’ AZMI MOHD ALI",
        title: ["Independent","Non-Executive Director"],
      },
      {
        key: 8,
        image: "A8",
        name: "SHAHIN FAROUQUE JAMMAL AHMAD",
        title: ["Non-Independent","Non-Executive Director"],
      },
      {
        key: 9,
        image: "A9",
        name: "MOHD SHAHAZWAN MOHD HARRIS",
        title: ["Non-Independent","Non-Executive Director"],
      },
      {
        key: 10,
        image: "A10",
        name: "DATUK (DR.) YASMIN MAHMOOD",
        title: ["Non-Independent","Non-Executive Director"],
      },
    ],
  },
  {
    key: 1,
    switcherName: "management comittee members",
    switcher: [
      {
        key: 0,
        image: "B0",
        name: "DATO’ AHMAD FUAAD KENALI",
        title: ["President & Group Chief Executive Officer/", "Executive Director"],
      },
      {
        key: 1,
        image: "B1",
        name: "DATUK RAVINDRAN KURUSAMY",
        title: ["President,", "UMW Toyota Motor Sdn Bhd"],
      },
      {
        key: 2,
        image: "B2",
        name: "MEGAT SHAHRUL AZMIR NORDIN",
        title:["President,","Equipment Division"],
      },
      {
        key: 3,
        image: "B3",
        name: "DATO’ ABDUL RASHID MUSA",
        title:
          ["Group Chief Mobility & Innovation Officer/ President,", "Aerospace Division"]
      },
      {
        key: 4,
        image: "B4",
        name: "ZAILANI ALI",
        title: ["Group Chief Human Resources Officer"],
      },
      {
        key: 5,
        image: "B5",
        name: "FARNIDA NGAH",
        title: ["Group Chief Financial Officer"],
      },
      {
        key: 6,
        image: "B6",
        name: "MUZAFAR MUNZIR",
        title: ["Senior Group General Counsel,", "Group Legal"],
      },
    ],
  },
];

// const containerVariants = {
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.1,
//     },
//   },
//   hidden: {
//     opacity: 0,
//   },
// };

// const itemVariants = {
//   visible: { opacity: 1, y: 0 },
//   hidden: { opacity: 0, y: 30 },
// };

const Leadership = () => {
  const { ref, inView } = useInView({ threshold: 0.5 });
  const [activeSwitcher, setActiveSwitcher] = useState(0);
  const activeSwitcherData = leaderData.find(
    (switcher) => switcher.key === activeSwitcher
  );
  const activeCarouselData = activeSwitcherData?.switcher;
  

  return (
    <div className={styles.container}>
      <div className={styles["wrapper-top"]}>
        <motion.div
          whileInView={{
            y: [10, 0],
            opacity: [0, 1],
          }}
          transition={{ duration: 0.8 }}
        >
          <h2 className={styles.title}>Leadership</h2>
        </motion.div>
        <motion.div
          whileInView={{
            y: [10, 0],
            opacity: [0, 1],
          }}
          transition={{ duration: 0.8 }}
          className={styles["instructions"]}
        >
          <div className={styles.indicator}>
            <Image
              src={images.switcher}
              loading="lazy"
              alt="switcher-icon"
              className={styles["switcher-icon"]}
            />
            <p className={styles["indicator-text"]}>
              click to view umw leadership members
            </p>
          </div>
          <div
            whileInView={{
              y: [10, 0],
              opacity: [0, 1],
            }}
            className={styles["switch-container"]}
          >
            <div className={styles["switch-wrapper"]}>
              <div
                className={styles.switch}
                data-ison={activeSwitcher === 1 ? "true" : "false"}
                onClick={() => setActiveSwitcher(activeSwitcher === 0 ? 1 : 0)}
              >
                <div className={styles["switch-text"]}>
                  {activeSwitcherData.switcherName}
                </div>
                <motion.div
                  className={`${styles.handle} ${
                    activeSwitcher === 1 ? styles.active : ""
                  }`}
                  layout
                  transition={spring}
                ></motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <div>
        {activeSwitcherData?.switcher?.length > 0 && (
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSwitcherData.key}
              initial={{ x: 10, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -10, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className={styles["content-wrapper"]}
            >
              {activeCarouselData &&
                activeCarouselData.map((dataItem) => (
                  <motion.div
                    whileInView={{
                      y: [10, 0],
                      opacity: [0, 1],
                    }}
                    transition={{ duration: 0.8 }}
                    className={styles["card"]}
                  >
                    <Image
                      src={images[dataItem.image]}
                      alt={dataItem.name}
                      className={styles.image}
                    />
                    <div className={styles["content"]}>
                      <p className={styles["leader-name"]}>{dataItem.name}</p>
                      {Array.isArray(dataItem.title) &&
                        dataItem.title.map((item) => (
                          <p className={styles["leader-title"]}>{item}</p>
                        ))}
                    </div>
                  </motion.div>
                ))}
            </motion.div>
          </AnimatePresence>
        )}
      </div>
      <motion.div
        whileInView={{
          y: [10, 0],
          opacity: [0, 1],
        }}
        transition={{ duration: 0.8 }}
      >
        <Button1
          link="/"
          text="Download This Section"
          backgroundColor="#112F5E"
          textColor="white"
          icon="touch"
          className={styles.download}
        />
      </motion.div>
    </div>
  );
};

export default Leadership;
