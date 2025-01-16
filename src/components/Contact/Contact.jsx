import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src="contact/emailIcon.png" alt="Email icon" />
          <a href="mailto:k.ravidahiya98@gmail.com">myemail@email.com</a>
        </li>
        <li className={styles.link}>
          <img
            src="contact/linkedinIcon.png"
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/ravi-kumar-rudra">linkedin.com/myname</a>
        </li>
        <li className={styles.link}>
          <img src="contact/githubIcon.png" alt="Github icon" />
          <a href="https://www.github.com/ravidahiya98">github.com/myname</a>
        </li>
      </ul>
    </footer>
  );
};
