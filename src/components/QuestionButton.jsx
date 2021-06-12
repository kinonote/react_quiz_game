import { Button } from "react-bootstrap";

const QuizButton = () => {
  const onClickb = () => {
    alert();
  };
  return (
    <div className="App">
      <div class="d-flex justify-content-center">
        <Button variant="primary" className="ml-1" onClick={onClickb}>
          選択肢1
        </Button>
        <Button variant="primary" className="ml-1">
          選択肢2
        </Button>
        <Button variant="primary" className="ml-1">
          選択肢3
        </Button>
        <Button variant="primary" className="ml-1">
          選択肢4
        </Button>
      </div>
    </div>
  );
};

export default QuizButton;
