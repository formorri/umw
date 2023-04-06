import styles from "./OurPerformance.module.scss";
import { images } from "../../constants";
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import CountUp from "react-countup";
import { Button1 } from "@/components";
import { useInView } from "react-intersection-observer";

const tabData = [
  {
    key: 0,
    icon: "automotive",
    gif: "automotive.gif",
    iconText: "automotive",
    color: "#C65A81",
    inactive: "#D49EB2",
    switcher: [
      {
        key: 0,
        color: "#C65A81",
        colorFaded: "#D49EB2",
        backgroundColor: "#F7E8EE",
        title: "Toyota",
        category: "automotive",
        // image: "toyotaPic",
        video: "toyota.mp4",
        description:
          "Reclaimed its position as the number-one non-national car manufacturer in Malaysia for the second year running",
        data: [
          {
            key: 0,
            title: "toyota sales volume",
            units: "(Units)",
            figure: "101035",
            year: "2021: 72,394",
          },
          {
            key: 1,
            title: "TOYOTA CAPITAL MANAGED ASSETS",
            units: "(RM billion)",
            figure: "7.3",
            year: "2021: 6.3",
          },
        ],
      },
      {
        key: 1,
        color: "#07522A",
        colorFaded: "#B7C6BE",
        backgroundColor: "#EAF7F8",
        title: "Perodua",
        category: "automotive",
        // image: "peroduaPic",
        video: "perodua.mp4",
        description:
          "As a national carmaker, Perodua is steadfast about benefitting Malaysians",
        data: [
          {
            title: "perodua sales volume",
            units: "(Units)",
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
    gif: "equipment.gif",
    iconText: "equipment",
    color: "#F2A818",
    inactive: "#EAC589",
    backgroundColor: "#FBF0D3",
    title: "equipment",
    category: "equipment",
    // image: "equipmentPic",
    video: "equipment.mp4",
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
    gif: "mnE.gif",
    iconText: "manufacturing & engineering",
    color: "#4B4CA7",
    inactive: "#9798C4",
    backgroundColor: "#EFE8F3",
    title: "MANUFACTURING & ENGINEERING",
    category: "m & e",
    // image: "mnEPic",
    video: "mnE.mp4",
    description:
      "Reopening economies and borders accounted for a boost in mobility, intensifying demand for automotive components and lubricants",
    data: [
      {
        title: "REVENUE",
        units: "(RM million)",
        figure: "758.1",
        year: "2021: 578.7 million",
      },
      {
        title: "PROFIT BEFORE TAX (PBT)",
        units: "(RM million)",
        figure: "75.7",
        year: "2021: 56.0 million",
      },
    ],
  },
  {
    key: 3,
    icon: "aerospace",
    gif: "aerospace.gif",
    iconText: "aerospace",
    color: "#378DDB",
    inactive: "#8FB9DE",
    backgroundColor: "#E4EFF9",
    title: "aerospace",
    category: "aerospace",
    // image: "aerospacePic",
    video: "aerospace.mp4",
    description:
      "UMW Aerospace is Malaysia’s first homegrown High Performing Supplier Group (HPSG) Tier-1 aero engine component supplier",
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
    gif: "development.gif",
    iconText: "development",
    color: "#9E6D2B",
    inactive: "#C0A88A",
    backgroundColor: "#E1D5C8",
    title: "development",
    category: "development",
    // image: "developmentPic",
    video: "development.mp4",
    description:
      "UMW Development Sdn Bhd’s primary role is to unlock the Group’s landbank in Serendah, with the development of UMW High Value Manufacturing (HVM) Park as a managed and greenrated industrial park.",
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
        figure: "73.7",
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
  const tabInactive = activeTabData?.inactive;
  const tabTitle = activeTabData?.title;
  const tabCategory = activeTabData?.category;
  const tabImage = activeTabData?.image;
  const tabVideo = activeTabData?.video;
  const tabDesc = activeTabData?.description;
  const tabDataItem = activeTabData?.data;

  const switcherBackgroundColor = activeSwitcherData?.backgroundColor;
  const switcherColor = activeSwitcherData?.color;
  const switcherColorFaded = activeSwitcherData?.colorFaded;
  const switcherTitle = activeSwitcherData?.title;
  const switcherCategory = activeSwitcherData?.category;
  const switcherImage = activeSwitcherData?.image;
  const switcherVideo = activeSwitcherData?.video;
  const switcherDesc = activeSwitcherData?.description;
  const switcherDataItem = activeSwitcherData?.data;

  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  //   useEffect(() => {
  //     if (inView && videoRef.current && !isPlaying) {
  //       setIsPlaying(true);
  //       videoRef.current.play();
  //     } else if (!inView && videoRef.current && isPlaying) {
  //       setIsPlaying(false);
  //       videoRef.current.pause();
  //     }
  //   }, [inView, isPlaying]);

  // const handlePlayClick = () => {
  //   if (videoRef.current) {
  //     setIsPlaying(true);
  //     videoRef.current.play();
  //   }
  // };

  return (
    <motion.div
      className={styles.container}
      whileInView={{
        y: [10, 0],
        opacity: [0, 1],
      }}
      transition={{ duration: 1 }}
    >
      <div id='our-performance' className={styles.wrapper}>
        <h2 className={styles.title}>Our Performance</h2>
        {/* tabs */}
        <div className={styles["tab-container"]}>
        <div className={styles["instructions"]}>
            <div className={styles["indicator-wrapper"]}>
              <Image
                src={images.touch}
                loading="lazy"
                className={styles.indicator}
                alt="tap-here"
              />
            </div>
            <p className={styles["indicator-text"]}>tap to change tabs</p>
          </div>
          <div className={styles["tab-wrapper"]}>
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
                  style={{
                    backgroundColor:
                      activeTab === index ? item.color : item.inactive,
                  }}
                >
                  {/* <Image
                  src={images[item.icon]}
                  loading="lazy"
                  className={styles.icon}
                  alt={item.icon}
                /> */}
                  <img
                    src={`assets/${item.gif}`}
                    className={styles.icon}
                    alt={item.icon}
                    loading="lazy"
                  />
                  {/* <video
                  src={`assets/${item.gif}`}
                  autoPlay={true}
                  muted
                  playsInline
                  loop
                  type="video/quicktime"
                  controls
                  className={styles.icon}
                ></video> */}
                  {/* <video
                    className={styles.icon}
                    muted
                    playsInline
                    loop
                    autoPlay={true}
                  >
                    <source src={`assets/${item.mov}`} type="video/quicktime" />
                  </video> */}
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* {activeTabData?.switcher?.length > 0 && (
          <div className={styles["switch-container"]}>
            <div className={styles["switch-wrapper"]}>
              <div
                className={styles.switch}
                data-ison={activeSwitch === 1 ? "true" : "false"}
                onClick={() => {
                  toggleSwitch(activeTab === 0 ? 1 : 0);
                  // handlePlayClick()
                }}
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
        )} */}
        {/* tab content */}
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
                      color: tabColor,
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
                    <div className={styles['card-container']}>

                    {tabDataItem &&
                      tabDataItem.map((dataItem) => (
                        <div
                          className={styles.card}
                          key={dataItem.key}
                          // style={{
                          //   background: `linear-gradient(to right, transparent, ${tabInactive})`,
                          // }}
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
                            decimal="."
                            decimals={1}
                            enableScrollSpy={true}
                            scrollSpyDelay={1}
                            scrollSpyOnce={true}
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
                    <Button1
                      link="/"
                      text="Download This Section"
                      backgroundColor="#112F5E"
                      textColor="white"
                      icon="touch"
                      className={`${styles.download} ${styles["download-large"]}`}
                    />
                  </div>
                </div>
              </div>
              {activeTabData?.image?.length > 0 && (
                <div
                  className={`${styles["content-image-container"]} ${styles["switcher-padding"]}`}
                >
                  <Image
                    src={images[tabImage]}
                    loading="lazy"
                    className={styles.image}
                    alt={tabImage}
                  />
                </div>
              )}
              {activeTabData?.video?.length > 0 && (
                <div
                  className={`${styles["content-video-container"]} ${styles["switcher-padding"]}`}
                  // ref={ref}
                >
                  <video
                    className={styles.video}
                    // ref={videoRef}
                    muted
                    playsInline
                    loop
                    width="800"
                    height="500"
                    autoPlay={true}
                  >
                    <source src={`assets/${tabVideo}`} type="video/mp4" />
                  </video>
                </div>
              )}
              <Button1
                link="/"
                text="Download This Section"
                backgroundColor="#112F5E"
                textColor="white"
                icon="touch"
                className={`${styles.download} ${styles["download-small"]}`}
              />
            </motion.div>
          </AnimatePresence>
        )}
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
                <div className={styles["inner-tab"]}>
                  <div
                    className={styles["inner-tab-content"]}
                    onClick={() => {
                      setActiveSwitch(0);
                    }}
                    style={{
                      backgroundColor:
                        activeSwitch === 0 ? "#C65A81" : "#F7E8EE",

                      color: activeSwitch === 0 ? "#F7E8EE" : "#C65A81",
                    }}
                  >
                    <p>UMW Toyota</p>
                  </div>
                  <div
                    className={styles["inner-tab-content"]}
                    onClick={() => {
                      setActiveSwitch(1);
                    }}
                    style={{
                      backgroundColor:
                        activeSwitch === 0 ? "#B7C6BE" : "#07522A",

                      color: activeSwitch === 0 ? "#07522A" : "#B7C6BE",
                    }}
                  >
                    <p>UMW Perodua</p>
                  </div>
                </div>
                {/* <div
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
                </div> */}
                <div className={styles["instructions"]}>
                  <div className={styles["indicator-wrapper"]}>
                    <Image
                      src={images.touch}
                      loading="lazy"
                      className={styles.indicator}
                      alt="tap-here"
                    />
                  </div>
                  <p className={styles["indicator-text"]}>tap to switch tabs</p>
                </div>
                <div className={styles["content-data-container"]}>
                  <p
                    className={styles.category}
                    style={{
                      color: switcherColor,
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
                    <div className={styles['card-container']}>
                    {switcherDataItem &&
                      switcherDataItem.map((dataItem) => (
                        <div
                          className={styles.card}
                          key={dataItem.key}
                          // style={{
                          //   background: `linear-gradient(to right, transparent, ${switcherColorFaded})`,
                          // }}
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
                            decimal="."
                            decimals={1}
                            enableScrollSpy={true}
                            scrollSpyDelay={1}
                            scrollSpyOnce={true}
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
                    <Button1
                      link="/"
                      text="Download This Section"
                      backgroundColor="#112F5E"
                      textColor="white"
                      icon="touch"
                      className={`${styles.download} ${styles["download-large"]}`}
                    />
                  </div>
                </div>
              </div>
              {activeSwitcherData?.image?.length > 0 && (
                <div
                  className={`${styles["content-image-container"]} ${styles["switcher-padding"]}`}
                >
                  <Image
                    src={images[switcherImage]}
                    loading="lazy"
                    className={styles.image}
                    alt={switcherImage}
                  />
                </div>
              )}
              {activeSwitcherData?.video?.length > 0 && (
                <div
                  className={`${styles["content-video-container"]} ${styles["switcher-padding"]}`}
                  // ref={ref}
                >
                  <video
                    className={styles.video}
                    // ref={videoRef}
                    muted
                    playsInline
                    loop
                    width="800"
                    height="500"
                    autoPlay={true}
                  >
                    <source src={`assets/${switcherVideo}`} type="video/mp4" />
                  </video>
                </div>
              )}
              <Button1
                link="/"
                text="Download This Section"
                backgroundColor="#112F5E"
                textColor="white"
                icon="touch"
                className={`${styles.download} ${styles["download-small"]}`}
              />
            </motion.div>
          </AnimatePresence>
        )}
      </div>
    </motion.div>
  );
};

export default OurPerformance;
