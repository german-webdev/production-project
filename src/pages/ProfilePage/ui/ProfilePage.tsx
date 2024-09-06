import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import styles from './ProfilePage.module.scss';
import DynamicModuleLoader, { type ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { profileReducer } from 'entities/Profile';

interface ProfilePageProps {
  className?: string
}

const reducers: ReducersList = {
  profile: profileReducer
};

const ProfilePage = ({ className }: ProfilePageProps) => {
  const { t } = useTranslation();

  return (
    <DynamicModuleLoader
      reducers={reducers}
      removeAfterUnmount
    >
      <div className={classNames(styles.profile, {}, [className])}>
        {t('Profile Page')}
      </div>
    </DynamicModuleLoader>
  );
};

export default ProfilePage;
