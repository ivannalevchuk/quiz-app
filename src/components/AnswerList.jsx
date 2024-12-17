import { useRef } from "react";

function AnswerList({ answers, onSelect, checkAnswer, selectedAnswer }) {
  const shuffledAnswers = useRef();
  if (!shuffledAnswers.current) {
    console.log("Shuffling answers");
    shuffledAnswers.current = [...answers].sort(() => Math.random() - 0.5);
  }
  console.log("AnswerList rendered");
  return (
    <ul id="answers">
      {shuffledAnswers.current.map((answer, id) => {
        const isSelected = selectedAnswer === answer;
        let cssClass = "";
        if (checkAnswer === "answered" && isSelected) {
          cssClass = "selected";
        }
        if (
          (checkAnswer === "correct" || checkAnswer === "wrong") &&
          isSelected
        ) {
          cssClass = checkAnswer;
        }
        return (
          <li className="answer" key={id}>
            <button
              onClick={() => onSelect(answer)}
              className={cssClass}
              disabled={checkAnswer !== ""}
            >
              {answer}
            </button>
          </li>
        );
      })}
    </ul>
  );
}

export default AnswerList;
