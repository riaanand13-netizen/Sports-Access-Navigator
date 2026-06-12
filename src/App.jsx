import { useState } from "react";
import HomePage from "./components/HomePage";
import Quiz from "./components/Quiz";
import Results from "./components/Results";
import AboutSection from "./components/AboutSection";
import SchemesPage from "./components/SchemesPage";
import { matchSchemes } from "./data/schemes";

const VIEWS = {
  HOME:    "home",
  QUIZ:    "quiz",
  RESULTS: "results",
  ABOUT:   "about",
  SCHEMES: "schemes",
};

export default function App() {
  const [view, setView]       = useState(VIEWS.HOME);
  const [results, setResults] = useState([]);
  const [answers, setAnswers] = useState({});

  function go(target) {
    setView(target);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function handleQuizComplete(quizAnswers) {
    const matched = matchSchemes(quizAnswers);
    setAnswers(quizAnswers);
    setResults(matched);
    go(VIEWS.RESULTS);
  }

  function handleRestart() {
    setResults([]);
    setAnswers({});
    go(VIEWS.HOME);
  }

  return (
    <>
      {view === VIEWS.HOME && (
        <HomePage
          onStart={()   => go(VIEWS.QUIZ)}
          onAbout={()   => go(VIEWS.ABOUT)}
          onSchemes={()  => go(VIEWS.SCHEMES)}
        />
      )}

      {view === VIEWS.QUIZ && (
        <Quiz
          onComplete={handleQuizComplete}
          onBack={() => go(VIEWS.HOME)}
        />
      )}

      {view === VIEWS.RESULTS && (
        <Results
          results={results}
          answers={answers}
          onRestart={handleRestart}
          onBack={() => go(VIEWS.QUIZ)}
        />
      )}

      {view === VIEWS.ABOUT && (
        <AboutSection
          onBack={()  => go(VIEWS.HOME)}
          onStart={() => go(VIEWS.QUIZ)}
        />
      )}

      {view === VIEWS.SCHEMES && (
        <SchemesPage
          onBack={()  => go(VIEWS.HOME)}
          onStart={() => go(VIEWS.QUIZ)}
        />
      )}
    </>
  );
}
