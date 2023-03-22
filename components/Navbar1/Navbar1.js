import styles from './Navbar1.module.scss';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger.js";

gsap.registerPlugin(ScrollTrigger);

const Navbar1 = ({ children }) => {
  const sections = ['home', 'highlights', 'messages', 'performance', 'value', 'downloads'];
  const [active, setActive] = useState('home');
  const [navbarClass, setNavbarClass] = useState(false);

  useEffect(() => {
    sections.forEach((section) => {
      ScrollTrigger.create({
        trigger: `#${section}`,
        start: "top center",
        end: "bottom center",
        onEnter: () => setActive(section),
        onLeave: () => setActive(section),
        onEnterBack: () => setActive(section),
        onLeaveBack: () => setActive(section),
        markers: true,
      });
    });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const transitionPoint = document.getElementById(sections[1]);
      if (transitionPoint && window.scrollY >= transitionPoint.offsetTop) {
        setNavbarClass(true);
      } else {
        setNavbarClass(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={styles.navbar}>
      <nav className={`${styles['container-desktop']} ${navbarClass ? styles['container-desktop-active'] : ''}`}>
        <ul>
          {sections.map((item) => (
            <li
              key={item}
              className={active === item ? styles.active : styles.link}
            >
              <a
                href={`#${item}`}
              >{item}</a>
            </li>
          ))}
        </ul>
      </nav>
      <nav className={styles['container-phone']}>
        <ul>
          {sections.map((item) => (
            <li
              key={item}
              className={active === item ? styles.active : styles.link}
            >
              <a
                href={`#${item}`}
              ><div className={styles.text}>
                  {item}
                </div>
              </a>
            </li>
          ))}
        </ul>
      </nav>
      {children}
    </div>
  );
};

export default Navbar1;
