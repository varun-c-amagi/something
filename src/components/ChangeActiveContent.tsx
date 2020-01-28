import React, { FC, useState, useEffect } from "react";

interface Props {
  content: string[];
}

const steps = [
  { name: "show-active-content", time: 2000 },
  { name: "slide-other-contents-down", time: 2000 },
  { name: "change-active-content", time: 2000 },
  { name: "slide-contents-left", time: 2000 },
  { name: "slide-other-contents-up", time: 2000 }
];

function useCurrentStep() {
  const [currentStep, setCurrentStep] = useState(0);
  function nextAnimation() {
    setCurrentStep((currentStep + 1) % steps.length);
    setTimeout(() => {
      nextAnimation();
    }, steps[currentStep].time);
  }
  useEffect(() => {
    nextAnimation();
  }, []);
  return currentStep;
}

export const ChangeActiveContent: FC<Props> = props => {
  const [currentStep, setCurrentStep] = useState(0);
  if (currentStep === 0) {
    return (
      <div className="content-wrapper">
        <div className="item">{props.content[0]}</div>
      </div>
    );
  }
  if (currentStep === 1) {
    return;
  }
  return null;
  // return (
  //   <div className="content-wrapper">
  //     {props.content.map(content => (
  //       <div className="item" key={content}>{content}</div>
  //     ))}
  //   </div>
  // );
};
