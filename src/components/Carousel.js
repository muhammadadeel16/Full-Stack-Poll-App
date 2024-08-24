import React, { useState } from 'react';
import PollStep from './PollStep';

const Carousel = ({ questions, answers, handleAnswer }) => {
  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => {
    setCurrentStep(prev => (prev + 1 < questions.length ? prev + 1 : prev));
  };

  const handlePrev = () => {
    setCurrentStep(prev => (prev > 0 ? prev - 1 : prev));
  };

  return (
    <div className="carousel">
      <div className="carousel-content" style={{ transform: `translateY(-${currentStep * 100}%)` }}>
        {questions.map((question, index) => (
          <PollStep
            key={index}
            question={question}
            step={index}
            isActive={index === currentStep}
            onSelect={(answer) => {
              handleAnswer(index, answer);
              handleNext();
            }}
            selectedAnswer={answers[index]}
          />
        ))}
      </div>
      <div className="dots-container">
        {questions.map((_, index) => (
          <div
            key={index}
            className={`dot ${currentStep === index ? 'active' : ''}`}
            onClick={() => setCurrentStep(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
