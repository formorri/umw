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
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

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
    name: "Our Regional Presence",
    link: "our-regional-presence",
  },
  {
    key: 3,
    name: "Financial Highlights",
    link: "financial-highlights",
  },
  {
    key: 4,
    name: "Views From Our Leaders",
    link: "views-from-our-leaders",
  },
  {
    key: 5,
    name: "Our Performance",
    link: "our-performance",
  },
  {
    key: 6,
    name: "Managing Our Material Matters",
    link: "managing-our-material-matters",
  },
  {
    key: 7,
    name: "Our Value Creation Business Model",
    link: "our-value-creation-business-model",
  },
  {
    key: 8,
    name: "Sustainability Performance",
    link: "sustainability-performance",
  },
  {
    key: 9,
    name: "Leadership",
    link: "leadership",
  },
  {
    key: 10,
    name: "AGM",
    link: "agm",
  },
  {
    key: 11,
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

  // function scrollToSection(id) {
  //   const section = document.querySelector(`#${id}`);
  //   const yOffset = -80;
  //   const y =
  //     section.getBoundingClientRect().top + window.pageYOffset + yOffset;
  //   window.scrollTo({ top: y, behavior: "smooth" });
  // }

  return (
    <navbar className={className}>
      <div
        className={styles.navbar}
        style={{
          backgroundColor: navbarClass ? "white" : "",
        }}
      >
        <a href="#home" className={styles["icon-container"]}>
          <Image
            src={images.logo}
            loading="lazy"
            alt="logo"
            className={styles["logo"]}
            style={{
              opacity: navbarClass ? "1" : "0",
            }}
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
                <a
                  href={`#${item.link}`}
                  onClick={() => {
                    setOpenNavbar(false);
                    // scrollToSection(item.link);
                  }}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles["bottom-flex"]}>
          <div className={styles["social-wrapper"]}>
            <p className={styles["text"]}>Contact Us</p>
            <div className={styles["social-links"]}>
              {/* facebook */}
              <a href="https://www.facebook.com/UMWofficial/" target="_blank">
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
              {/* youtube */}
              <a
                href="https://www.youtube.com/channel/UCrnboEyn-rHnepGEJRZZLxw/videos"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="29.455"
                  height="20.558"
                  viewBox="0 0 29.455 20.558"
                  className={styles["social-icon"]}
                >
                  <g
                    id="_2y8bId.tif"
                    data-name="2y8bId.tif"
                    transform="translate(-226.299 -167.477)"
                  >
                    <g
                      id="Group_6183"
                      data-name="Group 6183"
                      transform="translate(226.299 167.477)"
                    >
                      <path
                        id="Path_12084"
                        data-name="Path 12084"
                        d="M226.3,179V176.52c.016-.142.042-.283.047-.425a36.128,36.128,0,0,1,.417-4.755,4.063,4.063,0,0,1,1.555-2.724,4.28,4.28,0,0,1,2.374-.777c2.174-.141,4.351-.313,6.528-.342,3.274-.043,6.55-.015,9.823.061,1.666.039,3.333.211,4.992.394a3.626,3.626,0,0,1,3.209,2.91,20.839,20.839,0,0,1,.5,4.51c.029,1.9.015,3.8-.063,5.7a24.242,24.242,0,0,1-.4,3.4,3.492,3.492,0,0,1-3.088,3.054,36.98,36.98,0,0,1-4.269.381q-4.089.136-8.181.133a76.662,76.662,0,0,1-9.461-.457,3.705,3.705,0,0,1-3.441-3.152c-.206-1.138-.294-2.3-.411-3.453C226.358,180.317,226.339,179.656,226.3,179Zm11.822,3.174,7.694-4.428-7.694-4.427Z"
                        transform="translate(-226.299 -167.477)"
                      />
                    </g>
                  </g>
                </svg>
              </a>
              {/* instagram */}
              <a href="https://www.instagram.com/umwofficial/" target="_blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25.094"
                  height="25.102"
                  viewBox="0 0 25.094 25.102"
                  className={styles["social-icon"]}
                >
                  <g id="iGRskD.tif" transform="translate(-126.488 -167.477)">
                    <g
                      id="Group_6182"
                      data-name="Group 6182"
                      transform="translate(126.488 167.477)"
                    >
                      <g id="abACf7.tif" transform="translate(0 0)">
                        <g id="Group_6181" data-name="Group 6181">
                          <path
                            id="Path_12081"
                            data-name="Path 12081"
                            d="M132.761,167.477h12.546l.188.048a11.8,11.8,0,0,1,1.675.425,6.749,6.749,0,0,1,4.354,5.573,6.331,6.331,0,0,1,.052.928q.005,5.575,0,11.15a6.444,6.444,0,0,1-.566,2.807,6.724,6.724,0,0,1-6.406,4.152c-3.716.035-7.433.007-11.15.01a6.534,6.534,0,0,1-2-.274,6.81,6.81,0,0,1-4.761-4.949c-.094-.343-.139-.7-.206-1.05V173.75c.042-.239.072-.481.127-.717a6.819,6.819,0,0,1,5.094-5.349C132.052,167.587,132.41,167.545,132.761,167.477Zm6.273,5.676a6.87,6.87,0,1,0,6.87,6.883A6.871,6.871,0,0,0,139.035,173.153Zm7.284-2.5a2.08,2.08,0,1,0,2.087,2.076A2.094,2.094,0,0,0,146.319,170.652Z"
                            transform="translate(-126.488 -167.477)"
                          />
                          <path
                            id="Path_12082"
                            data-name="Path 12082"
                            d="M155.345,190.936a5.4,5.4,0,1,1-5.4,5.4A5.394,5.394,0,0,1,155.345,190.936Z"
                            transform="translate(-142.798 -183.787)"
                          />
                          <path
                            id="Path_12083"
                            data-name="Path 12083"
                            d="M190.79,183.322a.625.625,0,0,1-.589.625.653.653,0,0,1-.631-.617.628.628,0,0,1,.611-.6A.6.6,0,0,1,190.79,183.322Z"
                            transform="translate(-170.345 -178.079)"
                          />
                        </g>
                      </g>
                    </g>
                  </g>
                </svg>
              </a>
              {/* Twitter */}
              <a href="https://twitter.com/UMWOfficial" target="_blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30.559"
                  height="25.102"
                  viewBox="0 0 30.559 25.102"
                  className={styles["social-icon"]}
                >
                  <path
                    id="Path_12085"
                    data-name="Path 12085"
                    d="M80.117,398.3h.225a.9.9,0,0,0,.179.048,6.333,6.333,0,0,1,4.186,1.853.455.455,0,0,0,.359.067,12.534,12.534,0,0,0,3.421-1.283c.09-.05.187-.088.33-.155a6.284,6.284,0,0,1-2.6,3.4l.063.109,3.3-.921c-.05.083-.095.17-.15.249a12.936,12.936,0,0,1-2.693,2.8.6.6,0,0,0-.225.411,16.811,16.811,0,0,1-.553,4.933,17.407,17.407,0,0,1-7.857,10.91,17.74,17.74,0,0,1-17.008.972c-.714-.308-1.383-.72-2.073-1.084l.033-.1a12.667,12.667,0,0,0,4.811-.394,12,12,0,0,0,4.335-2.191c-3.045-.432-5.237-2.107-5.785-4.41h2.626l.021-.129a6.393,6.393,0,0,1-4.862-6.24,6.353,6.353,0,0,0,2.781.757,6.925,6.925,0,0,1-2.594-3.879,6.091,6.091,0,0,1,.727-4.509,17.863,17.863,0,0,0,12.911,6.553,1.458,1.458,0,0,0,0-.189,6.321,6.321,0,0,1,4.582-7.323C79.1,398.425,79.613,398.383,80.117,398.3Z"
                    transform="translate(-59.021 -398.303)"
                  />
                </svg>
              </a>
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/umw-corporation/"
                target="_blank"
              >
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
              {/* <a
                href="mailto:?subject=Here is the Annual Review Website for UMW&amp;body=Check out this site https://www.annualreport.umw.com.my/."
                target="_blank"
              >
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
              </a> */}
            </div>
          </div>
          <div className={styles["feedback-wrapper"]}>
            <p className={styles["text"]}>We need your feedback</p>
            <Button1
              link="https://nova-sr-consultancy.typeform.com/to/UwkxdQxz"
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
