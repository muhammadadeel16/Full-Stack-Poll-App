import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';

export const questions = [
  {
    title: 'How was your week overall?',
    options: [
      { label: 'Good', icon: <ThumbUpIcon /> },
      { label: 'Neutral', icon: <QuestionMarkIcon /> },
      { label: 'Bad', icon: <ThumbDownIcon /> }
    ]
  },
  {
    title: 'How productive were you this week?',
    options: [
      { label: 'Very Productive', icon: <ThumbUpIcon /> },
      { label: 'Average', icon: <QuestionMarkIcon /> },
      { label: 'Not Productive', icon: <ThumbDownIcon /> }
    ]
  },
  // {
  //   title: 'How did you feel about your work-life balance?',
  //   options: [
  //     { label: 'Balanced', icon: <ThumbUpIcon /> },
  //     { label: 'Neutral', icon: <QuestionMarkIcon /> },
  //     { label: 'Unbalanced', icon: <ThumbDownIcon /> }
  //   ]
  // },
  // {
  //   title: 'How satisfied are you with your current project?',
  //   options: [
  //     { label: 'Satisfied', icon: <ThumbUpIcon /> },
  //     { label: 'Neutral', icon: <QuestionMarkIcon /> },
  //     { label: 'Dissatisfied', icon: <ThumbDownIcon /> }
  //   ]
  // }
];
