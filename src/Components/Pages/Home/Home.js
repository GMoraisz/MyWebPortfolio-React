import React, { useState, useEffect } from 'react';
import { FaGithub, FaInstagram, FaLinkedin, FaDev } from 'react-icons/fa';
import styles from './Home.module.css';
import Video from '../../Layout/Video/Video';
import HomeImage from '../../Layout/HomeImage/HomeImage';

function Home() {
  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');
  const [strongText, setStrongText] = useState('');

  useEffect(() => {
    const originalText1 = "Olá visitantes, meu nome é";
    const originalStrongText = "Gabriel Morais";
    const originalText2 = "e este é o meu Portfólio!";
    let index1 = 0;
    let strongIndex = 0;
    let index2 = 0;

    const intervalId1 = setInterval(() => {
      setText1(originalText1.substring(0, index1));
      index1++;
      if (index1 > originalText1.length) {
        clearInterval(intervalId1);

        const intervalIdStrong = setInterval(() => {
          setStrongText(originalStrongText.substring(0, strongIndex));
          strongIndex++;
          if (strongIndex > originalStrongText.length) {
            clearInterval(intervalIdStrong);

            const intervalId2 = setInterval(() => {
              setText2(originalText2.substring(0, index2));
              index2++;
              if (index2 > originalText2.length) {
                clearInterval(intervalId2);
              }
            }, 100);
          }
        }, 75);
      }
    }, 100);
  }, []);


  return (
    <div className={styles.homeContainer}>
      <div className={styles.title}>
        <h1> <strong >Morais </strong> <FaDev /></h1>
      </div>
      <Video/>

      <div className={styles.content}>
        <p>
          {text1} <br />
          <strong>{strongText}</strong> <br />
          {text2}
        </p>

        <ul className={styles.socialIcons}>
          <li>
            <a href='https://github.com/GMoraisz'
              target='_blank'
              rel='noopener noreferrer'>
              <FaGithub />
            </a>
          </li>
          <li>
            <a href='https://www.instagram.com/gmoraisz?igsh=eHN0Z2x3aWpwcm42'
              target='_blank'
              rel='noopener noreferrer'>
              <FaInstagram />
            </a>
          </li>
          <li>
            <a href='https://www.linkedin.com/in/gabriel-moraisz/'
              target='_blank'
              rel='noopener noreferrer'>
              <FaLinkedin />
            </a>
          </li>
        </ul>
        <HomeImage/>
      </div>
    </div>
  );
}

export default Home;
