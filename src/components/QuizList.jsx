import { useState } from "react";
import "../App.css";

const QuizList = () => {
  const onClickb2 = () => {
    alert();
  };
  const [quiz, setQuiz] = useState(100);

  return (
    <div className="App">
      <h1>テスト</h1>
      <button onClick={onClickb2}>{quiz}</button>
    </div>
  );
};

export default QuizList;
