import React from 'react';
import PikachuImage from './PikachuWall.jpg';
import styles from './HomeImage.module.css';

function HomeImage() {
    return (
        <div className={styles.imageContainer}>
            <img src={PikachuImage} alt="Pikachu" />
        </div>
    );
}

export default HomeImage;
