import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import styles from './styles/changelanguage.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function ChangeLanguage({ onChangeLanguage }) {
    const [currentLanguage, setCurrentLanguage] = useState('portuguese');

    const handleLanguageChange = (language) => {
        setCurrentLanguage(language.toLowerCase());
        onChangeLanguage(language.toLowerCase());
    };

    return (
        <DropdownButton className={styles.dropButton}
            id="dropbutton"
            title={currentLanguage === 'portuguese' ? 'Português' : 'English'}>
            <Dropdown.Item onClick={() => handleLanguageChange('Portuguese')}>Portuguese</Dropdown.Item>
            <Dropdown.Item onClick={() => handleLanguageChange('English')}>English</Dropdown.Item>
        </DropdownButton>
    );
}

export default ChangeLanguage;
