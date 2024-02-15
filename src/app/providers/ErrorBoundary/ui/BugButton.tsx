import { classNames } from "shared/lib/classNames/classNames";
import { Button } from "shared/ui/Button/Button";
import styles from './BugButton.module.scss';
import { useEffect, useState } from "react";

interface BugButtonProps {
  className?: string
}

// Component for testing

export const BugButton = ({ className }: BugButtonProps) => {
  const [ error, setError ] = useState(false);
  const onThrowError = () => setError(true)

  useEffect(() => {
    if (error)
    throw new Error();
  }, [error])

  return (
    <Button 
      onClick={onThrowError}
      className={classNames(styles.bugButton, {}, [className])}>
      BREAK ME!
    </Button>
  );
};
