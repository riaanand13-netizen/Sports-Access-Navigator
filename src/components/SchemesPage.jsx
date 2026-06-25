import { useState } from "react";
import {
  ArrowLeft,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Search,
  ArrowRight,
  DollarSign,
  Clock,
  Users,
  CheckCircle,
  FileText,
  ChevronRight,
} from "lucide-react";
import { SCHEMES, SCHEME_CATEGORIES } from "../data/schemes";

const RANK_CONFIG = {
  easy: {
    label: "Easy to apply",
    shortLabel: "Easy",
    bg: "bg-green-50",
    text: "text-green-800",
    border: "border-green-200",
    barColor: "bg-green-500",
    stars: 3,
    dotColor: "bg-green-500",
  },
  medium: {
    label: "Moderate effort",
    shortLabel: "Moderate",
    bg: "bg-amber-50",
    text: "text-amber-800",
    border: "border-amber-200",
    barColor: "bg-amber-400",
    stars: 2,
    dotColor: "bg-amber-500",
  },
  hard: {
    label: "Competitive",
    shortLabel: "Competitive",
    bg: "bg-blue-50",
    text: "text-blue-800",
    border: "border-indigo-200",
    barColor: "bg-sg-blue",
    stars: 1,
    dotColor: "bg-sg-blue",
  },
};

const FILTER_OPTIONS = [
  { label: "All Schemes",  value: "all" },
  { label: "Easy Access",  value: "easy" },
  { label: "Moderate",     value: "medium" },
  { label: "Competitive",  value: "hard" },
];

const CATEGORY_OPTIONS = [
  { label: "All Categories",     value: "all" },
  { label: "Direct Support",     value: "direct-support" },
  { label: "Community Funding",  value: "community-funding" },
  { label: "Disability Sport",   value: "disability-sport" },
];

const CATEGORY_BADGE = {
  "direct-support":    "bg-blue-50 text-blue-800 border-blue-100",
  "community-funding": "bg-purple-50 text-purple-800 border-purple-100",
  "disability-sport":"bg-teal-50 text-teal-800 border-teal-100",
};

function AccessMeter({ rank }) {
  const cfg = RANK_CONFIG[rank];
  return (
    <div className="flex items-center gap-1">
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
  const [expanded, setExpanded] = useState(false);
  const cfg = RANK_CONFIG[scheme.accessRank];

  return (
    <div className="bg-white border-2 border-neutral-100 hover:border-neutral-200 transition-colors">
      {/* Card top */}
      <div className="p-5 sm:p-6">
        {/* Header */}
        <div className="flex items-start gap-3 mb-4">
          {/* Index number */}
          <div className="flex-shrink-0 w-9 h-9 bg-sg-light flex items-center justify-center border border-neutral-200">
            <span className="font-display font-black text-sm text-sg-blue">
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-center gap-2 mb-1.5">
              <span className={`text-[10px] font-black uppercase tracking-wider px-2 py-0.5 border ${cfg.bg} ${cfg.text} ${cfg.border}`}>
                {cfg.shortLabel}
              </span>
              {scheme.category && SCHEME_CATEGORIES[scheme.category] && (
                <span className={`text-[10px] font-black uppercase tracking-wider px-2 py-0.5 border ${CATEGORY_BADGE[scheme.category]}`}>
                  {SCHEME_CATEGORIES[scheme.category].label}
                </span>
              )}
            </div>
            <h3 className="font-display font-black text-sg-dark text-lg sm:text-xl leading-tight">
              {scheme.name}
            </h3>
            <div className="flex items-center gap-1.5 mt-1">
              <Users size={11} className="text-gray-400 flex-shrink-0" />
              <span className="text-xs text-gray-500 truncate">{scheme.org}</span>
            </div>
          </div>

          {/* Ease meter */}
          <div className="flex-shrink-0 text-right">
            <div className="text-[9px] text-gray-400 uppercase tracking-widest font-bold mb-1.5">Ease</div>
            <AccessMeter rank={scheme.accessRank} />
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-sm leading-relaxed mb-5">{scheme.description}</p>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-2 mb-5">
          <div className="bg-sg-light p-3 border-l-2 border-sg-blue">
            <div className="flex items-center gap-1 mb-0.5">
              <DollarSign size={10} className="text-sg-blue" />
              <span className="text-[9px] font-black uppercase tracking-widest text-gray-500">Value</span>
            </div>
            <div className="text-xs font-bold text-sg-dark leading-snug">{scheme.estimatedValue}</div>
          </div>
          <div className="bg-sg-light p-3 border-l-2 border-neutral-400">
            <div className="flex items-center gap-1 mb-0.5">
              <Clock size={10} className="text-neutral-500" />
              <span className="text-[9px] font-black uppercase tracking-widest text-gray-500">Deadline</span>
            </div>
            <div className="text-xs font-bold text-sg-dark leading-snug">{scheme.deadline}</div>
          </div>
        </div>

        {/* Covers */}
        <div className="mb-4">
          <div className="text-[9px] font-black uppercase tracking-widest text-gray-400 mb-2 flex items-center gap-1">
            <CheckCircle size={10} className="text-green-500" />
            What It Covers
          </div>
          <div className="flex flex-wrap gap-1.5">
            {scheme.covers.map((item) => (
              <span key={item} className="text-[11px] font-semibold px-2 py-0.5 bg-green-50 text-green-800 border border-green-100">
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Access note */}
        {scheme.accessNote && (
          <div className="text-xs text-gray-500 italic mb-4 pl-3 border-l-2 border-neutral-200 leading-relaxed">
            {scheme.accessNote}
          </div>
        )}

        {/* Expand toggle */}
        <button
          onClick={() => setExpanded((e) => !e)}
          className="flex items-center gap-1.5 text-[11px] font-black text-sg-blue hover:text-sg-blue-dark uppercase tracking-wider mb-4 transition-colors"
        >
          {expanded ? <ChevronUp size={13} /> : <ChevronDown size={13} />}
          {expanded ? "Hide Details" : "Documents & Eligibility Criteria"}
        </button>

        {/* Expandable */}
        {expanded && (
          <div className="border-t-2 border-sg-light pt-5 space-y-5 page-enter">
            {/* Documents */}
            <div>
              <div className="text-[9px] font-black uppercase tracking-widest text-gray-400 mb-3 flex items-center gap-1.5">
                <FileText size={10} className="text-sg-blue" />
                Documents You'll Need
              </div>
              <ul className="space-y-2">
                {scheme.documents.map((doc) => (
                  <li key={doc} className="flex items-start gap-2 text-sm text-gray-600">
                    <ChevronRight size={12} className="text-sg-blue flex-shrink-0 mt-0.5" />
                    {doc}
                  </li>
                ))}
              </ul>
            </div>

            {/* Eligibility grid */}
            <div>
              <div className="text-[9px] font-black uppercase tracking-widest text-gray-400 mb-3 flex items-center gap-1.5">
                <CheckCircle size={10} className="text-sg-blue" />
                Eligibility at a Glance
              </div>
              <div className="grid grid-cols-2 gap-2">
                {[
                  ["Age Range",   `${scheme.eligibility.ageMin}–${scheme.eligibility.ageMax} years`],
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
                    "Competition Level",
                    scheme.eligibility.competitionLevel
                      .map((l) => l.charAt(0).toUpperCase() + l.slice(1))
                      .join(", "),
                  ],
                ].map(([label, value]) => (
                  <div key={label} className="bg-sg-light p-3 border border-neutral-100">
                    <div className="text-[9px] text-gray-400 uppercase tracking-wide font-bold mb-0.5">{label}</div>
                    <div className="text-xs font-semibold text-sg-dark">{value}</div>
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
          className="flex items-center justify-center gap-2 w-full py-3.5 bg-sg-blue hover:bg-sg-blue-dark text-white font-black text-[11px] uppercase tracking-widest transition-colors group"
        >
          Apply on Official Website
          <ExternalLink size={12} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>
    </div>
  );
}

export default function SchemesPage({ onBack, onStart }) {
  const [filter, setFilter]     = useState("all");
  const [category, setCategory] = useState("all");
  const [search, setSearch]     = useState("");

  const filtered = SCHEMES.filter((s) => {
    const matchRank     = filter === "all" || s.accessRank === filter;
    const matchCategory = category === "all" || s.category === category;
    const matchSearch   = search === "" ||
      s.name.toLowerCase().includes(search.toLowerCase()) ||
      s.org.toLowerCase().includes(search.toLowerCase()) ||
      s.covers.some((c) => c.toLowerCase().includes(search.toLowerCase())) ||
      (s.category && SCHEME_CATEGORIES[s.category]?.label.toLowerCase().includes(search.toLowerCase()));
    return matchRank && matchCategory && matchSearch;
  });

  const countsByCategory = Object.fromEntries(
    Object.keys(SCHEME_CATEGORIES).map((key) => [
      key,
      SCHEMES.filter((s) => s.category === key).length,
    ])
  );

  return (
    <div className="min-h-screen bg-white">

      {/* Sticky nav */}
      <header className="bg-sg-dark sticky top-0 z-40">
        <div className="max-w-5xl mx-auto px-5 sm:px-8 h-14 flex items-center justify-between gap-4">
          <button
            onClick={onBack}
            className="flex items-center gap-1.5 text-gray-400 hover:text-white text-sm font-semibold transition-colors"
          >
            <ArrowLeft size={16} />
            <span className="hidden sm:inline">Back</span>
          </button>
          <span className="font-display font-black text-white text-sm uppercase tracking-wider">
            All Schemes
          </span>
          <button onClick={onStart} className="btn-primary text-xs px-5 py-2.5">
            Check My Eligibility
          </button>
        </div>
      </header>

      {/* Page hero */}
      <section className="bg-sg-dark pt-12 pb-10 px-5 sm:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full pulse-blue" />
            <span className="text-blue-300 text-[11px] font-black uppercase tracking-widest">
              Singapore Youth Sports Funding
            </span>
          </div>
          <h1 className="font-display font-black text-3xl sm:text-5xl text-white mb-3 leading-none">
            All Funding Schemes
          </h1>
          <p className="text-gray-400 text-base max-w-xl mb-8">
            Every scholarship, bursary, grant, and subsidy available for young
            athletes in Singapore — in one place, with full details.
          </p>

          {/* Summary chips */}
          <div className="flex flex-wrap gap-3">
            {[
              { label: `${SCHEMES.length} total schemes`, color: "bg-white/10 text-white" },
              { label: `${countsByCategory["direct-support"]} direct support`, color: "bg-blue-900/40 text-blue-200" },
              { label: `${countsByCategory["community-funding"]} community funding`, color: "bg-purple-900/40 text-purple-200" },
              { label: `${countsByCategory["disability-sport"]} disability sport`, color: "bg-teal-900/40 text-teal-200" },
            ].map((chip) => (
              <span key={chip.label} className={`text-[11px] font-bold uppercase tracking-wider px-3 py-1.5 ${chip.color}`}>
                {chip.label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Sticky filter bar */}
      <div className="sticky top-14 z-30 bg-white border-b-2 border-neutral-100">
        <div className="max-w-5xl mx-auto px-5 sm:px-8 py-3 space-y-3">
          <div className="flex flex-col sm:flex-row gap-3">
            {/* Search */}
            <div className="relative flex-1">
              <Search size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search schemes, organisations, what's covered..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-9 pr-4 py-2.5 text-sm border-2 border-neutral-200 focus:border-sg-blue focus:outline-none bg-white text-sg-dark placeholder:text-gray-400 font-medium"
              />
            </div>

            {/* Access filter pills */}
            <div className="flex gap-2 flex-shrink-0 overflow-x-auto scrollbar-hide">
              {FILTER_OPTIONS.map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => setFilter(opt.value)}
                  className={`flex-shrink-0 px-4 py-2.5 text-xs font-black uppercase tracking-wider border-2 transition-all ${
                    filter === opt.value
                      ? "bg-sg-blue border-sg-blue text-white"
                      : "bg-white border-neutral-200 text-gray-600 hover:border-sg-blue hover:text-sg-blue"
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {/* Category filter pills */}
          <div className="flex gap-2 overflow-x-auto scrollbar-hide">
            {CATEGORY_OPTIONS.map((opt) => (
              <button
                key={opt.value}
                onClick={() => setCategory(opt.value)}
                className={`flex-shrink-0 px-4 py-2 text-xs font-black uppercase tracking-wider border-2 transition-all ${
                  category === opt.value
                    ? "bg-sg-dark border-sg-dark text-white"
                    : "bg-white border-neutral-200 text-gray-600 hover:border-sg-dark hover:text-sg-dark"
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-5xl mx-auto px-5 sm:px-8 py-8 sm:py-10">

        {/* Result count */}
        <div className="flex items-center justify-between mb-6">
          <div className="text-sm font-bold text-gray-500">
            Showing{" "}
            <span className="text-sg-dark">{filtered.length}</span>{" "}
            of {SCHEMES.length} schemes
          </div>
          {(filter !== "all" || category !== "all" || search) && (
            <button
              onClick={() => { setFilter("all"); setCategory("all"); setSearch(""); }}
              className="text-xs font-bold text-sg-blue hover:underline uppercase tracking-wider"
            >
              Clear filters
            </button>
          )}
        </div>

        {/* Ease legend */}
        <div className="flex flex-wrap items-center gap-4 mb-6 p-4 bg-sg-light border border-neutral-100">
          <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Access difficulty:</span>
          {Object.entries(RANK_CONFIG).map(([key, cfg]) => (
            <div key={key} className="flex items-center gap-2">
              <AccessMeter rank={key} />
              <span className={`text-[11px] font-bold ${cfg.text}`}>{cfg.label}</span>
            </div>
          ))}
        </div>

        {/* Scheme cards */}
        {filtered.length > 0 ? (
          <div className="grid sm:grid-cols-2 gap-4">
            {filtered.map((scheme, i) => (
              <div
                key={scheme.id}
                className="page-enter"
                style={{ animationDelay: `${i * 40}ms` }}
              >
                <SchemeCard scheme={scheme} index={SCHEMES.indexOf(scheme)} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="text-5xl mb-4">🔍</div>
            <h3 className="font-display font-black text-sg-dark text-xl mb-2">No schemes found</h3>
            <p className="text-gray-500 text-sm mb-5">
              Try a different search term or remove the filter.
            </p>
            <button
              onClick={() => { setFilter("all"); setCategory("all"); setSearch(""); }}
              className="btn-primary text-xs px-6 py-3"
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* Quiz CTA */}
        <div className="mt-14 bg-sg-dark p-7 sm:p-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <div className="text-sg-blue text-[10px] font-black uppercase tracking-widest mb-2">
              Not sure where to start?
            </div>
            <h3 className="font-display font-black text-white text-xl sm:text-2xl mb-1">
              Take the quiz — 2 minutes
            </h3>
            <p className="text-gray-400 text-sm">
              We'll match your child to the right schemes and rank them by ease of access.
            </p>
          </div>
          <button
            onClick={onStart}
            className="btn-primary flex-shrink-0 px-8 py-4 text-sm group"
          >
            Check My Eligibility
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* Disclaimer */}
        <div className="mt-6 p-4 bg-amber-50 border border-amber-100 text-xs text-amber-800 leading-relaxed">
          <strong className="text-amber-900">Disclaimer:</strong> This tool provides guidance only. Final eligibility is
          determined by the official scheme provider. Always verify information
          directly with the administering organisation before applying.
        </div>
      </div>
    </div>
  );
}
