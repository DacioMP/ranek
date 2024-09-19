import React from 'react';
import styles from './Contact.module.css';
import img from '../img/contact.jpg';
import Head from './Head';

const Contact = () => {
  return (
    <section className={`${styles.contact} animeLeft`}>
      <Head title="Ranek | Contato" description="Entre em contato" />
      <img src={img} alt="Máquina de escrever" />
      <div>
        <h1>Entre em contato</h1>
        <ul className={styles.data}>
          <li>pedrosa.ctt@gmail.com</li>
          <li>92 98285-3960</li>
          <li>Cidade Nova, Manaus</li>
        </ul>
      </div>
    </section>
  );
};

export default Contact;
