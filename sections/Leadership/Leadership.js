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
    tabName: "Board of directors",
    colorActive: "#00A4E2",
    colorInactive: "#C7EAF6",
    tab: [
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
        title: ["Senior Independent", "Non-Executive Director"],
      },
      {
        key: 3,
        image: "A3",
        name: "DATO’ ESHAH MEOR SULEIMAN",
        title: ["Independent", "Non-Executive Director"],
      },
      {
        key: 4,
        image: "A4",
        name: "DATIN PADUKA KARTINI HJ ABDUL MANAF",
        title: ["Non-Independent", "Non-Executive Director"],
      },
      {
        key: 5,
        image: "A5",
        name: "RAZALEE AMIN",
        title: ["Independent", "Non-Executive Director"],
      },
      {
        key: 6,
        image: "A6",
        name: "DATO’ SERI PROF. DR. IR. ZAINI UJANG",
        title: ["Independent", "Non-Executive Director"],
      },
      {
        key: 7,
        image: "A7",
        name: "DATO’ AZMI MOHD ALI",
        title: ["Independent", "Non-Executive Director"],
      },
      {
        key: 8,
        image: "A8",
        name: "SHAHIN FAROUQUE JAMMAL AHMAD",
        title: ["Non-Independent", "Non-Executive Director"],
      },
      {
        key: 9,
        image: "A9",
        name: "MOHD SHAHAZWAN MOHD HARRIS",
        title: ["Non-Independent", "Non-Executive Director"],
      },
      {
        key: 10,
        image: "A10",
        name: "DATUK (DR.) YASMIN MAHMOOD",
        title: ["Independent", "Non-Executive Director"],
      },
    ],
  },
  {
    key: 1,
    tabName: "management comittee members",
    colorActive: "#37BDBA",
    colorInactive: "#EAF6F5",
    tab: [
      {
        key: 0,
        image: "B0",
        name: "DATO’ AHMAD FUAAD KENALI",
        title: [
          "President & Group Chief Executive Officer/",
          "Executive Director",
        ],
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
        title: ["President,", "Equipment Division"],
      },
      {
        key: 3,
        image: "B3",
        name: "DATO’ ABDUL RASHID MUSA",
        title: [
          "Group Chief Mobility & Innovation Officer/ President,",
          "Aerospace Division",
        ],
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
  {
    key: 2,
    tabName: "ex officio members",
    colorActive: "#8E71A1",
    colorInactive: "#E9E1EF",
    tab: [
      {
        key: 0,
        image: "C1",
        name: "SHAHRIL MIZANI ARIFFIN",
        title: ["Group Chief Transformation & Technology Officer"],
      },
      {
        key: 1,
        image: "C2",
        name: "CHEW KAR KEAN, ERIC",
        title: ["Group Director, Property & Development"],
      },
      {
        key: 2,
        image: "C3",
        name: "ZOELANEY ABID",
        title: ["Group Director,", "Group Strategy"],
      },
      {
        key: 3,
        image: "C4",
        name: "ANAS NASRUN MOHD OSMAN",
        title: ["Group Director,", "Manufacturing & Engineering Division"],
      },
      {
        key: 4,
        image: "C5",
        name: "IDZAM YUHAIZI MOHD YUNOS",
        title: ["Group Head,", "Group Risk Management & Integrity"],
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
  const [activeTab, setActiveTab] = useState(0);
  const activeTabData = leaderData.find((tab) => tab.key === activeTab);
  // const activeSwitcherData = leaderData.find(
  //   (switcher) => switcher.key === activeSwitcher
  // );
  // const activeCarouselData = activeSwitcherData?.switcher;
  const handleTabClick = (key) => () => {
    setActiveTab(key);
  };

  return (
    <div id="leadership" className={styles.container}>
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
          className={styles["tab-container"]}
        >
          {leaderData.map((item, index) => (
            <div
              key={index}
              style={{
                backgroundColor:
                  activeTab === index ? item.colorActive : item.colorInactive,
                opacity: activeTab === index ? 1 : 0.5,
                border:
                  activeTab === index
                    ? "none"
                    : `2px solid ${item.colorActive}`,
              }}
              onClick={handleTabClick(item.key)}
              className={styles.tab}
            >
              <p
                className={styles["tab-text"]}
                style={{
                  color:
                    activeTab === index ? item.colorInactive : item.colorActive,
                }}
              >
                {item.tabName}
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15.997"
                height="24.833"
                viewBox="0 0 15.997 24.833"
                className={styles.indicator}
              >
                <g
                  id="Group_6180"
                  data-name="Group 6180"
                  transform="translate(-134.051 439.644)"
                >
                  <path
                    id="Path_12036"
                    data-name="Path 12036"
                    d="M134.051-385.468c.036-.131.068-.264.11-.394a2.187,2.187,0,0,1,2.581-1.437l.215.051v-.276c0-1.665-.008-3.33,0-4.995a2.176,2.176,0,0,1,2.162-2.163,2.172,2.172,0,0,1,2.19,2.132c.016,1.188,0,2.376,0,3.564v.264c1.6-.175,2.274.179,2.844,1.5a2.185,2.185,0,0,1,1.751.085,2.165,2.165,0,0,1,1.118,1.293,7.756,7.756,0,0,1,1.234-.012,2.084,2.084,0,0,1,1.759,1.974c.026,1.267.051,2.541-.038,3.8a7.984,7.984,0,0,1-6.171,7.11c-.392.087-.792.136-1.189.2h-1.163c-.341-.054-.688-.085-1.023-.166a7.922,7.922,0,0,1-6.091-5.742,14.485,14.485,0,0,1-.3-1.561Zm11.627,2.462c0-.721,0-1.423,0-2.124a.731.731,0,0,0-.727-.774.731.731,0,0,0-.725.775c0,.622,0,1.244,0,1.867v.255h-1.453v-.272c0-1.091,0-2.182,0-3.273a.767.767,0,0,0-.238-.611.678.678,0,0,0-.763-.139.714.714,0,0,0-.453.708q0,1.661,0,3.321v.26h-1.453v-.305q0-4.485,0-8.97c0-.081,0-.162,0-.242a.734.734,0,0,0-.681-.7.731.731,0,0,0-.755.585,1.6,1.6,0,0,0-.015.314q0,5.976,0,11.952v.278h-1.453v-.272q0-2.352,0-4.7a.79.79,0,0,0-.239-.635.678.678,0,0,0-.764-.138.714.714,0,0,0-.452.709c0,1.511,0,3.022.005,4.534a4.94,4.94,0,0,0,.06.724,6.549,6.549,0,0,0,7.6,5.565,6.534,6.534,0,0,0,5.362-5.76c.092-1.222.05-2.454.052-3.682a.712.712,0,0,0-.731-.692.728.728,0,0,0-.714.712c-.009.24,0,.48,0,.731Z"
                    transform="translate(0 -42.049)"
                    fill={
                      activeTab === index
                        ? item.colorInactive
                        : item.colorActive
                    }
                  />
                  <path
                    id="Path_12037"
                    data-name="Path 12037"
                    d="M134.051-435.034c.066-.306.115-.617.2-.918a5.1,5.1,0,0,1,5.211-3.681,5.108,5.108,0,0,1,4.7,4.313c.037.245.046.494.07.757h-1.443a3.684,3.684,0,0,0-3.818-3.622,3.677,3.677,0,0,0-3.483,3.636h-1.441Z"
                    fill={
                      activeTab === index
                        ? item.colorInactive
                        : item.colorActive
                    }
                  />
                </g>
              </svg>
            </div>
          ))}
        </motion.div>
        {/* <motion.div
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

        </motion.div> */}
      </div>
      <div>
        {activeTabData && (
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ x: 10, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -10, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className={styles["content-wrapper"]}
            >
              {activeTabData.tab.map((dataItem) => (
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
          link="pdf/leadership.pdf"
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
