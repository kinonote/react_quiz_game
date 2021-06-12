import QuizList from "./components/QuizList";
import QuizButton from "./components/QuestionButton";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Image } from "react-bootstrap";
import topImage from "./doraemon.PNG";
const App = () => {
  return (
    <div className="App">
      <Image src={topImage} fluid thumbnail />
      <QuizList />
      <QuizButton />
    </div>
  );
};

export default App;
