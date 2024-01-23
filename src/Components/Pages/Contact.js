import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import styles from './styles/Contact.module.css';
import { PiArrowSquareDownFill } from "react-icons/pi";

export const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('YOUR_SERVICE_ID', 'template_uens4n3', form.current, 'AOcM8JDhqP7Q83bT2')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className={styles.formContact}>
            <h2 className={styles.formTitle}>
                Entre em Contato <PiArrowSquareDownFill/> </h2>
            <form ref={form} onSubmit={sendEmail}>
                <label>Nome: </label>
                <input type="text" name="from_name" />
                <label>E-mail:  </label>
                <input type="email" name="from_email" />
                <label>Mensagem: </label>
                <textarea name="message" />
                <input type="submit" value="Enviar" />
            </form>
        </div>
    );
};

export default Contact;
