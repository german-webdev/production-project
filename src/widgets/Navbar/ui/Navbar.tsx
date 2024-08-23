import { classNames } from 'shared/lib/classNames/classNames';
import styles from './Navbar.module.scss';
import { useTranslation } from 'react-i18next';
import { Modal } from 'shared/ui/Modal/Modal';
import { useCallback, useState } from 'react';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';

interface NavbarProps {
  className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);

  const onToggleModal = useCallback(() => {
    setIsAuthModal((prev) => !prev);
  }, [])

  return (
    <div className={classNames(styles.navbar, {}, [className])}>
      <Button
        className={styles.links}
        theme={ButtonTheme.CLEAR_INVERTED}
        onClick={onToggleModal}
      >
        {t('Войти')}
      </Button>
      <Modal isOpen={isAuthModal} onClose={() => { setIsAuthModal(false); }}>
        {/* eslint-disable-next-line */}
        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Deserunt quisquam numquam fugit tempore illo neque eaque,
        dolor distinctio voluptas iste reprehenderit vel pariatur omnis alias exercitationem et at repudiandae! Rem.
      </Modal>
    </div>
  );
};
