import { Input } from 'shared/ui/Input/Input';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

const MainPage = () => {
  const { t } = useTranslation('main');
  const [value, setValue] = useState('');

  const onChange = (value: string) => {
    setValue(value);
  };

  return (
    <div>
      {t('Главная страница')}
      <Input
        placeholder='Введите текст'
        value={value}
        onChange={onChange}/>
    </div>
  );
};

export default MainPage;
