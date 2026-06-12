/**
 * Singapore Youth Sports Funding Schemes Data
 * All information is based on publicly available official sources.
 */

export const SCHEMES = [
  {
    id: "sportcares-bursary",
    name: "SportCares Bursary",
    shortName: "SportCares Bursary",
    org: "SportCares (Sport Singapore)",
    orgShort: "Sport Singapore",
    orgUrl: "https://www.sportsingapore.gov.sg/our-work/sportcares/about-us/overview/",
    description:
      "Provides financial assistance to children and youth from lower-income families so they can participate in structured sport programmes without worrying about cost.",
    covers: [
      "Sport programme fees",
      "Training equipment",
      "Competition entry fees",
      "Sports attire and shoes",
    ],
    eligibility: {
      citizenship: ["citizen", "pr"],
      ageMin: 5,
      ageMax: 19,
      incomeMax: 2500, // per capita household income
      school: ["primary", "secondary", "ite", "poly", "jc", "sped"],
      competitionLevel: ["recreational", "school", "club", "national"],
    },
    estimatedValue: "Up to $500 per year",
    deadline: "Rolling applications — apply anytime",
    documents: [
      "Child's birth certificate",
      "NRIC or passport (parent/guardian)",
      "Proof of income (CPF statement or payslips, last 3 months)",
      "School enrolment letter",
      "Utility bill or tenancy agreement (proof of address)",
    ],
    applicationLink: "https://www.sportsingapore.gov.sg/our-work/sportcares/initiatives/sportcares-bursary/",
    accessRank: "easy",
    accessLabel: "Easy to apply",
    accessNote: "Simple online form, no interview required",
    tags: ["financial-assistance", "all-sports", "primary", "secondary"],
    matchWeight: 10,
  },
  {
    id: "sof-peter-lim",
    name: "SOF-Peter Lim Scholarship",
    shortName: "SOF-Peter Lim",
    org: "Singapore Olympic Foundation (SOF)",
    orgShort: "Singapore Olympic Foundation",
    orgUrl: "https://www.sof.org.sg",
    description:
      "Annual scholarship for talented young athletes who show both sporting ability and financial need. Covers education and training costs over multiple years.",
    covers: [
      "School fees and education expenses",
      "Training fees",
      "Sports equipment",
      "Local and overseas competition costs",
      "Sports science and medical support",
    ],
    eligibility: {
      citizenship: ["citizen"],
      ageMin: 7,
      ageMax: 18,
      incomeMax: 3000,
      school: ["primary", "secondary", "ite", "poly", "jc"],
      competitionLevel: ["club", "national", "regional"],
    },
    estimatedValue: "Up to $10,000 per year",
    deadline: "Annual intake — typically opens February to March each year",
    documents: [
      "Child's birth certificate",
      "NRIC (parent/guardian)",
      "Latest 3 months' payslips or CPF contribution history",
      "School report card (last 2 years)",
      "Endorsement letter from coach or national sports association",
      "Competition results or achievements",
    ],
    applicationLink: "https://sof.sg/scholarship/",
    accessRank: "medium",
    accessLabel: "Moderate effort",
    accessNote: "Requires coach endorsement and competition record",
    tags: ["scholarship", "competitive", "citizen-only", "multi-year"],
    matchWeight: 9,
  },
  {
    id: "activesg-credits",
    name: "ActiveSG Credits",
    shortName: "ActiveSG Credits",
    org: "ActiveSG (Sport Singapore)",
    orgShort: "ActiveSG",
    orgUrl: "https://www.activesgcircle.gov.sg",
    description:
      "Every Singapore citizen and PR receives $100 in ActiveSG credits to use at any Sport Singapore facility or approved programme. Credits do not expire.",
    covers: [
      "Swimming lessons",
      "Sport facility bookings",
      "ActiveSG-run classes and programmes",
      "Youth sport camps",
    ],
    eligibility: {
      citizenship: ["citizen", "pr"],
      ageMin: 0,
      ageMax: 99,
      incomeMax: 99999,
      school: ["primary", "secondary", "ite", "poly", "jc", "sped", "university", "none"],
      competitionLevel: ["recreational", "school", "club", "national", "regional"],
    },
    estimatedValue: "$100 in credits (one-time, per person)",
    deadline: "No deadline — credits available on registration",
    documents: [
      "Singpass login (to register)",
      "NRIC or birth certificate",
    ],
    applicationLink: "https://www.activesgcircle.gov.sg/myactivesg-plus",
    accessRank: "easy",
    accessLabel: "Very easy to get",
    accessNote: "Instant credits on Singpass registration — takes 5 minutes",
    tags: ["credits", "instant", "facility-access", "all-ages"],
    matchWeight: 10,
  },
  {
    id: "athletes-inspire-fund",
    name: "Athletes' Inspire Fund",
    shortName: "Athletes' Inspire Fund",
    org: "Sport Singapore",
    orgShort: "Sport Singapore",
    orgUrl: "https://www.sportsingapore.gov.sg",
    description:
      "Supports promising youth athletes from lower-income families who are competing at national or international level. Helps cover the extra costs of elite training.",
    covers: [
      "High-performance training fees",
      "Overseas competition travel",
      "Sports equipment and attire",
      "Sports science support",
      "Coaching fees",
    ],
    eligibility: {
      citizenship: ["citizen", "pr"],
      ageMin: 12,
      ageMax: 21,
      incomeMax: 3500,
      school: ["secondary", "ite", "poly", "jc", "university"],
      competitionLevel: ["national", "regional", "international"],
    },
    estimatedValue: "Up to $20,000 per year",
    deadline:
      "Apply through your National Sports Association (NSA) — timelines vary by sport",
    documents: [
      "Child's NRIC or birth certificate",
      "Parent/guardian NRIC",
      "Income documents (last 3 months' payslips or NOA)",
      "NSA nomination or endorsement letter",
      "Proof of national or international competition participation",
      "Training schedule from certified coach",
    ],
    applicationLink: "https://go.gov.sg/aif",
    accessRank: "hard",
    accessLabel: "Requires NSA nomination",
    accessNote:
      "Must be nominated by your National Sports Association — speak to your coach first",
    tags: ["elite", "high-performance", "national-level", "competitive"],
    matchWeight: 7,
  },
  {
    id: "active-citizen-grant",
    name: "Active Citizen Grant",
    shortName: "Active Citizen Grant",
    org: "Sport Singapore",
    orgShort: "Sport Singapore",
    orgUrl: "https://www.sportsingapore.gov.sg",
    description:
      "Supports community-based sport events and programmes organised by residents' groups, grassroots organisations, and civil society. Can benefit youth in the community.",
    covers: [
      "Community sport event costs",
      "Equipment for community sport programmes",
      "Venue hire for grassroots sport activities",
      "Coaching workshops",
    ],
    eligibility: {
      citizenship: ["citizen", "pr"],
      ageMin: 5,
      ageMax: 35,
      incomeMax: 99999,
      school: ["primary", "secondary", "ite", "poly", "jc", "sped", "university"],
      competitionLevel: ["recreational", "school", "club"],
    },
    estimatedValue: "Up to $5,000 per project",
    deadline: "Rolling — apply at least 8 weeks before activity date",
    documents: [
      "Organisation registration documents (if applying as a group)",
      "Event or programme proposal",
      "Budget breakdown",
      "Proof of community need",
    ],
    applicationLink: "https://www.activesgcircle.gov.sg/industry/support/active-citizen-grant",
    accessRank: "medium",
    accessLabel: "Moderate effort",
    accessNote:
      "Designed for community groups, not individuals — best applied through an RC or PA",
    tags: ["community", "grassroots", "group-application", "recreational"],
    matchWeight: 5,
  },
  {
    id: "pa-community-sport",
    name: "PA Community Sport Programmes",
    shortName: "PA Community Sport",
    org: "People's Association (PA)",
    orgShort: "People's Association",
    orgUrl: "https://www.pa.gov.sg/engage/connect-with-community/community-sports",
    description:
      "Subsidised sport and fitness programmes run by the People's Association across community centres and clubs. Open to all residents at very low cost.",
    covers: [
      "Subsidised swimming lessons",
      "Badminton, table tennis, and multi-sport classes",
      "Martial arts and dance programmes",
      "Holiday sport camps for children",
    ],
    eligibility: {
      citizenship: ["citizen", "pr", "ltvp"],
      ageMin: 5,
      ageMax: 18,
      incomeMax: 99999,
      school: ["primary", "secondary", "sped"],
      competitionLevel: ["recreational", "school"],
    },
    estimatedValue: "Classes from $5–$30 per month (heavily subsidised)",
    deadline:
      "Enrol directly at your nearest Community Club — most terms run quarterly",
    documents: [
      "Child's birth certificate",
      "Proof of residency (if required for further subsidies)",
    ],
    applicationLink: "https://www.pa.gov.sg/our-programmes/community-sports/about-community-sports/",
    accessRank: "easy",
    accessLabel: "Very easy to access",
    accessNote: "Walk in or call your nearest Community Club — no complex paperwork",
    tags: ["community", "low-cost", "grassroots", "pa"],
    matchWeight: 9,
  },
  {
    id: "nsa-specific-grants",
    name: "NSA-Specific Hardship Grants",
    shortName: "NSA Hardship Grants",
    org: "National Sports Associations (sport-specific)",
    orgShort: "Your Sport's NSA",
    orgUrl: "https://www.sportsingapore.gov.sg/about-us/our-network/national-sports-associations",
    description:
      "Many National Sports Associations (NSAs) — such as Swimming Singapore, Football Association of Singapore, and others — offer their own hardship or development grants for young members.",
    covers: [
      "Membership and registration fees",
      "Competition entry fees",
      "Training camp costs",
      "Equipment specific to the sport",
    ],
    eligibility: {
      citizenship: ["citizen", "pr"],
      ageMin: 6,
      ageMax: 21,
      incomeMax: 4000,
      school: ["primary", "secondary", "ite", "poly", "jc", "sped"],
      competitionLevel: ["club", "national", "regional"],
    },
    estimatedValue: "Varies by NSA — typically $200 to $5,000",
    deadline: "Varies by NSA — contact your sport's NSA directly",
    documents: [
      "NSA membership number",
      "Income proof (payslips or CPF)",
      "Coach endorsement or club recommendation letter",
      "Competition participation record",
    ],
    applicationLink: "https://www.activesgcircle.gov.sg/find-a-national-sports-association",
    accessRank: "medium",
    accessLabel: "Check with your NSA",
    accessNote:
      "Contact your sport's NSA directly — schemes and criteria vary widely by sport",
    tags: ["sport-specific", "nsa", "competitive", "hardship"],
    matchWeight: 7,
  },
  {
    id: "sportcares-scholarships",
    name: "SportCares Scholarships",
    shortName: "SportCares Scholarships",
    org: "SportCares (Sport Singapore)",
    orgShort: "Sport Singapore",
    orgUrl: "https://www.sportsingapore.gov.sg/our-work/sportcares/about-us/overview/",
    description:
      "Multi-year scholarships for youth aged 13–25 who use sport as a pathway out of disadvantage. Includes mentorship, life skills training, and employment support alongside financial aid.",
    covers: [
      "Training and coaching fees",
      "Competition costs",
      "Educational support",
      "Mentorship and life skills programmes",
      "Equipment and attire",
    ],
    eligibility: {
      citizenship: ["citizen", "pr"],
      ageMin: 13,
      ageMax: 25,
      incomeMax: 2500,
      school: ["secondary", "ite", "poly", "jc", "sped", "university"],
      competitionLevel: ["recreational", "club", "school", "national"],
    },
    estimatedValue: "Up to $3,000 per year, multi-year commitment",
    deadline:
      "Annual cohort intake — applications typically open in Q1 each year",
    documents: [
      "NRIC or birth certificate",
      "Parent/guardian NRIC",
      "CPF contribution history or payslips (last 3 months)",
      "School report card",
      "Personal essay (why sport matters to you)",
      "Two references (school counsellor, teacher, or coach)",
    ],
    applicationLink: "https://www.sportsingapore.gov.sg/our-work/sportcares/initiatives/",
    accessRank: "medium",
    accessLabel: "Moderate effort",
    accessNote:
      "Holistic application — includes personal essay; designed to support the whole child",
    tags: ["scholarship", "mentorship", "multi-year", "disadvantaged-youth"],
    matchWeight: 8,
  },
];

export const ACCESS_RANK_ORDER = { easy: 1, medium: 2, hard: 3 };

/**
 * Match schemes to quiz answers and return ranked results.
 */
export function matchSchemes(answers) {
  const { age, citizenship, schoolType, income, competitionLevel } = answers;

  const ageNum = parseInt(age, 10);
  const incomeNum = parseInt(income, 10);

  const results = SCHEMES.map((scheme) => {
    let score = 0;
    const warnings = [];

    const el = scheme.eligibility;

    // Age check
    if (ageNum >= el.ageMin && ageNum <= el.ageMax) {
      score += 3;
    } else {
      warnings.push(`Usually for ages ${el.ageMin}–${el.ageMax}`);
    }

    // Citizenship check
    if (el.citizenship.includes(citizenship)) {
      score += 3;
    } else if (citizenship === "ltvp" && el.citizenship.includes("pr")) {
      warnings.push("Typically requires PR or citizenship — check with provider");
    } else {
      warnings.push("May have citizenship restrictions — confirm with provider");
    }

    // Income check
    if (incomeNum <= el.incomeMax) {
      score += 2;
    } else if (el.incomeMax === 99999) {
      score += 2;
    } else {
      warnings.push(`Income limit is usually around $${el.incomeMax.toLocaleString()} per capita`);
    }

    // School type check
    if (el.school.includes(schoolType)) {
      score += 1;
    }

    // Competition level check
    if (el.competitionLevel.includes(competitionLevel)) {
      score += 1;
    }

    // Add match weight
    score += scheme.matchWeight * 0.3;

    const isMatch = score >= 4;
    const matchStrength =
      score >= 8 ? "strong" : score >= 5 ? "good" : "partial";

    return {
      ...scheme,
      score,
      isMatch,
      matchStrength,
      warnings,
    };
  });

  return results
    .filter((r) => r.isMatch)
    .sort((a, b) => {
      // Primary: sort by access rank (easy first)
      const rankDiff =
        ACCESS_RANK_ORDER[a.accessRank] - ACCESS_RANK_ORDER[b.accessRank];
      if (rankDiff !== 0) return rankDiff;
      // Secondary: sort by score
      return b.score - a.score;
    });
}
