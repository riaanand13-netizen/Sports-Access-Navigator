import { ArrowLeft, ExternalLink, ArrowRight } from "lucide-react";

const VALUES = [
  {
    icon: "❤️",
    label: "Built for families who need it most",
    body: "We focus on low-income Singapore families — parents and guardians who want the best for their children but face real financial barriers to sport participation.",
  },
  {
    icon: "🔒",
    label: "Privacy-first by design",
    body: "We collect zero personal data. No names, no NRIC numbers, no contact details. Your quiz answers are only used in your browser and never sent to any server.",
  },
  {
    icon: "⚡",
    label: "No bureaucratic complexity",
    body: "The Singapore sports funding landscape is fragmented. We've done the research so you don't have to — everything in plain, jargon-free English.",
  },
  {
    icon: "🎯",
    label: "Focused on action",
    body: "Every result links directly to the official application. No middlemen, no fees. We just help you find the door — you walk through it yourself.",
  },
];

const ORGS = [
  { name: "Sport Singapore",             url: "https://www.sportsingapore.gov.sg" },
  { name: "SportCares",                  url: "https://www.sportsingapore.gov.sg/our-work/sportcares/about-us/overview/" },
  { name: "Singapore Olympic Foundation",url: "https://www.sof.org.sg" },
  { name: "ActiveSG Circle",             url: "https://www.activesgcircle.gov.sg" },
  { name: "People's Association",        url: "https://www.pa.gov.sg" },
];

export default function AboutSection({ onBack, onStart }) {
  return (
    <div className="min-h-screen bg-white">

      {/* Nav */}
      <header className="bg-sg-dark sticky top-0 z-40">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 h-14 flex items-center justify-between gap-4">
          <button
            onClick={onBack}
            className="flex items-center gap-1.5 text-gray-400 hover:text-white text-sm font-semibold transition-colors"
          >
            <ArrowLeft size={16} />
            <span className="hidden sm:inline">Back to Home</span>
          </button>
          <span className="font-display font-black text-white text-sm uppercase tracking-wider">
            About
          </span>
          <button onClick={onStart} className="btn-primary text-xs px-5 py-2.5">
            Start Quiz
          </button>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="bg-sg-dark py-20 sm:py-24 relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: 'linear-gradient(#E31837 1px, transparent 1px), linear-gradient(90deg, #E31837 1px, transparent 1px)',
              backgroundSize: '48px 48px',
            }}
          />
          <div className="relative max-w-4xl mx-auto px-5 sm:px-8">
            <div className="inline-flex items-center gap-2 mb-5">
              <span className="w-2 h-2 rounded-full pulse-red" />
              <span className="text-red-400 text-xs font-bold uppercase tracking-widest">
                About This Project
              </span>
            </div>
            <h1 className="font-display font-black text-3xl sm:text-5xl text-white mb-5 text-balance leading-none">
              Removing barriers to sport<br />
              <span className="text-sg-red">for every child in Singapore</span>
            </h1>
            <p className="text-gray-300 text-lg max-w-2xl leading-relaxed">
              Sports Access Navigator was created to solve a specific problem:
              too many talented young athletes miss out not because they lack
              skill, but because their families can't afford the cost — or
              simply don't know that financial help exists.
            </p>
          </div>
        </section>

        {/* The problem */}
        <section className="py-16 sm:py-20 bg-sg-light">
          <div className="max-w-4xl mx-auto px-5 sm:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <div className="section-eyebrow">The Problem</div>
                <h2 className="section-heading mb-5">Why this needed to be built</h2>
              </div>
              <div className="space-y-4 text-gray-600 text-base leading-relaxed">
                <p>
                  Singapore has{" "}
                  <strong className="text-sg-dark">more than 8 significant funding schemes</strong>{" "}
                  for youth sport — from government bursaries to private scholarships.
                  But this landscape is fragmented across multiple agencies, websites,
                  and portals.
                </p>
                <p>
                  Research consistently shows that children from lower-income households
                  are far less likely to sustain sport participation beyond age 12, with{" "}
                  <strong className="text-sg-dark">cost cited as the #1 barrier</strong>.
                  Many families who qualify for assistance never apply — they simply
                  don't know the schemes exist.
                </p>
                <p>
                  We built this tool to change that. In under 2 minutes, parents can
                  see exactly which schemes their child may qualify for — ranked by
                  ease of access, with direct links to apply.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-4xl mx-auto px-5 sm:px-8">
            <div className="section-eyebrow">Our Approach</div>
            <h2 className="section-heading mb-10">How We Built It</h2>
            <div className="grid sm:grid-cols-2 gap-px bg-neutral-100">
              {VALUES.map((v) => (
                <div key={v.label} className="bg-white p-7">
                  <div className="text-2xl mb-4">{v.icon}</div>
                  <div className="font-display font-extrabold text-sg-dark text-lg mb-2 leading-snug">
                    {v.label}
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed">{v.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sources */}
        <section className="py-16 sm:py-20 bg-sg-light">
          <div className="max-w-4xl mx-auto px-5 sm:px-8">
            <div className="section-eyebrow">Transparency</div>
            <h2 className="section-heading mb-4">Our Sources</h2>
            <p className="text-gray-500 text-sm mb-8 max-w-xl leading-relaxed">
              All scheme information is sourced from official Singapore government
              and statutory board websites. Verify the latest details directly with
              the administering organisation before applying.
            </p>
            <div className="grid sm:grid-cols-2 gap-2">
              {ORGS.map((org) => (
                <a
                  key={org.name}
                  href={org.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between px-5 py-4 bg-white border border-neutral-200 hover:border-sg-red hover:bg-red-50 group transition-all"
                >
                  <span className="font-semibold text-gray-700 group-hover:text-sg-red text-sm transition-colors">
                    {org.name}
                  </span>
                  <div className="flex items-center gap-1 text-gray-400 group-hover:text-sg-red">
                    <ExternalLink size={13} />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="py-10 bg-amber-50 border-t border-amber-100">
          <div className="max-w-4xl mx-auto px-5 sm:px-8">
            <div className="flex items-start gap-4">
              <div className="text-2xl flex-shrink-0">⚠️</div>
              <div>
                <h3 className="font-display font-extrabold text-amber-900 text-lg mb-2">Disclaimer</h3>
                <p className="text-amber-800 text-sm leading-relaxed max-w-2xl">
                  This tool provides guidance only. Final eligibility for any scheme is
                  determined solely by the official scheme provider. Sports Access
                  Navigator is an independent tool and is not affiliated with Sport
                  Singapore, the People's Association, or any government agency. Always
                  verify eligibility and application requirements directly with the
                  administering organisation before applying.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 sm:py-20 bg-sg-dark">
          <div className="max-w-2xl mx-auto px-5 sm:px-8 text-center">
            <div className="section-eyebrow text-red-400 mb-3">Ready?</div>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-white mb-4 text-balance leading-tight">
              Find funding for your child now
            </h2>
            <p className="text-gray-400 mb-8">Free, private, takes under 2 minutes.</p>
            <button
              onClick={onStart}
              className="btn-primary px-10 py-4 text-sm group mx-auto"
            >
              Start the Quiz
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
