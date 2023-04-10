import React, { useState } from "react";
import styles from "./TheWayWeCreateValue.module.scss";
import { images } from "../../constants";
import Modal from "@mui/material/Modal";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { Carousel, Button1, Button1Popup } from "@/components";
import Image from "next/image";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { useWindowSize } from "react-use";
import { motion, AnimatePresence } from "framer-motion";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import AddIcon from "@mui/icons-material/Add";

const carouselData = [
  {
    key: 1,
    title: "climate change",
    image: "material1",
    onClick: () => handleModalClick("modal1"),
  },
  {
    key: 2,
    title: "Customer, Product & Innovation Excellence",
    image: "material2",
    onClick: () => handleModalClick("modal2"),
  },
  {
    key: 3,
    title: "Employee Engagement",
    image: "material3",
    onClick: () => handleModalClick("modal3"),
  },
  {
    key: 4,
    title: "Training & Education",
    image: "material4",
    onClick: () => handleModalClick("modal4"),
  },
  {
    key: 5,
    title: "Energy, Waste & Water Management",
    image: "material5",
    onClick: () => handleModalClick("modal5"),
  },
  {
    key: 6,
    title: "Diversity & Inclusivity",
    image: "material6",
    onClick: () => handleModalClick("modal6"),
  },
  {
    key: 7,
    title: "Labour/Management Relations",
    image: "material7",
    onClick: () => handleModalClick("modal7"),
  },
  {
    key: 8,
    title: "Business Ethics & Governance",
    image: "material8",
    onClick: () => handleModalClick("modal8"),
  },
  {
    key: 9,
    title: "Sustainable Supply Chain",
    image: "material9",
    onClick: () => handleModalClick("modal9"),
  },
  {
    key: 10,
    title: "Occupational Health & Safety",
    image: "material10",
    onClick: () => handleModalClick("modal10"),
  },
  {
    key: 11,
    title: "Community Investment",
    image: "material11",
    onClick: () => handleModalClick("modal11"),
  },
];

const modalData = [
  {
    key: 1,
    title: "Climate Change",
    risks: [
      "Destruction of property and assets resulting from severe weather conditions",
      "The effects of climate change can disrupt supply chains and lead to financial loss through reduced production",
      "Transition risk pertains to the impact of shifting strategies, regulations, or investments as society and industry move towards reducing their carbon dependency and mitigating the resulting environmental impact",
    ],
    opportunities: [
      "Bolster climate action and commit to investing in naturebased solutions that facilitate carbon sequestration to achieve 45% and 100% carbon neutrality by 2030 and 2050",
    ],
    shortMid: [
      "Investing in renewable energy by installing solar panels at our KYB-UMW and Aerospace plants",
      "Investing in naturebased solutions for CO2 sequestration and collaborating with key stakeholders to undertake a reforestation initiative",
      "Our commitment to sustainable operational excellence reflects on our dedication to environmental stewardship",
    ],
    value: [
      "Broadened reporting scope to disclose GHG emissions according to Scope 1, Scope 2 and Scope 3",
      "GHG emissions intensity reduced by 19.2% in 2022",
      "Planted 157,000 mangrove trees in various states throughout Malaysia in 2022",
    ],
  },
  {
    key: 2,
    title: "Customer, Product and Innovation Excellence",
    risks: [
      "Dissatisfied customers might have a negative influence on revenue and reputation",
      "The innovation process necessitates the usage of inhouse engineering expertise",
    ],
    opportunities: [
      "Strengthen product/service quality and speed of delivery by understanding evolving customer needs and expectations to gain a competitive business advantage",
      "Drives innovative developments and ownership of intellectual property (IP) and proprietary technologies",
    ],
    shortMid: [
      "Utilising customer insights to develop innovative products and solutions enhances competitiveness and future-proof our business",
      "Creating in-house capabilities through cultivating an innovative and highperformance culture",
      "Leveraging on digitalisation and technology to boost efficiency",
    ],
    value: [
      "UMW Toyota recaptured the top non-national automobile sales position",
      "Refurbished more than 500 forklifts",
      "UMW Aerospace was accorded the Supplier Best Practice Award by Rolls-Royce",
    ],
  },
  {
    key: 3,
    title: "Employee Engagement",
    risks: [
      "Employee disengagement can result in subpar job performance and productivity",
    ],
    opportunities: [
      "Employees promote our organisation to their colleagues, future employers, and co-workers",
      "Employees go above and engage in behaviours that help the Company succeed",
    ],
    shortMid: [
      "Improved employee engagement through organised and personalised programmes",
      "Providing platforms for enhancing employee engagement (i.e. Teams, Webex, e-Learning platforms)",
      "Developing employee wellness programmes to promote physical and emotional health",
    ],
    value: [
      "Employees expressed a strong desire to be a part of and stay with the organisation",
      "Launched Energize UMW for WOWriors’ mental health and overall wellbeing",
    ],
  },
  {
    key: 4,
    title: "Training and Education",
    risks: [
      "Employees' capability to meet evolving business and market demands is restricted by a lack of relevant training",
      "Employee performance and productivity decline as a result of insufficient professional development programmes",
    ],
    opportunities: [
      "Excellent chances for growth and upskilling boost talent recruitment and retention",
      "Employees who are welltrained strengthen the Group's resilience in the face of future difficulties and market shifts",
    ],
    shortMid: [
      "Creating a dynamic and adaptable workforce that is well-versed in necessary and future-relevant skills to fuel the Group's growth",
      "Regularising skills and training requires assessment across divisions and business areas",
      "Developing and creating internal training and education programmes to boost productivity",
      "Developing and improving technical and leadership skills via a focused development course",
    ],
    value: ["Employees received training for 63,716 hours"],
  },
  {
    key: 5,
    title: "Energy, Waste and Water Management",
    risks: [
      "Failure to responsibly manage natural resources could result in resource scarcity for the business and regulatory sanctions.",
    ],
    opportunities: [
      "The Group's operating expenses can be improved and direct environmental impacts from its operations and business activities can be reduced through the systematic management of energy and resources",
    ],
    shortMid: [
      "Mitigating risks achieved by regularly implementing energy and waste management initiatives",
      "Environmental stewardship is demonstrated by complying with relevant laws and regulations, as well as engaging with the community",
    ],
    value: [
      "The KYB-UMW factory has commissioned a water reclamation plant that utilises membrane technology developed inhouse",
      "Improved UMW Environment Action Plan (UEAP) score from 0.5 in 2016 to 3.75 in 2022, higher than industry average score of 3.1",
    ],
  },
  {
    key: 6,
    title: "Diversity and Inclusivity",
    risks: [
      "The Group's capacity to foster an exchange of ideas, perspectives, culture, creativity, etc., could be hindered by a lack of diversity",
    ],
    opportunities: [
      "Enhancing workplace dynamics can be achieved by leveraging a variety of skill sets, diverse ethnic and cultural perspectives, gender diversity, and other factors",
      "Fostering a culture of learning and growth, as well as promoting tolerance, patience, and perseverance throughout all levels of the organisation",
    ],
    shortMid: [
      "The design and implementation of programs to enhance diversity across all significant dimensions",
    ],
    value: [
      "Retained more than 30% of women’s representation on the Board",
      "14% of women in senior management roles",
    ],
  },
  {
    key: 7,
    title: "Labour/Management Relations",
    risks: [
      "Employee morale and performance can be impacted by communication gaps resulting from inconsistent labour engagement",
    ],
    opportunities: [
      "Leveraging the influence of labour networks can lead to improved workforce quality, work environment, and productivity",
    ],
    shortMid: [
      "The reinforcement of labour management guidelines and governance to ensure the efficient and effective resolution of all labour issues and concerns",
    ],
    value: [
      "62.47% of employees were unionised",
      "Signed five Collective Agreements between UMW Group and Kesatuan Pekerja-Pekerja Perusahaan Kumpulan UMW (KPPPKUMW)",
    ],
  },
  {
    key: 8,
    title: "Business Ethics and Governance",
    risks: [
      "Inadequate or ineffective anticorruption governance may result in regulatory pressures, increased non-compliance costs, and a negative reputation",
    ],
    opportunities: [
      "Incorporating principles of good governance can enhance an organisation's resilience against external factors, thereby future proofing it",
    ],
    shortMid: [
      "The reinforcement of the governance of the enterprise risk management framework and relevant policies and processes can facilitate the efficient implementation of EES programs and initiatives",
    ],
    value: [
      "Obtained zero corruption charges",
      "Reviewed and revised the Anti-Bribery and Corruption Policy and the Whistleblowing Policy",
      "Attained the ISO 37001 Anti-Bribery Management System certificate",
      "97% employees completed the Anti-Bribery and Corruption e-learning",
    ],
  },
  {
    key: 9,
    title: "Sustainable Supply Chain",
    risks: [
      "Irresponsible practices and procedures throughout the supply chain can result in additional operational costs and reputational harm",
    ],
    opportunities: [
      "By promoting sustainability practices in vendors and suppliers, we can strengthen our supply chain management and ensure sustainable business growth",
    ],
    shortMid: [
      "Establishing guidelines for sustainable supply chain practises in order to increase industry collective capability and promote local suppliers",
      "Raising suppliers' awareness on ESG",
    ],
    value: [
      "Local suppliers comprised 88% of the Group's suppliers",
      "59% of the Group's procurement budget went to local suppliers",
      "Held a supplier performance review exercise for 308 suppliers",
    ],
  },
  {
    key: 10,
    title: "Occupational Health & Safety",
    risks: [
      "Inadequate OHS standards and practices may result in health hazards, workforce inefficiencies, and financial losses",
    ],
    opportunities: [
      "Boosting employee health and well-being can enhance productivity and performance",
    ],
    shortMid: [
      "Boosting employee health and well-being can enhance productivity and performance",
    ],
    value: [
      "Maintained zero cases of fatalities",
      "26 operational sites were assessed against the ISO 45001:2018 standard",
      "31 operational sites underwent statutory compliance audit",
    ],
  },
  {
    key: 11,
    title: "Occupational Health & Safety",
    risks: [
      "Negative social and economic impacts from our operations on local communities can potentially give rise to reputational repercussions",
    ],
    opportunities: [
      "Increase our commitment to the community and as a result enhancing our market reputation",
    ],
    shortMid: [
      "Implementing community development initiatives that nurture future generations and equip youths with industryready skills, such as our Apprenticeship Programme for entre-level technical mechanics",
      "Creating a positive environmental impact on the country through naturebased initiatives such as reforestation",
    ],
    value: [
      "Enrolled 55 interns through internship programme",
      "UMW Community Champions dedicated 11,344 volunteer hours.",
      "Contributed about RM9.1 million in cash and in kind, to communities",
    ],
  },
];

const container1Variants = {
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
  hidden: {
    opacity: 0,
  },
};

// const container2Variants = {
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.1,
//     },
//   },
//   hidden: {
//     opacity: 0,
//   },
// };

const itemVariants = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: 30 },
};

const TheWayWeCreateValue = () => {
  const { ref: ref1, inView: inView1 } = useInView({ threshold: 0.5 });
  // const { ref: ref2, inView: inView2 } = useInView({ threshold: 0.5 });
  const { width } = useWindowSize();
  const [activeKey, setActiveKey] = useState(null);
  const activeModal = modalData.find((item) => item.key === activeKey?.key);
  const handleModalClick = (key) => {
    setActiveKey(carouselData.find((item) => item.key === key));
  };
  const handleModalClose = () => {
    setActiveKey(null);
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

  const [value1Modal, setValue1Modal] = useState(false);
  const [value2Modal, setValue2Modal] = useState(false);
  const [value3Modal, setValue3Modal] = useState(false);
  const [value4Modal, setValue4Modal] = useState(false);
  const [value5Modal, setValue5Modal] = useState(false);

  return (
    <div className={styles.container}>
      <div
        id="managing-our-material-matters"
        className={styles["yellow-wrapper"]}
      >
        <motion.div
          ref={ref1}
          variants={container1Variants}
          initial="hidden"
          animate={inView1 ? "visible" : "hidden"}
          transition={{ duration: 0.8 }}
          className={styles["material-wrapper"]}
        >
          <motion.div variants={itemVariants}>
            <h2 className={styles.title}>Managing our material matters</h2>
          </motion.div>
          <motion.div variants={itemVariants}>
            <Carousel>
              {carouselData.map((item) => (
                <div key={item.key} className={styles["carousel-container"]}>
                  <div className={styles["carousel-card"]}>
                    <Image
                      src={images[item.image]}
                      loading="lazy"
                      alt={item.image}
                      className={styles["carousel-image"]}
                    />
                    <div className={styles["carousel-info-wrapper"]}>
                      <p className={styles["carousel-text"]}>{item.title}</p>
                      <div
                        className={styles["carousel-button"]}
                        onClick={() => handleModalClick(item.key)}
                      >
                        <Image
                          src={images.touch}
                          loading="lazy"
                          alt="financial"
                          className={styles["input-icon"]}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Carousel>
          </motion.div>
          <motion.div
            whileInView={{
              y: [10, 0],
              opacity: [0, 1],
            }}
            transition={{ duration: 0.8 }}
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
        </motion.div>
        {activeKey && (
          <Modal
            open={true}
            onClose={handleModalClose}
            sx={{
              overflow: "scroll",
              maxHeight: "100vh",
            }}
          >
            <div className={styles["modal-container"]}>
              <div className={styles["modal"]}>
                <IconButton
                  onClick={handleModalClose}
                  className={styles["close-container"]}
                >
                  <CloseIcon className={styles["close"]} />
                </IconButton>
                <div className={styles["modal-card-container"]}>
                  <div className={styles["modal-card"]}>
                    <div className={styles["content"]}>
                      <div
                        className={`${styles.header} ${styles["risk-header"]}`}
                      >
                        <p className={styles["title-text"]}>risks</p>
                      </div>
                      <ul className={styles.list}>
                        {activeModal.risks.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className={styles["modal-card"]}>
                    <div className={styles["content"]}>
                      <div
                        className={`${styles.header} ${styles["opp-header"]}`}
                      >
                        <p className={styles["title-text"]}>opportunities</p>
                      </div>
                      <ul className={styles.list}>
                        {activeModal.opportunities.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className={styles["modal-card"]}>
                    <div className={styles["content"]}>
                      <div
                        className={`${styles.header} ${styles["shortMid-header"]}`}
                      >
                        <p className={styles["title-text"]}>
                          Short-to-Mid-term Approach
                        </p>
                      </div>
                      <ul className={styles.list}>
                        {activeModal.shortMid.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className={styles["modal-card"]}>
                    <div className={styles["content"]}>
                      <div
                        className={`${styles.header} ${styles["value-header"]}`}
                      >
                        <p className={styles["title-text"]}>Value Created</p>
                      </div>
                      <ul className={styles.list}>
                        {activeModal.value.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Modal>
        )}
      </div>
      <div
        id="our-value-creation-business-model"
        className={styles["orange-wrapper"]}
      >
        <div className={styles["value-wrapper"]}>
          <motion.div
            whileInView={{
              y: [10, 0],
              opacity: [0, 1],
            }}
            transition={{ duration: 0.8 }}
          >
            <h2 className={styles.title}>our value creation business model</h2>
          </motion.div>
          <div className={styles["model-container"]}>
            {/* Key Inputs button */}
            <motion.div
              whileInView={whileInView1}
              transition={{ duration: 0.8 }}
              className={styles["input"]}
            >
              <div
                className={styles["input-header"]}
                onClick={() => setValue1Modal(true)}
              >
                <p className={styles["input-text"]}>key inputs</p>
                <div className={styles["button-container"]}>
                  <AddIcon className={styles.icon} />
                </div>
              </div>
              <div className={styles["input-content"]}>
                <div
                  className={`${styles["input-item"]} ${styles["financial"]}`}
                >
                  <Image
                    src={images.value2}
                    loading="lazy"
                    alt="financial"
                    className={styles["input-icon"]}
                  />
                  <p className={styles["input-text"]}>financial</p>
                </div>
                <div
                  className={`${styles["input-item"]} ${styles["manufactured"]}`}
                >
                  <Image
                    src={images.value3}
                    loading="lazy"
                    alt="manufactured"
                    className={styles["input-icon"]}
                  />
                  <p className={styles["input-text"]}>manufactured</p>
                </div>
                <div className={`${styles["input-item"]} ${styles["human"]}`}>
                  <Image
                    src={images.value4}
                    loading="lazy"
                    alt="human"
                    className={styles["input-icon"]}
                  />
                  <p className={styles["input-text"]}>human</p>
                </div>
                <div
                  className={`${styles["input-item"]} ${styles["intellectual"]}`}
                >
                  <Image
                    src={images.value5}
                    loading="lazy"
                    alt="intellectual"
                    className={styles["input-icon"]}
                  />
                  <p className={styles["input-text"]}>intellectual</p>
                </div>
                <div className={`${styles["input-item"]} ${styles["social"]}`}>
                  <Image
                    src={images.value6}
                    loading="lazy"
                    alt="social"
                    className={styles["input-icon"]}
                  />
                  <p className={styles["input-text"]}>social</p>
                </div>
                <div className={`${styles["input-item"]} ${styles["natural"]}`}>
                  <Image
                    src={images.value7}
                    loading="lazy"
                    alt="natural"
                    className={styles["input-icon"]}
                  />
                  <p className={styles["input-text"]}>natural</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              whileInView={{
                y: [10, 0],
                opacity: [0, 1],
              }}
              transition={{ duration: 0.8 }}
              className={styles["crest"]}
            >
              <Image
                src={images.value1}
                loading="lazy"
                alt="crest infographic"
                className={styles["crest-image"]}
              />
            </motion.div>

            <motion.div
              whileInView={whileInView2}
              transition={{ duration: 0.8 }}
              className={styles["sequence"]}
            >
              {/* Initiatives button */}
              <div
                className={`${styles["initiatives"]} ${styles["sequence-item"]}`}
                onClick={() => setValue2Modal(true)}
              >
                <p className={styles["input-text"]}>initiatives</p>
                <div className={styles["button-container"]}>
                  <AddIcon className={styles.icon} />
                </div>
              </div>
              <Image
                src={images.valueArrow}
                loading="lazy"
                alt="arrow"
                className={styles["arrow"]}
              />
              {/* Outputs button */}
              <div
                className={`${styles["outputs"]} ${styles["sequence-item"]}`}
                onClick={() => setValue3Modal(true)}
              >
                <p className={styles["input-text"]}>outputs</p>
                <div className={styles["button-container"]}>
                  <AddIcon className={styles.icon} />
                </div>
              </div>
              <Image
                src={images.valueArrow}
                loading="lazy"
                alt="arrow"
                className={styles["arrow"]}
              />
              {/* Outputs button */}
              <div
                className={`${styles["outcomes"]} ${styles["sequence-item"]}`}
                onClick={() => setValue4Modal(true)}
              >
                <p className={styles["input-text"]}>outcomes</p>
                <div className={styles["button-container"]}>
                  <AddIcon className={styles.icon} />
                </div>
              </div>
              <Image
                src={images.valueArrow}
                loading="lazy"
                alt="arrow"
                className={styles["arrow"]}
              />
              {/* Tradeoff button */}
              <div
                className={`${styles["outcomes"]} ${styles["sequence-item"]}`}
                onClick={() => setValue5Modal(true)}
              >
                <p className={styles["input-text"]}>tradeoffs</p>
                <div className={styles["button-container"]}>
                  <AddIcon className={styles.icon} />
                </div>
              </div>
            </motion.div>
          </div>
          <motion.div
            whileInView={{
              y: [10, 0],
              opacity: [0, 1],
            }}
            transition={{ duration: 0.8 }}
            className={styles.flex}
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

          {/* inputs modal */}
          <Modal
            open={value1Modal}
            onClose={() => {
              setValue1Modal(false);
            }}
            sx={{
              overflow: "scroll",
              maxHeight: "100vh",
            }}
          >
            <div className={styles["modal-container"]}>
              <div className={`${styles.next} ${styles["arrow-container"]}`}>
                <ArrowForwardIcon
                  className={styles["arrow-icon"]}
                  onClick={() => {
                    setValue1Modal(false);
                    setValue2Modal(true);
                  }}
                />
              </div>
              <div className={styles["sequence-modal"]}>
                <div className={styles["modal-top"]}>
                  <div className={styles["modal-header"]}>
                    <p className={styles["title"]}>Key inputs</p>
                  </div>
                  <IconButton
                    onClick={() => {
                      setValue1Modal(false);
                    }}
                    className={styles["close-container"]}
                  >
                    <CloseIcon className={styles["close"]} />
                  </IconButton>
                </div>
                <div className={styles["content-wrapper"]}>
                  <div
                    className={`${styles["sequence-card"]} ${styles["financial-card"]}`}
                  >
                    <div className={styles["header-container"]}>
                      <Image
                        src={images.value2}
                        loading="lazy"
                        alt="financial"
                        className={styles["icon"]}
                      />
                      <p className={styles["header"]}>Financial</p>
                    </div>
                    <div className={styles["sequence-content"]}>
                      <p className={styles["text"]}>
                        Financial capital is defined as the pool of funds
                        available to UMW. We keep our capital structure optimal,
                        good access to capital, and undertake regular and
                        cautious investment assessments.
                      </p>
                      <Image
                        src={images.divider}
                        loading="lazy"
                        alt="divider"
                        className={styles["divider"]}
                      />
                      <CountUp
                        start={0}
                        end={15.8}
                        delay={0}
                        decimal="."
                        decimals={1}
                        enableScrollSpy={true}
                        scrollSpyDelay={1}
                        scrollSpyOnce={true}
                      >
                        {({ countUpRef }) => (
                          <div className={styles["border-bottom"]}>
                            <div className={styles["figures"]}>
                              <p className={styles.text}>Revenue</p>
                              <p style={{ margin: 0 }}>
                                <span
                                  ref={countUpRef}
                                  className={styles.number}
                                ></span>
                                <span className={styles.unit}> billion</span>
                              </p>
                            </div>
                          </div>
                        )}
                      </CountUp>
                      <CountUp
                        start={0}
                        end={4.1}
                        delay={0}
                        decimal="."
                        decimals={1}
                        enableScrollSpy={true}
                        scrollSpyDelay={1}
                        scrollSpyOnce={true}
                      >
                        {({ countUpRef }) => (
                          <div className={styles["border-bottom"]}>
                            <div className={styles["figures"]}>
                              <p className={styles.text}>
                                Market Capitalization
                              </p>
                              <p style={{ margin: 0 }}>
                                <span
                                  ref={countUpRef}
                                  className={styles.number}
                                ></span>
                                <span className={styles.unit}> billion</span>
                              </p>
                            </div>
                          </div>
                        )}
                      </CountUp>
                      <CountUp
                        start={0}
                        end={4.4}
                        delay={0}
                        decimal="."
                        decimals={1}
                        enableScrollSpy={true}
                        scrollSpyDelay={1}
                        scrollSpyOnce={true}
                      >
                        {({ countUpRef }) => (
                          <div className={styles["border-bottom"]}>
                            <div className={styles["figures"]}>
                              <p className={styles.text}>
                                Total Shareholders' Fund
                              </p>
                              <p style={{ margin: 0 }}>
                                <span
                                  ref={countUpRef}
                                  className={styles.number}
                                ></span>
                                <span className={styles.unit}> billion</span>
                              </p>
                            </div>
                          </div>
                        )}
                      </CountUp>
                      <CountUp
                        start={0}
                        end={21.7}
                        delay={0}
                        decimal="."
                        decimals={1}
                        enableScrollSpy={true}
                        scrollSpyDelay={1}
                        scrollSpyOnce={true}
                      >
                        {({ countUpRef }) => (
                          <div className={styles["figures"]}>
                            <p className={styles.text}>Gearing Ratio</p>
                            <p style={{ margin: 0 }}>
                              <span
                                ref={countUpRef}
                                className={styles.number}
                              ></span>
                              <span className={styles.unit}> %</span>
                            </p>
                          </div>
                        )}
                      </CountUp>
                    </div>
                  </div>
                  <div
                    className={`${styles["sequence-card"]} ${styles["manufactured-card"]}`}
                  >
                    <div className={styles["header-container"]}>
                      <Image
                        src={images.value3}
                        loading="lazy"
                        alt="manufactured"
                        className={styles["icon"]}
                      />
                      <p className={styles["header"]}>manufactured</p>
                    </div>
                    <div className={styles["sequence-content"]}>
                      <p className={styles["text"]}>
                        Manufactured capital includes the Group’s assets and
                        infrastructure, i.e. the machinery, equipment and
                        technology that facilitate the Group’s services to
                        customers.
                      </p>
                      <Image
                        src={images.divider}
                        loading="lazy"
                        alt="divider"
                        className={styles["divider"]}
                      />
                      <div className={styles["border-bottom"]}>
                        <p className={styles["text-bold"]}>Equipment:</p>{" "}
                        <p className={styles.text}>
                          Customer Centre in Kota Kemuning, Shah Alam
                        </p>
                      </div>
                      <div className={styles["border-bottom"]}>
                        <p className={styles["text-bold"]}>M&E:</p>{" "}
                        <p className={styles.text}>
                          Smart lubricant manufacturing plant in Pulau Indah and
                          modernised manufacturing plant in Teluk Panglima
                          Garang for KYB-UMW
                        </p>
                      </div>
                      <div className={styles[""]}>
                        <p className={styles["text-bold"]}>Development:</p>{" "}
                        <p className={styles.text}>
                          Infrastructure at the UMW HVM Park was enhanced and
                          awarded Green certification
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className={`${styles["sequence-card"]} ${styles["human-card"]}`}
                  >
                    <div className={styles["header-container"]}>
                      <Image
                        src={images.value4}
                        loading="lazy"
                        alt="human"
                        className={styles["icon"]}
                      />
                      <p className={styles["header"]}>human</p>
                    </div>
                    <div className={styles["sequence-content"]}>
                      <p className={styles["text"]}>
                        This capital covers the skills and experience of all the
                        Group’s employees that enable the Group to deliver its
                        strategy, products and services to create value for
                        stakeholders.
                      </p>
                      <Image
                        src={images.divider}
                        loading="lazy"
                        alt="divider"
                        className={styles["divider"]}
                      />
                      <CountUp
                        start={0}
                        end={6313}
                        delay={0}
                        // decimal="."
                        // decimals={1}
                        enableScrollSpy={true}
                        scrollSpyDelay={1}
                        scrollSpyOnce={true}
                      >
                        {({ countUpRef }) => (
                          <div className={styles["border-bottom"]}>
                            <div className={styles["figures"]}>
                              <p className={styles.text}>
                                Total employees more than
                              </p>
                              <p style={{ margin: 0 }}>
                                <span
                                  ref={countUpRef}
                                  className={styles.number}
                                ></span>
                              </p>
                            </div>
                          </div>
                        )}
                      </CountUp>
                      <div className={styles["border-bottom"]}>
                        <div className={styles["figures"]}>
                          <p className={styles["text-bold"]}>
                            Reward structures
                          </p>
                          <p className={styles.text}>linked to performance</p>
                        </div>
                      </div>
                      <CountUp
                        start={0}
                        end={832}
                        delay={0}
                        // decimal="."
                        // decimals={1}
                        enableScrollSpy={true}
                        scrollSpyDelay={1}
                        scrollSpyOnce={true}
                      >
                        {({ countUpRef }) => (
                          <div className={styles["border-bottom"]}>
                            <div className={styles["figures"]}>
                              <p style={{ margin: 0 }}>
                                <span className={styles.unit}>RM </span>
                                <span
                                  ref={countUpRef}
                                  className={styles.number}
                                ></span>
                                <span className={styles.unit}> million</span>
                              </p>
                              <p className={styles.text}>
                                invested in employees’ salaries and benefits
                              </p>
                            </div>
                          </div>
                        )}
                      </CountUp>
                      <div className={styles["figures"]}>
                        <p className={styles["text-bold"]}>
                          Experienced and diverse
                        </p>
                        <p className={styles.text}>
                          Management team and Board of Directors
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className={`${styles["sequence-card"]} ${styles["intellectual-card"]}`}
                  >
                    <div className={styles["header-container"]}>
                      <Image
                        src={images.value5}
                        loading="lazy"
                        alt="intellectual"
                        className={styles["icon"]}
                      />
                      <p className={styles["header"]}>intellectual</p>
                    </div>
                    <div className={styles["sequence-content"]}>
                      <p className={styles["text"]}>
                        This capital encompasses organisational and
                        knowledge-based intangibles that can include
                        intellectual property such as licences or proprietary
                        knowledge, systems or procedures.
                      </p>
                      <Image
                        src={images.divider}
                        loading="lazy"
                        alt="divider"
                        className={styles["divider"]}
                      />
                      <div className={styles["border-bottom"]}>
                        <p className={styles.text}>
                          Corporate policies that uphold integrity such as the{" "}
                          <span className={styles["text-bold"]}>
                            UMW Integrity Framework
                          </span>{" "}
                          and{" "}
                          <span className={styles["text-bold"]}>
                            Integrity Plan
                          </span>
                        </p>
                      </div>
                      <div className={styles["border-bottom"]}>
                        <p className={styles["text-bold"]}>
                          In-house R&D capabilities focusing on green
                          innovations, in collaboration with local universities
                          and government agencies (triple helix)
                        </p>
                      </div>
                      <div className={styles[""]}>
                        <p className={styles.text}>
                          <span className={styles["text-bold"]}>
                            Collaborated with TM One{" "}
                          </span>
                          towards fast-tracking digitalisation, improving our
                          current data centre architecture
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className={`${styles["sequence-card"]} ${styles["social-card"]}`}
                  >
                    <div className={styles["header-container"]}>
                      <Image
                        src={images.value6}
                        loading="lazy"
                        alt="social"
                        className={styles["icon"]}
                      />
                      <p className={styles["header"]}>social & relationship</p>
                    </div>
                    <div className={styles["sequence-content"]}>
                      <p className={styles["text"]}>
                        This capital describes the relationships built between
                        communities, stakeholders and other relevant groups.
                        This also includes the Group’s brand and reputation
                        management.
                      </p>
                      <Image
                        src={images.divider}
                        loading="lazy"
                        alt="divider"
                        className={styles["divider"]}
                      />
                      <CountUp
                        start={0}
                        end={9.1}
                        delay={0}
                        decimal="."
                        decimals={1}
                        enableScrollSpy={true}
                        scrollSpyDelay={1}
                        scrollSpyOnce={true}
                      >
                        {({ countUpRef }) => (
                          <div className={styles["border-bottom"]}>
                            <div className={styles["figures"]}>
                              <p style={{ margin: 0 }} className={styles.text}>
                                <span className={styles.unit}>RM </span>
                                <span
                                  ref={countUpRef}
                                  className={styles.number}
                                ></span>
                                <span className={styles.unit}> million</span>
                              </p>
                              <p className={styles.text}>
                                invested in community engagement/CSR activities
                              </p>
                            </div>
                          </div>
                        )}
                      </CountUp>
                      <CountUp
                        start={0}
                        end={11344}
                        delay={0}
                        // decimal="."
                        // decimals={1}
                        enableScrollSpy={true}
                        scrollSpyDelay={1}
                        scrollSpyOnce={true}
                      >
                        {({ countUpRef }) => (
                          <div className={styles["border-bottom"]}>
                            <div className={styles["figures"]}>
                              <p style={{ margin: 0 }} className={styles.text}>
                                More than {""}
                                <span
                                  ref={countUpRef}
                                  className={styles.number}
                                ></span>
                                <span className={styles["text-bold"]}>
                                  {" "}
                                  volunteer hours {""}
                                </span>
                                recorded
                              </p>
                            </div>
                          </div>
                        )}
                      </CountUp>
                      <div className={styles["figures"]}>
                        <p className={styles.text}>
                          <span className={styles["text-bold"]}>
                            Active engagement
                          </span>{" "}
                          with various stakeholders
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className={`${styles["sequence-card"]} ${styles["natural-card"]}`}
                  >
                    <div className={styles["header-container"]}>
                      <Image
                        src={images.value7}
                        loading="lazy"
                        alt="natural"
                        className={styles["icon"]}
                      />
                      <p className={styles["header"]}>natural</p>
                    </div>
                    <div className={styles["sequence-content"]}>
                      <p className={styles["text"]}>
                        All renewable and non-renewable environmental resources
                        and processes that provide goods or services that
                        support the past, current or future prosperity of an
                        organisation.
                      </p>
                      <Image
                        src={images.divider}
                        loading="lazy"
                        alt="divider"
                        className={styles["divider"]}
                      />
                      <CountUp
                        start={0}
                        end={100}
                        delay={0}
                        // decimal="."
                        // decimals={1}
                        enableScrollSpy={true}
                        scrollSpyDelay={1}
                        scrollSpyOnce={true}
                      >
                        {({ countUpRef }) => (
                          <div className={styles["border-bottom"]}>
                            <div className={styles["figures"]}>
                              <p style={{ margin: 0 }} className={styles.text}>
                                <span
                                  ref={countUpRef}
                                  className={styles.number}
                                ></span>
                                <span className={styles.unit}> %</span>
                              </p>
                              <p className={styles.text}>
                                Carbon Neutrality by 2050
                              </p>
                            </div>
                          </div>
                        )}
                      </CountUp>
                      <CountUp
                        start={0}
                        end={4}
                        delay={0}
                        // decimal="."
                        // decimals={1}
                        enableScrollSpy={true}
                        scrollSpyDelay={1}
                        scrollSpyOnce={true}
                      >
                        {({ countUpRef }) => (
                          <div className={styles["border-bottom"]}>
                            <div className={styles["figures"]}>
                              <p style={{ margin: 0 }} className={styles.text}>
                                More than {""}
                                <span
                                  ref={countUpRef}
                                  className={styles.number}
                                ></span>
                                <span className={styles.unit}>MW</span>
                                {""}capacity Solar Panels installed
                              </p>
                            </div>
                          </div>
                        )}
                      </CountUp>
                      <div className={styles["figures"]}>
                        <p className={styles.text}>
                          <span className={styles["text-bold"]}>
                            Going Paperless
                          </span>{" "}
                          Implementing a zero paper culture across our
                          operations to reduce waste
                        </p>
                      </div>
                      <div className={styles["figures"]}>
                        <p className={styles.text}>
                          <span className={styles["text-bold"]}>
                            Reforestation
                          </span>{" "}
                          Planting and rehabilitation of mangrove forests
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Modal>
          {/* initiatives modal */}
          <Modal
            open={value2Modal}
            onClose={() => {
              setValue2Modal(false);
            }}
            sx={{
              overflow: "scroll",
              maxHeight: "100vh",
            }}
          >
            <div className={styles["modal-container"]}>
              <div className={`${styles.prev} ${styles["arrow-container"]}`}>
                <ArrowBackIcon
                  className={styles["arrow-icon"]}
                  onClick={() => {
                    setValue1Modal(true);
                    setValue2Modal(false);
                  }}
                />
              </div>
              <div className={`${styles.next} ${styles["arrow-container"]}`}>
                <ArrowForwardIcon
                  className={styles["arrow-icon"]}
                  onClick={() => {
                    setValue2Modal(false);
                    setValue3Modal(true);
                  }}
                />
              </div>
              <div className={styles["sequence-modal"]}>
                <div className={styles["modal-top"]}>
                  <div className={styles["modal-header"]}>
                    <p className={styles["title"]}>Initiatives</p>
                  </div>
                  <IconButton
                    onClick={() => {
                      setValue2Modal(false);
                    }}
                    className={styles["close-container"]}
                  >
                    <CloseIcon className={styles["close"]} />
                  </IconButton>
                </div>
                <div className={styles["content-wrapper"]}>
                  <div
                    className={`${styles["sequence-card"]} ${styles["financial-card"]}`}
                  >
                    <div className={styles["header-container"]}>
                      <Image
                        src={images.value2}
                        loading="lazy"
                        alt="financial"
                        className={styles["icon"]}
                      />
                      <p className={styles["header"]}>Financial</p>
                    </div>
                    <div className={styles["sequence-content"]}>
                      <ul className={styles["content-list"]}>
                        <li>
                          <p className={styles.text}>
                            {/* <span className={styles["text-bold"]}>
                              Intensifying
                            </span>{" "} */}
                            Intensifying customer retention and relationship
                          </p>
                        </li>
                        <li>
                          <CountUp
                            start={0}
                            end={178.4}
                            delay={0}
                            decimal="."
                            decimals={1}
                            enableScrollSpy={true}
                            scrollSpyDelay={1}
                            scrollSpyOnce={true}
                          >
                            {({ countUpRef }) => (
                              <div className={styles["figures-list"]}>
                                <p className={styles.text}>
                                  Cost optimisation efforts led to savings of
                                </p>
                                <p style={{ margin: 0 }}>
                                  <span className={styles.unit}>RM </span>
                                  <span
                                    ref={countUpRef}
                                    className={styles.number}
                                  ></span>
                                  <span className={styles.unit}> million</span>
                                </p>
                                <p className={styles.text}>in FY2022</p>
                              </div>
                            )}
                          </CountUp>
                        </li>
                        <li>
                          <p className={styles.text}>
                            Built strong relationships with our principles
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div
                    className={`${styles["sequence-card"]} ${styles["manufactured-card"]}`}
                  >
                    <div className={styles["header-container"]}>
                      <Image
                        src={images.value3}
                        loading="lazy"
                        alt="manufactured"
                        className={styles["icon"]}
                      />
                      <p className={styles["header"]}>manufactured</p>
                    </div>
                    <div className={styles["sequence-content"]}>
                      <ul className={styles["content-list"]}>
                        <li>
                          <p className={styles["text-bold"]}>Automotive:</p>{" "}
                          <p className={styles.text}>
                            New model launches, including the Corolla Cross
                            hybrid electric model from Toyota and Ativa Hybrid
                            from Perodua
                          </p>
                        </li>
                        <li>
                          <p className={styles["text-bold"]}>Equipment:</p>{" "}
                          <p className={styles.text}>
                            A series of successful marketing campaigns was
                            launched to maximise opportunities during the year
                          </p>
                        </li>
                        <li>
                          <p className={styles["text-bold"]}>M&E:</p>{" "}
                          <p className={styles.text}>
                            Launched Grantt Bio VG Hydraulic Oil, its first
                            range of green, bio hydraulic lubricants
                          </p>
                        </li>
                        <li>
                          <p className={styles["text-bold"]}>Aerospace:</p>{" "}
                          <p className={styles.text}>
                            Strong commitment to quality and product excellence
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div
                    className={`${styles["sequence-card"]} ${styles["human-card"]}`}
                  >
                    <div className={styles["header-container"]}>
                      <Image
                        src={images.value4}
                        loading="lazy"
                        alt="human"
                        className={styles["icon"]}
                      />
                      <p className={styles["header"]}>human</p>
                    </div>
                    <div className={styles["sequence-content"]}>
                      <ul className={styles["content-list"]}>
                        <li>
                          <p className={styles.text}>
                            Continue to provide training through the UMW
                            Executive Development Programme
                            <span className={styles["text-bold"]}> (UEDP)</span>
                          </p>
                        </li>
                        <li>
                          <p className={styles.text}>
                            Organised the CREST@UMW Learning Series which
                            includes discussions with business leaders and guest
                            experts on topics and trends related to CREST’s core
                            pillars and strategic enablers
                          </p>
                        </li>
                        <li>
                          <p className={styles.text}>
                            Signed Collective Agreement with Kesatuan
                            Pekerja-Pekerja Perusahaan Kumpulan UMW to
                            strengthen labour relations with workers
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div
                    className={`${styles["sequence-card"]} ${styles["intellectual-card"]}`}
                  >
                    <div className={styles["header-container"]}>
                      <Image
                        src={images.value5}
                        loading="lazy"
                        alt="intellectual"
                        className={styles["icon"]}
                      />
                      <p className={styles["header"]}>intellectual</p>
                    </div>
                    <div className={styles["sequence-content"]}>
                      <ul className={styles["content-list"]}>
                        <li>
                          <p className={styles.text}>
                            Deployed a total of 21 RPA (Robotic Process
                            Automation) projects to improve productivity
                          </p>
                        </li>
                        <li>
                          <p className={styles.text}>
                            Collaborated with Telekom Malaysia
                            <span className={styles["text-bold"]}> (TM) </span>
                            on hybrid cloud, to consolidate and improve our data
                            centre architecture as part of our efforts to
                            optimise technology and operations.
                          </p>
                        </li>
                        <li>
                          <p className={styles.text}>
                            Progressed new research and innovation initiatives
                            through the UMW Innovation and Research &
                            Development Centre
                          </p>
                        </li>
                        <li>
                          <p className={styles.text}>
                            Developed a range of strategic partnerships with
                            various institutions to expand R&D collaborations
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div
                    className={`${styles["sequence-card"]} ${styles["social-card"]}`}
                  >
                    <div className={styles["header-container"]}>
                      <Image
                        src={images.value6}
                        loading="lazy"
                        alt="social"
                        className={styles["icon"]}
                      />
                      <p className={styles["header"]}>social & relationship</p>
                    </div>
                    <div className={styles["sequence-content"]}>
                      <ul className={styles["content-list"]}>
                        <li>
                          <p className={styles.text}>
                            Provided a range of personal protective equipment in
                            response to community and frontline requirements
                          </p>
                        </li>
                        <li>
                          <p className={styles.text}>
                            Provided excellent customer service and met customer
                            needs
                          </p>
                        </li>
                        <li>
                          <p className={styles.text}>
                            Established new partnerships with a range of
                            organisations to drive green innovation, nurture
                            technological advancement and attract foreign
                            investment
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div
                    className={`${styles["sequence-card"]} ${styles["natural-card"]}`}
                  >
                    <div className={styles["header-container"]}>
                      <Image
                        src={images.value7}
                        loading="lazy"
                        alt="natural"
                        className={styles["icon"]}
                      />
                      <p className={styles["header"]}>natural</p>
                    </div>
                    <div className={styles["sequence-content"]}>
                      <ul className={styles["content-list"]}>
                        <li>
                          <p className={styles.text}>
                            Accelerating our sustainability agenda of achieving
                            carbon neutrality by 2050 by further integrating
                            sustainability into our business operations
                          </p>
                        </li>
                        <li>
                          <p className={styles.text}>
                            Introduced hybrid electric vehicle (Corolla Cross),
                            expanded forklift refurbishments and battery-powered
                            forklift business.
                          </p>
                        </li>
                        <li>
                          <p className={styles.text}>
                            UMW Green Shoots
                            <span className={styles["text-bold"]}> (UGS) </span>
                            and Bamboo planting initiatives
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Modal>
          {/* outputs modal */}
          <Modal
            open={value3Modal}
            onClose={() => {
              setValue3Modal(false);
            }}
            sx={{
              overflow: "scroll",
              maxHeight: "100vh",
            }}
          >
            <div className={styles["modal-container"]}>
              <div className={`${styles.prev} ${styles["arrow-container"]}`}>
                <ArrowBackIcon
                  className={styles["arrow-icon"]}
                  onClick={() => {
                    setValue2Modal(true);
                    setValue3Modal(false);
                  }}
                />
              </div>
              <div className={`${styles.next} ${styles["arrow-container"]}`}>
                <ArrowForwardIcon
                  className={styles["arrow-icon"]}
                  onClick={() => {
                    setValue3Modal(false);
                    setValue4Modal(true);
                  }}
                />
              </div>
              <div className={styles["sequence-modal"]}>
                <div className={styles["modal-top"]}>
                  <div className={styles["modal-header"]}>
                    <p className={styles["title"]}>Outputs</p>
                  </div>
                  <IconButton
                    onClick={() => {
                      setValue3Modal(false);
                    }}
                    className={styles["close-container"]}
                  >
                    <CloseIcon className={styles["close"]} />
                  </IconButton>
                </div>
                <div className={styles["content-wrapper"]}>
                  <div
                    className={`${styles["sequence-card"]} ${styles["financial-card"]}`}
                  >
                    <div className={styles["header-container"]}>
                      <Image
                        src={images.value2}
                        loading="lazy"
                        alt="financial"
                        className={styles["icon"]}
                      />
                      <p className={styles["header"]}>Financial</p>
                    </div>
                    <div className={styles["sequence-content"]}>
                      <ul className={styles["content-list"]}>
                        <li>
                          <CountUp
                            start={0}
                            end={9.5}
                            delay={0}
                            decimal="."
                            decimals={1}
                            enableScrollSpy={true}
                            scrollSpyDelay={1}
                            scrollSpyOnce={true}
                          >
                            {({ countUpRef }) => (
                              <div className={styles["figures-list"]}>
                                <p className={styles.text}>Return on Equity</p>
                                <p style={{ margin: 0 }}>
                                  <span
                                    ref={countUpRef}
                                    className={styles.number}
                                  ></span>
                                  <span className={styles.unit}> %</span>
                                </p>
                              </div>
                            )}
                          </CountUp>
                        </li>
                        <li>
                          <CountUp
                            start={0}
                            end={14.2}
                            delay={0}
                            decimal="."
                            decimals={1}
                            enableScrollSpy={true}
                            scrollSpyDelay={1}
                            scrollSpyOnce={true}
                          >
                            {({ countUpRef }) => (
                              <div className={styles["figures-list"]}>
                                <p className={styles.text}>Dividend payout</p>
                                <p style={{ margin: 0 }}>
                                  <span
                                    ref={countUpRef}
                                    className={styles.number}
                                  ></span>
                                  <span className={styles.unit}> sen</span>
                                </p>
                              </div>
                            )}
                          </CountUp>
                        </li>
                        <li>
                          <CountUp
                            start={0}
                            end={35.5}
                            delay={0}
                            decimal="."
                            decimals={1}
                            enableScrollSpy={true}
                            scrollSpyDelay={1}
                            scrollSpyOnce={true}
                          >
                            {({ countUpRef }) => (
                              <div className={styles["figures-list"]}>
                                <p className={styles.text}>
                                  Earnings per share
                                </p>
                                <p style={{ margin: 0 }}>
                                  <span
                                    ref={countUpRef}
                                    className={styles.number}
                                  ></span>
                                  <span className={styles.unit}> sen</span>
                                </p>
                              </div>
                            )}
                          </CountUp>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div
                    className={`${styles["sequence-card"]} ${styles["manufactured-card"]}`}
                  >
                    <div className={styles["header-container"]}>
                      <Image
                        src={images.value3}
                        loading="lazy"
                        alt="manufactured"
                        className={styles["icon"]}
                      />
                      <p className={styles["header"]}>manufactured</p>
                    </div>
                    <div className={styles["sequence-content"]}>
                      <ul className={styles["content-list"]}>
                        <li>
                          <p className={styles["text-bold"]}>Automotive:</p>{" "}
                          <p className={styles.text}>
                            Both Toyota and Perodua maintained their leading
                            positions in the nonnational and national car
                            markets respectively
                          </p>
                        </li>
                        <li>
                          <p className={styles["text-bold"]}>Automotive:</p>{" "}
                          <p className={styles.text}>
                            Introduced the Toyota Mirai which uses hydrogen fuel
                            cell technology currently being used in Sarawak
                          </p>
                        </li>
                        <li>
                          <p className={styles["text-bold"]}>M&E:</p>{" "}
                          <p className={styles.text}>
                            Grantt Bio VG Hydraulic Oil (VG46 and VG68) both
                            obtained MyHijau certification
                          </p>
                        </li>
                        <li>
                          <p className={styles["text-bold"]}>Equipment:</p>{" "}
                          <p className={styles.text}>
                            Industrial segment's business grew in sectors such
                            as food & beverage, logistics, and warehousing.
                          </p>
                        </li>
                        <li>
                          <p className={styles["text-bold"]}>Aerospace:</p>{" "}
                          <p className={styles.text}>
                            The Division retained its position in the top 5% of
                            Rolls-Royce’s high performing suppliers group
                          </p>
                        </li>
                        <li>
                          <p className={styles["text-bold"]}>Green Products:</p>{" "}
                          <p className={styles.text}>
                            Expansion of BRUSS and Water Reclamation Plant
                            (in-house membrane)
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div
                    className={`${styles["sequence-card"]} ${styles["human-card"]}`}
                  >
                    <div className={styles["header-container"]}>
                      <Image
                        src={images.value4}
                        loading="lazy"
                        alt="human"
                        className={styles["icon"]}
                      />
                      <p className={styles["header"]}>human</p>
                    </div>
                    <div className={styles["sequence-content"]}>
                      <ul className={styles["content-list"]}>
                        <li>
                          <CountUp
                            start={0}
                            end={30}
                            delay={0}
                            // decimal="."
                            // decimals={1}
                            enableScrollSpy={true}
                            scrollSpyDelay={1}
                            scrollSpyOnce={true}
                          >
                            {({ countUpRef }) => (
                              <div className={styles["figures-list"]}>
                                <p style={{ margin: 0 }}>
                                  <span
                                    ref={countUpRef}
                                    className={styles.number}
                                  ></span>
                                  <span className={styles.unit}> %</span>
                                  <span className={styles.text}>
                                    {" "}
                                    women’s representation on the Board of
                                    Directors
                                  </span>
                                </p>
                              </div>
                            )}
                          </CountUp>
                        </li>
                        <li>
                          <div className={styles["figures-list"]}>
                            <p className={styles.text}>Diversity:</p>
                            <ul>
                              <li>
                                <CountUp
                                  start={0}
                                  end={80}
                                  delay={0}
                                  decimal="."
                                  decimals={1}
                                  enableScrollSpy={true}
                                  scrollSpyDelay={1}
                                  scrollSpyOnce={true}
                                >
                                  {({ countUpRef }) => (
                                    <p style={{ margin: 0 }}>
                                      <span
                                        ref={countUpRef}
                                        className={styles.number}
                                      ></span>
                                      <span className={styles.unit}>
                                        {" "}
                                        % male
                                      </span>
                                    </p>
                                  )}
                                </CountUp>
                              </li>
                              <li>
                                <CountUp
                                  start={0}
                                  end={20}
                                  delay={0}
                                  decimal="."
                                  decimals={1}
                                  enableScrollSpy={true}
                                  scrollSpyDelay={1}
                                  scrollSpyOnce={true}
                                >
                                  {({ countUpRef }) => (
                                    <p style={{ margin: 0 }}>
                                      <span
                                        ref={countUpRef}
                                        className={styles.number}
                                      ></span>
                                      <span className={styles.unit}>
                                        {" "}
                                        % female
                                      </span>
                                    </p>
                                  )}
                                </CountUp>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li>
                          <CountUp
                            start={0}
                            end={90}
                            delay={0}
                            // decimal="."
                            // decimals={1}
                            enableScrollSpy={true}
                            scrollSpyDelay={1}
                            scrollSpyOnce={true}
                          >
                            {({ countUpRef }) => (
                              <div className={styles["figures-list"]}>
                                <p style={{ margin: 0 }}>
                                  <span className={styles.text}>
                                    Employee Engagement Survey recorded a
                                    satisfaction level of{" "}
                                  </span>
                                  <span
                                    ref={countUpRef}
                                    className={styles.number}
                                  ></span>
                                  <span className={styles.unit}> %</span>
                                </p>
                              </div>
                            )}
                          </CountUp>
                        </li>
                        <li>
                          <p style={{ margin: 0 }} className={styles.text}>
                            Zero fatality cases
                          </p>
                        </li>
                        <li>
                          <p style={{ margin: 0 }} className={styles.text}>
                            Energize UMW engagements to promote employee
                            wellness
                          </p>
                        </li>
                        <li>
                          <p style={{ margin: 0 }} className={styles.text}>
                            46 high potential young talents selected since 2018
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div
                    className={`${styles["sequence-card"]} ${styles["intellectual-card"]}`}
                  >
                    <div className={styles["header-container"]}>
                      <Image
                        src={images.value5}
                        loading="lazy"
                        alt="intellectual"
                        className={styles["icon"]}
                      />
                      <p className={styles["header"]}>intellectual</p>
                    </div>
                    <div className={styles["sequence-content"]}>
                      <ul className={styles["content-list"]}>
                        <li>
                          <p style={{ margin: 0 }} className={styles.text}>
                            Improvement in productivity and work efficiency
                            through process automation and digitalisation
                          </p>
                        </li>
                        <li>
                          <p style={{ margin: 0 }} className={styles.text}>
                            Fully compliant with the Eco-Dealership evaluation
                          </p>
                        </li>
                        <li>
                          <p style={{ margin: 0 }} className={styles.text}>
                            Applications modernisation across the business units
                            in staying updated with the latest functionality and
                            features
                          </p>
                        </li>
                        <li>
                          <p style={{ margin: 0 }} className={styles.text}>
                            Mitigated the risk of cyber threats and cyber
                            attacks by continuously improving awareness on cyber
                            security among employees
                          </p>
                        </li>
                        <li>
                          <p style={{ margin: 0 }} className={styles.text}>
                            Improved procurement process to strictly ensure
                            compliance with Group's procurement guidelines
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div
                    className={`${styles["sequence-card"]} ${styles["social-card"]}`}
                  >
                    <div className={styles["header-container"]}>
                      <Image
                        src={images.value6}
                        loading="lazy"
                        alt="social"
                        className={styles["icon"]}
                      />
                      <p className={styles["header"]}>social & relationship</p>
                    </div>
                    <div className={styles["sequence-content"]}>
                      <ul className={styles["content-list"]}>
                        <li>
                          <CountUp
                            start={0}
                            end={56.7}
                            delay={0}
                            decimal="."
                            decimals={1}
                            enableScrollSpy={true}
                            scrollSpyDelay={1}
                            scrollSpyOnce={true}
                          >
                            {({ countUpRef }) => (
                              <div className={styles["figures-list"]}>
                                <p
                                  style={{ margin: 0 }}
                                  className={styles.text}
                                >
                                  {" "}
                                  In support of our local vendors,{" "}
                                  <span
                                    ref={countUpRef}
                                    className={styles.number}
                                  ></span>
                                  <span className={styles.unit}> % {""}</span>
                                  of the Group’s procurement was spent on local
                                  suppliers
                                </p>
                              </div>
                            )}
                          </CountUp>
                        </li>
                        <li>
                          <div className={styles["figures-list"]}>
                            <p className={styles.text}>
                              <CountUp
                                start={0}
                                end={2146}
                                delay={0}
                                // decimal="."
                                // decimals={1}
                                enableScrollSpy={true}
                                scrollSpyDelay={1}
                                scrollSpyOnce={true}
                              >
                                {({ countUpRef }) => (
                                  <span
                                    ref={countUpRef}
                                    className={styles.number}
                                  ></span>
                                )}
                              </CountUp>
                              <span className={styles.text}>
                                {" "}
                                UMW Community Champions clocked{" "}
                              </span>
                              <CountUp
                                start={0}
                                end={11344}
                                delay={0}
                                // decimal="."
                                // decimals={1}
                                enableScrollSpy={true}
                                scrollSpyDelay={1}
                                scrollSpyOnce={true}
                              >
                                {({ countUpRef }) => (
                                  <span
                                    ref={countUpRef}
                                    className={styles.number}
                                  ></span>
                                )}
                              </CountUp>
                              <span className={styles.text}>
                                {" "}
                                voluntary hours{" "}
                              </span>
                            </p>
                          </div>
                        </li>
                        <li>
                          <p style={{ margin: 0 }} className={styles.text}>
                            Collaboration between employees and local
                            communities in reforestation activities under the
                            UGS initiative
                          </p>
                        </li>
                        <li>
                          <p style={{ margin: 0 }} className={styles.text}>
                            Supported the Trail of National Rivers Programme's
                            bamboo tree planting activities
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div
                    className={`${styles["sequence-card"]} ${styles["natural-card"]}`}
                  >
                    <div className={styles["header-container"]}>
                      <Image
                        src={images.value7}
                        loading="lazy"
                        alt="natural"
                        className={styles["icon"]}
                      />
                      <p className={styles["header"]}>natural</p>
                    </div>
                    <div className={styles["sequence-content"]}>
                      <ul className={styles["content-list"]}>
                        <li>
                          <CountUp
                            start={0}
                            end={100}
                            delay={0}
                            // decimal="."
                            // decimals={1}
                            enableScrollSpy={true}
                            scrollSpyDelay={1}
                            scrollSpyOnce={true}
                          >
                            {({ countUpRef }) => (
                              <div className={styles["figures-list"]}>
                                <p
                                  style={{ margin: 0 }}
                                  className={styles.text}
                                >
                                  Solar rooftop PV capacity increased from 2MW
                                  to 4MW, a {""}
                                  <span
                                    ref={countUpRef}
                                    className={styles.number}
                                  ></span>
                                  <span className={styles.unit}> % {""}</span>
                                  increase from the previous year
                                </p>
                              </div>
                            )}
                          </CountUp>
                        </li>
                        <li>
                          <div className={styles["figures-list"]}>
                            <p className={styles.text}>
                              Improved GHG emissions disclosures by reporting
                              Scope 1 emissions (direct emissions from sources
                              owned or controlled by UMW Group):{" "}
                              <CountUp
                                start={0}
                                end={8069.4}
                                delay={0}
                                decimal="."
                                decimals={1}
                                enableScrollSpy={true}
                                scrollSpyDelay={1}
                                scrollSpyOnce={true}
                              >
                                {({ countUpRef }) => (
                                  <span
                                    ref={countUpRef}
                                    className={styles.number}
                                  ></span>
                                )}
                              </CountUp>
                              <span className={styles.text}>
                                {" "}
                                tCO2e and Scope 2 emissions (indirect emissions
                                from purchased energy such as electricity):{" "}
                              </span>
                              <CountUp
                                start={0}
                                end={46321.1}
                                delay={0}
                                decimal="."
                                decimals={1}
                                enableScrollSpy={true}
                                scrollSpyDelay={1}
                                scrollSpyOnce={true}
                              >
                                {({ countUpRef }) => (
                                  <span
                                    ref={countUpRef}
                                    className={styles.number}
                                  ></span>
                                )}
                              </CountUp>
                              <span className={styles.text}> tCO2e</span>
                            </p>
                          </div>
                        </li>
                        <li>
                          <div className={styles["figures-list"]}>
                            <p className={styles.text}>
                              <CountUp
                                start={0}
                                end={157000}
                                delay={0}
                                // decimal="."
                                // decimals={1}
                                enableScrollSpy={true}
                                scrollSpyDelay={1}
                                scrollSpyOnce={true}
                              >
                                {({ countUpRef }) => (
                                  <span
                                    ref={countUpRef}
                                    className={styles.number}
                                  ></span>
                                )}
                              </CountUp>
                              <span className={styles.text}>
                                {" "}
                                mangrove and{" "}
                              </span>
                              <CountUp
                                start={0}
                                end={10000}
                                delay={0}
                                // decimal="."
                                // decimals={1}
                                enableScrollSpy={true}
                                scrollSpyDelay={1}
                                scrollSpyOnce={true}
                              >
                                {({ countUpRef }) => (
                                  <span
                                    ref={countUpRef}
                                    className={styles.number}
                                  ></span>
                                )}
                              </CountUp>
                              <span className={styles.text}>
                                {" "}
                                bamboo trees planted{" "}
                              </span>
                            </p>
                          </div>
                        </li>
                        <li>
                          <div className={styles["figures-list"]}>
                            <p className={styles.text}>
                              <span className={styles.text}>
                                {" "}
                                Printing was reduced by{" "}
                              </span>
                              <CountUp
                                start={0}
                                end={484394}
                                delay={0}
                                // decimal="."
                                // decimals={1}
                                enableScrollSpy={true}
                                scrollSpyDelay={1}
                                scrollSpyOnce={true}
                              >
                                {({ countUpRef }) => (
                                  <span
                                    ref={countUpRef}
                                    className={styles.number}
                                  ></span>
                                )}
                              </CountUp>
                              <span className={styles.text}>
                                {" "}
                                prints which is equivalent to{" "}
                              </span>
                              <CountUp
                                start={0}
                                end={1.3}
                                delay={0}
                                decimal="."
                                decimals={1}
                                enableScrollSpy={true}
                                scrollSpyDelay={1}
                                scrollSpyOnce={true}
                              >
                                {({ countUpRef }) => (
                                  <span
                                    ref={countUpRef}
                                    className={styles.number}
                                  ></span>
                                )}
                              </CountUp>
                              <span className={styles.unit}> tonnes </span>
                              <span className={styles.text}>
                                {" "}
                                of solid waste avoided
                              </span>
                            </p>
                          </div>
                        </li>
                        <li>
                          <p style={{ margin: 0 }} className={styles.text}>
                            Awarded with Bronze in Green Rating for UMW Campus
                            in Serendah by GreenRE
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Modal>
          {/* outcomes modal */}
          <Modal
            open={value4Modal}
            onClose={() => {
              setValue4Modal(false);
            }}
            sx={{
              overflow: "scroll",
              maxHeight: "100vh",
            }}
          >
            <div className={styles["modal-container"]}>
              <div className={`${styles.prev} ${styles["arrow-container"]}`}>
                <ArrowBackIcon
                  className={styles["arrow-icon"]}
                  onClick={() => {
                    setValue3Modal(true);
                    setValue4Modal(false);
                  }}
                />
              </div>
              <div className={`${styles.next} ${styles["arrow-container"]}`}>
                <ArrowForwardIcon
                  className={styles["arrow-icon"]}
                  onClick={() => {
                    setValue4Modal(false);
                    setValue5Modal(true);
                  }}
                />
              </div>
              <div className={styles["sequence-modal"]}>
                <div className={styles["modal-top"]}>
                  <div className={styles["modal-header"]}>
                    <p className={styles["title"]}>Outcomes</p>
                  </div>
                  <IconButton
                    onClick={() => {
                      setValue4Modal(false);
                    }}
                    className={styles["close-container"]}
                  >
                    <CloseIcon className={styles["close"]} />
                  </IconButton>
                </div>
                <div className={styles["content-wrapper"]}>
                  <div
                    className={`${styles["sequence-card"]} ${styles["financial-card"]}`}
                  >
                    <div className={styles["header-container"]}>
                      <Image
                        src={images.value2}
                        loading="lazy"
                        alt="financial"
                        className={styles["icon"]}
                      />
                      <p className={styles["header"]}>Financial</p>
                    </div>
                    <div className={styles["sequence-content"]}>
                      <ul className={styles["content-list"]}>
                        <li>
                          <p className={styles["text-bold"]}>
                            Financial strength:
                          </p>{" "}
                          <p className={styles.text}>
                            Value comes from prudent financial management and
                            stringent cost optimisation provided for shareholder
                            returns.
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div
                    className={`${styles["sequence-card"]} ${styles["manufactured-card"]}`}
                  >
                    <div className={styles["header-container"]}>
                      <Image
                        src={images.value3}
                        loading="lazy"
                        alt="manufactured"
                        className={styles["icon"]}
                      />
                      <p className={styles["header"]}>manufactured</p>
                    </div>
                    <div className={styles["sequence-content"]}>
                      <ul className={styles["content-list"]}>
                        <li>
                          <p className={styles["text-bold"]}>Embedded trust:</p>{" "}
                          <p className={styles.text}>
                            The strength of our assets serves to bring about a
                            competitive advantage and provide assurance on our
                            quality.
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div
                    className={`${styles["sequence-card"]} ${styles["human-card"]}`}
                  >
                    <div className={styles["header-container"]}>
                      <Image
                        src={images.value4}
                        loading="lazy"
                        alt="human"
                        className={styles["icon"]}
                      />
                      <p className={styles["header"]}>human</p>
                    </div>
                    <div className={styles["sequence-content"]}>
                      <ul className={styles["content-list"]}>
                        <li>
                          <p className={styles["text-bold"]}>
                            Increased productivity:
                          </p>{" "}
                          <p className={styles.text}>
                            Ensuring productivity not only constantly improves,
                            but is also substantially amplified through
                            consistent, inclusive engagement and enhanced,
                            targeted learning, led by an involved Management.
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div
                    className={`${styles["sequence-card"]} ${styles["intellectual-card"]}`}
                  >
                    <div className={styles["header-container"]}>
                      <Image
                        src={images.value5}
                        loading="lazy"
                        alt="intellectual"
                        className={styles["icon"]}
                      />
                      <p className={styles["header"]}>intellectual</p>
                    </div>
                    <div className={styles["sequence-content"]}>
                      <ul className={styles["content-list"]}>
                        <li>
                          <p className={styles["text-bold"]}>
                            Greater innovation;
                          </p>{" "}
                          <p className={styles.text}>
                            Creating limitless value through inventive courses
                            of action by collaborating with strategic partners
                            to deploy untapped revenues and efficient systems to
                            meet progressive market requirements.
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div
                    className={`${styles["sequence-card"]} ${styles["social-card"]}`}
                  >
                    <div className={styles["header-container"]}>
                      <Image
                        src={images.value6}
                        loading="lazy"
                        alt="social"
                        className={styles["icon"]}
                      />
                      <p className={styles["header"]}>social & relationship</p>
                    </div>
                    <div className={styles["sequence-content"]}>
                      <ul className={styles["content-list"]}>
                        <li>
                          <p className={styles["text-bold"]}>
                            Better relationships:
                          </p>{" "}
                          <p className={styles.text}>
                            Investing in building stronger relationships with
                            advantageous collaborations within the value chain
                            and in the communities we operate in to support our
                            goals in sustaining a better world.
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div
                    className={`${styles["sequence-card"]} ${styles["natural-card"]}`}
                  >
                    <div className={styles["header-container"]}>
                      <Image
                        src={images.value7}
                        loading="lazy"
                        alt="natural"
                        className={styles["icon"]}
                      />
                      <p className={styles["header"]}>natural</p>
                    </div>
                    <div className={styles["sequence-content"]}>
                      <ul className={styles["content-list"]}>
                        <li>
                          <p className={styles["text-bold"]}>
                            Sustainable environment:
                          </p>{" "}
                          <p className={styles.text}>
                            Mitigating our impact on the environment through
                            concerted efforts to minimise our footprint by
                            integrating sustainability measures into our
                            businesses and carrying out conservation
                            initiatives.
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Modal>
          {/* tradeoffs modal */}
          <Modal
            open={value5Modal}
            onClose={() => {
              setValue5Modal(false);
            }}
            sx={{
              overflow: "scroll",
              maxHeight: "100vh",
            }}
          >
            <div className={styles["modal-container"]}>
              <div className={`${styles.prev} ${styles["arrow-container"]}`}>
                <ArrowBackIcon
                  className={styles["arrow-icon"]}
                  onClick={() => {
                    setValue4Modal(true);
                    setValue5Modal(false);
                  }}
                />
              </div>
              <div className={styles["sequence-modal"]}>
                <div className={styles["modal-top"]}>
                  <div className={styles["modal-header"]}>
                    <p className={styles["title"]}>Tradeoffs</p>
                  </div>
                  <IconButton
                    onClick={() => {
                      setValue5Modal(false);
                    }}
                    className={styles["close-container"]}
                  >
                    <CloseIcon className={styles["close"]} />
                  </IconButton>
                </div>
                <div className={styles["content-wrapper"]}>
                  <div
                    className={`${styles["sequence-card"]} ${styles["financial-card"]}`}
                  >
                    <div className={styles["header-container"]}>
                      <Image
                        src={images.value2}
                        loading="lazy"
                        alt="financial"
                        className={styles["icon"]}
                      />
                      <p className={styles["header"]}>Financial</p>
                    </div>
                    <div className={styles["sequence-content"]}>
                      <ul className={styles["content-list"]}>
                        <li>
                          <p className={styles.text}>
                            Financial Capital is crucial to our smooth
                            operations and the continued growth and preservation
                            of all other Capitals. We are fully cognisant of the
                            need to balance and optimise the use of our
                            Financial Capital to ensure the best outcomes for
                            the sustainability of the business and interests of
                            our shareholders.
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div
                    className={`${styles["sequence-card"]} ${styles["manufactured-card"]}`}
                  >
                    <div className={styles["header-container"]}>
                      <Image
                        src={images.value3}
                        loading="lazy"
                        alt="manufactured"
                        className={styles["icon"]}
                      />
                      <p className={styles["header"]}>manufactured</p>
                    </div>
                    <div className={styles["sequence-content"]}>
                      <ul className={styles["content-list"]}>
                        <li>
                          <p className={styles.text}>
                            We invest in Manufactured Capital to ensure we can
                            remain competitive and relevant in our business. Our
                            ability to do this is reliant on the consistent use
                            of Financial Capital, which will be reduced in the
                            short to medium term but will most likely increase
                            in the long term as we build and expand our
                            business.
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div
                    className={`${styles["sequence-card"]} ${styles["human-card"]}`}
                  >
                    <div className={styles["header-container"]}>
                      <Image
                        src={images.value4}
                        loading="lazy"
                        alt="human"
                        className={styles["icon"]}
                      />
                      <p className={styles["header"]}>human</p>
                    </div>
                    <div className={styles["sequence-content"]}>
                      <ul className={styles["content-list"]}>
                        <li>
                          <p className={styles.text}>
                            Strong Human Capital is essential to the progress
                            and growth of our organisation. To ensure that we
                            can continue to advance our aspirations and
                            organisational goals, we must invest in Human
                            Capital to develop a resilient, capable and loyal
                            workforce. We aspire to continue to create value for
                            our employees as well as our organisation in our
                            sustainability journey.
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div
                    className={`${styles["sequence-card"]} ${styles["intellectual-card"]}`}
                  >
                    <div className={styles["header-container"]}>
                      <Image
                        src={images.value5}
                        loading="lazy"
                        alt="intellectual"
                        className={styles["icon"]}
                      />
                      <p className={styles["header"]}>intellectual</p>
                    </div>
                    <div className={styles["sequence-content"]}>
                      <ul className={styles["content-list"]}>
                        <li>
                          <p className={styles.text}>
                            Intellectual Capital helps us to not only add value
                            to our existing products and services, but to also
                            generate new revenue streams through innovations
                            that meet evolving market needs. Investing in
                            Intellectual Capital will help to obtain operational
                            efficiencies that will boost our Manufactured
                            Capital and the productivity of our Human Capital.
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div
                    className={`${styles["sequence-card"]} ${styles["social-card"]}`}
                  >
                    <div className={styles["header-container"]}>
                      <Image
                        src={images.value6}
                        loading="lazy"
                        alt="social"
                        className={styles["icon"]}
                      />
                      <p className={styles["header"]}>social & relationship</p>
                    </div>
                    <div className={styles["sequence-content"]}>
                      <ul className={styles["content-list"]}>
                        <li>
                          <p className={styles.text}>
                            Maintaining and growing our Social and Relationship
                            Capital will drive sustainable growth across all our
                            Capitals, especially as our customers, partners and
                            suppliers play an important role in supporting our
                            business. In terms of communities, devoting
                            resources to this Capital is what will essentially
                            help us maintain our social licence to operate.
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div
                    className={`${styles["sequence-card"]} ${styles["natural-card"]}`}
                  >
                    <div className={styles["header-container"]}>
                      <Image
                        src={images.value7}
                        loading="lazy"
                        alt="natural"
                        className={styles["icon"]}
                      />
                      <p className={styles["header"]}>natural</p>
                    </div>
                    <div className={styles["sequence-content"]}>
                      <ul className={styles["content-list"]}>
                        <li>
                          <p className={styles.text}>
                            Preserving Natural Capital is an important aspect of
                            the value creation journey. We acknowledge that our
                            activities have an impact on the environment and we
                            therefore invest in ways to mitigate our impact and
                            to optimise resource use.
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default TheWayWeCreateValue;
