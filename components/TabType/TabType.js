import styles from './TabType.module.scss';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TabType = ({ tabData }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => () => {
    setActiveTab(index);
  };

  const content = tabData[activeTab].content;

  return (
    <div className={styles.container}>
      <div>Basic Tab</div>
      <div className={styles.wrapper}>
        <div className={styles.tab}>
          {tabData.map((item, index) => (
            <div
              key={index}
              onClick={handleTabClick(index)}
              className={`${styles.button} ${activeTab === index ? styles.active : ''}`}
            >
              {item.label}
            </div>
          ))}
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
    </div>
  );
};

export default TabType;
