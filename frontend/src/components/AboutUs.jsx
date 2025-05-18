import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import './AboutUs.css';

const AboutUs = () => {
  const { t } = useTranslation();
  const [visibleSections, setVisibleSections] = useState({});
  const sectionsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setVisibleSections(prev => ({
              ...prev,
              [entry.target.dataset.id]: true
            }));
          }
        });
      },
      { threshold: 0.2 }
    );

    sectionsRef.current.forEach(section => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="aboutus-background">
  <video autoPlay muted loop playsInline className="aboutus-video">
    <source src={`${process.env.PUBLIC_URL}/sarawak.mp4`} type="video/mp4" />
    Your browser does not support the video tag.
  </video>

  <div className="aboutus-overlay" />
    <div className="about-container">
      {/* About Section */}
      <section
        className={`fade-section ${visibleSections["intro"] ? 'fade-in' : ''}`}
        data-id="intro"
        ref={el => sectionsRef.current[0] = el}
      >
        <h1 className="about-title">
          {t('about.title')} <span className="sarawak">{t('about.sarawak')}</span><span className="sense">{t('about.sense')}</span>
        </h1>
        <p className="about-paragraph">
          {t('about.paragraph1')}
        </p>
        <p className="about-paragraph">
          {t('about.paragraph2')}
        </p>

        <div className="about-images-stack">
          <img src="/aboutss2.png" alt="Sarawak flag" className="flag-layer" />
          <img src="/aboutss1.png" alt="Chill Guys figure" className="figure-layer" />
        </div>
      </section>

      <section
  className={`fade-section ${visibleSections["who"] ? 'fade-in' : ''}`}
  data-id="who"
  ref={el => sectionsRef.current[1] = el}
>
  <div className="who-wrapper">
    {/* LEFT: Text */}
    <div className="who-text">
      <h2 className="who-title">{t('about.whoWeAre')}</h2>
      <p className="who-intro">
        {t('about.paragraph3')}
      </p>

      <div className="member-info-block">
        <p><span className="bold-name">Aleef Danial</span>{t('about.aleef_role')}<br />
          {t('about.aleef_description')}
        </p>
        <p><span className="bold-name">Azariena</span>{t('about.azariena_role')}<br />
          {t('about.azariena_description')}
        </p>
        <p><span className="bold-name">Nur Zafirah Hanan</span>{t('about.nurzafirah_role')}<br />
          {t('about.nurzafirah_description')}
        </p>
      </div>
    </div>

    {/* RIGHT: Images stacked */}
    <div className="who-images">
      <div className="member-stack">
        <img src="/aleefdanial.png" alt="Aleef Danial" className="member-photo" />
        <img src="/backend.png" alt="Backend Symbol" className="role-icon" />
      </div>
      <div className="member-stack">
        <img src="/azariena.png" alt="Azariena" className="member-photo" />
        <img src="/frontend.png" alt="Frontend Symbol" className="role-icon" />
      </div>
      <div className="member-stack">
        <img src="/nurzafirahhanan.png" alt="Nur Zafirah Hanan" className="member-photo" />
        <img src="/midend.png" alt="Midend Symbol" className="role-icon" />
      </div>
    </div>
  </div>
</section>

      {/* Mission & Vision */}
      <section
        className={`fade-section ${visibleSections["mission"] ? 'fade-in' : ''} mission-vision-section`}
        data-id="mission"
        ref={el => sectionsRef.current[2] = el}
      >
        <div className="mission-box">
          <img src="/ourmission.png" alt="Our Mission Icon" className="mv-icon floating" />
          <h3>{t('about.ourMission')}</h3>
          <p>{t('about.missionParagraph')}</p>
        </div>
        <div className="vision-box">
          <img src="/ourvision.png" alt="Our Vision Icon" className="mv-icon floating" />
          <h3>{t('about.ourVision')}</h3>
          <p>{t('about.visionParagraph')}</p>
        </div>
      </section>
    </div>
    </div>
  );
};

export default AboutUs;
