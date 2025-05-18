import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './FAQ.css';

const FAQItem = ({ index }) => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);
  const [height, setHeight] = useState(0);

  const toggle = () => setIsOpen((prev) => !prev);

  useEffect(() => {
    if (isOpen) {
      setHeight(contentRef.current.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [isOpen]);

  const question = t(`faq.questions.${index}.question`);
  const answerLines = t(`faq.questions.${index}.answer`, { returnObjects: true });

  return (
    <div className="faq-item">
      <button
        className={`faq-question ${isOpen ? 'active' : ''}`}
        onClick={toggle}
      >
        {question}
      </button>
      <div className="faq-answer-wrapper" style={{ maxHeight: `${height}px` }}>
        <div className="faq-answer" ref={contentRef}>
          {Array.isArray(answerLines)
            ? answerLines.map((line, i) => <p key={i}>{line}</p>)
            : <p>{answerLines}</p>}
        </div>
      </div>
    </div>
  );
};

const FAQ = () => {
  const { t } = useTranslation();
  const helpBoxRef = useRef();
  const [inView, setInView] = useState(false);
  const totalFAQs = t('faq.questions', { returnObjects: true }).length;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (helpBoxRef.current) {
      observer.observe(helpBoxRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className="faq-background"
      style={{
        background: `url(${process.env.PUBLIC_URL}/sarawakphoto.jpg) no-repeat center center fixed`,
        backgroundSize: 'cover',
        minHeight: '100vh',
        position: 'relative',
      }}
    >
      <div className="faq-overlay" />
      <div className="faq-container">
        <h1>{t('faq.title')}</h1>
        <div className="faq-list">
          {[...Array(totalFAQs)].map((_, i) => (
            <FAQItem key={i} index={i} />
          ))}
        </div>

        <div
          ref={helpBoxRef}
          className={`faq-help-box ${inView ? 'fade-in' : ''}`}
        >
          <h2>{t('faq.notWhatYoureLookingFor')}</h2>
          <p>
            {t('faq.feedback')}{' '}
            <a
              href="https://forms.gle/YWTNFAtxHKU1RABn8"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t('faq.feedbackLink')}
            </a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FAQ;