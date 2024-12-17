import React, { useCallback, useRef, useState } from "react";
import Question from "./Question";
import QUESTIONS from "../questions";
import completeImg from "../assets/quiz-complete.png";

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

  if (isQuizEnd) {
    return (
      <div id="summary">
        <img src={completeImg} alt="Completed quiz!" />
        <h2>Quiz is over!</h2>
        <h2>
          You answered{" "}
          {
            userAnswer.filter(
              (answer, index) => answer === QUESTIONS[index].correct
            ).length
          }{" "}
          out of {QUESTIONS.length} questions correctly!
        </h2>
      </div>
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
