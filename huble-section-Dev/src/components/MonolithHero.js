import React from "react";
import Slider from "react-slick";
import "../slick.css";
import "../slick-theme.css";
import aptarLogo from "../Aptar-Logo.png";
import baeSystemsLogo from "../BaeSystems-Logo.png";
import bmwLogo from "../BMW-Logo.png";
import hondaLogo from "../Honda-Logo.png";
import honeywellLogo from "../HoneyWell-Logo.png";
import jotaLogo from "../JOTA-Logo.png";
import kautexLogo from "../Kautex-Logo.png";
import mercedesBenzLogo from "../MercedesBenz-Logo.png";
import michelinLogo from "../Michelin-Logo.png";
import siemensLogo from "../Siemens-Logo.png";
import styles from "./MonolithHero.module.css";

const MonolithHero = () => {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      speed: 3000,
      autoplaySpeed: 2500,
      cssEase: "linear",
    };

    return (
      <div className="mainContainer">
      
    <div className={styles.monolithhero}>
      <div className={styles.button}>
        <div className={styles.text}>SPEAK TO OUR TEAM</div>
      </div>
      <div className={styles.button1}>
        <div className={styles.text}>REQUEST DEMO</div>
      </div>
      <img className={styles.bgimage1Icon} alt="" src="/bgimage-1@2x.png"></img>
      <div className={styles.overlay} />
      <b className={styles.monolith}>Monolith</b>
      <div className={styles.useAiSoftwareContainer}>
        <p className={styles.useAiSoftware}>Use AI software to test</p>
        <p className={styles.useAiSoftware}>less and learn more.</p>
      </div>
      <div className={styles.spendLessTime}>
        Spend less time running expensive, repetitive tests and more time
        learning from your engineering data to predict the exact tests to run.
      </div>
      <div className={styles.button2}>
        <div className={styles.text}>REQUEST DEMO</div>
      </div>
      <div className={styles.button3}>
        <div className={styles.text}>SPEAK TO OUR TEAM</div>
      </div>
      <Slider className="slideslick" {...settings}>
          <div className="container">
            <img src={aptarLogo} alt="Aptar-Logo" />
          </div>
          <div className="container">
            <img src={baeSystemsLogo} alt="BaeSystems-Logo" />
          </div>
          <div className="container">
            <img src={bmwLogo} alt="BMW-Logo" />
          </div>
          <div className="container">
            <img src={hondaLogo} alt="Honda-Logo" />
          </div>
          <div className="container">
            <img src={honeywellLogo} alt="HoneyWell-Logo" />
          </div>
          <div className="container">
            <img src={jotaLogo} alt="Jota-Logo" />
          </div>
          <div className="container">
            <img src={kautexLogo} alt="Kautex-Logo" />
          </div>
          <div className="container">
            <img src={mercedesBenzLogo} alt="MercedesBenz-Logo" />
          </div>
          <div className="container">
            <img src={michelinLogo} alt="Michelin-Logo" />
          </div>
          <div className="container">
            <img src={siemensLogo} alt="Siemens-Logo" />
          </div>
        </Slider>
    </div>
      </div>
    );
  };

export default MonolithHero;
