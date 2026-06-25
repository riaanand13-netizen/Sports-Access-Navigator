/**
 * Singapore Youth Sports Funding Schemes Data
 * All information is based on publicly available official sources.
 */

export const SCHEME_CATEGORIES = {
  "direct-support": {
    label: "Direct Support",
    description: "Bursaries, subsidies, and assistance that families can apply for directly.",
  },
  "community-funding": {
    label: "Community Funding",
    description: "Grants and programmes for community groups and sport-for-good initiatives.",
  },
  "disability-sport": {
    label: "Disability Sport",
    description: "Inclusive sport programmes and grants for persons with disabilities.",
  },
};

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
    category: "direct-support",
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
    category: "direct-support",
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
    category: "direct-support",
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
    category: "direct-support",
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
    category: "community-funding",
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
    category: "direct-support",
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
    category: "direct-support",
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
    category: "direct-support",
    matchWeight: 8,
  },
  {
    id: "moe-sp-cca",
    name: "Strategic Partnership CCA (SP-CCA)",
    shortName: "SP-CCA",
    org: "Ministry of Education & Sport Singapore",
    orgShort: "MOE / SportSG",
    orgUrl: "https://www.moe.gov.sg/education-in-sg/our-programmes/cca/strategic-partnership-cca",
    description:
      "Centralised, non-school-based CCAs run with Sport Singapore for secondary students whose schools do not offer specific sports. Professional coaches deliver programmes — no prior experience required.",
    covers: [
      "Structured sport training outside school",
      "Professional coaching and instruction",
      "Multi-school CCA participation",
      "Holistic character development through sport",
    ],
    eligibility: {
      citizenship: ["citizen", "pr"],
      ageMin: 13,
      ageMax: 17,
      incomeMax: 99999,
      school: ["secondary"],
      competitionLevel: ["recreational", "school", "club"],
    },
    estimatedValue: "Subsidised CCA programme (fees vary by sport)",
    deadline: "Enrolment timelines vary — contact MOE or your school",
    documents: [
      "School enrolment confirmation",
      "Parent/guardian consent form",
      "Proof that your school does not offer the SP-CCA sport",
    ],
    applicationLink: "https://www.moe.gov.sg/education-in-sg/our-programmes/cca/strategic-partnership-cca",
    accessRank: "medium",
    accessLabel: "Apply through school or MOE",
    accessNote:
      "Students enrolled in SP-CCA do not need a separate school-based CCA — enquire via MOE_SDCO@moe.gov.sg",
    tags: ["cca", "secondary", "moe", "structured-sport"],
    category: "direct-support",
    matchWeight: 7,
  },
  {
    id: "moe-fas",
    name: "MOE Financial Assistance Scheme (FAS)",
    shortName: "MOE FAS",
    org: "Ministry of Education (MOE)",
    orgShort: "MOE",
    orgUrl: "https://www.moe.gov.sg/financial-matters/financial-assistance",
    description:
      "Means-tested financial assistance for Singapore Citizen students in government, government-aided, SPED, and post-secondary institutions. Covers school fees, textbooks, uniforms, meals, and transport subsidies.",
    covers: [
      "Full waiver of school and miscellaneous fees",
      "Free textbooks and school uniforms",
      "School meal subsidies",
      "Public transport or school bus subsidies",
      "Cash bursary (pre-university level)",
    ],
    eligibility: {
      citizenship: ["citizen"],
      ageMin: 5,
      ageMax: 25,
      incomeMax: 1500,
      school: ["primary", "secondary", "ite", "poly", "jc", "sped"],
      competitionLevel: ["recreational", "school", "club", "national"],
    },
    estimatedValue: "Full fee waiver plus meal and transport subsidies",
    deadline: "Apply annually — typically open at the start of each academic year",
    documents: [
      "Singpass login for online application",
      "Household income details (auto-verified via HOMES from AY2026)",
      "NRIC of student and parent/guardian",
    ],
    applicationLink: "https://www.moe.gov.sg/financial-matters/financial-assistance",
    accessRank: "easy",
    accessLabel: "Easy to apply",
    accessNote:
      "From AY2026: gross household income ≤ $4,000 or per capita income ≤ $1,000 — apply via Parents Gateway or MOE e-application",
    tags: ["financial-assistance", "school-fees", "citizen-only", "moe"],
    category: "direct-support",
    matchWeight: 9,
  },
  {
    id: "ssp-fas",
    name: "Singapore Sports School Financial Assistance Scheme",
    shortName: "Sports School FAS",
    org: "Singapore Sports School",
    orgShort: "Singapore Sports School",
    orgUrl: "https://www.sportsschool.edu.sg/admissions/financial-assistance-scheme",
    description:
      "Tiered financial assistance for Singapore Citizen student-athletes in Singapore Sports School's secondary and IBDP programmes. Subsidies scale from 33% to 100% based on household income.",
    covers: [
      "School and supplementary fee subsidies (up to 100%)",
      "Boarding fee subsidy (up to 90% for boarders)",
      "Meal subsidy (up to 90% for non-boarders)",
      "Free textbooks and school attire (secondary)",
      "$1,600 bursary and full IBDP exam fee subsidy (IBDP)",
      "Transport subsidy of $63 per quarter",
    ],
    eligibility: {
      citizenship: ["citizen"],
      ageMin: 12,
      ageMax: 19,
      incomeMax: 3000,
      school: ["secondary"],
      competitionLevel: ["school", "club", "national", "regional"],
    },
    estimatedValue: "33%–100% fee subsidy depending on income tier",
    deadline: "Apply any time — fresh application required each academic year",
    documents: [
      "Birth certificate of student and siblings",
      "NRIC of all household members",
      "Latest payslips or employer income letter",
      "CPF contribution statement (last 6 months)",
      "Latest Income Tax Notice of Assessment",
      "MOE-FAS award letter (if transferring from primary school)",
    ],
    applicationLink: "https://www.sportsschool.edu.sg/admissions/financial-assistance-scheme",
    accessRank: "medium",
    accessLabel: "Apply via school portal",
    accessNote:
      "Submit online via the Parents Portal on SIAS — email ssp_fas@spexsg.org for enquiries",
    tags: ["financial-assistance", "sports-school", "student-athlete", "citizen-only"],
    category: "direct-support",
    matchWeight: 8,
  },
  {
    id: "communities-of-care-grant",
    name: "SportCares Communities of Care Grant",
    shortName: "Communities of Care Grant",
    org: "SportCares (Sport Singapore)",
    orgShort: "Sport Singapore",
    orgUrl: "https://www.sportsingapore.gov.sg/our-work/sportcares/initiatives/communities-of-care-grant/",
    description:
      "Funding for individuals and organisations using sport as a tool for community development and social change. Supports programmes that empower vulnerable and underserved groups through sport.",
    covers: [
      "Starter Grant — seed funding up to $50,000 (one year)",
      "Development Grant — up to $200,000 in year one (three-year programme)",
      "Sport-based community development programmes",
      "Equipment, venue, and programme running costs",
    ],
    eligibility: {
      citizenship: ["citizen", "pr", "ltvp"],
      ageMin: 5,
      ageMax: 99,
      incomeMax: 99999,
      school: ["primary", "secondary", "ite", "poly", "jc", "sped", "university", "none"],
      competitionLevel: ["recreational", "school", "club"],
    },
    estimatedValue: "Up to $50,000 (Starter) or $200,000/year (Development)",
    deadline: "Rolling — apply via OurSG Grants portal",
    documents: [
      "Programme proposal and budget breakdown",
      "Organisation profile or group details",
      "Community needs assessment",
      "COC Grant Infokit requirements",
    ],
    applicationLink: "https://oursggrants.gov.sg/grants/ssgcocopn/instruction",
    accessRank: "medium",
    accessLabel: "Group application",
    accessNote:
      "Designed for community groups and organisations — individuals can apply for Starter Grant programmes",
    tags: ["grant", "community", "sport-for-good", "vulnerable-groups"],
    category: "community-funding",
    matchWeight: 5,
  },
  {
    id: "sportcares-overview",
    name: "SportCares Programmes Overview",
    shortName: "SportCares",
    org: "SportCares (Sport Singapore)",
    orgShort: "Sport Singapore",
    orgUrl: "https://www.sportsingapore.gov.sg/our-work/sportcares/",
    description:
      "SportCares uses sport to serve communities in need — including children and youth from lower-income families, persons with disabilities, and other underserved groups. Explore the full range of programmes and support available.",
    covers: [
      "SportCares Bursary and Scholarships",
      "Communities of Care Grants",
      "Disability and inclusion programmes",
      "Youth development through sport",
    ],
    eligibility: {
      citizenship: ["citizen", "pr", "ltvp"],
      ageMin: 5,
      ageMax: 25,
      incomeMax: 99999,
      school: ["primary", "secondary", "ite", "poly", "jc", "sped", "university", "none"],
      competitionLevel: ["recreational", "school", "club", "national"],
    },
    estimatedValue: "Varies by programme",
    deadline: "Varies — see individual initiatives",
    documents: [
      "Depends on the specific SportCares programme you apply for",
    ],
    applicationLink: "https://www.sportsingapore.gov.sg/our-work/sportcares/",
    accessRank: "easy",
    accessLabel: "Start here",
    accessNote:
      "Central hub for all SportCares initiatives — browse to find the right programme for your family or community",
    tags: ["hub", "sportcares", "community", "overview"],
    category: "community-funding",
    matchWeight: 4,
  },
  {
    id: "sportcares-initiatives",
    name: "SportCares Initiatives Directory",
    shortName: "SportCares Initiatives",
    org: "SportCares (Sport Singapore)",
    orgShort: "Sport Singapore",
    orgUrl: "https://www.sportsingapore.gov.sg/our-work/sportcares/initiatives",
    description:
      "Directory of all SportCares funding initiatives including bursaries, scholarships, and community grants. A single starting point to discover every SportCares support programme currently available.",
    covers: [
      "SportCares Bursary",
      "SportCares Scholarships",
      "Communities of Care Grants",
      "Youth and community sport programmes",
    ],
    eligibility: {
      citizenship: ["citizen", "pr"],
      ageMin: 5,
      ageMax: 25,
      incomeMax: 99999,
      school: ["primary", "secondary", "ite", "poly", "jc", "sped", "university"],
      competitionLevel: ["recreational", "school", "club", "national"],
    },
    estimatedValue: "Varies by initiative",
    deadline: "Varies by initiative — check each programme page",
    documents: [
      "Varies by initiative — see individual programme requirements",
    ],
    applicationLink: "https://www.sportsingapore.gov.sg/our-work/sportcares/initiatives",
    accessRank: "easy",
    accessLabel: "Browse all initiatives",
    accessNote:
      "Use this directory to find and compare all SportCares funding options in one place",
    tags: ["hub", "sportcares", "directory", "initiatives"],
    category: "community-funding",
    matchWeight: 4,
  },
  {
    id: "sportcares-disability-programmes",
    name: "SportCares & ActiveSG Disability Programmes",
    shortName: "Disability Sport Programmes",
    org: "SportCares & ActiveSG (Sport Singapore)",
    orgShort: "Sport Singapore",
    orgUrl: "https://www.sportsingapore.gov.sg/our-work/sportcares/programmes/persons-with-disabilities/",
    description:
      "Tailored sports initiatives for individuals with disabilities and special needs. Includes Yes! I Can (fundamental sports skills with certified coaches) and Play-Ability (recreational sport opportunities, supported by Temasek Foundation Cares).",
    covers: [
      "Yes! I Can — fundamental sports skills programmes",
      "Play-Ability — recreational sports opportunities",
      "Caregiver workshops",
      "ActiveSG facility programmes for persons with disabilities",
    ],
    eligibility: {
      citizenship: ["citizen", "pr", "ltvp"],
      ageMin: 5,
      ageMax: 99,
      incomeMax: 99999,
      school: ["primary", "secondary", "sped", "none"],
      competitionLevel: ["recreational", "school", "club"],
    },
    estimatedValue: "Subsidised or free programmes (varies)",
    deadline: "Enrolment varies by programme — contact SportCares",
    documents: [
      "Programme registration form",
      "Medical or disability profile (if required by programme)",
      "Parent/guardian consent for minors",
    ],
    applicationLink: "https://www.enablingguide.sg/services-details/sportcares-and-activesg-programmes",
    accessRank: "easy",
    accessLabel: "Easy to access",
    accessNote:
      "Contact inclusivesport@sport.gov.sg or visit ActiveSG Circle to find programmes near you",
    tags: ["disability", "inclusion", "recreational", "special-needs"],
    category: "disability-sport",
    matchWeight: 8,
  },
  {
    id: "enabling-sports-fund",
    name: "Enabling Sports Fund (ESF)",
    shortName: "Enabling Sports Fund",
    org: "Sport Singapore (Inclusive Sport)",
    orgShort: "Sport Singapore",
    orgUrl: "https://www.inclusivesport.gov.sg/grants-and-schemes/enabling-sports-fund/apply/",
    description:
      "Funding for community-driven initiatives that make sport accessible and inclusive for persons with disabilities. Supports new and existing programmes including equipment, venue costs, transport, and coaching fees.",
    covers: [
      "Sports equipment for disability programmes",
      "Venue hire and facility costs",
      "Transport for programme participants",
      "Coaching and instructor fees",
      "Regular programmes (up to 90% of costs, capped at $100,000/year)",
    ],
    eligibility: {
      citizenship: ["citizen", "pr", "ltvp"],
      ageMin: 5,
      ageMax: 99,
      incomeMax: 99999,
      school: ["primary", "secondary", "ite", "poly", "jc", "sped", "university", "none"],
      competitionLevel: ["recreational", "school", "club"],
    },
    estimatedValue: "Up to $100,000 per year (regular programmes)",
    deadline: "Annual application window — typically August to September",
    documents: [
      "Programme proposal aligned to ESF objectives",
      "Budget breakdown of qualifying costs",
      "Organisation or group profile",
      "KPIs and impact measurement plan",
    ],
    applicationLink: "https://www.inclusivesport.gov.sg/grants-and-schemes/enabling-sports-fund/apply/",
    accessRank: "medium",
    accessLabel: "Group application",
    accessNote:
      "Open to individuals, groups, and organisations — apply via OurSG Grants during the annual window",
    tags: ["disability", "grant", "community", "inclusion"],
    category: "disability-sport",
    matchWeight: 6,
  },
  {
    id: "inclusive-sport-grants",
    name: "Inclusive Sport Grants & Schemes",
    shortName: "Inclusive Sport Schemes",
    org: "Sport Singapore (Inclusive Sport)",
    orgShort: "Sport Singapore",
    orgUrl: "https://www.inclusivesport.gov.sg/grants-and-schemes/",
    description:
      "Central hub for all disability sport grants and schemes in Singapore — including the Enabling Sports Fund, school sport schemes, SportCares Bursary for PWD, and Social Services Corporate Membership programmes.",
    covers: [
      "Enabling Sports Fund applications",
      "School disability sport schemes",
      "SportCares Bursary (for PWD)",
      "Social Services Corporate Membership",
    ],
    eligibility: {
      citizenship: ["citizen", "pr", "ltvp"],
      ageMin: 5,
      ageMax: 99,
      incomeMax: 99999,
      school: ["primary", "secondary", "ite", "poly", "jc", "sped", "university", "none"],
      competitionLevel: ["recreational", "school", "club", "national"],
    },
    estimatedValue: "Varies by scheme",
    deadline: "Varies — see individual grant pages",
    documents: [
      "Varies by scheme — see individual programme requirements",
    ],
    applicationLink: "https://www.inclusivesport.gov.sg/grants-and-schemes/",
    accessRank: "easy",
    accessLabel: "Start here",
    accessNote:
      "Browse all inclusive sport funding options — includes grants for individuals, schools, and community groups",
    tags: ["disability", "hub", "inclusion", "grants"],
    category: "disability-sport",
    matchWeight: 4,
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
