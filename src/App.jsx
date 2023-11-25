// App.jsx
import { useEffect, useState } from "react";
import SignIn from "./components/Auth/SignIn";
import Quiz from "./components/Quiz/Quiz";
import SignUp from "./components/Auth/SignUp";
import AuthDetails from "./components/AuthDetails";
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from "react-router-dom";
import { auth } from "./firebase";

function App() {
  const [questions, setQuestions] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://opentdb.com/api.php?amount=5&category=11");
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

  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={currentUser ? <Quiz questions={questions} /> : <Navigate to={"/login"} />} />
        <Route path="/login" element={currentUser ? <Navigate to={"/"} /> : <SignIn />} />
        <Route path="/signup" element={currentUser ? <Navigate to={"/"} /> : <SignUp />} />
        <Route
          path="/auth"
          element={
            <Link to="/auth">
              <AuthDetails />
            </Link>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
