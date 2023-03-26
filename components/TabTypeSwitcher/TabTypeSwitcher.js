import styles from "./TabTypeSwitcher.module.scss";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30,
};

const TabTypeSwitcher = ({ tabData, tabSwitcherData }) => {
  const [activeTab, setActiveTab] = useState(0); 
  const [activeSwitch, setActiveSwitch] = useState(0);
  
  const handleTabClick = (index) => () => {
    setActiveTab(index);
  };
  
  const activeTabData = tabData.find((tab) => tab.key === activeTab);
  const tabBackgroundColor = activeTabData?.backgroundColor;
  const tabTitle = activeTabData?.title;
  const tabCategory = activeTabData?.category;
  const tabDesc = activeTabData?.description;
  const tabDataItem = activeTabData?.data;
  
  const toggleSwitch = () => {
    setActiveSwitch(activeSwitch === 0 ? 1 : 0);
  };
  
  const activeSwitcherData = activeTabData?.switcher.find((switcher) => switcher.key === activeSwitch);
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
        <AnimatePresence exitBeforeEnter>
          <motion.div
            key={activeTab}
            initial={{ x: 10, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
          tabBackgroundColor
          tabTitle
          tabCategory
          tabDesc
          tabDataItem
            <div className={styles["tab-content"]}>
                  
            </div>
          </motion.div>
        </AnimatePresence>
        {/* switcher content */}
        <AnimatePresence exitBeforeEnter>
          <motion.div
            className={styles.content}
            key={activeTab}
            initial={{ x: 10, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {tabSwitcherData && (
              <div
                className={styles.switch}
                data-ison={activeTab === 1 ? "true" : "false"}
                onClick={toggleSwitch}
              >
                <div className={styles["switch-text"]}>{label}</div>
                <motion.div
                  className={`${styles.handle} ${
                    activeTab === 1 ? styles.activeSwitch : ""
                  }`}
                  layout
                  transition={spring}
                ></motion.div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default TabTypeSwitcher;
