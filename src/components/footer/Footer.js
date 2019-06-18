import React from "react";
import styles from "./Footer.module.css";
import logo from "./logo.png";

class Footer extends React.Component {
  render() {
    return (
      <div className={`${styles.footerArea} container-fluid`}>
        <div className={`${styles.allRows} row`}>
          <div className={`${styles.leftCol} col`}>
            <img src={logo} style={{ width: 100, height: 100 }} alt="logo" />{" "}
          </div>
          <div className={`${styles.middleCol} col`}>
            <p className={styles.getInTouch}>
              Get in touch <i className="fas fa-arrow-alt-circle-right" />
            </p>
          </div>
          <div className={`${styles.rightCol} col`}>
            <a href="https://www.linkedin.com/in/basantpatidar/">
              <i className={`${styles.footerIcons} fab fa-linkedin`} /> LinkedIn
            </a>
            <br />
            <a href="https://github.com/basantpatidar">
              <i className={`${styles.footerIcons} fab fa-github`} /> Github
            </a>
            <br />
            <a href="mailto:basantpatidar33@gmail.com">
              <i className={`${styles.footerIcons} far fa-envelope-open`} />{" "}
              Email
            </a>
          </div>
        </div>
        <p>Copyright © {new Date().getFullYear()} Basant Patidar</p>
      </div>
    );
  }
}

export default Footer;
