import {
  ArrowRight,
  ExternalLink,
  ChevronRight,
  LogIn,
  LogOut,
  UserCircle,
  UserPlus,
} from "lucide-react";
import { SCHEMES } from "../data/schemes";

const SPORTS_ICONS = ["⚽", "🏊", "🏸", "🏀", "🏃", "🎾", "🏓", "🤸", "🥋", "🚴"];

const SCHEMES_PREVIEW = [
  { name: "SportCares Bursary",           tag: "Easy",       tagColor: "bg-green-100 text-green-800",   org: "Sport Singapore" },
  { name: "MOE Financial Assistance",     tag: "Easy",       tagColor: "bg-green-100 text-green-800",   org: "Ministry of Education" },
  { name: "ActiveSG Credits",             tag: "Easy",       tagColor: "bg-green-100 text-green-800",   org: "ActiveSG" },
  { name: "Disability Sport Programmes",  tag: "Easy",       tagColor: "bg-green-100 text-green-800",   org: "Sport Singapore" },
  { name: "Strategic Partnership CCA",    tag: "Moderate",   tagColor: "bg-amber-100 text-amber-800",   org: "MOE / SportSG" },
  { name: "SportCares Scholarships",      tag: "Moderate",   tagColor: "bg-amber-100 text-amber-800",   org: "Sport Singapore" },
  { name: "Communities of Care Grant",    tag: "Moderate",   tagColor: "bg-amber-100 text-amber-800",   org: "Sport Singapore" },
  { name: "Enabling Sports Fund",         tag: "Moderate",   tagColor: "bg-amber-100 text-amber-800",   org: "Sport Singapore" },
  { name: "Sports School FAS",            tag: "Moderate",   tagColor: "bg-amber-100 text-amber-800",   org: "Singapore Sports School" },
  { name: "Athletes' Inspire Fund",       tag: "Competitive",tagColor: "bg-blue-100 text-blue-800",       org: "Sport Singapore" },
];

const STEPS = [
  { n: "01", title: "Answer 6 questions",    body: "Age, sport, citizenship, school, income, and competition level." },
  { n: "02", title: "We check every scheme", body: `Instantly matched against all ${SCHEMES.length} funding schemes.` },
  { n: "03", title: "See your results",      body: "Ranked easiest-first, with direct application links." },
];

export default function HomePage({
  onStart,
  onAbout,
  onSchemes,
  onLogin,
  onSignup,
  onSignOut,
  user,
}) {
  return (
    <div className="min-h-screen flex flex-col bg-white">

      {/* Main Navigation */}
      <header className="bg-sg-dark sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <div className="w-8 h-8 bg-sg-blue flex items-center justify-center flex-shrink-0">
              <span className="text-white font-display font-black text-base leading-none">S</span>
            </div>
            <div>
              <div className="text-white font-display font-black text-sm leading-tight tracking-tight">
                Sports Access
              </div>
              <div className="text-blue-300 text-[10px] font-bold uppercase tracking-widest leading-none">
                Navigator
              </div>
            </div>
          </div>

          {/* Nav links (desktop) */}
          <nav className="hidden md:flex items-center gap-1">
            {[
              { label: "Schemes", action: onSchemes },
              { label: "About",   action: onAbout },
            ].map(({ label, action }) => (
              <button
                key={label}
                onClick={action}
                className="px-4 py-2 text-gray-300 hover:text-white hover:bg-white/10 text-sm font-semibold transition-colors"
              >
                {label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-2 flex-shrink-0">
            {user ? (
              <>
                <div className="hidden lg:flex items-center gap-2 px-3 py-2 bg-white/10 text-white text-xs font-bold max-w-44">
                  <UserCircle size={15} className="text-blue-300 flex-shrink-0" />
                  <span className="truncate">{user.name}</span>
                </div>
                <button
                  onClick={onSignOut}
                  className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 text-gray-300 hover:text-white hover:bg-white/10 text-xs font-bold uppercase tracking-wider transition-colors"
                >
                  <LogOut size={14} />
                  Sign Out
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={onLogin}
                  className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 text-gray-300 hover:text-white hover:bg-white/10 text-xs font-bold uppercase tracking-wider transition-colors"
                >
                  <LogIn size={14} />
                  Login
                </button>
                <button
                  onClick={onSignup}
                  className="hidden md:inline-flex items-center gap-1.5 px-3 py-2 text-blue-200 hover:text-white hover:bg-white/10 text-xs font-bold uppercase tracking-wider transition-colors"
                >
                  <UserPlus size={14} />
                  Signup
                </button>
              </>
            )}
            <button
              onClick={onStart}
              className="btn-primary text-xs px-4 sm:px-5 py-2.5 flex-shrink-0"
            >
              Find Funding
              <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </header>

      <main className="flex-1">

        {/* ── HERO ─────────────────────────────────────────── */}
        <section className="relative overflow-hidden bg-sg-dark min-h-[88vh] sm:min-h-[80vh] flex items-center">
          {/* Background grid pattern */}
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
              backgroundSize: '48px 48px',
            }}
          />
          {/* Blue glow */}
          <div
            className="absolute right-0 top-0 w-1/2 h-full opacity-20 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse at 80% 40%, #2563EB 0%, transparent 65%)' }}
          />
          {/* Floating sport emojis (decorative) */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden select-none hidden lg:block">
            {SPORTS_ICONS.map((icon, i) => (
              <span
                key={i}
                className="absolute text-4xl opacity-5"
                style={{
                  left:  `${10 + (i * 9) % 80}%`,
                  top:   `${15 + (i * 13) % 65}%`,
                  transform: `rotate(${(i * 17) % 40 - 20}deg)`,
                }}
              >
                {icon}
              </span>
            ))}
          </div>

          <div className="relative max-w-6xl mx-auto px-5 sm:px-8 py-20 sm:py-24 w-full">
            <div className="max-w-2xl">
              {/* Eyebrow tag */}
              <div className="inline-flex items-center gap-2 mb-6">
                <span className="w-2 h-2 rounded-full pulse-blue" />
                <span className="text-blue-300 text-xs font-bold uppercase tracking-widest">
                  Free Tool for Singapore Families
                </span>
              </div>

              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-5 text-balance leading-none">
                Find sports funding{" "}
                <span className="text-sg-blue">your child</span>{" "}
                qualifies for
              </h1>

              <p className="text-gray-300 text-lg sm:text-xl mb-8 max-w-xl leading-relaxed">
                Scholarships, bursaries, subsidies and grants — all mapped in
                one place. Answer 6 questions, see what's available for your
                family.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={onStart}
                  className="btn-primary text-sm px-8 py-4 group"
                >
                  Start the Quiz — Free
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </button>
                <button
                  onClick={onAbout}
                  className="btn-secondary text-sm px-6 py-4 border-gray-500 text-gray-300 hover:border-sg-blue hover:bg-sg-blue hover:text-white"
                >
                  How it works
                </button>
              </div>

              {user ? (
                <div className="inline-flex items-center gap-2 mt-4 text-blue-100 text-sm font-semibold">
                  <UserCircle size={16} />
                  Signed in as {user.name}
                </div>
              ) : (
                <div className="flex flex-wrap items-center gap-3 mt-4">
                  <button
                    onClick={onLogin}
                    className="inline-flex items-center gap-1.5 text-blue-200 hover:text-white text-sm font-bold transition-colors"
                  >
                    <LogIn size={15} />
                    Student Login
                  </button>
                  <span className="text-white/20" aria-hidden="true">|</span>
                  <button
                    onClick={onSignup}
                    className="inline-flex items-center gap-1.5 text-blue-200 hover:text-white text-sm font-bold transition-colors"
                  >
                    <UserPlus size={15} />
                    Create Account
                  </button>
                </div>
              )}

              {/* Trust row */}
              <div className="flex flex-wrap gap-5 mt-8 pt-8 border-t border-white/10">
                {[
                  { label: "Secure student login" },
                  { label: "Google sign-in supported" },
                  { label: "Under 2 minutes" },
                  { label: "100% free" },
                ].map((t) => (
                  <div key={t.label} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-sg-blue rounded-full flex-shrink-0" />
                    <span className="text-gray-400 text-xs font-semibold uppercase tracking-wide">
                      {t.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── STATS STRIP ─────────────────────────────────── */}
        <section className="bg-sg-blue py-6">
          <div className="max-w-6xl mx-auto px-5 sm:px-8">
            <div className="grid grid-cols-3 sm:grid-cols-3 gap-0 divide-x divide-blue-400">
              {[
                { value: `${SCHEMES.length}+`, label: "Funding schemes mapped" },
                { value: "Free",   label: "Free to use" },
                { value: "2 min",  label: "To get your results" },
              ].map((s) => (
                <div key={s.label} className="text-center px-4 sm:px-8">
                  <div className="font-display font-black text-2xl sm:text-4xl text-white leading-none mb-0.5">
                    {s.value}
                  </div>
                  <div className="text-blue-100 text-[11px] sm:text-xs font-semibold uppercase tracking-wide">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── ABOUT THE PROBLEM ───────────────────────────── */}
        <section className="py-20 sm:py-24 bg-sg-light">
          <div className="max-w-6xl mx-auto px-5 sm:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Left: copy */}
              <div>
                <div className="section-eyebrow">Why This Tool Exists</div>
                <h2 className="section-heading mb-5 text-balance">
                  Cost shouldn't be the reason a child stops playing sport
                </h2>
                <div className="space-y-4 text-gray-600 text-base leading-relaxed">
                  <p>
                    Singapore has more than {SCHEMES.length} major funding schemes for youth
                    sport — from government bursaries to private scholarships.
                    But the landscape is fragmented across different agencies,
                    websites, and deadlines.
                  </p>
                  <p>
                    Many families who qualify for help never apply — because
                    they don't know the schemes exist, or the system feels too
                    complicated to navigate.
                  </p>
                  <p className="font-semibold text-sg-dark">
                    We mapped everything in one place. Answer 6 questions.
                    See exactly what your child may qualify for.
                  </p>
                </div>
                <button
                  onClick={onStart}
                  className="btn-primary mt-8 text-sm px-7 py-3.5"
                >
                  Find Funding Now
                  <ArrowRight size={15} />
                </button>
              </div>

              {/* Right: problem cards */}
              <div className="space-y-3">
                {[
                  {
                    icon: "💸",
                    title: "Training fees add up fast",
                    body: "Equipment, competition entry, travel, coaching — it's expensive, and many families can't keep up.",
                  },
                  {
                    icon: "🗺️",
                    title: "The system is hard to navigate",
                    body: "Multiple agencies, different criteria, different websites. It takes hours to research — time most parents don't have.",
                  },
                  {
                    icon: "📋",
                    title: "Applications feel overwhelming",
                    body: "Complex forms, unclear documents, bureaucratic language. Many families give up before they start.",
                  },
                ].map((card) => (
                  <div
                    key={card.title}
                    className="sg-card p-5 flex items-start gap-4 card-lift"
                  >
                    <div className="text-2xl flex-shrink-0 w-10 h-10 bg-blue-50 flex items-center justify-center">
                      {card.icon}
                    </div>
                    <div>
                      <div className="font-display font-bold text-sg-dark text-base mb-1">
                        {card.title}
                      </div>
                      <div className="text-gray-500 text-sm leading-relaxed">
                        {card.body}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── HOW IT WORKS ────────────────────────────────── */}
        <section className="py-20 sm:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-5 sm:px-8">
            <div className="text-center mb-14">
              <div className="section-eyebrow">Simple Process</div>
              <h2 className="section-heading">How It Works</h2>
            </div>

            <div className="grid sm:grid-cols-3 gap-0 sm:gap-0">
              {STEPS.map((s, i) => (
                <div
                  key={s.n}
                  className={`relative p-8 sm:p-10 ${
                    i < STEPS.length - 1
                      ? "border-b sm:border-b-0 sm:border-r border-neutral-100"
                      : ""
                  }`}
                >
                  {/* Big number */}
                  <div className="font-display font-black text-6xl sm:text-7xl text-sg-blue opacity-10 leading-none mb-4 select-none">
                    {s.n}
                  </div>
                  <h3 className="font-display font-extrabold text-sg-dark text-xl mb-2">
                    {s.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{s.body}</p>
                  {/* Arrow connector */}
                  {i < STEPS.length - 1 && (
                    <ChevronRight
                      size={24}
                      className="hidden sm:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 text-sg-blue z-10"
                    />
                  )}
                </div>
              ))}
            </div>

            <div className="text-center mt-14">
              <button
                onClick={onStart}
                className="btn-primary px-10 py-4 text-sm group"
              >
                Start Now — Takes 2 Minutes
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </section>

        {/* ── SCHEMES MAPPED ──────────────────────────────── */}
        <section className="py-20 sm:py-24 bg-sg-light">
          <div className="max-w-6xl mx-auto px-5 sm:px-8">
            <div className="flex items-end justify-between mb-10 gap-4">
              <div>
                <div className="section-eyebrow">Funding Landscape</div>
                <h2 className="section-heading">Schemes We've Mapped</h2>
              </div>
              <button onClick={onSchemes} className="view-all-link hidden sm:inline-flex">
                View All Schemes
                <ChevronRight size={14} />
              </button>
            </div>

            <div className="grid sm:grid-cols-2 gap-px bg-neutral-200">
              {SCHEMES_PREVIEW.map((s, i) => (
                <div
                  key={s.name}
                  className="bg-white p-5 sm:p-6 flex items-center justify-between gap-4 group cursor-pointer hover:bg-blue-50 transition-colors"
                  onClick={onStart}
                >
                  <div className="flex items-center gap-4 min-w-0">
                    <div className="font-display font-black text-3xl text-sg-blue opacity-20 leading-none w-8 flex-shrink-0 select-none">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <div className="min-w-0">
                      <div className="font-display font-extrabold text-sg-dark text-base truncate group-hover:text-sg-blue transition-colors">
                        {s.name}
                      </div>
                      <div className="text-xs text-gray-400 mt-0.5">{s.org}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${s.tagColor}`}>
                      {s.tag}
                    </span>
                    <ChevronRight
                      size={16}
                      className="text-gray-300 group-hover:text-sg-blue transition-colors"
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 sm:hidden">
              <button onClick={onSchemes} className="btn-primary w-full py-4 text-sm justify-center">
                View All Schemes
                <ArrowRight size={15} />
              </button>
            </div>
          </div>
        </section>

        {/* ── SPORT CATEGORIES ────────────────────────────── */}
        <section className="py-16 bg-white border-t border-neutral-100">
          <div className="max-w-6xl mx-auto px-5 sm:px-8">
            <div className="text-center mb-8">
              <div className="section-eyebrow">All Sports Covered</div>
              <h2 className="section-heading text-xl sm:text-2xl">
                From Swimming to Football — We've Got It
              </h2>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                ["🏊", "Swimming"],
                ["⚽", "Football"],
                ["🏸", "Badminton"],
                ["🏀", "Basketball"],
                ["🏃", "Athletics"],
                ["🎾", "Tennis"],
                ["🏓", "Table Tennis"],
                ["🤸", "Gymnastics"],
                ["🥋", "Martial Arts"],
                ["🚴", "Cycling"],
                ["⛵", "Sailing"],
                ["🏑", "Hockey"],
                ["🏐", "Volleyball"],
                ["⛳", "Golf"],
                ["🚣", "Rowing"],
                ["🏅", "All Other Sports"],
              ].map(([icon, sport]) => (
                <button
                  key={sport}
                  onClick={onStart}
                  className="flex items-center gap-2 px-4 py-2.5 bg-sg-light hover:bg-blue-50 hover:text-sg-blue border border-neutral-200 hover:border-sg-blue text-sm font-semibold text-gray-700 transition-all duration-150"
                >
                  <span>{icon}</span>
                  {sport}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* ── BOTTOM CTA ──────────────────────────────────── */}
        <section className="bg-sg-dark py-20 sm:py-24 relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: 'linear-gradient(#2563EB 1px, transparent 1px), linear-gradient(90deg, #2563EB 1px, transparent 1px)',
              backgroundSize: '48px 48px',
            }}
          />
          <div className="relative max-w-3xl mx-auto px-5 sm:px-8 text-center">
            <div className="section-eyebrow text-blue-300 mb-3">Ready to Start?</div>
            <h2 className="font-display font-black text-3xl sm:text-5xl text-white mb-5 text-balance leading-tight">
              Your child's opportunity<br />is one quiz away
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              Free, private, and built for Singapore families. Log in when you're ready to find funding.
            </p>
            <button
              onClick={onStart}
              className="inline-flex items-center gap-2 px-10 py-4 bg-sg-blue hover:bg-sg-blue-dark text-white font-display font-black text-sm uppercase tracking-wider transition-colors group"
            >
              Find Funding — It's Free
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-sg-darker py-12">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="grid sm:grid-cols-3 gap-8 pb-8 border-b border-white/10">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-sg-blue flex items-center justify-center">
                  <span className="text-white font-display font-black text-base">S</span>
                </div>
                <div>
                  <div className="text-white font-display font-black text-sm">Sports Access Navigator</div>
                  <div className="text-gray-500 text-[10px] uppercase tracking-widest">Singapore</div>
                </div>
              </div>
              <p className="text-gray-500 text-xs leading-relaxed">
                Helping low-income Singapore families navigate youth sports
                funding. Free, private, and independent.
              </p>
            </div>

            {/* Links */}
            <div>
              <div className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-4">Quick Links</div>
              <div className="space-y-2">
                {[
                  { label: "Find Funding",   action: onStart },
                  { label: "All Schemes",    action: onSchemes },
                  { label: "About",          action: onAbout },
                  ...(user
                    ? [{ label: "Sign Out", action: onSignOut }]
                    : [{ label: "Login", action: onLogin }]),
                ].map(({ label, action }) => (
                  <button
                    key={label}
                    onClick={action}
                    className="block text-gray-500 hover:text-white text-sm transition-colors"
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            {/* Official links */}
            <div>
              <div className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-4">Official Sources</div>
              <div className="space-y-2">
                {[
                  ["SportCares", "https://www.sportsingapore.gov.sg/our-work/sportcares/about-us/overview/"],
                  ["Sport Singapore", "https://www.sportsingapore.gov.sg"],
                  ["ActiveSG", "https://www.activesgcircle.gov.sg"],
                  ["SOF", "https://www.sof.org.sg"],
                ].map(([name, url]) => (
                  <a
                    key={name}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-gray-500 hover:text-white text-sm transition-colors"
                  >
                    {name}
                    <ExternalLink size={11} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row justify-between gap-3">
            <p className="text-gray-600 text-xs">
              Built to reduce barriers for families in Singapore. Free to use with a secure student account.
            </p>
            <p className="text-gray-600 text-xs max-w-sm">
              Disclaimer: This tool provides guidance only. Final eligibility is
              determined by the official scheme provider.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
