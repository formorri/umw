import styles from "./OurPerformance.module.scss";
import { images } from "../../constants";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

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
        description:
          "Reclaimed Its Position As The Number-One Non-National Car Manufacturer In Malaysia For The Second Year Running.",
        data: [
          {
            title: "toyota sales volume",
            units: "(units)",
            figure: "101035",
            year: "2021: 72,394",
          },
          {
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
];

// Accessing the first item in tabData array
const firstItem = tabData[0];

// Accessing the switcher object inside the first item
const switcherObject = firstItem.switcher;

// Accessing the first data object inside the switcher array
const firstDataObject = switcherObject[0].data[0];

// Accessing the title property of the first data object
const title = firstDataObject.title;

const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30,
};

const OurPerformance = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [activeSwitch, setActiveSwitch] = useState(0);
  const activeTabData = tabData.find((tab) => tab.key === activeTab);
  const activeSwitcherData = activeTabData?.switcher.find(
    (switcher) => switcher.key === activeSwitch
  );

  const handleTabClick = (index) => () => {
    setActiveTab(index);
  };
  const toggleSwitch = () => {
    setActiveSwitch(activeSwitch === 0 ? 1 : 0);
  };
  const tabBackgroundColor = activeTabData?.backgroundColor;
  const tabTitle = activeTabData?.title;
  const tabCategory = activeTabData?.category;
  const tabDesc = activeTabData?.description;
  const tabDataItem = activeTabData?.data;

  const switcherBackgroundColor = activeSwitcherData?.backgroundColor;
  const switcherTitle = activeSwitcherData?.title;
  const switcherCategory = activeSwitcherData?.category;
  const switcherDesc = activeSwitcherData?.description;
  const switcherDataItem = activeSwitcherData?.data;

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.tab}>
          {tabData.map((item, index) => (
            <div
              key={index}
              onClick={handleTabClick(index)}
              className={styles.button}
            >
              <div className={styles["icon-name"]}>
                <div className={styles["icon-label"]}>
                  <p className={styles["icon-text"]}>{item.iconText}</p>
                </div>
                <div
                  className={styles["icon-image"]}
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
            </div>
          ))}
        </div>
        {/* tab content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ x: 10, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <p>{tabBackgroundColor}</p>
            <p>{tabTitle}</p>
            <p>{tabCategory}</p>
            <p>{tabDesc}</p>

            {/* <div className={styles["tab-content"]}>
            </div> */}
          </motion.div>
        </AnimatePresence>
        {/* switcher content */}
        <AnimatePresence mode="wait">
          <motion.div
            className={styles.content}
            key={activeTab}
            initial={{ x: 10, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
{activeSwitcherData && activeSwitcherData.switcher && activeSwitcherData.switcher.map((switcherItem) => (
              <div
                className={styles.switch}
                data-ison={activeTab === 1 ? "true" : "false"}
                onClick={toggleSwitch}
              >
                <div className={styles["switch-text"]}></div>
                <motion.div
                  className={`${styles.handle} ${
                    activeTab === 1 ? styles.activeSwitch : ""
                  }`}
                  layout
                  transition={spring}
                >
                  <p>{switcherBackgroundColor}</p>
                  <p>{switcherTitle}</p>
                  <p>{switcherCategory}</p>
                  <p>{switcherDesc}</p>
                  {activeSwitcherData.switcher.map((switcherItem) => (
                    <div key={switcherItem.key}>
                      <h2>{switcherItem.title}</h2>
                      {switcherItem.data.map((dataItem) => (
                        <div key={dataItem.title}>
                          <p>{dataItem.title}</p>
                          <p>{dataItem.units}</p>
                          <p>{dataItem.figure}</p>
                          <p>{dataItem.year}</p>
                        </div>
                      ))}
                    </div>
                  ))}
                </motion.div>
              </div>
              ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default OurPerformance;

// import styles from "./OurPerformance.module.scss";
// import { images } from "../../constants";
// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import Image from "next/image";

// const tabData = [
//   {
//     key: 0,
//     icon: "automotive",
//     iconText: "automotive",
//     color: "#C65A81",
//     switcher: [
//       {
//         key: 0,
//         color: "#C65A81",
//         backgroundColor: "#F7E8EE",
//         title: "UMW Toyota",
//         category: "automotive",
//         description:
//           "Reclaimed Its Position As The Number-One Non-National Car Manufacturer In Malaysia For The Second Year Running.",
//         data: [
//           {
//             title: "toyota sales volume",
//             units: "(units)",
//             figure: "101035",
//             year: "2021: 72,394",
//           },
//           {
//             title: "TOYOTA CAPITAL MANAGED ASSETS",
//             units: "(RM billion)",
//             figure: "7.34",
//             year: "2021: 6.3",
//           },
//         ],
//       },
//       {
//         key: 1,
//         color: "#C65A81",
//         backgroundColor: "#EAF7F8",
//         title: "Perodua",
//         category: "automotive",
//         description:
//           "As a national carmaker, Perodua is steadfast about benefitting Malaysians.",
//         data: [
//           {
//             title: "perodua sales volume",
//             units: "(units)",
//             figure: "282019",
//             year: "2021: 190,291",
//           },
//           {
//             title: "PERODUA PRODUCTION VOLUME",
//             units: "(Units)",
//             figure: "289054",
//             year: "2021: 193,400",
//           },
//         ],
//       },
//     ],
//   },
//   {
//     key: 1,
//     icon: "equipment",
//     iconText: "equipment",
//     color: "#F2A818",

//     backgroundColor: "#FBF0D3",
//     title: "equipment",
//     category: "equipment",
//     description:
//       "Equipment division's key initiatives launched during the pandemic yielded results in 2022",
//     data: [
//       {
//         title: "REVENUE",
//         units: "(RM million)",
//         figure: "1528.0",
//         year: "2021: 1,313.4",
//       },
//       {
//         title: "PROFIT BEFORE TAX (PBT)",
//         units: "(RM million)",
//         figure: "152.8",
//         year: "2021: 107.0",
//       },
//     ],
//   },
//   {
//     key: 2,
//     icon: "MnE",
//     iconText: "manufacturing & engineering",
//     color: "#4B4CA7",
//     backgroundColor: "#EFE8F3",
//     title: "MANUFACTURING & ENGINEERING",
//     category: "m & e",
//     description:
//       "Reopening economies and borders accounted for a boost inmobility,intensifying demand for automotive components and lubricants.",
//     data: [
//       {
//         title: "REVENUE",
//         units: "(RM million)",
//         figure: "758.1",
//         year: "2021: 579 million",
//       },
//       {
//         title: "PROFIT BEFORE TAX (PBT)",
//         units: "(RM million)",
//         figure: "75.6",
//         year: "2021: 56 million",
//       },
//     ],
//   },
//   {
//     key: 3,
//     icon: "aerospace",
//     iconText: "aerospace",
//     color: "#378DDB",
//     backgroundColor: "#E4EFF9",
//     title: "aerospace",
//     category: "aerospace",
//     description:
//       "UMW Aerospace is Malaysia’s first homegrown High Performing Supplier Group(HPSG) Tier-1aero engine component supplier.",
//     data: [
//       {
//         title: "REVENUE",
//         units: "(RM million)",
//         figure: "226.1",
//         year: "2021: 147.6",
//       },
//       {
//         title: "LOSS BEFORE TAX (LBT)",
//         units: "(RM million)",
//         prefix1: "(",
//         prefix2: ")",
//         figure: "9.4",
//         year: "2021: (33.8)",
//       },
//     ],
//   },
//   {
//     key: 4,
//     icon: "development",
//     iconText: "development",
//     color: "#9E6D2B",
//     backgroundColor: "#E1D5C8",
//     title: "development",
//     category: "development",
//     description:
//       "UMW Aerospace is Malaysia’s first homegrown High Performing Supplier Group(HPSG) Tier-1aero engine component supplier.",
//     data: [
//       {
//         title: "INKED SALES AND PURCHASE AGREEMENTS VALUED AT",
//         units: "(RM million)",
//         figure: "460",
//         year: "2021: 42.9",
//       },
//       {
//         title: "REVENUE",
//         units: "(RM million)",
//         figure: "74",
//         year: "2021: 17.1",
//       },
//     ],
//   },
// ];
// const tabSwitcherData = [
//   {
//     key: 0,
//     icon: "automotive",
//     iconText: "automotive",
//     color: "#C65A81",
//     backgroundColor: "#F7E8EE",
//     title: "UMW Toyota",
//     category: "automotive",
//     description:
//       "Reclaimed Its Position As The Number-One Non-National Car Manufacturer In Malaysia For The Second Year Running.",
//     data: [
//       {
//         title: "toyota sales volume",
//         units: "(units)",
//         figure: "101035",
//         year: "2021: 72,394",
//       },
//       {
//         title: "TOYOTA CAPITAL MANAGED ASSETS",
//         units: "(RM billion)",
//         figure: "7.34",
//         year: "2021: 6.3",
//       },
//     ],
//   },
//   {
//     key: 1,
//     icon: "automotive",
//     iconText: "automotive",
//     color: "#C65A81",
//     backgroundColor: "#EAF7F8",
//     title: "Perodua",
//     category: "automotive",
//     description:
//       "As a national carmaker, Perodua is steadfast about benefitting Malaysians.",
//     data: [
//       {
//         title: "perodua sales volume",
//         units: "(units)",
//         figure: "282019",
//         year: "2021: 190,291",
//       },
//       {
//         title: "PERODUA PRODUCTION VOLUME",
//         units: "(Units)",
//         figure: "289054",
//         year: "2021: 193,400",
//       },
//     ],
//   },
// ];

// const spring = {
//   type: "spring",
//   stiffness: 700,
//   damping: 30,
// };

// const OurPerformance = () => {
//   const [activeTab, setActiveTab] = useState(0);
//   const [activeSwitch, setActiveSwitch] = useState(0);
//   const activeTabData = tabData.find((tab) => tab.key === activeTab);
//   const activeSwitcherData = activeTabData?.switcher.find(
//     (switcher) => switcher.key === activeSwitch
//   );

//   const handleTabClick = (index) => () => {
//     setActiveTab(index);

//   };
//   const toggleSwitch = () => {
//     setActiveSwitch(activeSwitch === 0 ? 1 : 0);
//   };
//   const tabBackgroundColor = activeTabData?.backgroundColor;
//   const tabTitle = activeTabData?.title;
//   const tabCategory = activeTabData?.category;
//   const tabDesc = activeTabData?.description;
//   const tabDataItem = activeTabData?.data;

//   const switcherBackgroundColor = activeSwitcherData?.backgroundColor;
//   const switcherTitle = activeSwitcherData?.title;
//   const switcherCategory = activeSwitcherData?.category;
//   const switcherDesc = activeSwitcherData?.description;
//   const switcherDataItem = activeSwitcherData?.data;

//   return (
//     <div className={styles.container}>
//       <div className={styles.wrapper}>
//         <div className={styles.tab}>
//           {tabData.map((item, index) => (
//             <div
//               key={index}
//               onClick={handleTabClick(index)}
//               className={styles.button}
//             >
//               <div className={styles["icon-name"]}>
//                 <div className={styles["icon-label"]}>
//                   <p className={styles["icon-text"]}>{item.iconText}</p>
//                 </div>
//                 <div
//                   className={styles["icon-image"]}
//                   style={
//                     activeTab === index
//                       ? { backgroundColor: item.color }
//                       : { backgroundColor: "#BCBEC0" }
//                   }
//                 >
//                   <Image
//                     src={images[item.icon]}
//                     loading="lazy"
//                     className={styles.icon}
//                     alt={item.icon}
//                   />
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//         {/* tab content */}
//         <AnimatePresence mode='wait'>
//           <motion.div
//             key={activeTab}
//             initial={{ x: 10, opacity: 0 }}
//             animate={{ x: 0, opacity: 1 }}
//             exit={{ x: -10, opacity: 0 }}
//             transition={{ duration: 0.2 }}
//           >
//           {tabBackgroundColor}
//           {tabTitle}
//           {tabCategory}
//           {tabDesc}
//           {tabDataItem}
//             {/* <div className={styles["tab-content"]}>
//             </div> */}
//           </motion.div>
//         </AnimatePresence>
//         {/* switcher content */}
//         <AnimatePresence mode='wait'>
//           <motion.div
//             className={styles.content}
//             key={activeTab}
//             initial={{ x: 10, opacity: 0 }}
//             animate={{ x: 0, opacity: 1 }}
//             exit={{ x: -10, opacity: 0 }}
//             transition={{ duration: 0.2 }}
//           >
//             {tabSwitcherData && (
//               <div
//                 className={styles.switch}
//                 data-ison={activeTab === 1 ? "true" : "false"}
//                 onClick={toggleSwitch}
//               >
//                 <div className={styles["switch-text"]}></div>
//                 <motion.div
//                   className={`${styles.handle} ${
//                     activeTab === 1 ? styles.activeSwitch : ""
//                   }`}
//                   layout
//                   transition={spring}
//                 >
//                 {switcherBackgroundColor}
//                 {switcherTitle}
//                 {switcherCategory}
//                 {switcherDesc}
//                 {switcherDataItem}
//                 </motion.div>
//               </div>
//             )}
//           </motion.div>
//         </AnimatePresence>
//       </div>
//     </div>
//   );
// };

// export default OurPerformance;
