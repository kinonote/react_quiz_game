// import QuizButton from "./components/QuestionButton";
import "bootstrap/dist/css/bootstrap.min.css";
import { Image } from "react-bootstrap";
import topImage from "./doraemon.PNG";
import "./App.css";
import { QuizList } from "./components/QuizList";
// import { useState } from "react";

const App = () => {
  const quiz = [
    {
      question: "ドラえもんが２０世紀に来て、初めて食べた食べ物は何？",
      answers: ["栗まんじゅう", "お餅", "どら焼き", "焼き芋"],
      correct: "お餅",
    },
    {
      question: "のび太が初めて使ったドラえもんの道具は何？",
      answers: ["どこでもドア", "タケコプター", "タイムマシン", "ヘリトンボ"],
      correct: "ヘリトンボ",
    },
    {
      question: "しずかの初期設定の名前は？",
      answers: ["静香", "しず", "しず美", "しず子"],
      correct: "しず子",
    },
    {
      question: "のび太が睡眠に落ちる早さは何秒？",
      answers: ["0.093秒", "0.93秒", "1.93秒", "2.93秒"],
      correct: "0.93秒",
    },
    {
      question: "ドラえもんの座高は？",
      answers: ["129.3cm", "90cm", "100cm", "110cm"],
      correct: "100cm",
    },
  ];

  //ランダムに問題の順番が変わる
  // quiz.sort(() => 0.5 - Math.random());
  Array.prototype.shuffle = function () {
    this.sort(() => Math.random() - 0.5);
  };
  quiz.shuffle();

  const quizLength = quiz.length;
  let quizIndex = 0;
  let score = 0;

  const $button = document.querySelectorAll("button");
  const buttonLength = $button.length;
  //クイズの問題文、選択肢を定義
  const setupQuiz = () => {
    document.querySelector("#js-question").textContent =
      quiz[quizIndex].question;

    let buttonIndex = 0;

    while (buttonIndex < buttonLength) {
      $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
      buttonIndex++;
    }
  };

  const clickHandler = (e) => {
    if (quiz[quizIndex].correct === e.target.textContent) {
      window.alert("正解！ (*ゝ｀ω・)σ");
      score++;
    } else {
      window.alert("不正解！ °(°`ω´ °)°｡");
    }
    quizIndex++;
    if (quizIndex < quizLength) {
      //問題数がまだあればこちらを実行
      setupQuiz();
    } else {
      //問題数がもうなければこちらを実行
      window.alert(
        "終了！あなたの正解数は" +
          score +
          "/" +
          quizLength +
          "です! (*σゝ｀ω・)σ"
      );
    }
  };
  //ボタンをクリックしたら正誤判定
  let handleIndex = 0;

  while (handleIndex < buttonLength) {
    $button[handleIndex].addEventListener("click", (e) => {
      clickHandler(e);
    });
    handleIndex++;
  }
  return (
    <div className="App">
      <QuizList />

      <Image src={topImage} fluid />
      {/* <QuizButton value={() => setupQuiz} /> */}
      <div className="container"></div>
      <div className="d-flex justify-content-center">
        <button
          onClick={() => setupQuiz()}
          type="button"
          className="mx-2 btn btn-primary"
        >
          選択肢1
        </button>
        <button
          onClick={() => setupQuiz()}
          type="button"
          className="mx-2 btn btn-primary"
        >
          選択肢2
        </button>
        <button
          onClick={() => setupQuiz()}
          type="button"
          className="mx-2 btn btn-primary"
        >
          選択肢3
        </button>
        <button
          onClick={() => setupQuiz()}
          type="button"
          className="mx-2 btn btn-primary"
        >
          選択肢4
        </button>
      </div>
    </div>
  );
};

export default App;
