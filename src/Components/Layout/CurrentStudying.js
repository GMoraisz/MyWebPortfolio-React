import React from "react";
import styles from "./currentstudying.module.css";
import { SiJavascript, SiHtml5, SiReact, SiCss3, SiAngular, SiTypescript, SiTailwindcss } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";

function CurrentStudying() {
  return (
    <div className={styles.container}>
      <div className={styles.titleArea}>
        <h2> Tecnologias que tenho interesse, <br/>
         ou estou estudando no momento!</h2>
      </div>
      <div className={styles.iconsArea}>
        <div><SiJavascript /></div>
        <div><SiHtml5 /></div>
        <div><SiCss3 /></div>
        <div><SiReact /></div>
        <div><FaNodeJs /></div>
        <div><SiAngular /></div>
        <div><SiTailwindcss /></div>
        <div><SiTypescript /></div>
      </div>
    </div>
  );
}

export default CurrentStudying;
