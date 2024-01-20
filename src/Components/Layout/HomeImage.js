import React from 'react';
import Pikachu from './images/PikachuWall.jpg';
import styles from './styles/homeimage.module.css';


function HomeImage() {
    return (
        <div className={styles.imageContainer}>
        <img src={Pikachu} alt="Pikachu"/>
        
      </div>
    
    );
}

export default HomeImage;
