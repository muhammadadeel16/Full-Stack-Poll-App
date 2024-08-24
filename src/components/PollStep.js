import React from 'react';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';

const PollStep = ({ question, isActive, onSelect, selectedAnswer }) => {
  return (
    <div className={`poll-step ${isActive ? 'active' : ''}`}>
      <div className="question-title">
        <h2>{question.title}</h2>
      </div>
      <div className="options">
        {question.options.map(option => (
          <div
            key={option.label}
            className={`option ${selectedAnswer === option.label ? 'selected' : ''}`}
            onClick={() => onSelect(option.label)}
          >
            {option.icon}
            <span className="hover-label">{option.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PollStep;
