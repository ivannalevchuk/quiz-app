import React, { useState } from "react";
import Question from "./Question";
import AnswerList from "./AnswerList";
import QUESTIONS from "../questions";
import completeImg from "../assets/quiz-complete.png";

function QuizArea(props) {
  const [userAnswer, setUserAnswer] = useState([]);

  const activeIndex = userAnswer.length;
  const isQuizEnd = activeIndex === QUESTIONS.length;

  function handleAnswerClick(answer) {
    setUserAnswer([...userAnswer, answer]);
    console.log(answer);
  }

  if (isQuizEnd) {
    return (
      <div id="summary">
        <img src = {completeImg} alt = "Completed quiz!"/>
        <h2>Quiz is over!</h2>
        <h2>
          You answered {userAnswer.filter((answer, index) => answer === QUESTIONS[index].correct).length} out of{" "}
          {QUESTIONS.length} questions correctly!
        </h2>
      </div>
    );
  }

  return (
    <div id="quiz">
      <Question questionName={QUESTIONS[activeIndex].text} />
      <AnswerList
        answers={QUESTIONS[activeIndex].answers}
        onSelect={handleAnswerClick}
      />
    </div>
  );
}

export default QuizArea;
