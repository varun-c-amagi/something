import React, { useEffect, useState } from 'react';
import './styles.scss';
import { ChangeActiveContent } from './components/ChangeActiveContent';

const content = [
  'LOTTERY',
  'FINANCE',
  'HEADLINES',
  'SPORTS',
  'MTA ALERTS',
  'WEATHER',
];

const steps = [
  'change-active-content',
  'slide-contents-left',
  'slide-non-active-contents-up',
  'expand-contents-data-strip',
  'start-sliding-content-data-up',
  'slide-contents-down',
];

function getCurrentComp(currentStep: number) {
  switch (currentStep) {
    case 0:
      return <ChangeActiveContent content={content}></ChangeActiveContent>;

    default:
      return null;
  }
}

const App: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     setCurrentStep(prevState => {
  //       return (prevState + 1) % steps.length;
  //     });
  //   }, 3000);
  //   return () => {
  //     clearTimeout(timeout);
  //   };
  // }, []);
  return (
    <div className="App">
      <div className="bar">{getCurrentComp(currentStep)}</div>
    </div>
  );
};

export default App;
