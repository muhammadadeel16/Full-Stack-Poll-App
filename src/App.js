import React, { useState } from 'react';
import Carousel from './components/Carousel';
import { questions } from './data/questions';

function App() {
  const [answers, setAnswers] = useState({});

  const handleAnswer = (step, answer) => {
    setAnswers(prevAnswers => ({ ...prevAnswers, [step]: answer }));
  };

  return (
    <div className="app-container">
      <Carousel
        questions={questions}
        answers={answers}
        handleAnswer={handleAnswer}
      />
    </div>
  );
}

export default App;
