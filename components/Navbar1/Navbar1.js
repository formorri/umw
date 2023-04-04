import styles from "./Navbar1.module.scss";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger.js";
import Image from "next/image";
import Button1 from "../Button1";
import { images } from "../../constants";
import { motion, AnimatePresence } from "framer-motion";

import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";

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
    name: "AGM",
    link: "agm",
  },
  {
    key: 9,
    name: "Downloads",
    link: "downloads",
  },
];

const Navbar1 = ({ children, className }) => {
  const [openNavbar, setOpenNavbar] = useState(false);
  const [navbarClass, setNavbarClass] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setNavbarClass(true);
      } else {
        setNavbarClass(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  const handleEsc = (event) => {
    if (event.keyCode === 27) {
      closeNavbar();
    }
  };
  const handleOutsideClick = (event) => {
    const navbar = document.querySelector("navbar");
    if (!navbar.contains(event.target)) {
      closeNavbar();
    }
  };

  const closeNavbar = () => {
    setOpenNavbar(false);
  };

  return (
    <navbar className={className}>
      <div 
      className={styles.navbar}
      style={{
        backgroundColor: navbarClass ? 'white': ''
      }}
      >
        <a href="/" target="_blank" className={styles["icon-container"]}>
          <Image
            src={images.logo}
            loading="lazy"
            alt="logo"
            className={styles["logo"]}
          />
        </a>

        <div
          onClick={() => setOpenNavbar(true)}
          className={styles["burger-button"]}
          style={{ opacity: openNavbar ? 0 : 1 }}
        >
          <Image
            src={images.burger}
            loading="lazy"
            alt="burger"
            className={styles["burger"]}
          />
        </div>
      </div>

      <div
        className={`${styles["open-navbar"]} ${
          openNavbar ? styles["open"] : ""
        }`}
        style={{
          transition: "all 0.4s ease-out",
          transform: openNavbar ? "translateX(0)" : "translateX(100%)",
        }}
      >
        <div className={styles["top-flex"]}>
          <IconButton
            onClick={() => setOpenNavbar(false)}
            className={styles["close-container"]}
          >
            <CloseIcon className={styles["close"]} />
          </IconButton>
          <ul className={styles.list}>
            {sections.map((item) => (
              <li key={item.key} className={styles.link}>
                <a href={`#${item.link}`}>{item.name}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles["bottom-flex"]}>
          <div className={styles["social-wrapper"]}>
            <p className={styles["text"]}>Contact Us</p>
            <div className={styles["social-links"]}>
              <a href="/" target="_blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="13.006"
                  height="25.095"
                  viewBox="0 0 13.006 25.095"
                  className={styles["social-icon"]}
                >
                  <path
                    id="Path_3105"
                    data-name="Path 3105"
                    d="M77.657,167.477h2.056c.178.017.354.037.532.051.5.04,1,.077,1.507.115v4c-.1,0-.192,0-.28,0-.872.015-1.744.018-2.616.048a1.544,1.544,0,0,0-1.557,1.233,2.523,2.523,0,0,0-.082.6c-.01.98-.007,1.961-.008,2.942,0,.055.008.11.015.2h4.39l-.58,4.487H77.2v11.415H72.585V181.145c-.433,0-.84,0-1.246,0l-2.592.016v-4.512h3.846v-.291c0-.93-.021-1.861.007-2.791a11.988,11.988,0,0,1,.173-1.846,4.991,4.991,0,0,1,4.073-4.094C77.116,167.573,77.387,167.527,77.657,167.477Z"
                    transform="translate(-68.746 -167.477)"
                  />
                </svg>
              </a>
              <a href="/" target="_blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25.111"
                  height="25.094"
                  viewBox="0 0 25.111 25.094"
                  className={styles["social-icon"]}
                >
                  <g
                    id="Group_5365"
                    data-name="Group 5365"
                    transform="translate(18230 14664.831)"
                  >
                    <path
                      id="Path_3099"
                      data-name="Path 3099"
                      d="M355.283,167.477a8.7,8.7,0,0,1,.881.306,3.027,3.027,0,0,1-1.44,5.755,3.043,3.043,0,0,1-2.809-2.469.95.95,0,0,0-.062-.162v-.8a.684.684,0,0,0,.058-.134,2.958,2.958,0,0,1,1.944-2.309c.2-.08.421-.128.632-.191Z"
                      transform="translate(-18581.854 -14832.308)"
                    />
                    <path
                      id="Path_3100"
                      data-name="Path 3100"
                      d="M381.111,193.972h4.961v2.289c.095-.112.14-.154.172-.2a5.342,5.342,0,0,1,4.316-2.472,7.764,7.764,0,0,1,3.2.375,4.839,4.839,0,0,1,3.118,3.541,12.339,12.339,0,0,1,.422,3.267c.022,3.226.011,6.452.012,9.678,0,.069-.011.138-.018.222H392.1v-.358c0-2.552.016-5.1-.009-7.657a14.361,14.361,0,0,0-.209-2.554,2.334,2.334,0,0,0-2.893-1.961,2.684,2.684,0,0,0-2.572,2.667,15.681,15.681,0,0,0-.115,1.8c-.012,2.573-.005,5.145-.005,7.718v.381h-5.182Z"
                      transform="translate(-18602.201 -14850.445)"
                    />
                    <path
                      id="Path_3101"
                      data-name="Path 3101"
                      d="M358.484,194.943v16.729h-5.169V194.943Z"
                      transform="translate(-18582.871 -14851.409)"
                    />
                  </g>
                </svg>
              </a>
              <a href="/" target="_blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25.094"
                  height="19.108"
                  viewBox="0 0 25.094 19.108"
                  className={styles["social-icon"]}
                >
                  <g
                    id="Group_5366"
                    data-name="Group 5366"
                    transform="translate(18230 14617.152)"
                  >
                    <path
                      id="Path_3106"
                      data-name="Path 3106"
                      d="M99.854,539.824H78.584a.551.551,0,0,0-.09-.037,2.2,2.2,0,0,1-1.82-2.224q0-7.3.008-14.6a2.364,2.364,0,0,1,.22-.988A2.148,2.148,0,0,1,79,520.716q9.825,0,19.651,0c.319,0,.637-.005.956,0a2.194,2.194,0,0,1,1.331.483,2.419,2.419,0,0,1,.833,1.425v15.286a6.959,6.959,0,0,1-.436,1A2.214,2.214,0,0,1,99.854,539.824ZM99.172,522.2H79.206l10.025,9.933Zm-7,9.143c-.762.764-1.527,1.533-2.3,2.3a.763.763,0,0,1-1.232,0q-1.1-1.086-2.191-2.174c-.061-.061-.125-.118-.188-.177l.037.077-6.978,6.975H99.176Zm-14.013-8.1v14.008l7.035-7.033Zm22.113,13.979V523.315l-6.957,6.954Z"
                      transform="translate(-18306.672 -15137.868)"
                    />
                  </g>
                </svg>
              </a>
            </div>
          </div>
          <div className={styles["feedback-wrapper"]}>
            <p className={styles["text"]}>We need your feedback</p>
            <Button1
              link="/"
              text="Click Here"
              backgroundColor="#112F5E"
              textColor="white"
              icon="link"
              className={styles.download}
            />
          </div>
        </div>
      </div>
      {children}
    </navbar>
  );
};

export default Navbar1;

{
  /* <div className={styles.button}>
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
</div> */
}
