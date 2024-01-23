import React from "react";
import styles from "./styles/currentstudying.module.css";
import { SiJavascript, SiHtml5, SiReact, SiCss3, SiAngular, SiTypescript, SiTailwindcss } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";

function CurrentStudying() {
  return (
    <div className={styles.itensArea}>
      <div className={styles.title}>
        <h2> Tecnologias que tenho interesse, <br />
          ou estou estudando no momento:
        </h2>
      </div>
      <div className={styles.iconsArea}>
        <div className={styles.icon}><SiJavascript size="4rem" /></div>
        <div className={styles.icon}><SiHtml5 size="4rem" /></div>
        <div className={styles.icon}><SiCss3 size="4rem" /></div>
        <div className={styles.icon}><SiReact size="4rem" /></div>
        <div className={styles.icon}><FaNodeJs size="4rem" /></div>
        <div className={styles.icon}><SiAngular size="4rem" /></div>
        <div className={styles.icon}><SiTypescript size="4rem" /></div>
        <div className={styles.icon}><SiTailwindcss size="4rem" /></div>
      </div>
    </div>
  );
}

export default CurrentStudying;
