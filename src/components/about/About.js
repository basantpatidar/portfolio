import React from "react";
import styles from "./About.module.css";
import resume from "../../constants/resume";

class About extends React.Component {
  render() {
    return (
      <div className={styles.about}>
        <div className={styles.h2h4}>
          <h2>{resume.title}</h2>
          <h4>{resume.subTitle}</h4>
        </div>
        <button className={`${styles.mybtn} btn`}>
          View Portfolio <i className="fas fa-arrow-down" />
        </button>
      </div>
    );
  }
}

export default About;
