import React, { useState } from 'react';
import ChangeLanguage from '../Buttons/ChangeLanguage';
import resumepdfPT from './images/Carta de Apresentação-1.png';
import coverLetterPT from './images/Meu Currículo-1.png';
import resumepdfEN from './images/myResume-1.png';
import coverLetterEN from './images/Cover Letter-1.png';
import styles from './styles/resume.module.css';
import DownloadPDF from '../Buttons/DownloadPDF';

const Resume = () => {
  const [currentLanguage, setCurrentLanguage] = useState('portuguese');
  const [resumepdf, setResumepdf] = useState(currentLanguage === 'portuguese' ? resumepdfPT : resumepdfEN);
  const [coverLetter, setCoverLetter] = useState(currentLanguage === 'portuguese' ? coverLetterPT : coverLetterEN);

  const handleChangeLanguage = (language) => {
    setCurrentLanguage(language);

    if (language === 'portuguese') {
      setResumepdf(resumepdfPT);
      setCoverLetter(coverLetterPT);
    } else if (language === 'english') {
      setResumepdf(resumepdfEN);
      setCoverLetter(coverLetterEN);
    }
  };

  return (
    <div className={styles.resumeContainer}>
      <div className={styles.embedContainer}>
        <div className={styles.imageWithButtons}>
          <img src={resumepdf} type="image/png" alt="Resume" />

          <div className={styles.rightButtonContainer}>
            <div>
              <ChangeLanguage onChangeLanguage={handleChangeLanguage} />
              <DownloadPDF />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.embedContainer}>
        <img src={coverLetter} type="image/png" alt="Cover Letter" />
      </div>
    </div>
  );
};

export default Resume;
