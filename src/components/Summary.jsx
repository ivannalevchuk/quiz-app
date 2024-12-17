import completeImg from "../assets/quiz-complete.png";
import QUESTIONS from "../questions";

function Summary({ userAnswers, onRestart }) {
  const correctAnswers = userAnswers.filter(
    (answer, index) => answer === QUESTIONS[index].answers[0]
  );

  const score = Math.round ((correctAnswers.length / QUESTIONS.length) * 100);

  return (
    <div id="summary">
      <img src={completeImg} alt="Completed quiz!" />
      <h2>Quiz is over!</h2>
      <div id="summary-stats">
        <p>
          You answered <strong>{correctAnswers.length}</strong> out of{" "}
          <strong>{QUESTIONS.length}</strong> questions correctly!
        </p>
        <p>
          <span className="text">Score:</span>
          <span className="number">{score}%</span>
        </p>
      </div>
      <ol>
        {userAnswers.map((answer, index) => {
          let cssClass = "user-answer";
          if (answer === QUESTIONS[index].answers[0]) {
            cssClass += " correct";
          } else {
            cssClass += " wrong";
          }
          return (
            <li key={index}>
              <h3>{index + 1}</h3>
              <p className="question">{QUESTIONS[index].text}</p>
              <p className={cssClass}>{answer ?? "Skipped"}</p>
            </li>
          );
        })}
      </ol>
      <button id="try-again" onClick = {onRestart}>Try again</button>
    </div>
  );
}

export default Summary;
