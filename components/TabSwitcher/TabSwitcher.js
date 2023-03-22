import styles from './TabSwitcher.module.scss';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { style } from '@mui/system';

const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30
};

const TabSwitcher = ({ tabSwitcherData }) => {
  const [activeTab, setActiveTab] = useState(0);

  const toggleSwitch = (index) => {
    setActiveTab(index);
  }

  const content = activeTab === 1 ? tabSwitcherData[1].content : tabSwitcherData[0].content;
  const label = activeTab === 1 ? tabSwitcherData[1].label : tabSwitcherData[0].label;

  return (
    <div className={styles.container}>
      <div>Tab as Switcher</div>
      <div className={styles.wrapper}>
        <div
          className={styles.switch}
          data-ison={activeTab === 1 ? "true" : "false"}
          onClick={() => toggleSwitch(activeTab === 0 ? 1 : 0)}
        >
          <div className={styles['switch-text']}>
            {label}
          </div>
          <motion.div
            className={`${styles.handle} ${activeTab === 1 ? styles.active : ''}`}
            layout
            transition={spring}
          >
          </motion.div>
        </div>
      </div>
      <AnimatePresence exitBeforeEnter>
        <motion.div
          className={styles.content}
          key={activeTab}
          initial={{ x: 10, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -10, opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {content}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default TabSwitcher;
