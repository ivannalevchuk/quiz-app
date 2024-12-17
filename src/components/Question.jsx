import { useState } from "react";
import Timer from "./Timer";
import AnswerList from "./AnswerList";
import QUESTIONS from "../questions";

function Question({ index, onSelectedAnswer, onSkip }) {
  const [answer, setAnswer] = useState({
    selectedAnswer: "",
    isCorrect: null,
  });
  let timer = 15000;

  if (answer.selectedAnswer) {
    timer = 1000;
  }
  if (answer.isCorrect !== null) {
    timer = 2000;
  }
  function handleAnswer(answer) {
    setAnswer({
      selectedAnswer: answer,
      isCorrect: null,
    });

    setTimeout(() => {
      setAnswer({
        selectedAnswer: answer,
        isCorrect: answer === QUESTIONS[index].answers[0],
      });

      setTimeout(() => {
        onSelectedAnswer(answer);
      }, 2000);
    }, 1000);
  }

  let answerState = "";
  if (answer.selectedAnswer && answer.isCorrect !== null) {
    answerState = answer.isCorrect ? "correct" : "wrong";
  } else if (answer.selectedAnswer) {
    answerState = "answered";
  }

  return (
    <div id="question">
      <Timer
        time={timer}
        onTimeEnd={answer.selectedAnswer === "" ? onSkip : null}
        mode={answerState}
        key={timer}
      />
      <h2>{QUESTIONS[index].text}</h2>
      <AnswerList
        answers={QUESTIONS[index].answers}
        onSelect={handleAnswer}
        selectedAnswer={answer.selectedAnswer}
        checkAnswer={answerState}
      />
    </div>
  );
}

export default Question;
