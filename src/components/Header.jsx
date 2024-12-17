import  logoImg  from "../assets/quiz-logo.png";

function Header() {
  return (
    <header>
      <img src={logoImg} alt="Quiz" />
      <h1>React Quizz</h1>
    </header>
  );
}

export default Header;
