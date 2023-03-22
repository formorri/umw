import styles from './Button2.module.scss';
import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from "framer-motion";

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 }
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } }
};

const Button2 = ({ link, text, backgroundColor, textColor }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={styles['container']}>
      <div
        className={styles['inner']}
        style={{ background: backgroundColor }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className={styles['text']}
          style={{ color: textColor }}
        >
          {text}
        </div>
      </div>
      <motion.ul
        initial={{ clipPath: "inset(100% 0 0 0)" }}
        className={styles.dropdown}
        animate={isOpen ? "open" : "closed"}
        variants={{
          open: {
            clipPath: "inset(0% 0% 0% 0% round 10px)",
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.7,
              delayChildren: 0.3,
              staggerChildren: 0.05
            }
          },
          closed: {
            clipPath: "inset(10% 50% 90% 50% round 10px)",
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.3
            }
          }
        }}
        style={{ pointerEvents: isOpen ? "auto" : "none" }}
      >
        {link.map((item, index) => (
          <motion.li
            key={index}
            variants={itemVariants}
          >
            <Link
              href={item.link}
              className={styles.link}
            >
              {item.content}
            </Link>
          </motion.li>
        ))}
      </motion.ul>

    </div>
  )
}

export default Button2
