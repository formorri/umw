import React, { useState } from "react";
import styles from "./TheWayWeCreateValue.module.scss";
import { images } from "../../constants";
import Modal from "@mui/material/Modal";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { Carousel, Button1, Button1Popup } from "@/components";
import Image from "next/image";
import CountUp from "react-countup";

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
    title: "Labour Management Relations",
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
    title: "Occupational Health & Safety (OHS)",
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
      "The effects of climate change can disrupt supply chains and lead to financial loss through reduced production.",
      "Transition risk pertains to the impact of shifting strategies, regulations, or investments as society and industry move towards reducing their carbon dependency and mitigating the resulting environmental impact.",
    ],
    opportunities: [
      "Bolster climate action and commit to investing in nature-based solutions that facilitate carbon sequestration to achieve 45% and 100% carbon neutrality by 2030 and 2050.",
    ],
    shortMid: [
      "Investing in renewable energy by installing solar panels at our KYB-UMW and Aerospace plants.",
      "Investing in naturebased solutions for CO2 sequestration and collaborating with key stakeholders to undertake a reforestation initiative.",
      "Our commitment to sustainable operational excellence reflects on our dedication to environmental stewardship.",
    ],
    value: [
      "Broadened reporting scope to disclose GHG emissions according to Scope 1, Scope 2 and Scope 3",
      "GHG emissions intensity reduced by XXX in 2022.",
      "Planted 150,000 mangrove trees in various states throughout Malaysia in 2022",
      "Embarked on developing a solar farm in HVM Park in Serendah, Selangor.",
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
      "Strengthen product/ service quality and speed of delivery by understanding evolving customer needs and expectations to gain a competitive business advantage",
      "Drives innovative developments and ownership of intellectual property (IP) and proprietary technologies",
    ],
    shortMid: [
      "Utilising customer insights to develop innovative products and solutions enhances competitiveness and futureproofs our business.",
      "Creating in-house capabilities through cultivating an innovative and highperformance culture",
      "Leveraging on digitalisation and technology to boost efficiency",
    ],
    value: [
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
      "Employees go above and engage in behaviours that help the Company succeed.",
    ],
    shortMid: [
      "Improved employee engagement through organised and personalised programmes",
      "Providing platforms for enhancing employee engagement (i.e. Teams, Webex, e-Learning platforms)",
      "Developing employee wellness programmes to promote physical and emotional health",
    ],
    value: [
      "Employees expressed a strong desire to be a part of and stay with the organisation",
      "Launched Energize UMW for WoWriors’ mental health and overall wellbeing.",
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
      "Technical and leadership skills via a focused development course",
    ],
    value: [
      "Employees received training for XXX hours",
      "Launched Transformation Leadership Programme with IMD Business School to shape potential future leaders.",
    ],
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
      "Environmental stewardship is demonstrated by complying with relevant laws and regulations, as well as engaging with the community.",
    ],
    value: [
      "The KYB-UMW factory has commissioned a water reclamation plant that utilises in-house developed membrane technology",
      "Improved UMW Environment Action Plan (UEAP) score from 0.5 in 2016 to 3.75 in 2022, higher than industry average score of 3.1.",
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
      "Improved UMW Environment Action Plan (UEAP) score from 0.5 in 2016 to 3.75 in 2022, higher than industry average score of 3.1.",
    ],
  },
  {
    key: 7,
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
      "Improved UMW Environment Action Plan (UEAP) score from 0.5 in 2016 to 3.75 in 2022, higher than industry average score of 3.1.",
    ],
  },
  {
    key: 8,
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
      "Signed five Collective Agreements between UMW Group and Kesatuan Pekerja- Pekerja Perusahaan Kumpulan UMW (KPPPKUMW)",
    ],
  },
  {
    key: 9,
    title: "Business Ethics and Governance",
    risks: [
      "Inadequate or ineffective anticorruption governance may result in regulatory pressures, increased noncompliance costs, and a negative reputation.",
    ],
    opportunities: [
      "Incorporating principles of good governance can enhance an organisation's resilience against external factors, thereby future proofing it",
    ],
    shortMid: [
      "The reinforcement of the governance of the enterprise risk management framework and relevant policies and processes can facilitate the efficient implementation of EES programs and initiatives.",
    ],
    value: [
      "Obtained zero corruption charges",
      "Reviewed and revised the Anti-Bribery and Corruption Policy and the Whistleblowing Policy",
      "Attained the ISO 37001 Anti-Bribery Management System certificate.",
      "97% employees completed the Anti-Bribery and Corruption e-learning",
    ],
  },
  {
    key: 10,
    title: "Sustainable Supply Chain",
    risks: [
      "Irresponsible practices and procedures throughout the supply chain can result in additional operational costs and reputational harm.",
    ],
    opportunities: [
      "By promoting sustainability practices in vendors and suppliers, we can strengthen our supply chain management and ensure sustainable business growth.",
    ],
    shortMid: [
      "Establishing guidelines for sustainable supply chain practises in order to increase industry collective capability and promote local suppliers",
      "Raising suppliers' awareness on ESG.",
    ],
    value: [
      "Local suppliers comprised 88% of the Group's suppliers.",
      "57% of the Group's procurement budget went to local suppliers.",
      "Held a supplier performance review exercise for 308 suppliers.",
    ],
  },
  {
    key: 11,
    title: "Occupational Health & Safety",
    risks: [
      "Inadequate OHS standards and practices may result in health hazards, workforce inefficiencies, and financial losses",
    ],
    opportunities: [
      "Boosting employee health and well-being can enhance productivity and performance.",
    ],
    shortMid: [
      "Cultivating a 'health and safety' culture across the organisation through education and awareness.",
    ],
    value: [
      "Maintained zero cases of fatalities",
      "26 operational sites were assessed against the ISO 45001:2018 standard.",
      "31 operational sites underwent statutory compliance audit.",
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
      "Implementing community development initiatives that nurture future generations and equip youths with industry-ready skills, such as our Apprenticeship Programme for entre-level technical mechanics",
      "Creating a positive environmental impact on the country through naturebased initiatives such as reforestation.",
    ],
    value: [
      "Enrolled 55 interns through internship programme.",
      "UMW Community Champions dedicated 11,344 volunteer hours.",
      "Contributed about RM8.4 million in cash and in kind, including zakat, to communities.",
    ],
  },
];

const TheWayWeCreateValue = () => {
  const [activeKey, setActiveKey] = useState(null);
  const activeModal = modalData.find((item) => item.key === activeKey?.key);
  const handleModalClick = (key) => {
    setActiveKey(carouselData.find((item) => item.key === key));
  };
  const handleModalClose = () => {
    setActiveKey(null);
  };

  const [value1Modal, setValue1Modal] = useState(false);
  const [value2Modal, setValue2Modal] = useState(false);
  const [value3Modal, setValue3Modal] = useState(false);
  const [value4Modal, setValue4Modal] = useState(false);
  const [value5Modal, setValue5Modal] = useState(false);
  const [value6Modal, setValue6Modal] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles["material-wrapper"]}>
        <h2 className={styles.title}>Managing our material matters</h2>
        <Button1
          link="/"
          text="Download This Section"
          backgroundColor="#112F5E"
          textColor="white"
          icon="download"
          className={styles.download}
        />
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
                <p className={styles["carousel-text"]}>{item.title}</p>
                <Button1Popup
                  text="Read More"
                  backgroundColor="#1683BA"
                  textColor="white"
                  icon="add"
                  onClick={() => handleModalClick(item.key)}
                />
              </div>
            </div>
          ))}
        </Carousel>
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
                <div className={styles["modal-card-container"]}>
                  <div className={styles["modal-card"]}>
                    <div
                      className={`${styles.header} ${styles["risk-header"]}`}
                    >
                      <p className={styles["title-text"]}>risks</p>
                    </div>
                    {activeModal.risks.map((item, index) => (
                      <ul className={styles.list} key={index}>
                        <li>{item}</li>
                      </ul>
                    ))}
                  </div>
                  <div className={styles["modal-card"]}>
                    <div className={`${styles.header} ${styles["opp-header"]}`}>
                      <p className={styles["title-text"]}>opportunities</p>
                    </div>
                    {activeModal.opportunities.map((item, index) => (
                      <ul className={styles.list} key={index}>
                        <li>{item}</li>
                      </ul>
                    ))}
                  </div>
                  <div className={styles["modal-card"]}>
                    <div
                      className={`${styles.header} ${styles["shortMid-header"]}`}
                    >
                      <p className={styles["title-text"]}>
                        Short-to-Mid-term Approach
                      </p>
                    </div>
                    {activeModal.shortMid.map((item, index) => (
                      <ul className={styles.list} key={index}>
                        <li>{item}</li>
                      </ul>
                    ))}
                  </div>
                  <div className={styles["modal-card"]}>
                    <div
                      className={`${styles.header} ${styles["value-header"]}`}
                    >
                      <p className={styles["title-text"]}>Value Created</p>
                    </div>
                    {activeModal.value.map((item, index) => (
                      <ul className={styles.list} key={index}>
                        <li>{item}</li>
                      </ul>
                    ))}
                  </div>
                </div>

                <IconButton
                  onClick={handleModalClose}
                  className={styles["close-container"]}
                >
                  <CloseIcon className={styles["close"]} />
                </IconButton>
              </div>
            </div>
          </Modal>
        )}
      </div>
      <div className={styles["value-wrapper"]}>
        <h2 className={styles.title}>our value creation business model</h2>
        <div className={styles["model-container"]}>
          <Image
            src={images.value1}
            loading="lazy"
            alt="crest infographic"
            className={styles["crest"]}
          />
          {/* Financial button */}
          <div
            className={`${styles["value-1"]} ${styles["value-card"]}`}
            onClick={() => setValue1Modal(true)}
          >
            <div className={styles["value-header"]}>
              <Image
                src={images.value2}
                loading="lazy"
                alt="financial"
                className={styles["financial"]}
              />
              <p className={styles["value-text"]}>financial</p>
            </div>
            <div className={styles["value-button"]}>+</div>
          </div>
          {/* Manufactured button */}
          <div
            className={`${styles["value-2"]} ${styles["value-card"]}`}
            onClick={() => setValue2Modal(true)}
          >
            <div className={styles["value-header"]}>
              <Image
                src={images.value3}
                loading="lazy"
                alt="manufactured"
                className={styles["manufactured"]}
              />
              <p className={styles["value-text"]}>manufactured</p>
            </div>
            <div className={styles["value-button"]}>+</div>
          </div>
        </div>
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
            <div
              className={`${styles["value-modal"]} ${styles["value-modal-1"]}`}
            >
              <div className={styles["modal-top"]}>
                <div className={styles["modal-header"]}>
                  <Image
                    src={images.value2}
                    loading="lazy"
                    alt="financial"
                    className={styles["financial"]}
                  />
                  <p className={styles["title"]}>Financial</p>
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
                {/* Key Inputs */}
                <div className={styles["modal-content"]}>
                  <div className={styles["item-header"]}>
                    <Image
                      src={images.valueAccent}
                      loading="lazy"
                      alt="bullet"
                      className={styles["bullet"]}
                    />
                    <p className={styles["header"]}>Key Inputs</p>
                  </div>
                  <div className={styles["item-content"]}>
                    <p className={styles["text"]}>
                      Financial capital is defined as the pool of funds
                      available to UMW. We keep our capital structure optimal,
                      good access to capital, and undertake regular and cautious
                      investment assessments
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
                    >
                      {({ countUpRef }) => (
                        <div className={styles["border-bottom"]}>
                          <div className={styles["figures"]}>
                            <p className={styles.text}>Market Capitalization</p>
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
                      end={4.3}
                      delay={0}
                      decimal="."
                      decimals={1}
                      enableScrollSpy={true}
                      scrollSpyDelay={1}
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
                {/* Initiatives */}
                <div className={styles["modal-content"]}>
                  <div className={styles["item-header"]}>
                    <Image
                      src={images.valueAccent}
                      loading="lazy"
                      alt="bullet"
                      className={styles["bullet"]}
                    />
                    <p className={styles["header"]}>Initiatives</p>
                  </div>
                  <div className={styles["item-content"]}>
                    <ul className={styles["content-list"]}>
                      <li>
                        <p className={styles.text}>
                          <span className={styles["text-bold"]}>
                            Intensifying
                          </span>{" "}
                          customer retention and relationship
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
                        >
                          {({ countUpRef }) => (
                            <div className={styles["figures-list"]}>
                              <p className={styles.text}>
                                Cost optimisation efforts led to savings of
                              </p>
                              <p style={{ margin: 0 }}>
                                <span
                                  ref={countUpRef}
                                  className={styles.number}
                                ></span>
                                <span className={styles.unit}> million</span>
                              </p>
                              <p className={styles.text}>in FY2021</p>
                            </div>
                          )}
                        </CountUp>
                      </li>
                      <li>
                        <p className={styles.text}>
                          Built{" "}
                          <span className={styles["text-bold"]}>
                            strong relationships
                          </span>{" "}
                          with our principles
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* Outputs */}
                <div className={styles["modal-content"]}>
                  <div className={styles["item-header"]}>
                    <Image
                      src={images.valueAccent}
                      loading="lazy"
                      alt="bullet"
                      className={styles["bullet"]}
                    />
                    <p className={styles["header"]}>Outputs</p>
                  </div>
                  <div className={styles["item-content"]}>
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
                        >
                          {({ countUpRef }) => (
                            <div className={styles["figures-list"]}>
                              <p className={styles.text}>Earnings per share</p>
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
                {/* Initiatives */}
                <div className={styles["modal-content"]}>
                  <div className={styles["item-header"]}>
                    <Image
                      src={images.valueAccent}
                      loading="lazy"
                      alt="bullet"
                      className={styles["bullet"]}
                    />
                    <p className={styles["header"]}>Outcomes</p>
                  </div>
                  <div className={styles["item-content"]}>
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
              </div>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default TheWayWeCreateValue;
