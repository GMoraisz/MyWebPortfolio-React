import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './styles/DownloadPDF.module.css';
import resumePTBR from './assets/Resume-CoverLetter-PTBR.pdf';
import resumeENG from './assets/Resume-CoverLetter-Eng.pdf';
import { BiSolidFilePdf } from 'react-icons/bi';

function DownloadPDF() {
  const generateDownloadLink = (language) => {
    return language === 'Portuguese' ? resumePTBR : resumeENG;
  };

  const handleLanguageChange = (language) => {
    const downloadLink = generateDownloadLink(language);

    const anchor = document.createElement('a');
    anchor.href = downloadLink;
    anchor.download = `documento_${language}.pdf`;
    anchor.click();
  };

  return (
    <DropdownButton
      className={styles.dropButton}
      id="dropbutton"
      title={
        <>
          <BiSolidFilePdf />
          Download
        </>
      }
      onSelect={(eventKey) => handleLanguageChange(eventKey)}
    >
      <Dropdown.Item eventKey="Portuguese">Portuguese</Dropdown.Item>
      <Dropdown.Item eventKey="English">English</Dropdown.Item>
    </DropdownButton>
  );
}

export default DownloadPDF;
