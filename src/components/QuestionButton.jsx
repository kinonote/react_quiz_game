const QuizButton = () => {
  const onClickb = () => {
    alert();
  };
  return (
    <div className="App">
      <div class="d-flex justify-content-center">
        <button onClick={onClickb} type="button" class="btn btn-primary">
          選択肢1
        </button>
        <button type="button" class="ml-1 btn btn-primary">
          選択肢2
        </button>
        <button type="button" class="ml-1 btn btn-primary">
          選択肢3
        </button>
        <button type="button" class="ml-1 btn btn-primary">
          選択肢4
        </button>
      </div>
    </div>
  );
};

export default QuizButton;
