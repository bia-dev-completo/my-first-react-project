import React from 'react';
import EmailIcon from '../../assets/icons/email.png';
import WhatsAppIcon from '../../assets/icons/whatsapp.png';
import LinkedInIcon from '../../assets/icons/linkedIn.png';
import InstagramIcon from '../../assets/icons/instagram.png';
import GitHubIcon from '../../assets/icons/github.png';

const ContactPage = () => {
  return (
    <section id="contactSection">
      <div id="contactTextsContainer">
        <div id="contactTextsChild">
          <h1 className="title">Contato</h1>
          <p className="customLineHeight">Gostaria de bater um papo comigo? Vou deixar todas as minhas formas de contato e redes sociais listadas abaixo.</p>
          
          <address className="emailAndPhone">
            <div className="contactItem">
              <img className="emailIcon" src={EmailIcon} alt="Email icon"/>
              <p>contato@email.com</p>
            </div>
            <div className="contactItem">
              <img src={WhatsAppIcon} alt="WhatsApp icon"/>
              <p>+55 (00) 9 9999-9999</p>
            </div>
          </address>

          <div className="socialMedia">
            <a href="https://www.linkedin.com/in/beatriz-schwartz/" target="_blank" rel="noopener noreferrer">
              <img src={LinkedInIcon} alt="LinkedIn icon"/>
            </a>
            <a href="https://www.instagram.com/xuartis/" target="_blank" rel="noopener noreferrer">
              <img src={InstagramIcon} alt="Instagram icon"/>
            </a>
            <a href="https://github.com/beatrizsabbatini" target="_blank" rel="noopener noreferrer">
              <img src={GitHubIcon} alt="GitHub icon"/>
            </a>
          </div>
        </div>
      </div>

      <div id="contactPhoto"></div>
    </section>
  );
};

export default ContactPage;
