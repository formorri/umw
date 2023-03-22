import styles from './CardStack1.module.scss';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const CardStack1 = ({ cardData }) => {
  const [active, setActive] = useState(3);

  const toggleActive = (index) => {
    setActive(active === index ? null : index);
  };

  return (
    <div className={styles.container}>
      <div>CardStack1</div>
      {cardData.map((item, index) => (
        <motion.div
          key={item.key}
          className={styles.card}
          style={{ zIndex: active === index ? 100 : 1 }}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }}
        >
          <div
            className={styles.header}
            style={{ backgroundColor: item.color }}
          >
            {item.header}
            <ArrowForwardIcon
              className={`${styles.arrow} ${active === index ? styles.active : ''}`}
              onClick={() => toggleActive(index)}
            />
          </div>
          <AnimatePresence>
            {active === index && (
              <motion.div
                key={item.key}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className={styles.content}
              >
                <div className={styles.subheader}>Subheader</div>
                <div className={styles.text}>{item.text}</div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
};

export default CardStack1;
