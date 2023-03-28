import React, { useState, useEffect } from "react";
import styles from "./SustainabilityPerformance.module.scss";
import { images } from "../../constants";
import { motion, AnimatePresence } from "framer-motion";
import { Button1, CardStack1 } from "@/components";

const cardData =[
  {
    key:0,
    header:'pillar 1: sustainable environment',
    logo:'pillar1',
    title: 'Environmental Stewardship',
    subtitle: '100% CARBON NEUTRALITY BY 2050',
    sdg:[
      'sdg7', 'sdg11', 'sdg12', 'sdg13', 'sdg15', 'sdg17'
    ]
  }
]

const SustainabilityPerformance = () => {
  return (
    <div className={styles.container}>
      <div className={styles["text-wrapper"]}>
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
      </div>
      <div className={styles["card-wrapper"]}>
        {/* <CardStack1></CardStack1> */}
      </div>
    </div>
  );
};

export default SustainabilityPerformance;
