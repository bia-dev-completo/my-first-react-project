import React from 'react';
import Button from '../../components/Button';

const SkillsPage = () => {
  return (
    <section id="skillsSection">
      <div className="overlay">
        <h1 className="title">Skills</h1>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>ES6</li>
          <li>React</li>
          <li>GoLang</li>
          <li>Git</li>
          <li>GitHub</li>
        </ul>
        <Button buttonType="downloadCompleteResume" />
      </div>
    </section>
  );
};

export default SkillsPage;
