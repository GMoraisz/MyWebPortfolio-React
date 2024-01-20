import React from "react";
import styles from "./projectstechnologys.module.css";
import { SiJavascript, SiHtml5, SiReact, SiCss3, SiCsharp } from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { BsFiletypeJsx } from "react-icons/bs";
import { FaNodeJs } from "react-icons/fa";

function ProjectsTechnologys() {
  return (
    <div className={styles.itensArea}>
      <div className={styles.titleArea}>
        <h2> Tecnologias Utilizadas</h2>
      </div>
      <div className={styles.iconsArea}>
        <div><SiJavascript /></div>
        <div><SiHtml5 /></div>
        <div><SiCss3 /></div>
        <div><SiReact /></div>
        <div><FaNodeJs /></div>
        <div><BsFiletypeJsx /></div>
        <div><SiCsharp /></div>
        <div><TbApi /></div>
      </div>
    </div>
  );
}

export default ProjectsTechnologys;
