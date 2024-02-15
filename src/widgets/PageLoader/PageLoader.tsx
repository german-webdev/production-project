import { classNames } from 'shared/lib/classNames/classNames';
import styles from './PageLoader.module.scss';
import { Spinner } from '../../shared/ui/Spinner/Spinner';

interface PageLoader {
  className?: string
}

export const PageLoader = ({ className }: PageLoader) => {

  return (
    <div className={classNames(styles.pageLoader, {}, [className])}>
      <Spinner />
    </div>
  );
};
