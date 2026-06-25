import { useMemo, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { ArrowLeft, Lock, Mail, ShieldCheck, User } from "lucide-react";
import { auth, googleProvider } from "../firebase";

const AUTH_ERROR_MESSAGES = {
  "auth/email-already-in-use": "An account with this email already exists.",
  "auth/invalid-email": "Enter a valid email address.",
  "auth/invalid-credential": "Email or password is incorrect.",
  "auth/missing-password": "Enter your password.",
  "auth/operation-not-allowed": "This sign-in method is not available right now.",
  "auth/popup-closed-by-user": "Sign-in was cancelled. Please try again.",
  "auth/unauthorized-domain": "Sign-in is not available from this site.",
  "auth/weak-password": "Password must be at least 6 characters.",
  "auth/too-many-requests": "Too many attempts. Please wait a moment and try again.",
  "auth/network-request-failed": "Connection problem. Check your internet and try again.",
};

function getAuthErrorMessage(error) {
  return AUTH_ERROR_MESSAGES[error?.code] || "Something went wrong. Please try again.";
}

function toProfile(firebaseUser, provider, fallbackName) {
  return {
    uid: firebaseUser.uid,
    name:
      fallbackName ||
      firebaseUser.displayName ||
      firebaseUser.email?.split("@")[0] ||
    email: firebaseUser.email,
    avatar: firebaseUser.photoURL,
    provider,
  };
}

export default function AuthPage({
  mode,
  onModeChange,
  onBack,
  onAuthSuccess,
  requireAuth = false,
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formError, setFormError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isGoogleSubmitting, setIsGoogleSubmitting] = useState(false);

  const isSignup = mode === "signup";

  const copy = useMemo(
    () => ({
      eyebrow: isSignup ? "Signup" : "Login",
      title: isSignup ? "Create your account" : "Welcome back",
      body: isSignup
        ? "Sign up to search sports funding schemes and save your results."
        : "Log in to continue your sports funding search.",
      submit: isSignup ? "Sign Up" : "Log In",
      switchPrompt: isSignup ? "Already have an account?" : "New to Sports Access?",
      switchAction: isSignup ? "Log in" : "Create account",
    }),
    [isSignup]
  );

  function requireAuthReady() {
    if (auth) return true;

    setFormError("Sign-in is unavailable right now. Please try again later.");
    return false;
  }

  async function handleGoogleSignIn() {
    setFormError("");
    if (!requireAuthReady()) return;

    setIsGoogleSubmitting(true);
    try {
      const result = await signInWithPopup(auth, googleProvider);
      onAuthSuccess(toProfile(result.user, "Google"));
    } catch (error) {
      setFormError(getAuthErrorMessage(error));
    } finally {
      setIsGoogleSubmitting(false);
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setFormError("");
    if (!requireAuthReady()) return;

    const normalizedEmail = email.trim().toLowerCase();
    const cleanName = name.trim();

    if (!normalizedEmail || !password || (isSignup && !cleanName)) {
      setFormError("Please complete all required fields.");
      return;
    }

    if (password.length < 6) {
      setFormError("Password must be at least 6 characters.");
      return;
    }

    setIsSubmitting(true);

    try {
      if (isSignup) {
        const result = await createUserWithEmailAndPassword(
          auth,
          normalizedEmail,
          password
        );

        await updateProfile(result.user, { displayName: cleanName });
        onAuthSuccess(toProfile(result.user, "Email", cleanName));
        return;
      }

      const result = await signInWithEmailAndPassword(auth, normalizedEmail, password);
      onAuthSuccess(toProfile(result.user, "Email"));
    } catch (error) {
      setFormError(getAuthErrorMessage(error));
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="min-h-screen bg-sg-light">
      <header className="bg-sg-dark sticky top-0 z-40">
        <div className="max-w-5xl mx-auto px-5 sm:px-8 h-14 flex items-center justify-between gap-4">
          {!requireAuth && onBack ? (
            <button
              onClick={onBack}
              className="flex items-center gap-1.5 text-gray-400 hover:text-white text-sm font-semibold transition-colors"
            >
              <ArrowLeft size={16} />
              Back
            </button>
          ) : (
            <span className="w-12" aria-hidden="true" />
          )}
          <span className="font-display font-black text-white text-sm uppercase tracking-wider">
            {copy.eyebrow}
          </span>
          <span className="w-12" aria-hidden="true" />
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-5 sm:px-8 py-10 sm:py-14">
        <div className="grid lg:grid-cols-[0.95fr_1.05fr] bg-white border border-neutral-100 shadow-card-lg">
          <section className="bg-sg-dark p-8 sm:p-10 flex flex-col justify-between min-h-[360px] relative overflow-hidden">
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage:
                  "linear-gradient(#2563EB 1px, transparent 1px), linear-gradient(90deg, #2563EB 1px, transparent 1px)",
                backgroundSize: "42px 42px",
              }}
            />
            <div className="relative">
              <div className="inline-flex items-center gap-2 mb-5">
                <span className="w-2 h-2 rounded-full pulse-blue" />
                <span className="text-blue-300 text-xs font-bold uppercase tracking-widest">
                  Sports Access Navigator
                </span>
              </div>
              <h1 className="font-display font-black text-3xl sm:text-5xl text-white leading-none mb-5 text-balance">
                Sign in to find sports funding support
              </h1>
              <p className="text-gray-300 text-base leading-relaxed max-w-sm">
                A free student account lets you take the quiz, browse schemes, and return to your results anytime.
              </p>
            </div>
            <div className="relative grid gap-3 mt-8">
              {[
                "Secure student accounts",
                "Email and password sign-in",
                "Continue with Google",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-gray-300">
                  <ShieldCheck size={15} className="text-blue-300 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="p-6 sm:p-10">
            <div className="max-w-md mx-auto">
              <div className="mb-7">
                <div className="section-eyebrow">{copy.eyebrow}</div>
                <h2 className="font-display font-black text-sg-dark text-3xl mb-2">
                  {copy.title}
                </h2>
                <p className="text-gray-500 text-sm leading-relaxed">{copy.body}</p>
              </div>

              <button
                type="button"
                onClick={handleGoogleSignIn}
                disabled={isGoogleSubmitting}
                className="w-full flex items-center justify-center gap-3 py-3.5 border-2 border-neutral-200 hover:border-sg-blue hover:text-sg-blue font-bold text-sm transition-all mb-4 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                <span className="w-5 h-5 rounded-full border border-neutral-300 flex items-center justify-center font-black text-xs">
                  G
                </span>
                {isGoogleSubmitting ? "Connecting…" : "Continue with Google"}
              </button>

              <div className="section-divider my-6">
                <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">
                  Or use email
                </span>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {isSignup && (
                  <label className="block">
                    <span className="text-xs font-black uppercase tracking-widest text-gray-500 mb-1.5 block">
                      Student name
                    </span>
                    <div className="relative">
                      <User
                        size={16}
                        className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
                      />
                      <input
                        type="text"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                        className="w-full pl-10 pr-4 py-3 text-sm border-2 border-neutral-200 focus:border-sg-blue focus:outline-none font-medium"
                        placeholder="Your name"
                        autoComplete="name"
                      />
                    </div>
                  </label>
                )}

                <label className="block">
                  <span className="text-xs font-black uppercase tracking-widest text-gray-500 mb-1.5 block">
                    Email
                  </span>
                  <div className="relative">
                    <Mail
                      size={16}
                      className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
                    />
                    <input
                      type="email"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      className="w-full pl-10 pr-4 py-3 text-sm border-2 border-neutral-200 focus:border-sg-blue focus:outline-none font-medium"
                      placeholder="student@example.com"
                      autoComplete="email"
                    />
                  </div>
                </label>

                <label className="block">
                  <span className="text-xs font-black uppercase tracking-widest text-gray-500 mb-1.5 block">
                    Password
                  </span>
                  <div className="relative">
                    <Lock
                      size={16}
                      className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
                    />
                    <input
                      type="password"
                      value={password}
                      onChange={(event) => setPassword(event.target.value)}
                      className="w-full pl-10 pr-4 py-3 text-sm border-2 border-neutral-200 focus:border-sg-blue focus:outline-none font-medium"
                      placeholder="Minimum 6 characters"
                      autoComplete={isSignup ? "new-password" : "current-password"}
                    />
                  </div>
                </label>

                {formError && (
                  <div className="bg-red-50 border border-red-100 text-red-800 text-sm font-semibold px-4 py-3">
                    {formError}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full py-4 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Please wait…" : copy.submit}
                </button>
              </form>

              <div className="mt-6 text-center text-sm text-gray-500">
                {copy.switchPrompt}{" "}
                <button
                  type="button"
                  onClick={() => {
                    setFormError("");
                    onModeChange(isSignup ? "login" : "signup");
                  }}
                  className="font-bold text-sg-blue hover:underline"
                >
                  {copy.switchAction}
                </button>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
