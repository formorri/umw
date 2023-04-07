import Head from "next/head";
// import Image from "next/image";
// import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.scss";
import { Navbar1 } from "@/components";
import Image from "next/image";
import images from "@/constants/images";

import {
  Hero,
  WhoWeAre,
  FinancialHighlights,
  ViewsFromOurLeaders,
  OurPerformance,
  TheWayWeCreateValue,
  SustainabilityPerformance,
  Leadership,
  AGM,
  Downloads,
} from "@/sections";

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>UMW Holdings Integrated Annual Report 2022</title>
        <link rel="icon" href="favicon.ico" />
        {/* metadata */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="UMW Holdings Integrated Annual Report 2022"
        />
        <meta
          property="og:site_name"
          content="UMW Holdings Integrated Annual Report 2022"
        />
        <meta property="og:description" content="ACCELERATING CREST@UMW" />
        {/* <meta property="og:image" content="preview-image.png" /> */}
        <meta
          name="keywords"
          content="UMW, UMW Integrated Annual Report, UMW Integrated Annual Report 2022, UMW Holdings Berhad, Integrated Annual Report 2022, Integrated Annual Report, Annual Report"
        />
        <meta name="author" content="NovaFusion" />
        {/* <link rel='canonical' hrefLang="en" href='https://www.umw.com/' /> */}
      </Head>

      {/* <p className={styles.watermark}>INTEGRATED ANNUAL REPORT 2022</p> */}
      <Navbar1 className={styles.navbar} />
      <Hero />
      <WhoWeAre />
      <FinancialHighlights />
      <ViewsFromOurLeaders />
      <OurPerformance />
      <TheWayWeCreateValue />
      <SustainabilityPerformance />
      <Leadership />
      <AGM />
      <Downloads />

      <div className={styles.copyright}>
        <p className={styles["text"]}>
          © 2023 UMW Holdings Berhad 198201010554 (90278-P). All rights
          reserved.
        </p>
      </div>
    </>
  );
}
