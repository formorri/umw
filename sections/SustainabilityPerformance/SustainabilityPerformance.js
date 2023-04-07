import React, { useState, useEffect } from "react";
import styles from "./SustainabilityPerformance.module.scss";
import { images } from "../../constants";
import { motion, AnimatePresence } from "framer-motion";
import { Button1, CardStack1 } from "@/components";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Image from "next/image";
import { useWindowSize } from "react-use";

const cardData = [
  {
    key: 0,
    pillarNum: 1,
    pillar: "SUSTAINABLE ENVIRONMENT",
    pillarIcon: "pillar1",
    title: "ENVIRONMENTAL STEWARDSHIP",
    tagline: "100% Carbon Neutrality by 2050",
    action: [
      "Environmental leadership via sustainable operational excellence",
      "Invest in nature-based solution for CO2 sequestration",
    ],
    target: ["45% CO2 neutrality by 2030", "100% CO2 neutrality by 2050"],
    focus: [
      "Renewable Energy (Solar PV installations, Green Electricity Tarriff subscription)",
      "Reforestation",
    ],
    highlights: [
      "KYB-UMW and UMWT subscribed to GET",
      "ASSB, Aerospace and KYB-UMW installed rooftop solar PV",
      "157,000 mangrove and 10,000 bamboo trees planted",
    ],
    sdg: ["sdg7", "sdg11", "sdg12", "sdg13", "sdg15", "sdg17"],
  },
  {
    key: 1,
    pillarNum: 2,
    pillar: "SUSTAINABLE WORKFORCE",
    pillarIcon: "pillar2",
    title: "DYNAMIC WORKFORCE",
    tagline: "Build a Progressive and Innovative Workforce",
    action: [
      "Foster sustainable culture, support and funding for employee wellbeing",
    ],
    target: [
      "Accident rate not more than 2.13",
      "Scholarship programme to nurture talent",
      "25% women’s representation in Senior Management roles",
    ],
    focus: ["Employee well-being", "Education", "Diversity and inclusivity"],
    highlights: [
      "RM1 million spent, 92% utilisation of scholarship fund",
      "UMW Aerospace has achieved zero LTI since started its operation in 2016, with 2,343 days of zero LTI as of to date",
      "EnergizeUMW: 24/7 helpline to provide remote therapy sessions for employees",
      "UMW Executive Development Programme (UEDP) for employees strategic and targeted leadership",
      "Flexible Benefit Scheme for employees",
      "46 high potential young talents selected since 2018",
      "Employees received 63,716 training hours",
    ],
    sdg: ["sdg1", "sdg2", "sdg3", "sdg4", "sdg5", "sdg8", "sdg10"],
  },
  {
    key: 2,
    pillarNum: 3,
    pillar: "SUSTAINABLE PRODUCTS AND SERVICES",
    pillarIcon: "pillar3",
    title: "INNOVATIVE & HIGH-PERFORMANCE",
    tagline: "Achieve Excellence in Products and Services",
    action: [
      "Focusing into value generating green assets",
      "Accelerate innovation for products stewardship",
    ],
    target: ["Production of Green Energy", "Production of Green Products"],
    focus: [
      "Value chain of H2",
      "Hybrid vehicle",
      "Electrification (components & 2-wheeler)",
      "Products (Bio-Lubricant & Membrane)",
      "Recycling (BRUSS)",
    ],
    highlights: [
      "Introduction of Mirai as an alternative new energy vehicle technology that is being trialled in Sarawak.",
      "Launched of The Grantt Bio VG Hydraulic Oil",
      "Expansion of BRUSS and Water Reclamation Plant (in-house membrane)",
      "Parts manufacturer for E2W",
    ],
    sdg: ["sdg6", "sdg7", "sdg9", "sdg12", "sdg13"],
  },
  {
    key: 3,
    pillarNum: 4,
    pillar: "SUSTAINABLE LOCAL COMMUNITIES",
    pillarIcon: "pillar4",
    title: "NURTURING COMMUNITY & SOCIETY",
    tagline: "Create a Positive Impact and Well-being of Local Communities",
    action: [
      "Foster sustainable culture, support and funding for community well-being",
    ],
    target: [
      "1% of PATAMI goes to community investments by 2025",
      "2% of PATAMI goes to community investments by 2030",
    ],
    focus: ["Community", "Education"],
    highlights: [
      "2,187 community champions",
      "11,344 volunteer hours",
      "RM9.1 million spent on initiatives, sponsorship, donations",
    ],
    sdg: ["sdg1", "sdg2", "sdg3", "sdg4", "sdg8", "sdg10"],
  },
];

const SustainabilityPerformance = () => {
  const defaultActive = 3;
  const [active, setActive] = useState(defaultActive);
  const { width } = useWindowSize();

  const toggleActive = (index) => {
    if (active === index) {
      setActive(defaultActive);
    } else {
      setActive(index);
    }
  };

  return (
    <div className={styles.container} id="sustainability-performance">
      <motion.div
        whileInView={{
          y: [10, 0],
          opacity: [0, 1],
        }}
        transition={{ duration: 0.8 }}
        className={styles["text-wrapper"]}
      >
        <h2 className={styles.title}>Sustainability Performance</h2>
      </motion.div>
      <motion.div
        whileInView={{
          y: [10, 0],
          opacity: [0, 1],
        }}
        transition={{ duration: 0.8 }}
        className={styles["card-wrapper"]}
      >
        <motion.div
          key={0}
          className={`${styles.card} ${styles.card1}`}
          style={{ zIndex: active === 0 ? 100 : 1 }}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }}
          onClick={() => toggleActive(0)}
        >
          <div className={styles.header}>
            <p className={styles["header-text"]}>
              Pillar{" "}
              <span className={styles["number"]}>{cardData[3].pillarNum} </span>
              : {cardData[3].pillar}
            </p>
            <Image
              src={images.touch}
              alt="touch"
              loading="lazy"
              className={styles["touch"]}
            />
            {/* <ArrowForwardIcon
              className={`${styles.arrow} ${active === 0 ? styles.active : ""}`}
            /> */}
          </div>
          <AnimatePresence>
            {active === 0 && (
              <motion.div
                key={1}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className={styles.content}
              >
                <div className={styles.subheader}>
                  <Image
                    src={images[cardData[3].pillarIcon]}
                    loading="lazy"
                    className={styles["pillar-icon"]}
                    alt="pillar1 icon"
                  />
                  <div className={styles["subheader-text-container"]}>
                    <h3 className={styles["subheader-header"]}>
                      {cardData[3].title}
                    </h3>
                    <p className={styles["subheader-text"]}>
                      {cardData[3].tagline}
                    </p>
                  </div>
                </div>
                <div className={styles["item-container"]}>
                  <div className={styles["item-wrapper"]}>
                    <div className={styles["item-header"]}>
                      <p className={styles["item-header-text"]}>
                        Strategic Action Plan
                      </p>
                    </div>
                    <div className={styles["content-wrapper"]}>
                      <ul>
                        {cardData[3].action.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className={styles["item-wrapper"]}>
                    <div className={styles["item-header"]}>
                      <p className={styles["item-header-text"]}>
                        Target Milestone
                      </p>
                    </div>
                    <div className={styles["content-wrapper"]}>
                      <ul>
                        {cardData[3].target.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className={styles["item-wrapper"]}>
                    <div className={styles["item-header"]}>
                      <p className={styles["item-header-text"]}>
                        Key Focus Areas
                      </p>
                    </div>
                    <div className={styles["content-wrapper"]}>
                      <ul>
                        {cardData[3].focus.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className={styles["item-wrapper"]}>
                    <div className={styles["item-header"]}>
                      <p className={styles["item-header-text"]}>
                        Key Highlights
                      </p>
                    </div>
                    <div className={styles["content-wrapper"]}>
                      <ul>
                        {cardData[3].highlights.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className={styles["item-wrapper"]}>
                    <div className={styles["item-header"]}>
                      <p className={styles["item-header-text"]}>
                        Alignment to UN SDGs
                      </p>
                    </div>
                    <div className={styles["content-wrapper"]}>
                      <div className={styles["sdg-wrapper"]}>
                        {cardData[3].sdg.map((item, index) => (
                          <Image
                            key={index}
                            src={images[item]}
                            alt={item}
                            className={styles["sdg-icon"]}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        <motion.div
          key={1}
          className={`${styles.card} ${styles.card2}`}
          style={{ zIndex: active === 1 ? 100 : 1 }}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }}
          onClick={() => toggleActive(1)}
        >
          <div className={styles.header}>
            <p className={styles["header-text"]}>
              Pillar{" "}
              <span className={styles["number"]}>{cardData[2].pillarNum} </span>
              : {cardData[2].pillar}
            </p>
            <Image
              src={images.touch}
              alt="touch"
              loading="lazy"
              className={styles["touch"]}
            />
            {/* <ArrowForwardIcon
              className={`${styles.arrow} ${active === 1 ? styles.active : ""}`}
            /> */}
          </div>
          <AnimatePresence>
            {active === 1 && (
              <motion.div
                key={1}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className={styles.content}
              >
                <div className={styles.subheader}>
                  <Image
                    src={images[cardData[2].pillarIcon]}
                    loading="lazy"
                    className={styles["pillar-icon"]}
                    alt="pillar1 icon"
                  />
                  <div className={styles["subheader-text-container"]}>
                    <h3 className={styles["subheader-header"]}>
                      {cardData[2].title}
                    </h3>
                    <p className={styles["subheader-text"]}>
                      {cardData[2].tagline}
                    </p>
                  </div>
                </div>
                <div className={styles["item-container"]}>
                  <div className={styles["item-wrapper"]}>
                    <div className={styles["item-header"]}>
                      <p className={styles["item-header-text"]}>
                        Strategic Action Plan
                      </p>
                    </div>
                    <div className={styles["content-wrapper"]}>
                      <ul>
                        {cardData[2].action.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className={styles["item-wrapper"]}>
                    <div className={styles["item-header"]}>
                      <p className={styles["item-header-text"]}>
                        Target Milestone
                      </p>
                    </div>
                    <div className={styles["content-wrapper"]}>
                      <ul>
                        {cardData[2].target.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className={styles["item-wrapper"]}>
                    <div className={styles["item-header"]}>
                      <p className={styles["item-header-text"]}>
                        Key Focus Areas
                      </p>
                    </div>
                    <div className={styles["content-wrapper"]}>
                      <ul>
                        {cardData[2].focus.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className={styles["item-wrapper"]}>
                    <div className={styles["item-header"]}>
                      <p className={styles["item-header-text"]}>
                        Key Highlights
                      </p>
                    </div>
                    <div className={styles["content-wrapper"]}>
                      <ul>
                        {cardData[2].highlights.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className={styles["item-wrapper"]}>
                    <div className={styles["item-header"]}>
                      <p className={styles["item-header-text"]}>
                        Alignment to UN SDGs
                      </p>
                    </div>
                    <div className={styles["content-wrapper"]}>
                      <div className={styles["sdg-wrapper"]}>
                        {cardData[2].sdg.map((item, index) => (
                          <Image
                            key={index}
                            src={images[item]}
                            alt={item}
                            className={styles["sdg-icon"]}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        <motion.div
          key={2}
          className={`${styles.card} ${styles.card3}`}
          style={{ zIndex: active === 2 ? 100 : 1 }}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }}
          onClick={() => toggleActive(2)}
        >
          <div className={styles.header}>
            <p className={styles["header-text"]}>
              Pillar{" "}
              <span className={styles["number"]}>{cardData[1].pillarNum} </span>
              : {cardData[1].pillar}
            </p>
            <Image
              src={images.touch}
              alt="touch"
              loading="lazy"
              className={styles["touch"]}
            />
            {/* <ArrowForwardIcon
              className={`${styles.arrow} ${active === 2 ? styles.active : ""}`}
            /> */}
          </div>
          <AnimatePresence>
            {active === 2 && (
              <motion.div
                key={1}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className={styles.content}
              >
                <div className={styles.subheader}>
                  <Image
                    src={images[cardData[1].pillarIcon]}
                    loading="lazy"
                    className={styles["pillar-icon"]}
                    alt="pillar1 icon"
                  />
                  <div className={styles["subheader-text-container"]}>
                    <h3 className={styles["subheader-header"]}>
                      {cardData[1].title}
                    </h3>
                    <p className={styles["subheader-text"]}>
                      {cardData[1].tagline}
                    </p>
                  </div>
                </div>
                <div className={styles["item-container"]}>
                  <div className={styles["item-wrapper"]}>
                    <div className={styles["item-header"]}>
                      <p className={styles["item-header-text"]}>
                        Strategic Action Plan
                      </p>
                    </div>
                    <div className={styles["content-wrapper"]}>
                      <ul>
                        {cardData[1].action.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className={styles["item-wrapper"]}>
                    <div className={styles["item-header"]}>
                      <p className={styles["item-header-text"]}>
                        Target Milestone
                      </p>
                    </div>
                    <div className={styles["content-wrapper"]}>
                      <ul>
                        {cardData[1].target.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className={styles["item-wrapper"]}>
                    <div className={styles["item-header"]}>
                      <p className={styles["item-header-text"]}>
                        Key Focus Areas
                      </p>
                    </div>
                    <div className={styles["content-wrapper"]}>
                      <ul>
                        {cardData[1].focus.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className={styles["item-wrapper"]}>
                    <div className={styles["item-header"]}>
                      <p className={styles["item-header-text"]}>
                        Key Highlights
                      </p>
                    </div>
                    <div className={styles["content-wrapper"]}>
                      <ul>
                        {cardData[1].highlights.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className={styles["item-wrapper"]}>
                    <div className={styles["item-header"]}>
                      <p className={styles["item-header-text"]}>
                        Alignment to UN SDGs
                      </p>
                    </div>
                    <div className={styles["content-wrapper"]}>
                      <div className={styles["sdg-wrapper"]}>
                        {cardData[1].sdg.map((item, index) => (
                          <Image
                            key={index}
                            src={images[item]}
                            alt={item}
                            className={styles["sdg-icon"]}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        <motion.div
          key={3}
          className={`${styles.card} ${styles.card4}`}
          style={{ zIndex: active === 3 ? 100 : 1 }}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }}
          onClick={() => toggleActive(3)}
        >
          <div className={styles.header}>
            <p className={styles["header-text"]}>
              Pillar{" "}
              <span className={styles["number"]}>{cardData[0].pillarNum} </span>
              : {cardData[0].pillar}
            </p>
            <Image
              src={images.touch}
              alt="touch"
              loading="lazy"
              className={styles["touch"]}
            />
            {/* <ArrowForwardIcon
              className={`${styles.arrow} ${active === 3 ? styles.active : ""}`}
            /> */}
          </div>
          <AnimatePresence>
            {active === 3 && (
              <motion.div
                key={1}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className={styles.content}
              >
                <div className={styles.subheader}>
                  <Image
                    src={images[cardData[0].pillarIcon]}
                    loading="lazy"
                    className={styles["pillar-icon"]}
                    alt="pillar1 icon"
                  />
                  <div className={styles["subheader-text-container"]}>
                    <h3 className={styles["subheader-header"]}>
                      {cardData[0].title}
                    </h3>
                    <p className={styles["subheader-text"]}>
                      {cardData[0].tagline}
                    </p>
                  </div>
                </div>
                <div className={styles["item-container"]}>
                  <div className={styles["item-wrapper"]}>
                    <div className={styles["item-header"]}>
                      <p className={styles["item-header-text"]}>
                        Strategic Action Plan
                      </p>
                    </div>
                    <div className={styles["content-wrapper"]}>
                      <ul>
                        {cardData[0].action.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className={styles["item-wrapper"]}>
                    <div className={styles["item-header"]}>
                      <p className={styles["item-header-text"]}>
                        Target Milestone
                      </p>
                    </div>
                    <div className={styles["content-wrapper"]}>
                      <ul>
                        {cardData[0].target.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className={styles["item-wrapper"]}>
                    <div className={styles["item-header"]}>
                      <p className={styles["item-header-text"]}>
                        Key Focus Areas
                      </p>
                    </div>
                    <div className={styles["content-wrapper"]}>
                      <ul>
                        {cardData[0].focus.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className={styles["item-wrapper"]}>
                    <div className={styles["item-header"]}>
                      <p className={styles["item-header-text"]}>
                        Key Highlights
                      </p>
                    </div>
                    <div className={styles["content-wrapper"]}>
                      <ul>
                        {cardData[0].highlights.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className={styles["item-wrapper"]}>
                    <div className={styles["item-header"]}>
                      <p className={styles["item-header-text"]}>
                        Alignment to UN SDGs
                      </p>
                    </div>
                    <div className={styles["content-wrapper"]}>
                      <div className={styles["sdg-wrapper"]}>
                        {cardData[0].sdg.map((item, index) => (
                          <Image
                            key={index}
                            src={images[item]}
                            alt={item}
                            className={styles["sdg-icon"]}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>
      <motion.div
        whileInView={{
          y: [10, 0],
          opacity: [0, 1],
        }}
        transition={{ duration: 0.8 }}
        className={styles["text-wrapper"]}
      >
        <Button1
          link="/"
          text="Download This Section"
          backgroundColor="#112F5E"
          textColor="white"
          icon="touch"
          className={styles.download}
        />
      </motion.div>
    </div>
  );
};

export default SustainabilityPerformance;
