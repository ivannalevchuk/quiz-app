function AnswerList({ answers, onSelect }) {
  const shuffledAnswers = answers.sort(() => Math.random() - 0.5);
  return (
    <ul id="answers">
      {shuffledAnswers.map((answer, id) => {
        return (
          <li className="answer" key={id}>
            <button onClick={() => onSelect(answer)}>{answer}</button>
          </li>
        );
      })}
    </ul>
  );
}

export default AnswerList;
