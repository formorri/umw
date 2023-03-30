import styles from "./Navbar1.module.scss";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger.js";
import Image from "next/image";
import Button2 from "../Button2";
import { images } from "../../constants";

gsap.registerPlugin(ScrollTrigger);

const Navbar1 = ({ children }) => {
  const sections = [
    {
      key: 0,
      name: "Home",
      link: "home",
    },
    {
      key: 1,
      name: "Who We Are",
      link: "who-we-are",
    },
    {
      key: 2,
      name: "Financial Highlights",
      link: "financial-highlights",
    },
    {
      key: 3,
      name: "Views From Our Leaders",
      link: "views-from-our-leaders",
    },
    {
      key: 4,
      name: "Our Performance",
      link: "our-performance",
    },
    {
      key: 5,
      name: "The Way We Create Value",
      link: "the-way-we-create-value",
    },
    {
      key: 6,
      name: "Sustainability Performance",
      link: "sustainability-performance",
    },
    {
      key: 7,
      name: "Leadership",
      link: "leadership",
    },
    {
      key: 8,
      name: "Downloads",
      link: "downloads",
    },
  ];

  const [active, setActive] = useState("home");
  const [navbarClass, setNavbarClass] = useState(false);
  console.log(navbarClass);
  console.log(active);

  useEffect(() => {
    sections.forEach((section) => {
      ScrollTrigger.create({
        trigger: `#${section.link}`,
        start: "top center",
        end: "bottom center",
        onEnter: () => setActive(section),
        onLeave: () => setActive(section),
        onEnterBack: () => setActive(section),
        onLeaveBack: () => setActive(section),
        markers: false,
      });
    });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const transitionPoint = document.getElementById(sections[1].link);
      if (transitionPoint && window.scrollY >= transitionPoint.offsetTop) {
        setNavbarClass(true);
      } else {
        setNavbarClass(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={styles.navbar}>
      <nav
        className={`${styles["container-desktop"]} ${
          navbarClass ? styles["container-desktop-active"] : ""
        }`}
      >
        <Image
          src={images.logo}
          loading="lazy"
          alt="logo"
          className={styles["logo"]}
        />
        <ul className={styles.list}>
          {sections.map((item) => (
            <li
              key={item.key}
              className={`${styles.link} ${active.link === item.link ? styles.active : ''}`}

            >
              <a href={`#${item.link}`}>{item.name}</a>
            </li>
          ))}
        </ul>
        <div className={styles.button}>
        <Button2
          icon="share"
          backgroundColor="#B8DEC7"
          textColor="white"
          link={[
            {
              content: "fb",
              link: "/",
            },
            {
              content: "linkedIn",
              link: "/",
            },
            {
              content: "email",
              link: "/",
            },
          ]}
        />
        </div>
      </nav>
      {/* <nav className={styles["container-phone"]}>
        <ul>
          {sections.map((item) => (
            <li
              key={item}
              className={active === item ? styles.active : styles.link}
            >
              <a href={`#${item.link}`}>
                <div className={styles.text}>{item.name}</div>
              </a>
            </li>
          ))}
        </ul>
      </nav> */}
      {children}
    </div>
  );
};

export default Navbar1;
