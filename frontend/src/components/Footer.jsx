import React from 'react';
import { useTranslation } from 'react-i18next';
import './Footer.css';

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="custom-footer">
      <div className="footer-left">
        <img src="/sarawaksense-logo.png" alt="SarawakSense Logo" className="footer-logo" />
        <h3>{t('footer.contactUs')}</h3>
        <p>{t('footer.line')}<br />012-345 6789</p>
        <p>{t('footer.email')}<br />abcdefg@gmail.com</p>
        <p>1, Jalan University, 96000<br />Sibu, Sarawak, Malaysia</p>
      </div>

      <div className="footer-divider" />

      <div className="footer-right">
        <h3>{t('footer.specialThanks')}</h3>
        <div className="thanks-logos">
          <img src="/uts.png" alt="UTS" />
          <img src="/myEQMS.png" alt="EQMS" />
          <img src="/aqicn.png" alt="Cloud" />
          <img src="/pngtree.png" alt="Pngtree" />
        </div>
        <p className="footer-credit">{t('footer.credit')}</p>
      </div>
    </footer>
  );
};

export default Footer;