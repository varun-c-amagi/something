import React, { FC, useState } from 'react';
import clsx from 'clsx';
import useTimeout from '../../hooks/useTimeout';
import styles from './styles.module.scss';
import { Chip } from '../shared/Chip/Chip';

interface Props {
  content: string[];
}

const steps = [
  { name: 'show-active-content' },
  { name: 'slide-other-contents-down' },
  { name: 'change-active-content' },
  { name: 'slide-contents-left' },
  { name: 'slide-other-contents-up' },
];

function useCurrentStep() {
  const [currentStep, setCurrentStep] = useState(0);
  useTimeout(() => {
    setCurrentStep(prevStep => (prevStep + 1) % steps.length);
  }, 2000);
  return currentStep;
}

export const ChangeActiveContent: FC<Props> = props => {
  const currentStep = useCurrentStep();
  return (
    <div className={clsx(styles.changeActiveContent)}>
      {props.content.map((content, index) => (
        <Chip
          key={content}
          active={
            (index === 0 && currentStep <= 1) ||
            (index === 1 && currentStep >= 2)
          }
          className={clsx({
            [styles.item]: true,
            [styles.slideDown]: currentStep > 0,
            [styles.slideContentsLeft]: currentStep >= 3,
            [styles.slideOtherContentsUp]: index !== 1 && currentStep === 4,
          })}
        >
          {content}
        </Chip>
      ))}
    </div>
  );
};
