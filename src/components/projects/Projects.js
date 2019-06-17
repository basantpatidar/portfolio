import React from "react";
import styles from "./Projects.module.css";

class Projects extends React.Component {
  render() {
    return (
      <div className={`${styles.projects} container-fluid`} id="projects">
        <div className="row no-gutters">
          <div className="col-sm-6">
            <div
              className={`${(styles.projectOne,
              styles.projectCol)} row no-gutters`}
            >
              <div className="col-sm-7">
                <p className={styles.projectTitle}>Portfolio</p>
                <p className={styles.techNames}> React </p>
                <p className={styles.techNames}> JavaScript </p>
                <p className={styles.techNames}> BootStrap 4 </p>
                <p className={styles.techNames}> ReactStrap </p>
                <p className={styles.techNames}> Responsive Design </p>
              </div>
              <div className="col-sm-5">
                <a href="https://github.com/basantpatidar/portfolio">
                  <img
                    className={styles.projectImgRight}
                    src={require("./portfolioProject.PNG")}
                    alt="projectOneImg"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div
              className={`${(styles.projectTwo,
              styles.projectCol)} row no-gutters`}
            >
              <div className="col-sm-5">
                <a href="https://github.com/basantpatidar/NGO-Portal">
                  <img
                    className={styles.projectImgLeft}
                    src={require("./ngoPortalProject.PNG")}
                    alt="projectOneImg"
                  />
                </a>
              </div>
              <div className="col-sm-7">
                <p className={styles.projectTitle}>Portfolio</p>
                <p className={styles.techNames}> Php </p>
                <p className={styles.techNames}> JavaScript </p>
                <p className={styles.techNames}> HTML5 </p>
                <p className={styles.techNames}> CSS3 </p>
                <p className={styles.techNames}> BootStrap 4 </p>
                <p className={styles.techNames}> Responsive Design </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row no-gutters">
          <div className="col-sm-6">
            <div
              className={`${(styles.projectThree,
              styles.projectCol)} row no-gutters`}
            >
              <div className="col-sm-7">
                <p className={styles.projectTitle}>SportsWork</p>
                <p className={styles.techNames}> JavaScript </p>
                <p className={styles.techNames}> Php </p>
                <p className={styles.techNames}> HTML5 </p>
                <p className={styles.techNames}> CSS3 </p>
                <p className={styles.techNames}> BootStrap 4 </p>
                <p className={styles.techNames}> Responsive Design </p>
              </div>
              <div className="col-sm-5">
                <img
                  className={styles.projectImgRight}
                  src={require("./sportsworksProject.PNG")}
                  alt="projectOneImg"
                />
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div
              className={`${(styles.projectFour,
              styles.projectCol)} row no-gutters`}
            >
              <div className={`${styles.projectFourLeft} col-sm-5`}>
                <img
                  className={(styles.projectImgLeft, styles.projectFourImage)}
                  src={require("./msSqlProject.png")}
                  alt="projectOneImg"
                />
              </div>
              <div className="col-sm-7" style={{ paddingLeft: 6 }}>
                <p className={styles.projectTitle}>Diabetes patient database</p>
                <p className={styles.techNames}> SQL Server </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
