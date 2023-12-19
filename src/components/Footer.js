import React from 'react';
import { useTranslation } from 'react-i18next';
const Footer = () => {
  const { t } = useTranslation();
  return (
    <div className='footer'>
    <p>
        {t("allrights")}
    </p>
    </div>
  );
};

export default Footer;
