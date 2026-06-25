import { useEffect, useState } from "react";
import { onAuthStateChanged, signOut as firebaseSignOut } from "firebase/auth";
import HomePage from "./components/HomePage";
import Quiz from "./components/Quiz";
import Results from "./components/Results";
import AboutSection from "./components/AboutSection";
import SchemesPage from "./components/SchemesPage";
import AuthPage from "./components/AuthPage";
import { matchSchemes } from "./data/schemes";
import { auth } from "./firebase";

const VIEWS = {
  HOME:    "home",
  QUIZ:    "quiz",
  RESULTS: "results",
  ABOUT:   "about",
  SCHEMES: "schemes",
  AUTH:    "auth",
};

function formatFirebaseUser(firebaseUser) {
  if (!firebaseUser) return null;

  const provider = firebaseUser.providerData?.some(
    (providerData) => providerData.providerId === "google.com"
  )
    ? "Google"
    : "Email";

  return {
    uid: firebaseUser.uid,
    name:
      firebaseUser.displayName ||
      firebaseUser.email?.split("@")[0] ||
      "Student",
    email: firebaseUser.email,
    avatar: firebaseUser.photoURL,
    provider,
  };
}

function AuthLoadingScreen() {
  return (
    <div className="min-h-screen bg-sg-dark flex items-center justify-center px-5">
      <div className="text-center">
        <div className="w-10 h-10 bg-sg-blue flex items-center justify-center mx-auto mb-4">
          <span className="text-white font-display font-black text-lg leading-none">S</span>
        </div>
        <p className="text-gray-400 text-sm font-semibold">Loading…</p>
      </div>
    </div>
  );
}

export default function App() {
  const [view, setView]           = useState(VIEWS.HOME);
  const [results, setResults]     = useState([]);
  const [answers, setAnswers]     = useState({});
  const [authMode, setAuthMode]   = useState("login");
  const [postAuthView, setPostAuthView] = useState(VIEWS.HOME);
  const [user, setUser]           = useState(null);
  const [authReady, setAuthReady] = useState(false);

  useEffect(() => {
    if (!auth) {
      setAuthReady(true);
      return undefined;
    }

    return onAuthStateChanged(auth, (firebaseUser) => {
      setUser(formatFirebaseUser(firebaseUser));
      setAuthReady(true);
    });
  }, []);

  function go(target) {
    setView(target);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function openAuth(mode, redirectTo = VIEWS.HOME) {
    setAuthMode(mode);
    setPostAuthView(redirectTo);
    go(VIEWS.AUTH);
  }

  function requireAuth(redirectTo) {
    if (user) {
      go(redirectTo);
      return;
    }
    openAuth("login", redirectTo);
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

  function handleAuthSuccess(profile) {
    setUser(profile);
    go(postAuthView);
  }

  async function handleSignOut() {
    if (auth) {
      await firebaseSignOut(auth);
    }
    setUser(null);
    setAuthMode("login");
    go(VIEWS.HOME);
  }

  if (!authReady) {
    return <AuthLoadingScreen />;
  }

  return (
    <>
      {view === VIEWS.HOME && (
        <HomePage
          onStart={() => requireAuth(VIEWS.QUIZ)}
          onAbout={() => go(VIEWS.ABOUT)}
          onSchemes={() => go(VIEWS.SCHEMES)}
          onLogin={() => openAuth("login", VIEWS.HOME)}
          onSignup={() => openAuth("signup", VIEWS.HOME)}
          onSignOut={handleSignOut}
          user={user}
        />
      )}

      {view === VIEWS.QUIZ && user && (
        <Quiz
          onComplete={handleQuizComplete}
          onBack={() => go(VIEWS.HOME)}
        />
      )}

      {view === VIEWS.RESULTS && user && (
        <Results
          results={results}
          answers={answers}
          onRestart={handleRestart}
          onBack={() => go(VIEWS.QUIZ)}
        />
      )}

      {view === VIEWS.ABOUT && (
        <AboutSection
          onBack={() => go(VIEWS.HOME)}
          onStart={() => requireAuth(VIEWS.QUIZ)}
        />
      )}

      {view === VIEWS.SCHEMES && (
        <SchemesPage
          onBack={() => go(VIEWS.HOME)}
          onStart={() => requireAuth(VIEWS.QUIZ)}
        />
      )}

      {view === VIEWS.AUTH && (
        <AuthPage
          mode={authMode}
          onModeChange={setAuthMode}
          onBack={() => go(VIEWS.HOME)}
          onAuthSuccess={handleAuthSuccess}
        />
      )}
    </>
  );
}
