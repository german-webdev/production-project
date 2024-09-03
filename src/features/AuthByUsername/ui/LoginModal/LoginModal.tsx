import styles from './LoginModal.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/ui/Modal/Modal';
import { Suspense } from 'react';
import { LoginFormLazy } from '../LoginForm/LoginForm.async';
import { Spinner } from 'shared/ui/Spinner/Spinner';

interface LoginModalProps {
  className?: string
  isOpen: boolean
  onClose: () => void
}

export const LoginModal = ({ className, isOpen, onClose }: LoginModalProps) => {
  return (
    <Modal
      className={classNames(styles.loginModal, {}, [className])}
      isOpen={isOpen}
      onClose={onClose}
      lazy
    >
      <Suspense fallback={<Spinner />}>
        <LoginFormLazy />
      </Suspense>
    </Modal>
  );
};
