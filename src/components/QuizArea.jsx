import React, { useCallback, useRef, useState } from "react";
import Question from "./Question";
import QUESTIONS from "../questions";
import Summary from "./Summary";

function QuizArea() {
  const [userAnswer, setUserAnswer] = useState([]);
  const activeIndex = userAnswer.length;
  const isQuizEnd = activeIndex === QUESTIONS.length;

  const handleAnswerClick = useCallback(function handleAnswerClick(answer) {
    setUserAnswer((prevAnswers) => [...prevAnswers, answer]);
    console.log(answer);
  }, []);

  const handleSkipAnswer = useCallback(
    () => handleAnswerClick(null),
    [handleAnswerClick]
  );

  const handleTryAgain = () => {
    setUserAnswer([]);
  }

  if (isQuizEnd) {
    return (
      <Summary  userAnswers={userAnswer} onRestart = {handleTryAgain}/>
    );
  }

  return (
    <div id="quiz">
      <Question
        onSelectedAnswer={handleAnswerClick}
        onSkip={handleSkipAnswer}
        key={activeIndex}
        index={activeIndex}
      />
    </div>
  );
}

export default QuizArea;
