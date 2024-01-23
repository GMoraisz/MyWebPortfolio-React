import React from 'react';
import PikachuImage from './images/PikachuWall.jpg';
import styles from './styles/HomeImage.module.css';

function HomeImage() {
    return (
        <div className={styles.imageContainer}>
            <img src={PikachuImage} alt="Pikachu" />
        </div>
    );
}

export default HomeImage;
