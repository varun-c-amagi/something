import React, { useState } from 'react';

import styles from './App.module.scss';
import { ChangeActiveContent } from './components/ChangeActiveContent/ChangeActiveContent';
import useTimeout from './hooks/useTimeout';
import { ExpandActiveContentStrip } from './components/ExpandActiveContentStrip/ExpandActiveContentStrip';

const content = [
  'LOTTERY',
  'FINANCE',
  'HEADLINES',
  'SPORTS',
  'MTA ALERTS',
  'WEATHER',
];

const steps = [
  { name: 'change-active-content', time: 10000 },
  { name: 'expand-contents-data-strip', time: 10000 },
  // { name: 'start-sliding-content-data-up' },
  // { name: 'slide-contents-down' },
];

function getCurrentComp(currentStep: number) {
  switch (steps[currentStep].name) {
    case 'change-active-content':
      return <ChangeActiveContent content={content} />;
    case 'expand-contents-data-strip':
      return <ExpandActiveContentStrip activeContent={content[1]} />;
    default:
      return null;
  }
}

function useCurrentStep() {
  const [currentStep, setCurrentStep] = useState(1);
  useTimeout(() => {
    setCurrentStep(prevStep => (prevStep + 1) % steps.length);
  }, steps[currentStep].time);
  return currentStep;
}

const App: React.FC = () => {
  const currentStep = useCurrentStep();
  return (
    <div className={styles.container}>
      <div className={styles.bar}>
        <div className="bar">{getCurrentComp(currentStep)}</div>
      </div>
    </div>
  );
};

export default App;
