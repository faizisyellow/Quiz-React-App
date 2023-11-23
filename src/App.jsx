// App.jsx
import { useEffect, useState } from "react";
import Quiz from "./components/Quiz/Quiz";

function App() {
  const [questions, setQuestions] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://opentdb.com/api.php?amount=5&category=21");
        const data = await response.json();
        const formattedQuestions = data.results.map((question) => ({
          question: question.question,
          choices: [...question.incorrect_answers, question.correct_answer],
          correctAnswer: question.correct_answer,
        }));
        console.log(formattedQuestions);
        setQuestions(formattedQuestions);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);
  console.log(questions);
  return <Quiz questions={questions} />;
}

export default App;
