import React, { useState, useEffect } from 'react';
import Button from '../../components/Button';

const HomePage = () => {
  const [resumeDownloadComplete, setResumeDownloadComplete] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      // supondo que dê certo a request que traz
      setResumeDownloadComplete(true);
    }, 5000);
  }, []);

  return (
    <section id="homeSection">
      <div id="homePhoto"></div>
      <div id="homeContent">
        <div id="homeTexts">
          <h1 className="title">Beatriz Schwartz</h1>
          <h2>Engenheira de Software</h2>
          {
            resumeDownloadComplete ? (
              <Button
                buttonType="downloadResume"
              >
                Baixar currículo
              </Button>
            ) : null
          }
        </div>
      </div>
    </section>
  );
};

export default HomePage;
