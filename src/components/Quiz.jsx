import { useState } from "react";
import { ArrowLeft, ArrowRight, X } from "lucide-react";

const QUESTIONS = [
  {
    id: "age",
    step: 1,
    label: "How old is your child?",
    sublabel: "Age affects which schemes your child can apply for.",
    type: "options",
    columns: 4,
    options: [
      { value: "5",  label: "5" },
      { value: "6",  label: "6" },
      { value: "7",  label: "7" },
      { value: "8",  label: "8" },
      { value: "9",  label: "9" },
      { value: "10", label: "10" },
      { value: "11", label: "11" },
      { value: "12", label: "12" },
      { value: "13", label: "13" },
      { value: "14", label: "14" },
      { value: "15", label: "15" },
      { value: "16", label: "16" },
      { value: "17", label: "17" },
      { value: "18", label: "18" },
      { value: "19", label: "19" },
      { value: "20", label: "20" },
      { value: "21", label: "21" },
    ],
  },
  {
    id: "sport",
    step: 2,
    label: "What sport does your child play?",
    sublabel: "Don't see your sport? Choose 'Other' — most schemes cover all sports.",
    type: "options",
    columns: 2,
    options: [
      { value: "swimming",    label: "🏊  Swimming" },
      { value: "football",    label: "⚽  Football" },
      { value: "badminton",   label: "🏸  Badminton" },
      { value: "basketball",  label: "🏀  Basketball" },
      { value: "athletics",   label: "🏃  Athletics" },
      { value: "tennis",      label: "🎾  Tennis" },
      { value: "table-tennis",label: "🏓  Table Tennis" },
      { value: "gymnastics",  label: "🤸  Gymnastics" },
      { value: "martial-arts",label: "🥋  Martial Arts" },
      { value: "volleyball",  label: "🏐  Volleyball" },
      { value: "cycling",     label: "🚴  Cycling" },
      { value: "rowing",      label: "🚣  Rowing" },
      { value: "sailing",     label: "⛵  Sailing" },
      { value: "golf",        label: "⛳  Golf" },
      { value: "hockey",      label: "🏑  Hockey" },
      { value: "other",       label: "🏅  Other sport" },
    ],
  },
  {
    id: "citizenship",
    step: 3,
    label: "What is your child's citizenship status?",
    sublabel: "Some schemes are only for Singapore Citizens or PRs. This helps us give you accurate results.",
    type: "options",
    columns: 1,
    options: [
      { value: "citizen",  label: "Singapore Citizen",          note: "Born here or naturalised" },
      { value: "pr",       label: "Permanent Resident (PR)",    note: "Holds Singapore PR status" },
      { value: "ltvp",     label: "Long-Term Visit Pass (LTVP)",note: "Dependent or other long-term pass" },
      { value: "foreigner",label: "Foreigner / Expat",          note: "On employment or student pass" },
    ],
  },
  {
    id: "schoolType",
    step: 4,
    label: "What type of school does your child attend?",
    sublabel: "School type can affect eligibility for some government-linked schemes.",
    type: "options",
    columns: 1,
    options: [
      { value: "primary",    label: "Primary School",     note: "P1–P6" },
      { value: "secondary",  label: "Secondary School",   note: "Sec 1–5" },
      { value: "ite",        label: "ITE",                note: "Institute of Technical Education" },
      { value: "poly",       label: "Polytechnic",        note: "Any of the 5 polys" },
      { value: "jc",         label: "JC / MI",            note: "Junior College or Millennia Institute" },
      { value: "sped",       label: "SPED School",        note: "Special Education school" },
      { value: "university", label: "University",         note: "Local or overseas" },
      { value: "none",       label: "Not in school",      note: "School-leaver or home-schooled" },
    ],
  },
  {
    id: "income",
    step: 5,
    label: "What is your monthly household per capita income?",
    sublabel: "Per capita = total household income ÷ number of people living at home. We do not store this answer.",
    type: "options",
    columns: 1,
    options: [
      { value: "900",   label: "$900 or below",     note: "Typically qualifies for most financial aid" },
      { value: "1500",  label: "$901 – $1,500",     note: "Qualifies for most lower-income schemes" },
      { value: "2500",  label: "$1,501 – $2,500",   note: "Qualifies for many income-based schemes" },
      { value: "3500",  label: "$2,501 – $3,500",   note: "Income limit varies by scheme" },
      { value: "5000",  label: "$3,501 – $5,000",   note: "Fewer schemes, but still worth checking" },
      { value: "99999", label: "Above $5,000",       note: "Universal schemes like ActiveSG still apply" },
    ],
  },
  {
    id: "competitionLevel",
    step: 6,
    label: "What level does your child currently compete at?",
    sublabel: "This helps match the right level of support — from recreational to elite.",
    type: "options",
    columns: 1,
    options: [
      { value: "recreational", label: "Just for fun / Recreational", note: "No formal competitions" },
      { value: "school",       label: "School team or inter-school", note: "Represents school at competitions" },
      { value: "club",         label: "Club or association level",   note: "Trains and competes with a sports club" },
      { value: "national",     label: "National level",              note: "Represents Singapore or in national squad" },
      { value: "regional",     label: "Regional / International",    note: "SEA Games, Asian Games, or similar" },
    ],
  },
];

export default function Quiz({ onComplete, onBack }) {
  const [step, setStep]       = useState(0);
  const [answers, setAnswers] = useState({});

  const current      = QUESTIONS[step];
  const total        = QUESTIONS.length;
  const progress     = ((step + 1) / total) * 100;
  const selected     = answers[current.id];
  const isLast       = step === total - 1;

  function handleSelect(value) {
    setAnswers((prev) => ({ ...prev, [current.id]: value }));
  }

  function handleNext() {
    if (!selected) return;
    if (step < total - 1) {
      setStep((s) => s + 1);
    } else {
      onComplete(answers);
    }
  }

  function handlePrev() {
    if (step > 0) {
      setStep((s) => s - 1);
    } else {
      onBack();
    }
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">

      {/* Top bar */}
      <header className="bg-sg-dark sticky top-0 z-40">
        <div className="max-w-2xl mx-auto px-5 sm:px-8 h-14 flex items-center gap-4">
          <button
            onClick={handlePrev}
            className="p-1.5 text-gray-400 hover:text-white transition-colors flex-shrink-0"
            aria-label="Go back"
          >
            <ArrowLeft size={18} />
          </button>
          <div className="flex-1">
            {/* Step counter */}
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-gray-400 text-[11px] font-bold uppercase tracking-widest">
                Question {step + 1} of {total}
              </span>
              <span className="text-sg-blue text-[11px] font-bold">
                {Math.round(progress)}%
              </span>
            </div>
            {/* Progress bar */}
            <div className="h-1 bg-white/10 overflow-hidden">
              <div
                className="progress-bar h-full"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
          <button
            onClick={onBack}
            className="p-1.5 text-gray-500 hover:text-white transition-colors flex-shrink-0"
            aria-label="Close quiz"
          >
            <X size={18} />
          </button>
        </div>
      </header>

      {/* Body */}
      <div className="flex-1 max-w-2xl mx-auto w-full px-5 sm:px-8 pt-8 pb-4">
        <div key={step} className="page-enter">

          {/* Question header */}
          <div className="mb-7">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="bg-sg-blue text-white text-[11px] font-black px-2.5 py-1 uppercase tracking-widest">
                Step {step + 1}
              </span>
            </div>
            <h2 className="font-display font-extrabold text-sg-dark text-2xl sm:text-3xl mb-2 text-balance leading-tight">
              {current.label}
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed">{current.sublabel}</p>
          </div>

          {/* Options grid */}
          <div
            className={`grid gap-2 ${
              current.columns === 4
                ? "grid-cols-4 sm:grid-cols-5"
                : current.columns === 2
                ? "grid-cols-2"
                : "grid-cols-1"
            }`}
          >
            {current.options.map((opt) => {
              const isSelected = selected === opt.value;
              return (
                <button
                  key={opt.value}
                  onClick={() => handleSelect(opt.value)}
                  className={`option-btn ${isSelected ? "selected" : ""} ${
                    current.columns > 1 ? "text-center px-2 py-3 text-sm" : ""
                  }`}
                >
                  <span className={current.columns > 1 ? "block font-bold" : "font-semibold"}>
                    {opt.label}
                  </span>
                  {opt.note && current.columns === 1 && (
                    <span className={`option-note block text-xs font-normal mt-0.5 ${isSelected ? "text-blue-100" : "text-gray-400"}`}>
                      {opt.note}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Sticky bottom nav */}
      <div className="sticky bottom-0 bg-white border-t border-neutral-100 py-4 px-5 sm:px-8">
        <div className="max-w-2xl mx-auto flex gap-3">
          <button
            onClick={handlePrev}
            className="flex-shrink-0 flex items-center gap-2 px-5 py-3.5 border-2 border-neutral-200 hover:border-sg-blue hover:text-sg-blue text-gray-600 font-bold text-sm uppercase tracking-wider transition-all"
          >
            <ArrowLeft size={16} />
            Back
          </button>
          <button
            onClick={handleNext}
            disabled={!selected}
            className={`flex-1 flex items-center justify-center gap-2 py-3.5 font-bold text-sm uppercase tracking-wider transition-all ${
              selected
                ? "bg-sg-blue hover:bg-sg-blue-dark text-white cursor-pointer"
                : "bg-neutral-100 text-neutral-400 cursor-not-allowed"
            }`}
          >
            {isLast ? "See My Results" : "Next Question"}
            <ArrowRight size={16} />
          </button>
        </div>
        {!selected && (
          <p className="text-center text-xs text-gray-400 mt-2 max-w-2xl mx-auto">
            Please select an option to continue
          </p>
        )}
      </div>
    </div>
  );
}
