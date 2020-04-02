import React, { Component } from "react";
import styles from "./ContactPage.module.css";
import sprite from "../../img/icons/sprite_social.svg";

class ContactPage extends Component {
  // state = {};
  render() {
    return (
      <div className={styles.pageWrapper}>
        <div className={styles.contentWrapper}>
          <h2 className={styles.contact__heading}>Get in touch</h2>
          <p className={styles.contact__message}>
            If you want to get in touch, write me on{" "}
            <a
              className={styles.message__link}
              href="mailto:g.iakovyna@gmail.com"
            >
              g.iakovyna@gmail.com
            </a>{" "}
          </p>
          <p className={styles.contact__message}>
            Also you may follow me on{" "}
            <div className={styles.message__socialWrapper}>
              <a
                className={styles.message__social}
                href="https://www.linkedin.com/in/grygorii-yakovina/"
                target="_blanc"
              >
                <svg className={[styles.icons, styles.linkedIn].join(" ")}>
                  <use href={sprite + "#linkedin"} />
                </svg>
                <p className={styles.message__socialTitle}>LinkedIn</p>
              </a>{" "}
              <a
                className={styles.message__social}
                href="https://github.com/Satir8"
                target="_blanc"
              >
                <svg className={[styles.icons, styles.gitHub].join(" ")}>
                  <use className={styles.icons} href={sprite + "#github"} />
                </svg>{" "}
                <p className={styles.message__socialTitle}>GitHub</p>
              </a>
            </div>
          </p>
          <p className={styles.manyThanks}>
            Thanks for visiting,{" "}
            <span className={styles.manyThanks__end}>
              and wish you all the best!{" "}
              <span role="img" aria-label="">
                &#9996;
              </span>
            </span>
          </p>
        </div>
      </div>
    );
  }
}

export default ContactPage;
