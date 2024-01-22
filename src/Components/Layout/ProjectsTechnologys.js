
import React from "react";
import styles from "./styles/projectstechnologys.module.css";
import { SiJavascript, SiHtml5, SiReact, SiCss3, SiCsharp } from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { BsFiletypeJsx } from "react-icons/bs";
import { FaNodeJs } from "react-icons/fa";

function ProjectsTechnologys() {
  return (
    <div className={styles.itensArea}>
      <div className={styles.title}>
        <h2> Tecnologias Utilizadas: </h2>
        
      </div>
      <div className={styles.iconsArea}>
        <div className={styles.icon}><SiJavascript size="4rem" /></div>
        <div className={styles.icon}><SiHtml5 size="4rem" /></div>
        <div className={styles.icon}><SiCss3 size="4rem" /></div>
        <div className={styles.icon}><SiReact size="4rem" /></div>
        <div className={styles.icon}><FaNodeJs size="4rem" /></div>
        <div className={styles.icon}><BsFiletypeJsx size="4rem" /></div>
        <div className={styles.icon}><SiCsharp size="4rem" /></div>
        <div className={styles.icon}><TbApi size="4rem" /></div>
      </div>
    </div>
  );
}

export default ProjectsTechnologys;
