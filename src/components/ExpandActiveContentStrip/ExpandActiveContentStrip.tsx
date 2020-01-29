import React, { FC, useState } from 'react';

import styles from './styles.module.scss';
import { Chip } from '../shared/Chip/Chip';
import useTimeout from '../../hooks/useTimeout';
import clsx from 'clsx';

interface Props {
  activeContent: string;
}

export const ExpandActiveContentStrip: FC<Props> = props => {
  const [step, setStep] = useState(0);

  useTimeout(() => {
    setStep(prevStep => prevStep + 1);
  }, 1000);

  return (
    <div className={styles.wrapper}>
      <Chip active>{props.activeContent}</Chip>
      <div
        className={clsx(
          styles.emptyStrip,
          step === 1 && styles.expandEmptyStrip
        )}
      ></div>
    </div>
  );
};
