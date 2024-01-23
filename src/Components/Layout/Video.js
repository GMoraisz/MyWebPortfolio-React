import React from 'react';
import pikachuVideo from './images/PikachuDance.mp4';
import styles from './styles/Video.module.css';

function Video() {
  return (
    <div className={styles.videoContainer}>
      <video className={styles.videoChu} autoPlay loop muted width="350" height="200">
        <source src={pikachuVideo} type="video/mp4" />
        Seu navegador não suporta o elemento de vídeo.
      </video>
    </div>
  );
}

export default Video;
