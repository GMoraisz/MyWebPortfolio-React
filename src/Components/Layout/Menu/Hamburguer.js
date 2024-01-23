import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Hamburguer.module.css';

function Hamburguer() {
    const [active, setMode] = useState(false);
    const navigate = useNavigate();

    const toggleMode = () => {
        setMode(!active);
    }

    const navigateTo = (path) => {
        navigate(path);
        toggleMode(); 
    }

    return (
        <div className={styles.App}>
            <div className={active ? `${styles.icon} ${styles.iconActive}` : styles.icon} onClick={toggleMode}>
                <div className={`${styles.hamburguer} ${styles.hamburguerIcon}`}></div>
            </div>
            <div className={active ? styles.menuOpen : styles.menuClose}>
                <div className={styles.list}>
                    <ul className={styles.listItems}>
                        <li onClick={() => navigateTo("/")}><span>Home</span></li>
                        <li onClick={() => navigateTo("/Projetos")}><span>Projetos</span></li>
                        <li onClick={() => navigateTo("/Sobre")}><span>Sobre</span></li>
                        <li onClick={() => navigateTo("/Resume")}><span>Currículo</span></li>
                        <li onClick={() => navigateTo("/Contato")}><span>Contato</span></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Hamburguer;
