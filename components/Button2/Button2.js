import styles from "./Button2.module.scss";
import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import images from "@/constants/images";

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

const Button2 = ({ link, icon, backgroundColor, textColor }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={styles["container"]}>
      <div
        className={styles["inner"]}
        style={{ background: backgroundColor }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className={styles["text"]} style={{ color: textColor }}>
          <Image
            src={images[icon]}
            priority
            alt={`${icon}icon`}
            className={styles.icon}
          />
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            className={styles.dropdown}
            animate="open"
            exit="closed"
            variants={{
              open: {
                opacity: 1,
                y: 0,
                transition: {
                  type: "spring",
                  bounce: 0,
                  duration: 0.7,
                  delayChildren: 0.3,
                  staggerChildren: 0.05,
                },
              },
              closed: {
                opacity: 0,
                y: 20,
                transition: {
                  type: "spring",
                  bounce: 0,
                  duration: 0.3,
                },
              },
            }}
          >
            {link.map((item, index) => (
              <motion.li key={index} variants={itemVariants}>
                <Link href={item.link} className={styles.link}>
                  <Image
                    src={images[item.content]}
                    priority
                    alt={`${icon}icon`}
                    className={styles.icon}
                  />
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Button2;
