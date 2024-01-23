import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Hamburguer.module.css';

function Hamburguer() {
    const [active, setMode] = useState(false);

    const toggleMode = () => {
        setMode(!active);
    }

    return (
        <div className={styles.App}>
            <div className={active ? `${styles.icon} ${styles.iconActive}` : styles.icon} onClick={toggleMode}>
                <div className={`${styles.hamburguer} ${styles.hamburguerIcon}`}></div>
            </div>
            <div className={active ? styles.menuOpen : styles.menuClose}>
                <div className={styles.list}>
                    <ul className={styles.listItems}>
                        <li><Link to="/"><span>Home</span></Link></li>
                        <li><Link to="/Projects"><span>Projects</span></Link></li>
                        <li><Link to="/About"><span>About</span></Link></li>
                        <li><Link to="/Resume"><span>Resume</span></Link></li>
                        <li><Link to="/Contact"><span>Contact</span></Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Hamburguer;
