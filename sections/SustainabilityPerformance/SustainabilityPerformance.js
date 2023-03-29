import React, { useState, useEffect } from "react";
import styles from "./SustainabilityPerformance.module.scss";
import { images } from "../../constants";
import { motion, AnimatePresence } from "framer-motion";
import { Button1, CardStack1 } from "@/components";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Image from "next/image";
import { useWindowSize } from "react-use";

const SustainabilityPerformance = () => {
  const [active, setActive] = useState(3);
  const { width } = useWindowSize();
  
  const toggleActive = (index) => {
    setActive(active === index ? null : index);
  };

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
    <div className={styles.container}>
      <motion.div
        whileInView={whileInView1}
        transition={{ duration: 0.8 }}
        className={styles["text-wrapper"]}
      >
        <h2 className={styles.title}>Sustainability Performance</h2>
        <p className={styles.text}>
          UMW’s sustainability performance in 2021 was guided by its new
          Sustainability Roadmap and the Group’s commitment to redefining
          sustainability. Our new sustainability strategy enabled us to
          implement various robust sustainability initiatives and programmes to
          generate long-lasting positive impact for our business growth and our
          stakeholders.
        </p>
        <Button1
          link="/"
          text="Download This Section"
          backgroundColor="#112F5E"
          textColor="white"
          icon="download"
          className={styles.download}
        />
      </motion.div>
      <motion.div
        whileInView={whileInView2}
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
        >
          <div className={styles.header}>
            <p className={styles["header-text"]}>
              Pillar <span className={styles["number"]}>4 </span>: SUSTAINABLE
              LOCAL COMMUNITIES
            </p>
            <ArrowForwardIcon
              className={`${styles.arrow} ${active === 0 ? styles.active : ""}`}
              onClick={() => toggleActive(0)}
            />
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
                    src={images.pillar4}
                    loading="lazy"
                    className={styles["pillar-icon"]}
                    alt="pillar3 icon"
                  />
                  <div className={styles["subheader-text-container"]}>
                    <h3 className={styles["subheader-header"]}>
                      Nurturing Community & Society
                    </h3>
                    <p className={styles["subheader-text"]}>
                      Create a Positive Impact and Well-being of Local
                      Communities
                    </p>
                  </div>
                </div>
                <div className={styles["item-wrapper"]}>
                  <div className={styles["item-header"]}>
                    <p className={styles["item-header-text"]}>
                      Alignment to UN SDGs
                    </p>
                  </div>
                  <div className={styles["sdg-icon-wrapper"]}>
                    {["sdg1", "sdg2", "sdg3", "sdg4", "sdg8", "sdg10"].map(
                      (item) => (
                        <Image
                          key={item}
                          src={images[item]}
                          loading="lazy"
                          alt={item}
                          className={styles["sdg-icon"]}
                        />
                      )
                    )}
                  </div>
                </div>
                <div className={styles["item-wrapper"]}>
                  <div className={styles["item-header"]}>
                    <p className={styles["item-header-text"]}>Key Highlights</p>
                  </div>
                  <div className={styles["item-list-wrapper"]}>
                    <ul className={styles["item-list"]}>
                      <li className={styles["text-normal"]}>
                        <span className={styles["text-bold"]}>2,187 </span>
                        community champions
                      </li>
                      <li className={styles["text-normal"]}>
                        Employees received{" "}
                        <span className={styles["text-bold"]}>63,716 </span>
                        training hours
                      </li>
                      <li className={styles["text-normal"]}>
                        <span className={styles["text-bold"]}>11,344 </span>{" "}
                        volunteer hours
                      </li>
                      <li className={styles["text-normal"]}>
                        <span className={styles["text-bold"]}>RM9.1 mil </span>
                        spent on initiatives, sponsorship, donations and zakat
                        contributions
                      </li>
                    </ul>
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
        >
          <div className={styles.header}>
            <p className={styles["header-text"]}>
              Pillar <span className={styles["number"]}>3 </span>: SUSTAINABLE
              PRODUCTS AND SERVICES
            </p>
            <ArrowForwardIcon
              className={`${styles.arrow} ${active === 1 ? styles.active : ""}`}
              onClick={() => toggleActive(1)}
            />
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
                    src={images.pillar3}
                    loading="lazy"
                    className={styles["pillar-icon"]}
                    alt="pillar3 icon"
                  />
                  <div className={styles["subheader-text-container"]}>
                    <h3 className={styles["subheader-header"]}>
                      Innovative & High-Performance
                    </h3>
                    <p className={styles["subheader-text"]}>
                      Achieve Excellence in Products and Services
                    </p>
                  </div>
                </div>
                <div className={styles["item-wrapper"]}>
                  <div className={styles["item-header"]}>
                    <p className={styles["item-header-text"]}>
                      Alignment to UN SDGs
                    </p>
                  </div>
                  <div className={styles["sdg-icon-wrapper"]}>
                    {["sdg6", "sdg7", "sdg9", "sdg12", "sdg13"].map((item) => (
                      <Image
                        key={item}
                        src={images[item]}
                        loading="lazy"
                        alt={item}
                        className={styles["sdg-icon"]}
                      />
                    ))}
                  </div>
                </div>
                <div className={styles["item-wrapper"]}>
                  <div className={styles["item-header"]}>
                    <p className={styles["item-header-text"]}>Key Highlights</p>
                  </div>
                  <div className={styles["item-list-wrapper"]}>
                    <ul className={styles["item-list"]}>
                      <li className={styles["text-normal"]}>
                        Introduction of Mirai as an{" "}
                        <span className={styles["text-bold"]}>
                          alternative new energy vehicle technology{" "}
                        </span>
                        that is being trialled in Sarawak.
                      </li>
                      <li className={styles["text-normal"]}>
                        Launched of{" "}
                        <span className={styles["text-bold"]}>
                          The Grantt Bio VG Hydraulic Oil{" "}
                        </span>
                      </li>
                      <li className={styles["text-normal"]}>
                        Expansion of
                        <span className={styles["text-bold"]}> BRUSS </span>
                        and
                        <span className={styles["text-bold"]}>
                          {" "}
                          Water Reclamation Plant
                        </span>
                        (in-house membrane)
                      </li>
                      <li className={styles["text-normal"]}>
                        Parts manufacturer for
                        <span className={styles["text-bold"]}> E2W </span>
                      </li>
                    </ul>
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
        >
          <div className={styles.header}>
            <p className={styles["header-text"]}>
              Pillar <span className={styles["number"]}>2 </span>: SUSTAINABLE
              WORKFORCE
            </p>
            <ArrowForwardIcon
              className={`${styles.arrow} ${active === 2 ? styles.active : ""}`}
              onClick={() => toggleActive(2)}
            />
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
                    src={images.pillar2}
                    loading="lazy"
                    className={styles["pillar-icon"]}
                    alt="pillar2 icon"
                  />
                  <div className={styles["subheader-text-container"]}>
                    <h3 className={styles["subheader-header"]}>
                      Dynamic Workforce
                    </h3>
                    <p className={styles["subheader-text"]}>
                      Build a Progressive and Innovative Workforce
                    </p>
                  </div>
                </div>
                <div className={styles["item-wrapper"]}>
                  <div className={styles["item-header"]}>
                    <p className={styles["item-header-text"]}>
                      Alignment to UN SDGs
                    </p>
                  </div>
                  <div className={styles["sdg-icon-wrapper"]}>
                    {[
                      "sdg1",
                      "sdg2",
                      "sdg3",
                      "sdg4",
                      "sdg5",
                      "sdg8",
                      "sdg10",
                    ].map((item) => (
                      <Image
                        key={item}
                        src={images[item]}
                        loading="lazy"
                        alt={item}
                        className={styles["sdg-icon"]}
                      />
                    ))}
                  </div>
                </div>
                <div className={styles["item-wrapper"]}>
                  <div className={styles["item-header"]}>
                    <p className={styles["item-header-text"]}>Key Highlights</p>
                  </div>
                  <div className={styles["item-list-wrapper"]}>
                    <ul className={styles["item-list"]}>
                      <li className={styles["text-normal"]}>
                        <span className={styles["text-bold"]}>RM1 mil </span>
                        spent,
                        <span className={styles["text-bold"]}> 92% </span>
                        utilisation of scholarship fund
                      </li>
                      <li className={styles["text-normal"]}>
                        UMW Aerospace has achieved{" "}
                        <span className={styles["text-bold"]}>zero LTI </span>
                        since started its operation in 2016, with
                        <span className={styles["text-bold"]}>
                          {" "}
                          2,343 days of zero LTI{" "}
                        </span>
                        as of to date
                      </li>
                      <li className={styles["text-normal"]}>
                        <span className={styles["text-bold"]}>11,344 </span>{" "}
                        volunteer hours
                      </li>
                      <li className={styles["text-normal"]}>
                        <span className={styles["text-bold"]}>
                          EnergizeUMW:{" "}
                        </span>
                        4/7 helpline to provide remote therapy sessions for
                        employees
                      </li>
                      <li className={styles["text-normal"]}>
                        <span className={styles["text-bold"]}>
                          UMW Executive Development Programme (UEDP){" "}
                        </span>
                        for employees strategic and targeted leadership
                      </li>
                      <li className={styles["text-normal"]}>
                        <span className={styles["text-bold"]}>
                          46 high potential young talents{" "}
                        </span>
                        selected since 2018
                      </li>
                    </ul>
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
        >
          <div className={styles.header}>
            <p className={styles["header-text"]}>
              Pillar <span className={styles["number"]}>1 </span>: SUSTAINABLE
              ENVIRONMENT
            </p>
            <ArrowForwardIcon
              className={`${styles.arrow} ${active === 3 ? styles.active : ""}`}
              onClick={() => toggleActive(3)}
            />
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
                    src={images.pillar1}
                    loading="lazy"
                    className={styles["pillar-icon"]}
                    alt="pillar1 icon"
                  />
                  <div className={styles["subheader-text-container"]}>
                    <h3 className={styles["subheader-header"]}>
                      Environmental Stewardship
                    </h3>
                    <p className={styles["subheader-text"]}>
                      100% Carbon Neutrality by 2050
                    </p>
                  </div>
                </div>
                <div className={styles["item-wrapper"]}>
                  <div className={styles["item-header"]}>
                    <p className={styles["item-header-text"]}>
                      Alignment to UN SDGs
                    </p>
                  </div>
                  <div className={styles["sdg-icon-wrapper"]}>
                    {["sdg7", "sdg11", "sdg12", "sdg13", "sdg15", "sdg17"].map(
                      (item) => (
                        <Image
                          key={item}
                          src={images[item]}
                          loading="lazy"
                          alt={item}
                          className={styles["sdg-icon"]}
                        />
                      )
                    )}
                  </div>
                </div>
                <div className={styles["item-wrapper"]}>
                  <div className={styles["item-header"]}>
                    <p className={styles["item-header-text"]}>Key Highlights</p>
                  </div>
                  <div className={styles["item-list-wrapper"]}>
                    <ul className={styles["item-list"]}>
                      <li className={styles["text-normal"]}>
                        <span className={styles["text-bold"]}>KYB-UMW </span>
                        and
                        <span className={styles["text-bold"]}> UMWT </span>
                        subscribed to GET
                      </li>
                      <li className={styles["text-normal"]}>
                        Launched of{" "}
                        <span className={styles["text-bold"]}>
                          ASSB, Aerospace{" "}
                        </span>
                        and
                        <span className={styles["text-bold"]}> KYB-UMW </span>
                        installed rooftop solar PV
                      </li>
                      <li className={styles["text-normal"]}>
                        Expansion of
                        <span className={styles["text-bold"]}>
                          {" "}
                          157,000 mangrove{" "}
                        </span>
                        and
                        <span className={styles["text-bold"]}>
                          {" "}
                          10,000 bamboo trees{" "}
                        </span>
                        planted
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SustainabilityPerformance;
