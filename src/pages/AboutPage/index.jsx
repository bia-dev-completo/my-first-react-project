import React from 'react';
import Button from '../../components/Button';

const AboutPage = () => {
  return (
    <section id="aboutSection">
      <div id="aboutMeTextsFlexContainer">
        <div id="aboutMeTextsFlexItem">
          <h1 className="title">Sobre mim</h1>
          <p className="customLineHeight">Prazer! Eu sou a Bia, tenhe 25 anos e sou de Londrina, Paraná. Sou uma desenvolvedora Front-End com mais de 4 anos de experiência no mercado de trabalho. Sempre trabalhei com a stack de React JS com Typescript, e por mais que eu não me considere full stack oficialmente, já tive a oportunidade de trabalhar com Node. Sou formada em Engenharia de Software na UTFPR .</p>
          <Button buttonType="linkedin" />
        </div>
      </div>
      <div id="aboutMePhoto"></div>
    </section>
  );
};

export default AboutPage;
