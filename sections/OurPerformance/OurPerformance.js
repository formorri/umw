import styles from "./OurPerformance.module.scss";
import { images } from "../../constants";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import CountUp from "react-countup";
import { Button1 } from "@/components";

const tabData = [
  {
    key: 0,
    icon: "automotive",
    iconText: "automotive",
    color: "#C65A81",
    switcher: [
      {
        key: 0,
        color: "#C65A81",
        backgroundColor: "#F7E8EE",
        title: "UMW Toyota",
        category: "automotive",
        image: "toyotaPic",
        description:
          "Reclaimed Its Position As The Number-One Non-National Car Manufacturer In Malaysia For The Second Year Running.",
        data: [
          {
            key: 0,
            title: "toyota sales volume",
            units: "(units)",
            figure: "101035",
            year: "2021: 72,394",
          },
          {
            key: 1,
            title: "TOYOTA CAPITAL MANAGED ASSETS",
            units: "(RM billion)",
            figure: "7.34",
            year: "2021: 6.3",
          },
        ],
      },
      {
        key: 1,
        color: "#C65A81",
        backgroundColor: "#EAF7F8",
        title: "Perodua",
        category: "automotive",
        image: "peroduaPic",
        description:
          "As a national carmaker, Perodua is steadfast about benefitting Malaysians.",
        data: [
          {
            title: "perodua sales volume",
            units: "(units)",
            figure: "282019",
            year: "2021: 190,291",
          },
          {
            title: "PERODUA PRODUCTION VOLUME",
            units: "(Units)",
            figure: "289054",
            year: "2021: 193,400",
          },
        ],
      },
    ],
  },
  {
    key: 1,
    icon: "equipment",
    iconText: "equipment",
    color: "#F2A818",

    backgroundColor: "#FBF0D3",
    title: "equipment",
    category: "equipment",
    image: "equipmentPic",
    description:
      "Equipment division's key initiatives launched during the pandemic yielded results in 2022",
    data: [
      {
        title: "REVENUE",
        units: "(RM million)",
        figure: "1528.0",
        year: "2021: 1,313.4",
      },
      {
        title: "PROFIT BEFORE TAX (PBT)",
        units: "(RM million)",
        figure: "152.8",
        year: "2021: 107.0",
      },
    ],
  },
  {
    key: 2,
    icon: "MnE",
    iconText: "manufacturing & engineering",
    color: "#4B4CA7",
    backgroundColor: "#EFE8F3",
    title: "MANUFACTURING & ENGINEERING",
    category: "m & e",
    image: "mnEPic",
    description:
      "Reopening economies and borders accounted for a boost inmobility,intensifying demand for automotive components and lubricants.",
    data: [
      {
        title: "REVENUE",
        units: "(RM million)",
        figure: "758.1",
        year: "2021: 579 million",
      },
      {
        title: "PROFIT BEFORE TAX (PBT)",
        units: "(RM million)",
        figure: "75.6",
        year: "2021: 56 million",
      },
    ],
  },
  {
    key: 3,
    icon: "aerospace",
    iconText: "aerospace",
    color: "#378DDB",
    backgroundColor: "#E4EFF9",
    title: "aerospace",
    category: "aerospace",
    image: "aerospacePic",
    description:
      "UMW Aerospace is Malaysia’s first homegrown High Performing Supplier Group (HPSG) Tier-1 aero engine component supplier.",
    data: [
      {
        title: "REVENUE",
        units: "(RM million)",
        figure: "226.1",
        year: "2021: 147.6",
      },
      {
        title: "LOSS BEFORE TAX (LBT)",
        units: "(RM million)",
        prefix1: "(",
        prefix2: ")",
        figure: "9.4",
        year: "2021: (33.8)",
      },
    ],
  },
  {
    key: 4,
    icon: "development",
    iconText: "development",
    color: "#9E6D2B",
    backgroundColor: "#E1D5C8",
    title: "development",
    category: "development",
    image: "developmentPic",
    description:
      "UMW Aerospace is Malaysia’s first homegrown High Performing Supplier Group(HPSG) Tier-1aero engine component supplier.",
    data: [
      {
        title: "INKED SALES AND PURCHASE AGREEMENTS VALUED AT",
        units: "(RM million)",
        figure: "460",
        year: "2021: 42.9",
      },
      {
        title: "REVENUE",
        units: "(RM million)",
        figure: "74",
        year: "2021: 17.1",
      },
    ],
  },
];

const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30,
};

const OurPerformance = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [activeSwitch, setActiveSwitch] = useState(0);
  const activeTabData = tabData.find((tab) => tab.key === activeTab);
  const activeSwitcherData = activeTabData?.switcher?.find(
    (switcher) => switcher.key === activeSwitch
  );

  const handleTabClick = (key) => () => {
    setActiveTab(key);
  };
  const toggleSwitch = () => {
    setActiveSwitch(activeSwitch === 0 ? 1 : 0);
  };
  const tabBackgroundColor = activeTabData?.backgroundColor;
  const tabColor = activeTabData?.color;
  const tabTitle = activeTabData?.title;
  const tabCategory = activeTabData?.category;
  const tabImage = activeTabData?.image;
  const tabDesc = activeTabData?.description;
  const tabDataItem = activeTabData?.data;

  const switcherBackgroundColor = activeSwitcherData?.backgroundColor;
  const switcherColor = activeSwitcherData?.color;
  const switcherTitle = activeSwitcherData?.title;
  const switcherCategory = activeSwitcherData?.category;
  const switcherImage = activeSwitcherData?.image;
  const switcherDesc = activeSwitcherData?.description;
  const switcherDataItem = activeSwitcherData?.data;

  return (
    <motion.div
      className={styles.container}
      whileInView={{
        y: [10, 0],
        opacity: [0, 1],
      }}
      transition={{ duration: 1 }}
    >
      <div className={styles.wrapper}>
        <h2 className={styles.title}>Our Performance</h2>
        {/* tabs */}
        <div className={styles["tab-container"]}>
          {tabData.map((item, index) => (
            <div
              key={index}
              onClick={handleTabClick(index)}
              className={styles.tab}
            >
              <div
                className={`${styles["tab-label"]} ${
                  activeTab === index ? styles["tab-label-active"] : ""
                }`}
              >
                <p className={styles["tab-text"]}>{item.iconText}</p>
              </div>
              <div
                className={styles["icon-container"]}
                style={
                  activeTab === index
                    ? { backgroundColor: item.color }
                    : { backgroundColor: "#BCBEC0" }
                }
              >
                <Image
                  src={images[item.icon]}
                  loading="lazy"
                  className={styles.icon}
                  alt={item.icon}
                />
              </div>
            </div>
          ))}
        </div>
        {activeTabData?.switcher?.length > 0 && (
          <div className={styles["switch-container"]}>
            <div className={styles["switch-wrapper"]}>
              <div
                className={styles.switch}
                data-ison={activeSwitch === 1 ? "true" : "false"}
                onClick={() => toggleSwitch(activeTab === 0 ? 1 : 0)}
              >
                <div className={styles["switch-text"]}>{switcherTitle}</div>
                <motion.div
                  className={`${styles.handle} ${
                    activeTab === 1 ? styles.active : ""
                  }`}
                  layout
                  transition={spring}
                ></motion.div>
              </div>
            </div>
            <p className={styles["switcher-instructions"]}>
              click to switch between automotive sections
            </p>
          </div>
        )}
        {/* tab content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ x: 10, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className={styles["content-wrapper"]}
          >
            <div
              className={styles.background}
              style={{ backgroundColor: tabBackgroundColor }}
            >
              <div className={styles["background-inner"]}></div>
            </div>
            <div className={styles.content}>
              <div
                className={styles["content-title"]}
                style={{
                  "--tab-color": tabColor,
                }}
              >
                <h3
                  className={styles["content-title-text"]}
                  style={{ color: tabColor }}
                >
                  {tabTitle}
                </h3>
              </div>
              <div className={styles["content-data-container"]}>
                <p
                  className={styles.category}
                  style={{
                    color: tabBackgroundColor,
                  }}
                >
                  {tabCategory}
                </p>
                <div className={styles["content-data-wrapper"]}>
                  <p
                    className={styles["content-desc"]}
                    style={{
                      "--tab-color": tabColor,
                    }}
                  >
                    {tabDesc}
                  </p>
                  {tabDataItem &&
                    tabDataItem.map((dataItem) => (
                      <div
                        className={styles.card}
                        key={dataItem.key}
                        style={{
                          background: `linear-gradient(to right, transparent, ${tabBackgroundColor})`,
                        }}
                      >
                        <p
                          className={styles["data-title"]}
                          style={{ color: tabColor }}
                        >
                          {dataItem.title}
                        </p>
                        <p
                          className={styles["data-units"]}
                          style={{
                            "--tab-color": tabColor,
                          }}
                        >
                          {dataItem.units}
                        </p>
                        {/* <p className={styles["data-figure"]}>
                          {dataItem.figure}
                        </p> */}
                        <CountUp
                          start={0}
                          end={dataItem.figure}
                          delay={0}
                          enableScrollSpy={true}
                          scrollSpyDelay={1}
                        >
                          {({ countUpRef }) => (
                            <div>
                              <p
                                className={styles["data-figure"]}
                                ref={countUpRef}
                              ></p>
                            </div>
                          )}
                        </CountUp>
                        <p className={styles["data-year"]}>{dataItem.year}</p>
                      </div>
                    ))}
                </div>
              </div>
            </div>
            <div className={styles["content-image-container"]}>
              <Image
                src={images[tabImage]}
                loading="lazy"
                className={styles.image}
                alt={tabImage}
              />
            </div>
          </motion.div>
        </AnimatePresence>

        {/* switcher content */}
        {activeTabData?.switcher?.length > 0 && (
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSwitch}
              initial={{ x: 10, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -10, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className={styles["content-wrapper"]}
            >
              <div
                className={styles.background}
                style={{ backgroundColor: switcherBackgroundColor }}
              >
                <div className={styles["background-inner"]}></div>
              </div>
              <div className={styles.content}>
                <div
                  className={styles["content-title"]}
                  style={{
                    "--tab-color": switcherColor,
                  }}
                >
                  <h3
                    className={styles["content-title-text"]}
                    style={{ color: switcherColor }}
                  >
                    {switcherTitle}
                  </h3>
                </div>
                <div className={styles["content-data-container"]}>
                  <p
                    className={styles.category}
                    style={{
                      color: switcherBackgroundColor,
                    }}
                  >
                    {switcherCategory}
                  </p>
                  <div className={styles["content-data-wrapper"]}>
                    <p
                      className={styles["content-desc"]}
                      style={{
                        "--tab-color": switcherColor,
                      }}
                    >
                      {switcherDesc}
                    </p>
                    {switcherDataItem &&
                      switcherDataItem.map((dataItem) => (
                        <div
                          className={styles.card}
                          key={dataItem.key}
                          style={{
                            background: `linear-gradient(to right, transparent, ${switcherBackgroundColor})`,
                          }}
                        >
                          <p
                            className={styles["data-title"]}
                            style={{ color: switcherColor }}
                          >
                            {dataItem.title}
                          </p>
                          <p
                            className={styles["data-units"]}
                            style={{
                              "--tab-color": switcherColor,
                            }}
                          >
                            {dataItem.units}
                          </p>
                          <CountUp
                            start={0}
                            end={dataItem.figure}
                            delay={0}
                            enableScrollSpy={true}
                            scrollSpyDelay={1}
                          >
                            {({ countUpRef }) => (
                              <div>
                                <p
                                  className={styles["data-figure"]}
                                  ref={countUpRef}
                                ></p>
                              </div>
                            )}
                          </CountUp>
                          <p className={styles["data-year"]}>{dataItem.year}</p>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
              <div className={styles["content-image-container"]}>
                <Image
                  src={images[switcherImage]}
                  loading="lazy"
                  className={styles.image}
                  alt={switcherImage}
                />
              </div>
            </motion.div>
          </AnimatePresence>
        )}
        <Button1
            link="/"
            text="Download This Section"
            backgroundColor="#112F5E"
            textColor="white"
            icon="download"
            className={styles.download}
          />
      </div>
    </motion.div>
  );
};

export default OurPerformance;
