import React, { useState, useRef } from 'react';
import styles from './Contact.module.css';
import { PiArrowSquareDownFill } from 'react-icons/pi';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef(); 

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const serviceId = 'service_ds8wwfi';
        const templateId = 'template_q6pp0bo';
        const publicKey = 'AOcM8JDhqP7Q83bT2';

        const templateParams = {
            from_name: name,
            from_email: email,
            to_name: 'Gabriel Morais',
            message: message,
        };

        emailjs
            .send(serviceId, templateId, templateParams, publicKey)
            .then((response) => {
                console.log('Email enviado com sucesso!', response);
                setName('');
                setEmail('');
                setMessage('');

                
                window.alert('Mensagem enviada com sucesso!');
            })
            .catch((error) => {
                console.error('Erro ao enviar o e-mail:', error);
            });
    };

    return (
        <div className={styles.formContact}>
            <h2 className={styles.formTitle}>
                Entre em Contato <PiArrowSquareDownFill />{' '}
            </h2>
            <form ref={form} onSubmit={handleSubmit}> 
                <label>Nome: </label>
                <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
                <label>E-mail: </label>
                <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <label>Mensagem: </label>
                <textarea name="message" value={message} onChange={(e) => setMessage(e.target.value)} />
                <input type="submit" value="Enviar" />
            </form>
        </div>
    );
};

export default Contact;
