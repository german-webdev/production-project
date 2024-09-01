import { useTranslation } from 'react-i18next';
import { useState } from 'react';

const MainPage = () => {
  const { t } = useTranslation('main');

  return (
    <div>
      {t('Главная страница')}
    </div>
  );
};

export default MainPage;
