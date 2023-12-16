'use client';

import { useTranslation } from 'react-i18next';

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <select
      value={i18n.language}
      onChange={(e) => changeLanguage(e.target.value)}
      style={{ background: 'transparent', color: '#fff' }}
    >
      <option value="fr">Français</option>
      <option value="en">English</option>
    </select>
  );
};

export default LanguageSelector;
