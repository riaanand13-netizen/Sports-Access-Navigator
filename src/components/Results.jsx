import { useState } from "react";
import {
  ArrowLeft,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  RefreshCw,
  AlertTriangle,
  CheckCircle,
  Clock,
  FileText,
  DollarSign,
  Users,
  Star,
  ChevronRight,
} from "lucide-react";

const RANK_CONFIG = {
  easy: {
    label: "Easy to apply",
    shortLabel: "Easy",
    bg: "bg-green-50",
    text: "text-green-800",
    border: "border-green-200",
    barColor: "bg-green-500",
    stars: 3,
  },
  medium: {
    label: "Moderate effort",
    shortLabel: "Moderate",
    bg: "bg-amber-50",
    text: "text-amber-800",
    border: "border-amber-200",
    barColor: "bg-amber-400",
    stars: 2,
  },
  hard: {
    label: "Requires more work",
    shortLabel: "Competitive",
    bg: "bg-red-50",
    text: "text-red-800",
    border: "border-red-200",
    barColor: "bg-sg-red",
    stars: 1,
  },
};

const MATCH_LABEL = {
  strong:  { label: "Strong match",   bg: "bg-sg-red",    text: "text-white" },
  good:    { label: "Good match",     bg: "bg-red-100",   text: "text-sg-red" },
  partial: { label: "Possible match", bg: "bg-neutral-100", text: "text-gray-600" },
};

function AccessMeter({ rank }) {
  const cfg = RANK_CONFIG[rank];
  return (
    <div className="flex items-center gap-1.5">
      {[1, 2, 3].map((i) => (
        <div
          key={i}
          className={`h-1.5 w-5 rounded-sm ${i <= cfg.stars ? cfg.barColor : "bg-neutral-200"}`}
        />
      ))}
    </div>
  );
}

function SchemeCard({ scheme, index }) {
  const [expanded, setExpanded] = useState(index === 0);

  const rankCfg  = RANK_CONFIG[scheme.accessRank];
  const matchCfg = MATCH_LABEL[scheme.matchStrength];

  return (
    <div className={`bg-white border-2 ${index === 0 ? "border-sg-red" : "border-neutral-100"} relative overflow-hidden`}>
      {/* Best match ribbon */}
      {index === 0 && (
        <div className="bg-sg-red px-5 py-2 flex items-center gap-2">
          <Star size={12} className="fill-yellow-300 text-yellow-300 flex-shrink-0" />
          <span className="text-white text-xs font-black uppercase tracking-widest">
            Best Match — Start Here
          </span>
        </div>
      )}

      {/* Card header */}
      <div className="p-5 sm:p-6">
        <div className="flex items-start justify-between gap-3 mb-4">
          <div className="flex-1 min-w-0">
            {/* Badges row */}
            <div className="flex flex-wrap gap-2 mb-2">
              <span className={`text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-sm ${matchCfg.bg} ${matchCfg.text}`}>
                {matchCfg.label}
              </span>
              <span className={`text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-sm border ${rankCfg.bg} ${rankCfg.text} ${rankCfg.border}`}>
                {rankCfg.shortLabel}
              </span>
            </div>

            <h3 className="font-display font-black text-sg-dark text-xl sm:text-2xl leading-tight">
              {scheme.name}
            </h3>
            <div className="flex items-center gap-1.5 mt-1.5">
              <Users size={11} className="text-gray-400" />
              <span className="text-xs text-gray-500">{scheme.org}</span>
            </div>
          </div>

          {/* Access meter */}
          <div className="text-right flex-shrink-0">
            <div className="text-[10px] text-gray-400 uppercase tracking-widest mb-1.5 font-bold">
              Ease
            </div>
            <AccessMeter rank={scheme.accessRank} />
            <div className={`text-[10px] font-bold mt-1 ${rankCfg.text}`}>
              {rankCfg.label}
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-sm leading-relaxed mb-5">
          {scheme.description}
        </p>

        {/* Stats grid */}
        <div className="grid grid-cols-2 gap-2 mb-5">
          <div className="bg-sg-light p-3.5 border-l-2 border-sg-red">
            <div className="flex items-center gap-1 mb-1">
              <DollarSign size={11} className="text-sg-red" />
              <span className="text-[10px] font-black uppercase tracking-widest text-gray-500">Value</span>
            </div>
            <div className="text-sm font-bold text-sg-dark leading-snug">{scheme.estimatedValue}</div>
          </div>
          <div className="bg-sg-light p-3.5 border-l-2 border-sg-dark">
            <div className="flex items-center gap-1 mb-1">
              <Clock size={11} className="text-sg-dark" />
              <span className="text-[10px] font-black uppercase tracking-widest text-gray-500">Deadline</span>
            </div>
            <div className="text-sm font-bold text-sg-dark leading-snug">{scheme.deadline}</div>
          </div>
        </div>

        {/* What it covers */}
        <div className="mb-4">
          <div className="text-[10px] font-black uppercase tracking-widest text-gray-500 mb-2.5 flex items-center gap-1.5">
            <CheckCircle size={11} className="text-green-600" />
            What It Covers
          </div>
          <div className="flex flex-wrap gap-2">
            {scheme.covers.map((item) => (
              <span
                key={item}
                className="text-xs font-semibold px-2.5 py-1 bg-green-50 text-green-800 border border-green-100"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Warnings */}
        {scheme.warnings?.length > 0 && (
          <div className="flex items-start gap-2.5 p-3.5 bg-amber-50 border border-amber-100 mb-4">
            <AlertTriangle size={14} className="text-amber-500 flex-shrink-0 mt-0.5" />
            <div>
              <div className="text-xs font-bold text-amber-900 mb-1 uppercase tracking-wide">Check before you apply</div>
              {scheme.warnings.map((w) => (
                <div key={w} className="text-xs text-amber-800">• {w}</div>
              ))}
            </div>
          </div>
        )}

        {/* Access note */}
        {scheme.accessNote && (
          <div className="text-xs text-gray-500 italic mb-4 pl-3 border-l-2 border-neutral-200">
            {scheme.accessNote}
          </div>
        )}

        {/* Expand toggle */}
        <button
          onClick={() => setExpanded((e) => !e)}
          className="flex items-center gap-1.5 text-xs font-bold text-sg-red hover:text-sg-red-dark uppercase tracking-wider mb-5 transition-colors"
        >
          {expanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
          {expanded ? "Hide Details" : "Show Documents & Eligibility"}
        </button>

        {/* Expandable section */}
        {expanded && (
          <div className="border-t-2 border-sg-light pt-5 space-y-5 page-enter">
            {/* Documents */}
            <div>
              <div className="text-[10px] font-black uppercase tracking-widest text-gray-500 mb-3 flex items-center gap-1.5">
                <FileText size={11} className="text-sg-red" />
                Documents You'll Need
              </div>
              <ul className="space-y-2">
                {scheme.documents.map((doc) => (
                  <li key={doc} className="flex items-start gap-2.5 text-sm text-gray-600">
                    <ChevronRight size={13} className="text-sg-red flex-shrink-0 mt-0.5" />
                    {doc}
                  </li>
                ))}
              </ul>
            </div>

            {/* Eligibility grid */}
            <div>
              <div className="text-[10px] font-black uppercase tracking-widest text-gray-500 mb-3 flex items-center gap-1.5">
                <CheckCircle size={11} className="text-sg-red" />
                Eligibility at a Glance
              </div>
              <div className="grid grid-cols-2 gap-2">
                {[
                  ["Age Range", `${scheme.eligibility.ageMin}–${scheme.eligibility.ageMax} yrs`],
                  [
                    "Income Limit",
                    scheme.eligibility.incomeMax === 99999
                      ? "No income limit"
                      : `Up to $${scheme.eligibility.incomeMax.toLocaleString()}/mo per capita`,
                  ],
                  [
                    "Citizenship",
                    scheme.eligibility.citizenship
                      .map((c) => c === "citizen" ? "SC" : c === "pr" ? "PR" : c.toUpperCase())
                      .join(", "),
                  ],
                  [
                    "Level",
                    scheme.eligibility.competitionLevel.map(
                      (l) => l.charAt(0).toUpperCase() + l.slice(1)
                    ).join(", "),
                  ],
                ].map(([label, value]) => (
                  <div key={label} className="bg-sg-light p-3 border border-neutral-100">
                    <div className="text-[10px] text-gray-400 uppercase tracking-wide font-bold mb-0.5">{label}</div>
                    <div className="text-sm font-semibold text-sg-dark">{value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Apply CTA */}
        <a
          href={scheme.applicationLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full py-4 bg-sg-red hover:bg-sg-red-dark text-white font-black text-xs uppercase tracking-widest transition-colors group mt-1"
        >
          Apply on Official Website
          <ExternalLink size={13} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>
    </div>
  );
}

const ANSWER_LABELS = {
  citizenship: { citizen: "Singapore Citizen", pr: "PR", ltvp: "LTVP", foreigner: "Foreigner" },
  competitionLevel: {
    recreational: "Recreational",
    school: "School-level",
    club: "Club-level",
    national: "National-level",
    regional: "Regional / Intl",
  },
  schoolType: {
    primary: "Primary School",
    secondary: "Secondary",
    ite: "ITE",
    poly: "Polytechnic",
    jc: "JC / MI",
    sped: "SPED",
    university: "University",
    none: "Not in school",
  },
};

export default function Results({ results, answers, onRestart, onBack }) {
  const count = results.length;

  const tags = [
    answers.age && `Age ${answers.age}`,
    ANSWER_LABELS.citizenship[answers.citizenship],
    ANSWER_LABELS.schoolType[answers.schoolType],
    ANSWER_LABELS.competitionLevel[answers.competitionLevel],
  ].filter(Boolean);

  return (
    <div className="min-h-screen bg-sg-light">
      {/* Header */}
      <header className="bg-sg-dark sticky top-0 z-40">
        <div className="max-w-2xl mx-auto px-5 sm:px-8 h-14 flex items-center justify-between gap-4">
          <button
            onClick={onBack}
            className="flex items-center gap-1.5 text-gray-400 hover:text-white text-sm font-semibold transition-colors"
          >
            <ArrowLeft size={16} />
            Back
          </button>
          <span className="font-display font-black text-white text-sm uppercase tracking-wider">
            Your Results
          </span>
          <button
            onClick={onRestart}
            className="flex items-center gap-1.5 text-gray-400 hover:text-white text-xs font-bold uppercase tracking-wider transition-colors"
          >
            <RefreshCw size={13} />
            Restart
          </button>
        </div>
      </header>

      <div className="max-w-2xl mx-auto px-5 sm:px-8 py-8 sm:py-10">

        {/* Summary banner */}
        {count > 0 ? (
          <div className="bg-sg-dark p-6 sm:p-7 mb-6 page-enter">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="text-sg-red text-[11px] font-black uppercase tracking-widest mb-2">
                  Matching Results
                </div>
                <h1 className="font-display font-black text-white text-2xl sm:text-3xl leading-tight mb-3">
                  {count} scheme{count !== 1 ? "s" : ""} found
                  <br />
                  <span className="text-sg-red">for your child</span>
                </h1>
                <p className="text-gray-400 text-sm">
                  Ranked easiest-first. Start with the first card.
                </p>
              </div>
              <div className="text-center flex-shrink-0">
                <div className="font-display font-black text-5xl sm:text-6xl text-sg-red leading-none">
                  {count}
                </div>
                <div className="text-gray-500 text-[10px] uppercase tracking-widest font-bold mt-1">
                  matches
                </div>
              </div>
            </div>
            {/* Profile tags */}
            <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-white/10">
              {tags.map((t) => (
                <span key={t} className="text-[11px] font-semibold px-2.5 py-1 bg-white/10 text-gray-300">
                  {t}
                </span>
              ))}
            </div>
          </div>
        ) : (
          <div className="bg-white border-2 border-neutral-100 p-10 text-center mb-6 page-enter">
            <div className="text-5xl mb-4">🔍</div>
            <h2 className="font-display font-black text-sg-dark text-2xl mb-3">
              No exact matches found
            </h2>
            <p className="text-gray-500 text-base max-w-sm mx-auto mb-6">
              Based on your answers, we couldn't confirm clear eligibility — but
              some schemes may still be worth exploring directly with the provider.
            </p>
            <button onClick={onRestart} className="btn-primary mx-auto">
              Try Again
              <RefreshCw size={14} />
            </button>
          </div>
        )}

        {/* Legend */}
        {count > 0 && (
          <div className="bg-white p-4 border border-neutral-100 mb-5 flex flex-wrap gap-4 items-center">
            <span className="text-[10px] font-black uppercase tracking-widest text-gray-500">Ease of Access:</span>
            {Object.entries(RANK_CONFIG).map(([key, cfg]) => (
              <div key={key} className="flex items-center gap-2">
                <AccessMeter rank={key} />
                <span className={`text-[11px] font-bold ${cfg.text}`}>{cfg.label}</span>
              </div>
            ))}
          </div>
        )}

        {/* Cards */}
        <div className="space-y-4">
          {results.map((scheme, i) => (
            <div
              key={scheme.id}
              className="page-enter"
              style={{ animationDelay: `${i * 50}ms` }}
            >
              <SchemeCard scheme={scheme} index={i} />
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        {count > 0 && (
          <div className="mt-8 p-5 bg-amber-50 border border-amber-200 flex items-start gap-3">
            <AlertTriangle size={16} className="text-amber-500 flex-shrink-0 mt-0.5" />
            <div>
              <div className="text-sm font-black text-amber-900 uppercase tracking-wide mb-1">
                Important Disclaimer
              </div>
              <p className="text-xs text-amber-800 leading-relaxed">
                This tool provides guidance only. Final eligibility is determined
                by the official scheme provider. Scheme details, deadlines, and
                criteria may change. Always verify information directly with the
                administering organisation before applying.
              </p>
            </div>
          </div>
        )}

        {count > 0 && (
          <div className="mt-6 text-center">
            <button
              onClick={onRestart}
              className="flex items-center gap-2 mx-auto text-gray-400 hover:text-sg-red text-xs font-bold uppercase tracking-wider transition-colors"
            >
              <RefreshCw size={13} />
              Start Over with New Answers
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
