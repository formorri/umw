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
    inactive: "#E0D5D9",
    switcher: [
      {
        key: 0,
        color: "#C65A81",
        colorFaded: "#D49EB2",
        backgroundColor: "#F7E8EE",
        title: "UMW Toyota",
        // category: "automotive",
        // image: "toyotaPic",
        video: "toyota.mp4",
        download: "pdf/our-performance-toyota.pdf",
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
        // category: "automotive",
        // image: "peroduaPic",
        video: "perodua.mp4",
        description:
          "As a national carmaker, Perodua is steadfast about benefitting Malaysians",
        download: "pdf/our-performance-perodua.pdf",
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
    inactive: "#E5DDD1",
    backgroundColor: "#FBF0D3",
    title: "equipment",
    // category: "equipment",
    // image: "equipmentPic",
    video: "equipment.mp4",
    description:
      "Equipment Division's key initiatives launched during the pandemic yielded results in <span>2022</span>",
    download: "pdf/our-performance-equipment.pdf",
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
    inactive: "#D3D4DD",
    backgroundColor: "#EFE8F3",
    title: "MANUFACTURING & ENGINEERING",
    // category: "m & e",
    // image: "mnEPic",
    video: "mnE.mp4",
    description:
      "The reopening of economies and borders have improved mobility tremendously, intensifying demand for automotive components and lubricants",
    download: "pdf/our-performance-manufacturing.pdf",
    data: [
      {
        title: "REVENUE",
        units: "(RM million)",
        figure: "758.1",
        year: "2021: 578.7",
      },
      {
        title: "PROFIT BEFORE TAX (PBT)",
        units: "(RM million)",
        figure: "75.7",
        year: "2021: 56.0",
      },
    ],
  },
  {
    key: 3,
    icon: "aerospace",
    gif: "aerospace.gif",
    iconText: "aerospace",
    color: "#378DDB",
    inactive: "#D2DBE2",
    backgroundColor: "#E4EFF9",
    title: "aerospace",
    // category: "aerospace",
    // image: "aerospacePic",
    video: "aerospace.mp4",
    description:
      "UMW Aerospace is Malaysia’s first homegrown High Performing Supplier Group (HPSG) Tier-<span>1</span> aero engine component supplier to Rolls-Royce",
    download: "pdf/our-performance-aerospace.pdf",
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
    inactive: "#DCD7D1",
    backgroundColor: "#E1D5C8",
    title: "development",
    // category: "development",
    // image: "developmentPic",
    video: "development.mp4",
    description:
      "UMW Development Sdn Bhd’s primary role is to unlock the Group’s landbank in Serendah, with the development of UMW High Value Manufacturing (HVM) Park as a managed and green-rated industrial park",
    download: "pdf/our-performance-development.pdf",
    data: [
      {
        title: "INKED SALES AND PURCHASE AGREEMENTS VALUED AT",
        units: "(RM million)",
        figure: "460.0",
        year: "2021: 42.9",
      },
      {
        title: "REVENUE",
        units: "(RM million)",
        figure: "73.9",
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
  const tabDataDownload = activeTabData?.download;

  const switcherBackgroundColor = activeSwitcherData?.backgroundColor;
  const switcherColor = activeSwitcherData?.color;
  const switcherColorFaded = activeSwitcherData?.colorFaded;
  const switcherTitle = activeSwitcherData?.title;
  const switcherCategory = activeSwitcherData?.category;
  const switcherImage = activeSwitcherData?.image;
  const switcherVideo = activeSwitcherData?.video;
  const switcherDesc = activeSwitcherData?.description;
  const switcherDataItem = activeSwitcherData?.data;
  const switcherDataDownload = activeSwitcherData?.download;

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
      <div id="our-performance" className={styles.wrapper}>
        <h2 className={styles.title}>Our Performance</h2>
        {/* tabs */}
        <div className={styles["tab-container"]}>
          {/* <div className={styles["instructions"]}>
            <div className={styles["indicator-wrapper"]}>
              <Image
                src={images.touch}
                loading="lazy"
                className={styles.indicator}
                alt="tap-here"
              />
            </div>
            <p className={styles["indicator-text"]}>tap to change tabs</p>
          </div> */}
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
                      dangerouslySetInnerHTML={{ __html: tabDesc }}
                    ></p>

                    <div className={styles["card-container"]}>
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
                              end={Number(dataItem.figure.replace(",", ""))}
                              delay={0}
                              decimals={
                                dataItem.figure.includes(".")
                                  ? dataItem.figure.split(".")[1].length
                                  : 0
                              }
                              enableScrollSpy={true}
                              scrollSpyDelay={1}
                              scrollSpyOnce={true}
                            >
                              {({ countUpRef }) => (
                                <div>
                                  <p className={styles["data-figure"]}>
                                    <span>{dataItem.prefix1}</span>
                                    <span ref={countUpRef}></span>
                                    <span>{dataItem.prefix2}</span>
                                  </p>
                                </div>
                              )}
                            </CountUp>
                            <p className={styles["data-year"]}>
                              {dataItem.year}
                            </p>
                          </div>
                        ))}
                    </div>
                    {activeTabData?.download?.length > 0 && (
                      <Button1
                        link={tabDataDownload}
                        text="Download This Section"
                        backgroundColor="#112F5E"
                        textColor="white"
                        icon="touch"
                        className={`${styles.download} ${styles["download-large"]}`}
                      />
                    )}
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
              {activeTabData?.download?.length > 0 && (
                <Button1
                  link={tabDataDownload}
                  text="Download This Section"
                  backgroundColor="#112F5E"
                  textColor="white"
                  icon="touch"
                  className={`${styles.download} ${styles["download-small"]}`}
                />
              )}
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

                      color: activeSwitch === 0 ? "#F7E8EE" : "#DCC6CE",
                    }}
                  >
                    <p>UMW Toyota</p>
                    <div className={styles["indicator-switcher"]}>
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
                            fill={activeSwitch === 0 ? "#F7E8EE" : "#DCC6CE"}
                          />
                          <path
                            id="Path_12037"
                            data-name="Path 12037"
                            d="M134.051-435.034c.066-.306.115-.617.2-.918a5.1,5.1,0,0,1,5.211-3.681,5.108,5.108,0,0,1,4.7,4.313c.037.245.046.494.07.757h-1.443a3.684,3.684,0,0,0-3.818-3.622,3.677,3.677,0,0,0-3.483,3.636h-1.441Z"
                            fill={activeSwitch === 0 ? "#F7E8EE" : "#DCC6CE"}
                          />
                        </g>
                      </svg>
                    </div>
                  </div>
                  <div
                    className={styles["inner-tab-content"]}
                    onClick={() => {
                      setActiveSwitch(1);
                    }}
                    style={{
                      backgroundColor:
                        activeSwitch === 0 ? "#D2D6D3" : "#07522A",

                      color: activeSwitch === 0 ? "#B5C3BA" : "#B7C6BE",
                    }}
                  >
                    <p>Perodua</p>
                    <div className={styles["indicator-switcher"]}>
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
                            fill={activeSwitch === 0 ? "#B5C3BA" : "#B7C6BE"}
                          />
                          <path
                            id="Path_12037"
                            data-name="Path 12037"
                            d="M134.051-435.034c.066-.306.115-.617.2-.918a5.1,5.1,0,0,1,5.211-3.681,5.108,5.108,0,0,1,4.7,4.313c.037.245.046.494.07.757h-1.443a3.684,3.684,0,0,0-3.818-3.622,3.677,3.677,0,0,0-3.483,3.636h-1.441Z"
                            fill={activeSwitch === 0 ? "#B5C3BA" : "#B7C6BE"}
                          />
                        </g>
                      </svg>
                    </div>
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
                {/* <div className={styles["instructions"]}>
                  <div className={styles["indicator-wrapper"]}>
                    <Image
                      src={images.touch}
                      loading="lazy"
                      className={styles.indicator}
                      alt="tap-here"
                    />
                  </div>
                  <p className={styles["indicator-text"]}>tap to switch tabs</p>
                </div> */}
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
                    <div className={styles["card-container"]}>
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
                              end={Number(dataItem.figure.replace(",", ""))}
                              delay={0}
                              decimals={
                                dataItem.figure.includes(".")
                                  ? dataItem.figure.split(".")[1].length
                                  : 0
                              }
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
                            <p className={styles["data-year"]}>
                              {dataItem.year}
                            </p>
                          </div>
                        ))}
                    </div>
                    <Button1
                      link={switcherDataDownload}
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
                link={switcherDataDownload}
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
