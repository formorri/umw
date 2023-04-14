import React, { useState, useEffect } from "react";
import styles from "./WhoWeAre.module.scss";
import Image from "next/image";
import { images } from "../../constants";
import { Button1, Button1Popup } from "@/components";
import { useWindowSize } from "react-use";
import { motion, AnimatePresence } from "framer-motion";
import Modal from "@mui/material/Modal";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import { styled } from "@mui/material/styles";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import Button from "@mui/material/Button";

const countries = [
  {
    image: "malaysia",
    countryName: "Malaysia",
    info: "Automotive, Equipment, Manufacturing & Engineering, Aerospace",
    color: "#C5D5E8",
  },
  {
    image: "singapore",
    countryName: "Singapore",
    info: "Equipment",
    color: "#CFE7E8",
  },
  {
    image: "china",
    countryName: "china",
    info: "Equipment, Manufacturing & Engineering",
    color: "#F5F3CC",
  },
  {
    image: "papua",
    countryName: "papua new guinea",
    info: "Equipment",
    color: "#F7E5CC",
  },
  {
    image: "vietnam",
    countryName: "vietnam",
    info: "Equipment",
    color: "#F4E7DA",
  },
  {
    image: "myanmar",
    countryName: "myanmar",
    info: "Equipment",
    color: "#FBD8DD",
  },
  {
    image: "indonesia",
    countryName: "indonesia",
    info: "Manufacturing & Engineering",
    color: "#D6E2CC",
  },
  {
    image: "brunei",
    countryName: "brunei",
    info: "Equipment",
    color: "#D9CEE1",
  },
];

const LightTooltip = styled(({ className, ...props }) => (
  <Tooltip
    {...props}
    classes={{ popper: className }}
    placement="top"
    enterTouchDelay={0}
  />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.white,
    color: "rgba(0, 0, 0, 0.87)",
    // padding: '10',
    // margin: '0',
    boxShadow: theme.shadows[1],
  },
}));

const TooltipContent = styled("div")({
  "& p": {
    "& span": {},
  },
});

const WhoWeAre = () => {
  const { width } = useWindowSize();
  const { ref, inView } = useInView({ threshold: 0.5 });
  const [showTooltip, setShowTooltip] = useState(false);

  const whileInView1 = {
    x: width > 1200 ? [-50, 0] : 0,
    y: width <= 1200 ? [50, 0] : 0,
    opacity: [0, 1],
  };
  const whileInView2 = {
    x: width > 1200 ? [50, 0] : 0,
    y: width <= 1200 ? [50, 0] : 0,
    opacity: [0, 1],
  };

  return (
    <section className={styles.container}>
      <div id="who-we-are" className={styles["who-we-are"]}>
        <motion.div
          className={styles.col1}
          whileInView={whileInView1}
          transition={{ duration: 0.8 }}
        >
          <h2 className={`${styles["title"]} ${styles["title1"]}`}>
            who we are
          </h2>
          <Image
            src={images.wow}
            loading="lazy"
            alt="wow"
            className={styles.wow}
          />
          <Button1
            link="pdf/who-we-are.pdf"
            text="Download This Section"
            backgroundColor="#112F5E"
            textColor="white"
            icon="touch"
            className={styles["download-large"]}
          />
        </motion.div>

        <motion.div
          whileInView={whileInView2}
          transition={{ duration: 0.8 }}
          className={styles.col3}
        >
          <div className={styles.card2}>
            <div className={styles["value-title-deco"]}>
              <h3 className={styles["value-title"]}>vision</h3>
            </div>
            <p className={styles["inner-text"]}>
              To be an innovative global conglomerate with sustainable core
              businesses.
            </p>
          </div>
          <div className={styles.card3}>
            <div className={styles["value-title-deco"]}>
              <h3 className={styles["value-title"]}>mission</h3>
            </div>
            <p className={styles["inner-text"]}>
              Committed to delivering excellence and sustained value creation
              for our stakeholders through products and services.
            </p>
          </div>
          <div className={styles.card1}>
            <div className={styles["value-title-deco"]}>
              <h3 className={styles["value-title"]}>our core values</h3>
            </div>
            <p className={styles["inner-text"]}>
              Ways of Working, or <span className={styles.bold}>“WoW”</span> for
              short, is the clarion call for our employees to pledge their
              unwavering commitment to this renowned industrial conglomerate.
            </p>
            <p className={styles["inner-text"]}>
              WoW encapsulates three core values –{" "}
              <span className={styles.bold}>We Are One, We Drive Change</span>{" "}
              and
              <span className={styles.bold}>
                {" "}
                We Are One, We Drive Change and We Deliver Promises.
              </span>
              <p className={styles["inner-text"]}>
                Embracing these three core values will take us to the next level
                in fulfilling our roles and responsibilities to the UMW Group.
              </p>
              <p className={styles["inner-text"]}>
                WOW advocates collaboration and going the extra mile towards
                driving excellence and success for the businesses.
              </p>
            </p>
          </div>

          <Button1
            link="pdf/who-we-are.pdf"
            text="Download This Section"
            backgroundColor="#112F5E"
            textColor="white"
            icon="touch"
            className={styles["download-small"]}
          />
        </motion.div>
      </div>

      <div id="our-regional-presence" className={styles["region-wrapper"]}>
        <div className={styles["region-info-wrapper-phone"]}>
          <div className={styles["region-title"]}>
            <h2 className={`${styles["title"]} ${styles["title2"]}`}>
              OUR REGIONAL PRESENCE
            </h2>
          </div>
          <CountUp
            start={0}
            end={6313}
            delay={0}
            enableScrollSpy={true}
            scrollSpyDelay={1}
            scrollSpyOnce={true}
          >
            {({ countUpRef }) => (
              <div className={styles["map-text-phone"]}>
                <p className={styles.text}>employees</p>
                <p className={styles.number} ref={countUpRef}></p>
              </div>
            )}
          </CountUp>
        </div>
        {/* <div className={styles["instructions-small"]}>
          <div className={styles["indicator-wrapper"]}>
            <Image
              src={images.touch}
              loading="lazy"
              className={styles.indicator}
              alt="tap-here"
            />
          </div>
          <p className={styles["indicator-text"]}>tap to see more</p>
        </div> */}

        <div className={styles.region}>
          <div className={styles["region-info-wrapper"]}>
            <div className={styles["region-title"]}>
              <h2 className={`${styles["title"]} ${styles["title2"]}`}>
                OUR REGIONAL PRESENCE
              </h2>
            </div>
          </div>
          {/* <div className={styles["instructions-large"]}>
            <div className={styles["indicator-wrapper"]}>
              <Image
                src={images.touch}
                loading="lazy"
                className={styles.indicator}
                alt="tap-here"
              />
            </div>
            <p className={styles["indicator-text"]}>tap to see more</p>
          </div> */}
          <CountUp
            start={0}
            end={6313}
            delay={0}
            enableScrollSpy={true}
            scrollSpyDelay={1}
            scrollSpyOnce={true}
          >
            {({ countUpRef }) => (
              <div className={styles["map-text"]}>
                <p className={styles.text}>employees</p>
                <p className={styles.number} ref={countUpRef}></p>
              </div>
            )}
          </CountUp>
          <Image
            src={images.map}
            loading="lazy"
            alt="map"
            className={styles["map-image"]}
          />
          <Image
            src={images.mapSmall}
            loading="lazy"
            alt="map"
            className={styles["map-image-small"]}
          />
          <Button1
            link="pdf/our-regional-presence.pdf"
            text="Download This Section"
            backgroundColor="#112F5E"
            textColor="white"
            icon="touch"
            className={styles["download-region-large"]}
          />
          <div
            className={`${styles["tooltip-wrapper"]} ${styles["tooltip-1"]}`}
          >
            <LightTooltip
              title={
                <TooltipContent>
                  <p className={styles["tooltip-text"]}>
                    <span className={styles.automotive}>Automative</span>,{" "}
                    <span className={styles.equipment}>Equipment</span>,{" "}
                    <span className={styles.mnE}>
                      Manufacturing & Engineering
                    </span>
                    , <span className={styles.aerospace}>Aerospace</span>
                  </p>
                </TooltipContent>
              }
            >
              <div
                className={`${styles.tooltip} ${styles["tooltip-malaysia"]}`}
              ></div>
            </LightTooltip>
            <p className={styles["tooltip-country"]}>Malaysia</p>
          </div>

          <div
            className={`${styles["tooltip-wrapper"]} ${styles["tooltip-2"]}`}
          >
            <LightTooltip
              title={
                <TooltipContent>
                  <p className={styles["tooltip-text"]}>
                    <span className={styles.equipment}>Equipment</span>
                  </p>
                </TooltipContent>
              }
            >
              <div
                className={`${styles.tooltip} ${styles["tooltip-singapore"]}`}
              ></div>
            </LightTooltip>
            <p className={styles["tooltip-country"]}>Singapore</p>
          </div>

          <div
            className={`${styles["tooltip-wrapper"]} ${styles["tooltip-3"]}`}
          >
            <LightTooltip
              title={
                <TooltipContent>
                  <p className={styles["tooltip-text"]}>
                    <span className={styles.equipment}>Equipment</span>,{" "}
                    <span className={styles.mnE}>
                      Manufacturing & Engineering
                    </span>
                  </p>
                </TooltipContent>
              }
            >
              <div
                className={`${styles.tooltip} ${styles["tooltip-china"]}`}
              ></div>
            </LightTooltip>
            <p className={styles["tooltip-country"]}>China</p>
          </div>

          <div
            className={`${styles["tooltip-wrapper"]} ${styles["tooltip-4"]}`}
          >
            <LightTooltip
              title={
                <TooltipContent>
                  <p className={styles["tooltip-text"]}>
                    <span className={styles.equipment}>Equipment</span>
                  </p>
                </TooltipContent>
              }
            >
              <div
                className={`${styles.tooltip} ${styles["tooltip-papua"]}`}
              ></div>
            </LightTooltip>
            <p className={styles["tooltip-country"]}>Papua New Guinea</p>
          </div>

          <div
            className={`${styles["tooltip-wrapper"]} ${styles["tooltip-5"]}`}
          >
            <LightTooltip
              title={
                <TooltipContent>
                  <p className={styles["tooltip-text"]}>
                    <span className={styles.equipment}>Equipment</span>
                  </p>
                </TooltipContent>
              }
            >
              <div
                className={`${styles.tooltip} ${styles["tooltip-vietnam"]}`}
              ></div>
            </LightTooltip>
            <p className={styles["tooltip-country"]}>Vietnam</p>
          </div>

          <div
            className={`${styles["tooltip-wrapper"]} ${styles["tooltip-6"]}`}
          >
            <LightTooltip
              title={
                <TooltipContent>
                  <p className={styles["tooltip-text"]}>
                    <span className={styles.equipment}>Equipment</span>
                  </p>
                </TooltipContent>
              }
            >
              <div
                className={`${styles.tooltip} ${styles["tooltip-myanmar"]}`}
              ></div>
            </LightTooltip>
            <p className={styles["tooltip-country"]}>Myanmar</p>
          </div>

          <div
            className={`${styles["tooltip-wrapper"]} ${styles["tooltip-7"]}`}
          >
            <LightTooltip
              title={
                <TooltipContent>
                  <p className={styles["tooltip-text"]}>
                    <span className={styles.mnE}>
                      Manufacturing & Engineering
                    </span>
                  </p>
                </TooltipContent>
              }
            >
              <div
                className={`${styles.tooltip} ${styles["tooltip-indonesia"]}`}
              ></div>
            </LightTooltip>
            <p className={styles["tooltip-country"]}>Indonesia</p>
          </div>

          <div
            className={`${styles["tooltip-wrapper"]} ${styles["tooltip-8"]}`}
          >
            <LightTooltip
              title={
                <TooltipContent>
                  <p className={styles["tooltip-text"]}>
                    <span className={styles.equipment}>Equipment</span>
                  </p>
                </TooltipContent>
              }
            >
              <div
                className={`${styles.tooltip} ${styles["tooltip-brunei"]}`}
              ></div>
            </LightTooltip>
            <p className={styles["tooltip-country"]}>Brunei</p>
          </div>
        </div>

        <Button1
          link="pdf/our-regional-presence.pdf"
          text="Download This Section"
          backgroundColor="#112F5E"
          textColor="white"
          icon="touch"
          className={styles["download-region-small"]}
        />
      </div>
    </section>
  );
};

export default WhoWeAre;
