import React from "react";
import styles from "./HeroSection.module.css";
import curves from "./lines.png";
import trees from "./roadtrees.png";

import group from "./trees.png";
import SimpleForm from "./SimpleForm";

export default function HeroSection() {
  return (
    <div className={styles.HeroSection}>
      <img src={curves} className={styles.curves} alt="" />
      <div className={styles.HeroDescription}>
        <h1 className={styles.HeroTitle}>MIDORI</h1>
        <p>
          Get rewarded for your social good! <br /> Let's save our planet.
        </p>
      </div>
      
      <img src={group} className={styles.group} alt="" />
      {/* <Link to="/simpleform"> */}
      {/* <label className={styles.button}>Try Out the Edify Bot!</label>  */}
      <SimpleForm />
      {/* </Link> */}
    </div>
  );
}