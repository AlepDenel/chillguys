import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import '../style.css';

const Header = () => {
  const { i18n, t } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <nav className="header">
      <div className="logo-section">
        <img src="/sarawaksense-logo.png" alt="SarawakSense Logo" className="logo" />
      </div>
      <ul className="nav-links">
        <li><Link to="/">{t('main')}</Link></li>
        <li><Link to="/about">{t('aboutus')}</Link></li>
        <li><Link to="/faq">{t('faqtitle')}</Link></li>
        <li>
        <select className="lang-btn" onChange={(e) => changeLanguage(e.target.value)} value={i18n.language}>
  <option value="en">🇬🇧 English</option>
  <option value="ms">🇲🇾 Melayu</option>
  <option value="zh">🇨🇳 中文</option>
  <option value="ar">🇸🇦 العربية</option>
  <option value="es">🇪🇸 Español</option>
  <option value="fr">🇫🇷 Français</option>
  <option value="hi">🇮🇳 हिन्दी</option>
  <option value="ja">🇯🇵 日本語</option>
  <option value="ko">🇰🇷 한국어</option>
  <option value="th">🇹🇭 ไทย</option>
</select>
        </li>
      </ul>
    </nav>
  );
};

export default Header;