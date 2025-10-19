import React from 'react';
import DownloadIcon from '../../assets/icons/download.png';
import ArrowIcon from '../../assets/icons/arrow.png';
import './styles.css'

const Button = ({ buttonType }) => {
    
    const getButtonProps = (buttonType) => {
        switch (buttonType) {
          case 'downloadResume':
            return {
              icon: DownloadIcon,
              href: 'sources/curriculo.pdf',
              download: 'curriculo.pdf',
              buttonText: 'Baixar currículo',
              colorClass: 'downloadButtonLight'
            };
          
          case 'downloadCompleteResume':
            return {
              icon: DownloadIcon,
              href: 'sources/curriculo.pdf',
              download: 'curriculo.pdf',
              buttonText: 'Baixar currículo completo',
              colorClass: 'downloadButtonDark'
            };
          
          case 'linkedin':
            return {
              icon: ArrowIcon,
              href: 'https://www.linkedin.com/in/beatriz-schwartz/',
              download: null,
              buttonText: 'Confira meu LinkedIn',
              colorClass: 'linkedinButton'
            };
          
          default:
            return {
              icon: DownloadIcon,
              href: '#',
              download: null,
              buttonText: 'Button',
              colorClass: 'downloadButtonLight'
            };
        }
      };  
  return (
    <div className={`defaultButton ${getButtonProps(buttonType).colorClass}`}>
      <img src={getButtonProps(buttonType).icon}/>
      <a 
        href={getButtonProps(buttonType).href} 
        download={getButtonProps(buttonType).download}
        target={getButtonProps(buttonType).download ? null : '_blank'}
      >
        {getButtonProps(buttonType).buttonText}
      </a>
    </div>
  );
};

export default Button;
