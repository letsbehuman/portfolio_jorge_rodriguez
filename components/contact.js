import styles from "../styles/Contact.module.scss";
import linkedin from "../public/assets/social/linkedin.png";
import codewars from "../public/assets/social/codewars.png";
import github from "../public/assets/social/github.png";
import Image from "next/image";
import React from "react";
import Link from "next/link";

const Contact = () => {
  return (
    <div id="contact" className={styles.section}>
      <div className={styles.header}>
        <div className={styles.break}></div>
        <h3 className="">Get in touch</h3>
      </div>
      <div className={styles.content}>
        <div className={styles.socialSection}>
          <h4>{"Let's work together"}</h4>
          <ul>
            <li className={styles.socialIcon}>
              <a
                href="https://github.com/letsbehuman"
                target="_blank"
                rel="noreferrer"
              >
                <Image alt="" src={github} fill />
              </a>
            </li>
            <li className={styles.socialIcon}>
              <a
                href="https://www.codewars.com/users/letsbehuman"
                target="_blank"
                rel="noreferrer"
              >
                <Image alt="" src={codewars} fill />
              </a>
            </li>
            <li className={styles.socialIcon}>
              <a
                href="https://www.linkedin.com/in/jorgerodriguezvega-953564121/"
                target="_blank"
                rel="noreferrer"
              >
                <Image alt="" src={linkedin} fill />
              </a>
            </li>
          </ul>
        </div>
        <div className={styles.break}></div>
        <div className={styles.emailSection}>
          <h5>
            <a className={styles.email} href="mailto:yorchrguezv@gmail.com">
              {"yorchrguezv@gmail.com"}
            </a>
            <a className={styles.myEmail} href="mailto:yorchrguezv@gmail.com">
              {"My e-mail"}
            </a>
          </h5>
          <h5>
            <a
              href="/assets/Jorge_Rodriguez_resume.pdf"
              download="Jorge Rodriguez CV.pdf"
            >
              {"My resume"}
            </a>
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Contact;
