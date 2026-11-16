export type Language = "en" | "fr" | "de" | "it" | "ro" | "es";

export interface WebsiteCopy {
  nav: {
    home: string;
    whatIsIt: string;
    framework: string;
    whyMatters: string;
    whatYouGet: string;
    media: string;
    testimonials: string;
    collaborate: string;
    requestQuote: string;
  };
  hero: {
    badge: string;
    title1: string;
    title2: string;
    subtitle: string;
    description: string;
    frameworkNote: string;
    btnCurriculum: string;
    btnStudy: string;
  };
  awards: {
    title: string;
    tripleE: string;
    tripleEDesc: string;
    bafta: string;
    baftaDesc: string;
    dutchEdTech: string;
    luxStartup: string;
  };
  whatIsIt: {
    badge: string;
    title: string;
    description1: string;
    description2: string;
    specs: {
      time: string;
      timeDesc: string;
      players: string;
      playersDesc: string;
      prep: string;
      prepDesc: string;
      academic: string;
      academicDesc: string;
    };
  };
  framework: {
    badge: string;
    title: string;
    subtitle: string;
    pilotInfo: string;
    areas: Array<{
      id: string;
      name: string;
      coverage: string;
      desc: string;
      points: string[];
      highlight?: string;
    }>;
    statsTitle: string;
    stats: Array<{ label: string; value: number; color: string }>;
    paperTitle: string;
    paperCitation: string;
    paperInstitution: string;
    coordinatorsNote: string;
  };
  whyMatters: {
    badge: string;
    title: string;
    items: Array<{
      title: string;
      desc: string;
      tag: string;
    }>;
  };
  whatYouGet: {
    badge: string;
    title: string;
    items: Array<{
      title: string;
      desc: string;
      icon: string;
    }>;
  };
  media: {
    badge: string;
    title: string;
    subtitle: string;
    video1: {
      tag: string;
      title: string;
      desc: string;
      quote: string;
      type: "local" | "youtube";
      src?: string;
    };
    video2: {
      tag: string;
      title: string;
      desc: string;
      quote: string;
      type: "youtube";
      src: string;
    };
    video3: {
      tag: string;
      title: string;
      desc: string;
      quote: string;
      type: "local" | "youtube";
      src?: string;
    };
  };
  testimonials: {
    badge: string;
    title: string;
    featured: {
      quote: string;
      author: string;
      location: string;
      date: string;
    };
    quotes: Array<{
      quote: string;
      author: string;
      role: string;
    }>;
  };
  collaborate: {
    badge: string;
    title: string;
    description: string;
    quote: string;
    btnSubmit: string;
    emailsTitle: string;
    form: {
      name: string;
      school: string;
      email: string;
      country: string;
      role: string;
      message: string;
    };
  };
  footer: {
    tagline: string;
    rights: string;
    trademark: string;
    partnership: string;
  };
}

export const websiteCopy: Record<Language, WebsiteCopy> = {
  en: {
    nav: {
      home: "Home",
      whatIsIt: "What is it?",
      framework: "EU Framework",
      whyMatters: "Why it Matters",
      whatYouGet: "What You Get",
      media: "In Action",
      testimonials: "Pilot Results",
      collaborate: "Collaborate",
      requestQuote: "Request a Quote",
    },
    hero: {
      badge: "41 European Countries • Strategy & Trivia",
      title1: "MOBILITY",
      title2: "ERA",
      subtitle: "The Board Game",
      description:
        "Financial literacy, civic awareness & digital inclusion — taught in one board game, aligned with the EU framework. In one classroom hour, students aged 14+ learn how to navigate real life: income, taxes, work, and civic rights.",
      frameworkNote:
        "Aligned with EU/OECD-INFE Financial Competence Framework for Children and Youth. Piloted and measured across 10 schools in Luxembourg. Ready for your curriculum.",
      btnCurriculum: "See How It Maps to Curriculum",
      btnStudy: "Download Pilot Study (UNU-MERIT)",
    },
    awards: {
      title: "Recognized & Endorsed Across Europe",
      tripleE: "Triple E Awards 2023",
      tripleEDesc: "European Prize Winner (Community Engagement)",
      bafta: "BAFTA Awards 2024",
      baftaDesc: "Games Beyond Entertainment (Stage 2)",
      dutchEdTech: "Member of Dutch EdTech",
      luxStartup: "Member of Luxembourg Startup Association",
    },
    whatIsIt: {
      badge: "EdTech Innovation",
      title: "What is Mobility Era?",
      description1:
        "Mobility Era is an educational board game (with a free companion demo app on the App Store & Google Play) that teaches young people how to navigate real-life situations involving income, taxation, work, and civics.",
      description2:
        "Inspired by PhD research funded by the National Research Fund of Luxembourg (FNR), it blends academic depth with fast, accessible, engaging gameplay. One session fits neatly into a standard 45–60 minute class period with zero teacher preparation required.",
      specs: {
        time: "60–90 Min",
        timeDesc: "Fits a single class period — no multi-lesson commitment",
        players: "4–5 Players",
        playersDesc: "Per board game set, encouraging active peer debate",
        prep: "Zero Prep",
        prepDesc: "Includes full curriculum guide & turnkey classroom scenarios",
        academic: "Research-Backed",
        academicDesc: "Based on PhD thesis & UNU-MERIT / EIBI national pilot study",
      },
    },
    framework: {
      badge: "Evidence-Based Learning",
      title: "Aligned with the EU Financial Competence Framework",
      subtitle: "Not just 'inspired by' it — empirically measured and verified",
      pilotInfo:
        "Mobility Era Game fits the official EU/OECD-INFE Financial Competence Framework for Children and Youth (2023). In a national pilot study with 195 students across 10 schools in Luxembourg, the game covered key competence areas with proven learning gains.",
      areas: [
        {
          id: "01",
          name: "Money & Transactions",
          coverage: "100% Fully Covered (4/4)",
          desc: "The game uses its own currency (European Currency Units — EKUs) and Country Cards with real gross and net income figures and personal income tax for 42 European countries. Every move to a new country comes with a work contract.",
          points: [
            "Over 300 banknotes from 1 to 1,000 EKUs",
            "Real gross & net salary calculations across 42 European nations",
            "Official personal income tax rates",
            "Work contracts offered upon cross-border mobility",
          ],
          highlight: "95% of students showed solid grasp of income vs. taxes",
        },
        {
          id: "02",
          name: "Planning & Managing Finances",
          coverage: "Approx. 75% Covered",
          desc: "A life-cycle simulation spanning from age 11 to 99: players budget, manage recurring income and expenditure, and choose between spending, saving, and investing in health and education. Retirement and pensions are paid via the Public Budget.",
          points: [
            "Life Cycle Simulation: budgeting across life stages (11–99 years)",
            "Managing monthly & annual financial cycles with real living expenses",
            "Strategic investments in Health (+HeP) and Education for future returns",
            "Retirement and pension planning through game longevity",
          ],
        },
        {
          id: "03",
          name: "Risk & Reward",
          coverage: "Partially Covered (Transparent Design)",
          desc: "Financial setbacks occur through realistic game events — job loss, health shocks, economic fluctuations, moving costs — letting students experience financial risk firsthand. Insurance and formal risk management are not part of Edition 1 (we say so openly, because academic credibility matters).",
          points: [
            "Life events: job changes, unforeseen medical expenses, relocation costs",
            "Trade-offs between safe, low-yield decisions and riskier investments",
            "Understanding social safety nets as collective risk mitigation",
          ],
        },
        {
          id: "04",
          name: "Financial Landscape",
          coverage: "Game's Strongest Dimension",
          desc: "Unlike classic games (like Monopoly) where a private bank decides, in Mobility Era a Public Budget distributes salaries, collects taxes, and pays pensions. Students learn the solidarity principle of the European welfare state, civic rights, and public spending.",
          points: [
            "Public Budget mechanism: simulates the European welfare state & civic solidarity",
            "Understanding how taxes directly fund schools, hospitals & infrastructure",
            "Consumer rights, contracts, and civic participation across the EU",
            "Demonstrated +10% increase in EU awareness among high schoolers",
          ],
          highlight: "Public Budget mechanism teaches civic solidarity vs Monopoly banks",
        },
      ],
      statsTitle: "What Luxembourg Students Learned Most (Pilot Survey Results)",
      stats: [
        { label: "Geography & European Country Facts", value: 40, color: "#1a66ff" },
        { label: "Taxes & Public Finance Mechanisms", value: 35, color: "#0ea5e9" },
        { label: "Money Management & Economics", value: 19, color: "#10b981" },
        { label: "Life Situations & Safety Nets", value: 6, color: "#f59e0b" },
      ],
      paperTitle:
        "The Impact of Educational Gaming on Financial Education: A National Pilot Project Using the Mobility Era Game in Luxembourg",
      paperCitation:
        "Working Paper by Dr. Irina Burlacu-De Paoli (UNU-MERIT / Maastricht University), financed by the European Investment Bank Institute (EIBI) and implemented by Researchista.",
      paperInstitution:
        "Field research conducted across 10 secondary schools with 195 pupils (English, French & German tracks) under SCRIPT & Ministry of Education Luxembourg data governance.",
      coordinatorsNote:
        "For Curriculum Coordinators: A detailed competency mapping document is available on request, showing how each game component maps directly into national curricula.",
    },
    whyMatters: {
      badge: "Built for Educators",
      title: "Why This Matters for Your School",
      items: [
        {
          tag: "EU-Level Credibility",
          title: "Aligned with Official Standards",
          desc: "The EU/OECD-INFE framework is the shared standard for financial education across EU Member States. Using Mobility Era proves institutional alignment with national educational strategies.",
        },
        {
          tag: "High Classroom Impact",
          title: "One Hour, Real Impact",
          desc: "Fits effortlessly into a packed school timetable. One class period, four to five students per board, zero teacher preparation or complicated training required.",
        },
        {
          tag: "Cross-Disciplinary",
          title: "More Than Just Finance",
          desc: "Uniquely connects financial literacy, civic awareness, European geography, and digital inclusion. Tested successfully in Economics, Geography, Languages, and Civics classes.",
        },
        {
          tag: "Empirically Tested",
          title: "Tested, Not Just Conceived",
          desc: "Piloted in 10 Luxembourgish schools with a pre- and post-assessment study financed by the European Investment Bank Institute (EIBI). 52% of students volunteered to play again.",
        },
      ],
    },
    whatYouGet: {
      badge: "Classroom Package",
      title: "Everything You Need to Run the Game",
      items: [
        {
          title: "Physical Board Game Sets",
          desc: "Durable, high-quality boards, 300+ EKU banknotes, 42 European Country Cards, Life Cards, wooden tokens, and dice.",
          icon: "box",
        },
        {
          title: "Complete Teacher's Guide",
          desc: "Turnkey pedagogical scenarios, classroom discussion prompts, and curriculum alignment maps — zero prep needed.",
          icon: "book",
        },
        {
          title: "Free Digital Companion App",
          desc: "Interactive demo app on iOS App Store and Google Play for digital follow-up and homework challenges.",
          icon: "smartphone",
        },
        {
          title: "Teacher Training & Workshops",
          desc: "Tailored in-person or remote onboarding sessions for teachers and curriculum coordinators by Researchista experts.",
          icon: "users",
        },
      ],
    },
    media: {
      badge: "Real Classrooms",
      title: "See Mobility Era in Action",
      subtitle:
        "Watch how teachers and students engage with real-world public finance and European citizenship across schools and universities.",
      video1: {
        tag: "National Television Feature • Moldova",
        title: "National TV Report on Educational Innovation",
        desc: "Featured on Moldovan state television showcasing the game being played in schools, teacher reactions, and student engagement in real classrooms.",
        quote: "Watch how teachers and students use Mobility Era in real classrooms to discuss budgets and European mobility.",
        type: "local",
        src: "/herovideo.mp4",
      },
      video2: {
        tag: "University Master's Review • Ireland",
        title: "Prof. in Taxation & Finance, NUIG Galway",
        desc: "A Professor at the National University of Ireland Galway explains why the game is included as an educational tool in the Master's in Accounting & Taxation.",
        quote: "Played across multiple schools and universities across the EU — because it is fun and demystifies complex tax systems.",
        type: "youtube",
        src: "https://www.youtube.com/embed/Wut1_fKW-Ts",
      },
      video3: {
        tag: "Interactive Gameplay Overview",
        title: "How One Class Session Transforms Learning",
        desc: "From rolling dice to calculating gross vs. net salaries and contributing to the Public Budget, see the 60-minute gameplay flow in action.",
        quote: "Students engage in friendly competition while mastering vital life skills.",
        type: "local",
        src: "/video.mp4",
      },
    },
    testimonials: {
      badge: "Testimonials",
      title: "What Teachers and Students Say",
      featured: {
        quote:
          "I would highly recommend this game to my colleagues. The students fully engaged and were engrossed in the game. They found it stimulating and all the questions linked to the European aspect of the game led to positive competition among students. They learned difficult topics of finance while playing and were able to compare life situations in different European countries. The Irish Inspector present praised the game, saying that she learnt something as well.",
        author: "Teacher, Centre for European Schooling (CES)",
        location: "Accredited European School in Dunshaughlin, Ireland",
        date: "April 2024",
      },
      quotes: [
        {
          quote:
            "Within one classroom hour, students were debating taxes, welfare safety nets, and budget trade-offs with genuine passion and analytical reasoning.",
          author: "Secondary Economics Teacher",
          role: "Pilot School, Luxembourg",
        },
        {
          quote:
            "It didn't feel like a lecture at all! We learned why taxes exist, how public hospitals and schools get funded, and why gross salary is different from net.",
          author: "Student (Age 16)",
          role: "Lycée Participant, Luxembourg",
        },
        {
          quote:
            "The physical game with real European data creates an active social atmosphere where students help each other calculate conversions and understand trade-offs.",
          author: "Social Sciences Educator",
          role: "International School Network",
        },
      ],
    },
    collaborate: {
      badge: "Join the Pilot Network",
      title: "Let's Collaborate",
      description:
        "We are seeking pilot schools across Europe, education partners, and public co-funding to scale the game digitally — so financial and civic education becomes accessible to all.",
      quote:
        "Education is not just what we learn — it's how we understand and navigate our world. Let's make it real, relevant, and engaging.",
      btnSubmit: "Submit Inquiry",
      emailsTitle: "Direct Inquiries",
      form: {
        name: "Your Name",
        school: "School / Institution Name",
        email: "Institutional Email",
        country: "Country",
        role: "Role (e.g. Teacher, Headmaster, Curriculum Director)",
        message: "How would you like to pilot Mobility Era in your school?",
      },
    },
    footer: {
      tagline: "Connecting the ivory tower with the public since 2014.",
      rights: "All rights reserved.",
      trademark:
        "Mobility Era Game is a registered trademark of Researchista (BOIP Reg. #1395977, Class 28.41).",
      partnership:
        "National Pilot Project supported by the European Investment Bank Institute (EIBI) and SCRIPT (Ministry of Education, Luxembourg).",
    },
  },

  fr: {
    nav: {
      home: "Accueil",
      whatIsIt: "Qu'est-ce que c'est ?",
      framework: "Cadre UE",
      whyMatters: "Pourquoi c'est pertinent",
      whatYouGet: "Ce que vous recevez",
      media: "En images",
      testimonials: "Témoignages",
      collaborate: "Collaborons",
      requestQuote: "Demander un devis",
    },
    hero: {
      badge: "41 Pays Européens • Stratégie & Culture Générale",
      title1: "MOBILITY",
      title2: "ERA",
      subtitle: "Le Jeu de Société",
      description:
        "Éducation financière, civique et inclusion numérique — dans un seul jeu, aligné sur le cadre européen. En une heure de classe, les élèves de 14 ans et plus apprennent à naviguer dans la vie réelle : revenus, impôts, travail et droits civiques.",
      frameworkNote:
        "Aligné sur le cadre de compétences financières UE/OCDE-INFE pour l'enfance et la jeunesse. Piloté et évalué dans 10 écoles au Luxembourg.",
      btnCurriculum: "Découvrez l'intégration au programme",
      btnStudy: "Télécharger l'étude pilote (PDF)",
    },
    awards: {
      title: "Distinctions et Reconnaissances Européennes",
      tripleE: "Triple E Awards 2023",
      tripleEDesc: "Prix européen (Initiative d'engagement communautaire)",
      bafta: "BAFTA Awards 2024",
      baftaDesc: "Games Beyond Entertainment (Deuxième étape)",
      dutchEdTech: "Membre de Dutch EdTech",
      luxStartup: "Membre de la Luxembourg Startup Association",
    },
    whatIsIt: {
      badge: "Innovation EdTech",
      title: "Qu'est-ce que Mobility Era ?",
      description1:
        "Mobility Era est un jeu de société éducatif (avec une application démo gratuite sur l'App Store et Google Play) qui apprend aux jeunes à naviguer dans des situations réelles liées aux revenus, à la fiscalité, au travail et à la citoyenneté.",
      description2:
        "Issu d'une thèse de doctorat financée par le Fonds national de la recherche du Luxembourg (FNR), il allie rigueur académique et accessibilité ludique. Une séance d'une heure maximum, 4 à 5 joueurs par plateau, tenant parfaitement dans une seule période de cours sans formation préalable.",
      specs: {
        time: "60–90 Min",
        timeDesc: "Tient dans une seule période de cours",
        players: "4–5 Joueurs",
        playersDesc: "Par boîte de jeu, stimulant les échanges constructifs",
        prep: "Zéro Préparation",
        prepDesc: "Guide pédagogique complet et scénarios prêts à l'emploi",
        academic: "Recherche Académique",
        academicDesc: "Issu de recherche doctorale et d'un projet pilote EIBI / UNU-MERIT",
      },
    },
    framework: {
      badge: "Apprentissage Fondé sur les Données",
      title: "Aligné sur le cadre de compétences financières de l'UE",
      subtitle: "Pas seulement « inspiré » par lui — rigoureusement évalué",
      pilotInfo:
        "Mobility Era Game correspond au cadre de compétences financières UE/OCDE-INFE pour l'enfance et la jeunesse (2023). Voici comment une seule session de jeu couvre ses quatre domaines, mesuré auprès de 195 élèves dans 10 écoles du Luxembourg.",
      areas: [
        {
          id: "01",
          name: "Argent et transactions",
          coverage: "Entièrement couvert (4 sur 4)",
          desc: "Le jeu utilise sa propre monnaie (European Currency Units - EKUs) et des Cartes Pays avec des revenus bruts et nets réels et l'impôt sur le revenu de 42 pays européens ; chaque déménagement s'accompagne d'un contrat de travail.",
          points: [
            "Plus de 300 billets de 1 à 1 000 EKUs",
            "Salaires bruts et nets réels de 42 pays européens",
            "Taux réels d'impôt sur le revenu",
            "Contrat de travail obligatoire à chaque mobilité",
          ],
          highlight: "95% des élèves ont maîtrisé la différence entre salaire brut et net",
        },
        {
          id: "02",
          name: "Planification et gestion des finances",
          coverage: "Couvert à environ 75%",
          desc: "Une simulation du cycle de vie de 11 à 99 ans : les joueurs budgètent, gèrent revenus et dépenses, et arbitrent entre consommation, épargne et investissement en santé et éducation. La retraite et les pensions sont introduites via le Budget Public.",
          points: [
            "Simulation de vie de 11 à 99 ans",
            "Cycles financiers réguliers et dépenses de subsistance",
            "Investissements stratégiques en Santé (+HeP) et Éducation",
            "Planification de la retraite et des pensions",
          ],
        },
        {
          id: "03",
          name: "Risque et récompense",
          coverage: "Partiellement couvert",
          desc: "Des revers financiers surviennent par les événements du jeu — perte d'emploi, sanctions, frais de déménagement. L'assurance et la gestion formelle du risque ne font pas partie de l'Édition 1 (nous le disons ouvertement, car la crédibilité compte).",
          points: [
            "Événements de vie : perte d'emploi, frais médicaux imprévus",
            "Arbitrage entre décisions sécurisées et options plus risquées",
            "Compréhension des filets de sécurité sociale",
          ],
        },
        {
          id: "04",
          name: "Paysage financier",
          coverage: "La dimension la plus forte du jeu",
          desc: "Contrairement aux jeux classiques où une banque privée décide, dans Mobility Era un Budget Public distribue les salaires, collecte les impôts et paie les pensions. Les élèves apprennent le principe de solidarité de l'État-providence européen.",
          points: [
            "Mécanisme du Budget Public : solidarité et État social européen",
            "Comment les impôts financent écoles, hôpitaux et infrastructures",
            "Droits des consommateurs et responsabilités citoyennes",
            "+10% de progression sur la connaissance des institutions de l'UE",
          ],
          highlight: "Le Budget Public remplace la banque privée façon Monopoly",
        },
      ],
      statsTitle: "Ce que les élèves ont le plus appris (Résultats du pilote)",
      stats: [
        { label: "Géographie et faits sur les pays", value: 40, color: "#1a66ff" },
        { label: "Impôts et finances publiques", value: 35, color: "#0ea5e9" },
        { label: "Gestion de l'argent et économie", value: 19, color: "#10b981" },
        { label: "Situations de vie et sécurité sociale", value: 6, color: "#f59e0b" },
      ],
      paperTitle:
        "The Impact of Educational Gaming on Financial Education: A National Pilot Project Using the Mobility Era Game in Luxembourg",
      paperCitation:
        "Document de travail par Dr. Irina Burlacu-De Paoli (UNU-MERIT / Université de Maastricht), financé par l'Institut de la Banque européenne d'investissement (BEI) et mis en œuvre par Researchista.",
      paperInstitution:
        "Données collectées auprès de 195 élèves dans 10 lycées sous la supervision du SCRIPT et du Ministère de l'Éducation du Luxembourg.",
      coordinatorsNote:
        "Pour les coordinateurs pédagogiques : un document de correspondance détaillé reliant chaque composant du jeu au cadre est disponible sur demande.",
    },
    whyMatters: {
      badge: "Pertinence Pédagogique",
      title: "Pourquoi c'est pertinent pour votre école",
      items: [
        {
          tag: "Crédibilité Européenne",
          title: "Aligné sur les Normes Officielles",
          desc: "Le cadre UE est la langue commune de l'éducation financière dans l'UE — l'utiliser montre comment le jeu s'inscrit dans les stratégies nationales.",
        },
        {
          tag: "Impact Immédiat",
          title: "Une Heure, un Impact Réel",
          desc: "L'éducation financière sans bouleverser l'emploi du temps : une période de cours, zéro préparation pour l'enseignant.",
        },
        {
          tag: "Transdisciplinaire",
          title: "Plus que la Finance",
          desc: "Combine éducation financière, civique et numérique — plusieurs objectifs du programme couverts à la fois en économie, géographie et langues.",
        },
        {
          tag: "Évalué Scientifiquement",
          title: "Évalué, pas Seulement Conçu",
          desc: "Piloté dans 10 écoles luxembourgeoises auprès de 195 élèves dans une étude avant-après financée par l'Institut de la BEI. 52% souhaitent rejouer en cours.",
        },
      ],
    },
    whatYouGet: {
      badge: "Kit Pédagogique",
      title: "Ce que vous recevez",
      items: [
        {
          title: "Jeu de société physique",
          desc: "Plateau de qualité, 300+ billets EKUs, 42 cartes pays, cartes de vie, pions en bois et dés.",
          icon: "box",
        },
        {
          title: "Guide pédagogique complet",
          desc: "Scénarios clés en main et fiches d'activités — zéro temps de préparation requis.",
          icon: "book",
        },
        {
          title: "Application démo gratuite",
          desc: "Disponible sur App Store et Google Play pour prolonger l'apprentissage sur mobile.",
          icon: "smartphone",
        },
        {
          title: "Ateliers et formations",
          desc: "Sessions d'accompagnement sur mesure pour enseignants et coordinateurs pédagogiques par Researchista.",
          icon: "users",
        },
      ],
    },
    media: {
      badge: "Dans les Classes",
      title: "En images : Mobility Era en action",
      subtitle:
        "Découvrez comment enseignants et élèves utilisent le jeu dans de vraies classes scolaires et universitaires.",
      video1: {
        tag: "Reportage Télévisé • Moldavie",
        title: "Sujet sur la télévision nationale moldave",
        desc: "Reportage sur l'innovation éducative montrant le jeu en action dans les écoles et son impact direct auprès des élèves.",
        quote: "Regardez le reportage pour voir comment enseignants et élèves utilisent Mobility Era en classe.",
        type: "local",
        src: "/herovideo.mp4",
      },
      video2: {
        tag: "Témoignage Universitaire • Irlande",
        title: "Avis d'une enseignante à NUIG Galway",
        desc: "Une professeure de fiscalité et finance à la National University of Ireland explique pourquoi le jeu facilite l'apprentissage de sujets techniques en Master.",
        quote: "Joué dans de nombreuses écoles et universités de l'UE — parce qu'il est fun et accessible.",
        type: "youtube",
        src: "https://www.youtube.com/embed/Wut1_fKW-Ts",
      },
      video3: {
        tag: "Aperçu de Séance en Classe",
        title: "Comment 60 minutes transforment l'apprentissage",
        desc: "Du lancer de dés au calcul de l'impôt brut/net et au versement au Budget Public, vivez une session de classe dynamique.",
        quote: "Les élèves s'engagent dans une saine émulation tout en acquérant des repères durables pour la vie adulte.",
        type: "local",
        src: "/video.mp4",
      },
    },
    testimonials: {
      badge: "Retours d'Expérience",
      title: "Témoignages du projet pilote",
      featured: {
        quote:
          "Je recommande vivement ce jeu à mes collègues. Les élèves étaient pleinement investis et absorbés par le jeu. Ils l'ont trouvé stimulant et toutes les questions liées à l'aspect européen du jeu ont suscité une saine compétition. Ils ont appris des notions financières complexes tout en jouant et ont pu comparer les conditions de vie dans différents pays d'Europe. L'inspectrice irlandaise présente a salué le jeu, affirmant qu'elle-même avait appris des choses.",
        author: "Enseignante, CES (Centre for European Schooling)",
        location: "École européenne accréditée de Dunshaughlin, Irlande",
        date: "Avril 2024",
      },
      quotes: [
        {
          quote:
            "En une heure de cours, les élèves débattaient des impôts et des choix budgétaires avec un engagement sincère et pertinent.",
          author: "Professeur de sciences économiques",
          role: "Lycée pilote, Luxembourg",
        },
        {
          quote:
            "On n'avait pas l'impression d'être en cours magistral, pourtant j'ai retenu tout ce qu'on a abordé sur les impôts et les budgets publics !",
          author: "Élève (16 ans)",
          role: "Participant au pilote, Luxembourg",
        },
        {
          quote:
            "Le jeu développe l'esprit critique et l'entraide : les élèves s'entraident pour calculer les salaires nets et comprendre les mécanismes de solidarité.",
          author: "Enseignant en sciences sociales",
          role: "Réseau scolaire européen",
        },
      ],
    },
    collaborate: {
      badge: "Réseau d'Écoles Partenaires",
      title: "Collaborons",
      description:
        "Nous cherchons des écoles pilotes partout en Europe, des partenaires éducatifs et des co-financements publics pour développer la version numérique — afin de rendre l'éducation financière et civique accessible à tous.",
      quote:
        "L'éducation, ce n'est pas seulement ce que nous apprenons — c'est la façon dont nous comprenons et naviguons dans notre monde. Rendons-la réelle, pertinente et engageante.",
      btnSubmit: "Demander un devis",
      emailsTitle: "Contacts directs",
      form: {
        name: "Votre Nom",
        school: "Établissement / École",
        email: "Courriel professionnel",
        country: "Pays",
        role: "Fonction (Enseignant, Directeur, Coordinateur)",
        message: "Comment souhaitez-vous expérimenter Mobility Era dans votre école ?",
      },
    },
    footer: {
      tagline: "Relier la recherche académique au grand public depuis 2014.",
      rights: "Tous droits réservés.",
      trademark:
        "Mobility Era Game est une marque déposée de Researchista (Enregistrement BOIP n° 1395977, Classe 28.41).",
      partnership:
        "Projet pilote national soutenu par l'Institut de la Banque européenne d'investissement (BEI) et le SCRIPT (Luxembourg).",
    },
  },

  de: {
    nav: {
      home: "Startseite",
      whatIsIt: "Was ist es?",
      framework: "EU-Rahmenwerk",
      whyMatters: "Warum es zählt",
      whatYouGet: "Was Sie erhalten",
      media: "In Bewegung",
      testimonials: "Pilotprojekt",
      collaborate: "Zusammenarbeit",
      requestQuote: "Angebot anfordern",
    },
    hero: {
      badge: "41 Europäische Länder • Strategie & Allgemeinbildung",
      title1: "MOBILITY",
      title2: "ERA",
      subtitle: "Das Gesellschaftsspiel",
      description:
        "Finanzielle Bildung, staatsbürgerliches Bewusstsein und digitale Teilhabe — in einem Spiel, ausgerichtet am EU-Rahmenwerk. In einer Unterrichtsstunde lernen Jugendliche ab 14, sich im echten Leben zurechtzufinden: Einkommen, Steuern, Arbeit und Bürgerrechte.",
      frameworkNote:
        "Im Einklang mit dem EU/OECD-INFE Financial Competence Framework für Kinder und Jugendliche. In 10 luxemburgischen Schulen erprobt und wissenschaftlich evaluiert.",
      btnCurriculum: "So passt es in Ihren Lehrplan",
      btnStudy: "Pilotstudie herunterladen (PDF)",
    },
    awards: {
      title: "Europäische Auszeichnungen und Mitgliedschaften",
      tripleE: "Triple E Awards 2023",
      tripleEDesc: "Europäischer Preis (Community Engagement Initiative)",
      bafta: "BAFTA Awards 2024",
      baftaDesc: "Games Beyond Entertainment (Zweite Stufe)",
      dutchEdTech: "Mitglied bei Dutch EdTech",
      luxStartup: "Mitglied der Luxembourg Startup Association",
    },
    whatIsIt: {
      badge: "EdTech Innovation",
      title: "Was ist Mobility Era?",
      description1:
        "Mobility Era ist ein Lernspiel (mit kostenloser Demo-App im App Store und auf Google Play), das Jugendliche auf Einkommen, Steuern, Arbeit und Bürgerrechte vorbereitet — echte Situationen aus dem echten Leben.",
      description2:
        "Aus einer vom luxemburgischen Nationalfonds (FNR) finanzierten Doktorarbeit entstanden, verbindet es wissenschaftliche Tiefe mit schnellem, zugänglichem Spiel. Eine Einheit passt perfekt in eine reguläre 45–60-Minuten-Stunde ohne Vorbereitungsaufwand für Lehrkräfte.",
      specs: {
        time: "60–90 Min",
        timeDesc: "Passt in eine einzelne Unterrichtsstunde",
        players: "4–5 Spieler",
        playersDesc: "Pro Spielbrett, fördert aktive Peer-Diskussionen",
        prep: "Keine Vorbereitung",
        prepDesc: "Inklusive didaktischem Leitfaden und Szenarien",
        academic: "Wissenschaftlich fundiert",
        academicDesc: "Basiert auf Doktorarbeit und Pilotstudie mit EIBI / UNU-MERIT",
      },
    },
    framework: {
      badge: "Evidenzbasierte Bildung",
      title: "Im Einklang mit dem EU-Finanzkompetenzrahmen",
      subtitle: "Nicht nur „davon inspiriert“ — wissenschaftlich gemessen",
      pilotInfo:
        "Mobility Era Game passt in das EU/OECD-INFE Financial Competence Framework für Kinder und Jugendliche (2023). So deckt eine einzige Spielsitzung alle vier Inhaltsbereiche ab, gemessen an 195 Schülern in 10 Schulen in Luxemburg.",
      areas: [
        {
          id: "01",
          name: "Geld und Transaktionen",
          coverage: "Vollständig abgedeckt (4 von 4 Themen)",
          desc: "Das Spiel verwendet eine eigene Währung (European Currency Units - EKUs) und Länderkarten mit realen Brutto- und Nettoeinkommen sowie Einkommensteuern für 42 europäische Länder; jeder Umzug geht mit einem Arbeitsvertrag einher.",
          points: [
            "Über 300 Banknoten von 1 bis 1.000 EKUs",
            "Reale Brutto- und Nettoeinkommen aus 42 europäischen Ländern",
            "Offizielle Einkommensteuersätze",
            "Arbeitsvertrag bei jedem Wechsel in ein neues Land",
          ],
          highlight: "95 % der Schüler lernten den Unterschied zwischen Brutto- und Nettogehalt",
        },
        {
          id: "02",
          name: "Planung und Finanzverwaltung",
          coverage: "Zu ca. 75 % abgedeckt",
          desc: "Eine Lebenszyklus-Simulation von 11 bis 99 Jahren: Spieler budgetieren, verwalten Einnahmen und Ausgaben und wählen zwischen Konsum, Sparen und Investitionen in Gesundheit und Bildung. Rente wird über den öffentlichen Haushalt eingeführt.",
          points: [
            "Lebenszyklus-Simulation von 11 bis 99 Jahren",
            "Regelmäßige finanzielle Zyklen und reale Lebenshaltungskosten",
            "Investitionen in Gesundheit (+HeP) und Bildung",
            "Altersvorsorge und Renten über den öffentlichen Haushalt",
          ],
        },
        {
          id: "03",
          name: "Risiko und Ertrag",
          coverage: "Teilweise abgedeckt",
          desc: "Finanzielle Rückschläge entstehen durch Spielereignisse — Jobverlust, Sanktionen, Umzugskosten. Versicherung und formelles Risikomanagement sind nicht Teil der Edition 1 (wir sagen das offen, denn Glaubwürdigkeit zählt).",
          points: [
            "Lebensereignisse: Arbeitsplatzwechsel, unerwartete Gesundheitskosten",
            "Abwägung zwischen risikoarmen und chancenreichen Optionen",
            "Bedeutung sozialer Auffangnetze",
          ],
        },
        {
          id: "04",
          name: "Finanzlandschaft",
          coverage: "Die stärkste Dimension des Spiels",
          desc: "Anders als bei klassischen Brettspielen, bei denen eine Bank entscheidet, verteilt in Mobility Era ein öffentlicher Haushalt Gehälter, zieht Steuern ein und zahlt Renten. Schüler lernen das Solidarprinzip des europäischen Wohlfahrtsstaates.",
          points: [
            "Öffentlicher Haushalt: Solidarität und europäischer Sozialstaat",
            "Wie Steuern Schulen, Krankenhäuser und Infrastruktur finanzieren",
            "Bürgerrechte, Verbraucherschutz und Pflichten in der EU",
            "+10 % Wissenszuwachs über die Europäische Union",
          ],
          highlight: "Der öffentliche Haushalt ersetzt die private Bank im Monopoly-Stil",
        },
      ],
      statsTitle: "Womit die Schüler am meisten lernten (Ergebnisse des Pilotprojekts)",
      stats: [
        { label: "Geografie und Länderfakten", value: 40, color: "#1a66ff" },
        { label: "Steuern und öffentliche Finanzen", value: 35, color: "#0ea5e9" },
        { label: "Geld- und Wirtschaftsmanagement", value: 19, color: "#10b981" },
        { label: "Lebenssituationen & soziale Sicherung", value: 6, color: "#f59e0b" },
      ],
      paperTitle:
        "The Impact of Educational Gaming on Financial Education: A National Pilot Project Using the Mobility Era Game in Luxembourg",
      paperCitation:
        "Working Paper von Dr. Irina Burlacu-De Paoli (UNU-MERIT / Universität Maastricht), finanziert vom Institut der Europäischen Investitionsbank (EIBI) und umgesetzt von Researchista.",
      paperInstitution:
        "Erhebung an 10 Sekundarschulen mit 195 Schülern unter Datenaufsicht von SCRIPT und dem luxemburgischen Bildungsministerium.",
      coordinatorsNote:
        "Für Curriculum-Koordinatoren: Ein detailliertes Zuordnungsdokument mit Kompetenzverknüpfungen ist auf Anfrage erhältlich.",
    },
    whyMatters: {
      badge: "Vorteile für Schulen",
      title: "Warum das für Ihre Schule zählt",
      items: [
        {
          tag: "Europäische Glaubwürdigkeit",
          title: "Am EU-Rahmenwerk ausgerichtet",
          desc: "Das Rahmenwerk ist die gemeinsame Sprache der Finanzbildung in der EU — es zeigt, wie das Spiel in nationale Bildungsstrategien passt.",
        },
        {
          tag: "Echte Wirkung",
          title: "Eine Stunde, echter Lernerfolg",
          desc: "Finanzbildung ohne Umstellung des Stundenplans: eine Unterrichtsstunde, null Vorbereitung für die Lehrkraft.",
        },
        {
          tag: "Fächerübergreifend",
          title: "Mehr als nur Finanzen",
          desc: "Verbindet finanzielle, staatsbürgerliche und digitale Bildung in Wirtschaft, Geografie und Sprachunterricht.",
        },
        {
          tag: "Wissenschaftlich erprobt",
          title: "Gemessen, nicht nur konzipiert",
          desc: "In 10 luxemburgischen Schulen mit 195 Schülern ab 14 Jahren erprobt. 52 % möchten das Spiel häufiger im Unterricht spielen.",
        },
      ],
    },
    whatYouGet: {
      badge: "Schulausstattung",
      title: "Was Sie erhalten",
      items: [
        {
          title: "Physisches Spielbrett-Set",
          desc: "Hochwertige Bretter, 300+ EKU-Scheine, 42 Länderkarten, Lebenskarten, Holzfiguren und Würfel.",
          icon: "box",
        },
        {
          title: "Vollständiger Unterrichtsführer",
          desc: "Schlüsselfertige Unterrichtsszenarien und Diskussionsleitfäden — keine Vorbereitungszeit.",
          icon: "book",
        },
        {
          title: "Kostenlose Demo-App",
          desc: "Begleit-App für iOS und Android zur Vertiefung und für Hausaufgabenprojekte.",
          icon: "smartphone",
        },
        {
          title: "Lehrerfortbildungen & Workshops",
          desc: "Maßgeschneiderte Schulungen durch Researchista-Experten für Fachschaften und Lehrkräfte.",
          icon: "users",
        },
      ],
    },
    media: {
      badge: "Aus der Praxis",
      title: "In Bewegung: Mobility Era im Einsatz",
      subtitle:
        "Erleben Sie, wie Lehrkräfte und Studierende in ganz Europa komplexe Steuern und Wirtschaft spielerisch meistern.",
      video1: {
        tag: "Nationales Fernsehen • Moldau",
        title: "Fernsehbericht über Bildungsinnovation",
        desc: "Bericht im moldauischen Staatsfernsehen über das Spiel im Schulunterricht und dessen motivierende Wirkung auf die Schüler.",
        quote: "Sehen Sie im Bericht, wie Lehrkräfte und Schüler Mobility Era in echten Klassenzimmern nutzen.",
        type: "local",
        src: "/herovideo.mp4",
      },
      video2: {
        tag: "Universitätsprofessorin • Irland",
        title: "Bericht der National University of Ireland, Galway",
        desc: "Eine Professorin für Steuer- und Finanzwesen an der NUIG erklärt den Einsatz im Masterstudiengang Accounting and Taxation.",
        quote: "An Schulen und Universitäten in der ganzen EU gespielt — weil es Spaß macht und komplexe Steuern verständlich macht.",
        type: "youtube",
        src: "https://www.youtube.com/embed/Wut1_fKW-Ts",
      },
      video3: {
        tag: "Spielablauf im Klassenzimmer",
        title: "Wie eine 60-Minuten-Stunde wirkt",
        desc: "Vom Würfelwurf bis zur Gehaltsabrechnung und Steuerabgabe an den öffentlichen Haushalt — die Spielmechanik im Zeitraffer.",
        quote: "Schüler lernen spielerisch und vergleichen Lebensbedingungen in verschiedenen EU-Staaten.",
        type: "local",
        src: "/video.mp4",
      },
    },
    testimonials: {
      badge: "Stimmen aus der Praxis",
      title: "Stimmen aus dem Pilotprojekt",
      featured: {
        quote:
          "Ich würde dieses Spiel meinen Kollegen wärmstens empfehlen. Die Schüler waren voll engagiert und vertieft in das Spiel. Sie fanden es anregend und alle Fragen zum europäischen Aspekt führten zu einem positiven Wettbewerb. Sie lernten schwierige Finanzthemen im Spiel und verglichen Lebensbedingungen in europäischen Ländern. Die anwesende irische Schulinspektorin lobte das Spiel ausdrücklich.",
        author: "Lehrkraft, CES (Centre for European Schooling)",
        location: "Anerkannte Europäische Schule in Dunshaughlin, Irland",
        date: "April 2024",
      },
      quotes: [
        {
          quote:
            "Innerhalb einer einzigen Stunde debattierten die Schüler engagiert über Steuern und Budgetabwägungen mit bemerkenswerter Tiefe.",
          author: "Wirtschaftslehrer",
          role: "Pilotschule, Luxemburg",
        },
        {
          quote:
            "Es fühlte sich überhaupt nicht wie Unterricht an, aber ich habe alles behalten, was wir über Steuern und den Staatshaushalt besprochen haben!",
          author: "Schüler (16 Jahre)",
          role: "Teilnehmer am Pilotprojekt, Luxemburg",
        },
        {
          quote:
            "Das Spiel macht trockene Finanzgesetze greifbar und zeigt Schülern, warum der europäische Sozialstaat auf Solidarität beruht.",
          author: "Fachlehrerin für Gemeinschaftskunde",
          role: "Europäisches Schulnetzwerk",
        },
      ],
    },
    collaborate: {
      badge: "Partnerschulen gesucht",
      title: "Lassen Sie uns zusammenarbeiten",
      description:
        "Wir suchen Pilotschulen in ganz Europa, Bildungspartner und öffentliche Kofinanzierung für die digitale Skalierung — damit finanzielle und staatsbürgerliche Bildung für alle zugänglich wird.",
      quote:
        "Bildung ist nicht nur, was wir lernen — sie ist die Art, wie wir unsere Welt verstehen und uns in ihr zurechtfinden. Machen wir sie real, relevant und spannend.",
      btnSubmit: "Angebot anfordern",
      emailsTitle: "Direktkontakt",
      form: {
        name: "Ihr Name",
        school: "Schule / Institution",
        email: "Dienstliche E-Mail",
        country: "Land",
        role: "Funktion (z. B. Schulleitung, Lehrkraft, Koordinator)",
        message: "Wie möchten Sie Mobility Era an Ihrer Schule erproben?",
      },
    },
    footer: {
      tagline: "Wissenschaftliche Forschung für die Öffentlichkeit seit 2014.",
      rights: "Alle Rechte vorbehalten.",
      trademark:
        "Mobility Era Game ist eine eingetragene Marke von Researchista (BOIP Reg.-Nr. 1395977, Klasse 28.41).",
      partnership:
        "Nationales Pilotprojekt gefördert durch das Institut der Europäischen Investitionsbank (EIBI) und SCRIPT (Luxemburg).",
    },
  },

  it: {
    nav: {
      home: "Home",
      whatIsIt: "Che cos'è?",
      framework: "Quadro UE",
      whyMatters: "Perché è rilevante",
      whatYouGet: "Cosa ricevi",
      media: "In azione",
      testimonials: "Sperimentazione",
      collaborate: "Collaboriamo",
      requestQuote: "Richiedi preventivo",
    },
    hero: {
      badge: "41 Paesi Europei • Strategia & Quiz",
      title1: "MOBILITY",
      title2: "ERA",
      subtitle: "Il Gioco da Tavolo",
      description:
        "Educazione finanziaria, consapevolezza civica e inclusione digitale — in un solo gioco, allineato al quadro europeo. In un'ora di lezione, gli studenti dai 14 anni imparano a orientarsi nella vita reale: reddito, tasse, lavoro e diritti civici.",
      frameworkNote:
        "Allineato al quadro di competenze finanziarie UE/OCSE-INFE per l'infanzia e la gioventù. Sperimentato in 10 scuole in Lussemburgo.",
      btnCurriculum: "Scopri come si integra nel programma",
      btnStudy: "Scarica lo studio pilota (PDF)",
    },
    awards: {
      title: "Riconoscimenti e Premi Europei",
      tripleE: "Triple E Awards 2023",
      tripleEDesc: "Premio europeo (Community Engagement Initiative)",
      bafta: "BAFTA Awards 2024",
      baftaDesc: "Games Beyond Entertainment (Seconda fase)",
      dutchEdTech: "Membro di Dutch EdTech",
      luxStartup: "Membro della Luxembourg Startup Association",
    },
    whatIsIt: {
      badge: "Innovazione EdTech",
      title: "Che cos'è Mobility Era?",
      description1:
        "Mobility Era è un gioco educativo (con app demo gratuita su App Store e Google Play) che prepara i giovani ad affrontare situazioni reali che riguardano reddito, tassazione, lavoro e cittadinanza.",
      description2:
        "Ispirato a una tesi di dottorato finanziata dal Fondo nazionale della ricerca del Lussemburgo (FNR), unisce rigore accademico e gioco accessibile. Una sessione di massimo un'ora per 4–5 giocatori per tavoliere, ideale per una singola ora di lezione senza preparazione.",
      specs: {
        time: "60–90 Min",
        timeDesc: "Perfetto per una singola ora scolastica",
        players: "4–5 Giocatori",
        playersDesc: "Per scatola di gioco, stimola il dibattito tra pari",
        prep: "Zero Preparazione",
        prepDesc: "Guida didattica e scenari d'aula inclusi",
        academic: "Rigore Scientifico",
        academicDesc: "Basato su ricerca di dottorato e studio pilota EIBI / UNU-MERIT",
      },
    },
    framework: {
      badge: "Apprendimento Basato sui Dati",
      title: "Allineato al quadro di competenze finanziarie dell'UE",
      subtitle: "Non solo «ispirato» ad esso — misurato sul campo",
      pilotInfo:
        "Mobility Era Game si inserisce nel quadro di competenze finanziarie UE/OCSE-INFE per l'infanzia e la gioventù (2023). In uno studio pilota con 195 studenti in 10 scuole, il gioco ha dimostrato progressi tangibili.",
      areas: [
        {
          id: "01",
          name: "Denaro e transazioni",
          coverage: "Interamente coperto (4 su 4)",
          desc: "Il gioco usa una propria moneta (European Currency Units - EKUs) e Carte Paese con redditi lordi e netti reali e l'imposta sul reddito di 42 paesi europei; ogni trasferimento è accompagnato da un contratto di lavoro.",
          points: [
            "Oltre 300 banconote da 1 a 1.000 EKUs",
            "Redditi lordi e netti reali di 42 paesi europei",
            "Aliquote fiscali ufficiali",
            "Contratto di lavoro ad ogni trasferimento",
          ],
          highlight: "Il 95% degli studenti ha compreso la differenza tra stipendio lordo e netto",
        },
        {
          id: "02",
          name: "Pianificazione e gestione delle finanze",
          coverage: "Coperto per circa il 75%",
          desc: "Una simulazione del ciclo di vita dagli 11 ai 99 anni: i giocatori gestiscono un budget, amministrano entrate e uscite e scelgono tra consumo, risparmio e investimenti in salute ed educazione.",
          points: [
            "Simulazione del ciclo di vita dagli 11 ai 99 anni",
            "Gestione di stipendio, spese vive e risparmio",
            "Investimenti strategici in salute (+HeP) ed istruzione",
            "Pensione e previdenza introdotte tramite il Bilancio Pubblico",
          ],
        },
        {
          id: "03",
          name: "Rischio e rendimento",
          coverage: "Parzialmente coperto",
          desc: "Rovesci finanziari arrivano dagli eventi di gioco — perdita del lavoro, sanzioni, costi di trasloco. L'assicurazione formale non fa parte dell'Edizione 1 (lo diciamo apertamente, perché la credibilità conta).",
          points: [
            "Imprevisti reali: licenziamento, spese sanitarie, traslochi",
            "Bilanciamento tra scelte prudenti e opportunità ad alto rendimento",
            "Ruolo dello stato sociale come ammortizzatore di rischio",
          ],
        },
        {
          id: "04",
          name: "Panorama finanziario",
          coverage: "La dimensione più forte del gioco",
          desc: "A differenza dei giochi classici in cui decide una banca, in Mobility Era un Bilancio Pubblico distribuisce gli stipendi, riscuote le tasse e paga le pensioni, insegnando la solidarietà dello stato sociale.",
          points: [
            "Meccanismo del Bilancio Pubblico e solidarietà civica",
            "Come le imposte finanziano sanità, scuola e servizi pubblici",
            "Diritti e doveri dei cittadini europei",
            "+10% di miglioramento nella conoscenza dell'Unione Europea",
          ],
          highlight: "Il Bilancio Pubblico sostituisce la banca privata in stile Monopoly",
        },
      ],
      statsTitle: "Cosa hanno imparato di più gli studenti (Studio pilota)",
      stats: [
        { label: "Geografia e curiosità sui paesi", value: 40, color: "#1a66ff" },
        { label: "Tasse e finanza pubblica", value: 35, color: "#0ea5e9" },
        { label: "Gestione del denaro ed economia", value: 19, color: "#10b981" },
        { label: "Situazioni di vita e previdenza", value: 6, color: "#f59e0b" },
      ],
      paperTitle:
        "The Impact of Educational Gaming on Financial Education: A National Pilot Project Using the Mobility Era Game in Luxembourg",
      paperCitation:
        "Working paper della Dr. Irina Burlacu-De Paoli (UNU-MERIT / Università di Maastricht), finanziato dall'Istituto della BEI e realizzato da Researchista.",
      paperInstitution:
        "Dati raccolti in 10 scuole secondarie con 195 studenti in collaborazione con SCRIPT e Ministero dell'Istruzione del Lussemburgo.",
      coordinatorsNote:
        "Per i coordinatori didattici: un documento di corrispondenza dettagliato è disponibile su richiesta.",
    },
    whyMatters: {
      badge: "Valore per le Scuole",
      title: "Perché è rilevante per la tua scuola",
      items: [
        {
          tag: "Credibilità Europea",
          title: "Allineato agli Standard UE",
          desc: "Il quadro UE è il linguaggio comune dell'educazione finanziaria europea: adottarlo garantisce piena coerenza istituzionale.",
        },
        {
          tag: "Impatto Immediato",
          title: "Un'ora, un Impatto Reale",
          desc: "Educazione finanziaria senza stravolgere l'orario scolastico: una lezione, zero preparazione per il docente.",
        },
        {
          tag: "Interdisciplinare",
          title: "Più della Sola Finanza",
          desc: "Collega economia, educazione civica, geografia europea e competenze digitali in un'unica attività stimolante.",
        },
        {
          tag: "Sperimentato sul Campo",
          title: "Misurato con Dati Concreti",
          desc: "Sperimentato in 10 scuole lussemburghesi con 195 studenti in uno studio prima-dopo finanziato dall'Istituto della BEI.",
        },
      ],
    },
    whatYouGet: {
      badge: "Kit Didattico",
      title: "Cosa ricevi",
      items: [
        {
          title: "Gioco da tavolo fisico",
          desc: "Tabellone resistente, oltre 300 banconote EKU, 42 carte paese, carte vita, pedine e dadi.",
          icon: "box",
        },
        {
          title: "Guida didattica completa",
          desc: "Scenari e schede attività pronte all'uso senza preparazione preventiva.",
          icon: "book",
        },
        {
          title: "App demo gratuita",
          desc: "Su App Store e Google Play per approfondimenti digitali individuali.",
          icon: "smartphone",
        },
        {
          title: "Workshop e formazione docenti",
          desc: "Incontri di introduzione e formazione a cura del team di esperti di Researchista.",
          icon: "users",
        },
      ],
    },
    media: {
      badge: "Nelle Scuole",
      title: "Guardalo in azione",
      subtitle:
        "Guarda come studenti e docenti in tutta Europa usano Mobility Era per comprendere le tasse e la mobilità.",
      video1: {
        tag: "Televisione Nazionale • Moldavia",
        title: "Servizio TV sull'innovazione didattica",
        desc: "Servizio della TV pubblica moldava che mostra il gioco in azione nelle aule scolastiche e l'entusiasmo degli studenti.",
        quote: "Guarda il servizio per vedere come docenti e studenti usano Mobility Era in vere aule.",
        type: "local",
        src: "/herovideo.mp4",
      },
      video2: {
        tag: "Docente Universitaria • Irlanda",
        title: "Recensione della National University of Ireland, Galway",
        desc: "Una docente di tassazione e finanza alla NUIG spiega perché il gioco da tavolo è integrato nel Master in Accounting and Taxation.",
        quote: "Giocato in scuole e università di tutta l'UE — perché è divertente e rende accessibili concetti complessi.",
        type: "youtube",
        src: "https://www.youtube.com/embed/Wut1_fKW-Ts",
      },
      video3: {
        tag: "Dinamica di Gioco in Classe",
        title: "Come 60 minuti trasformano l'apprendimento",
        desc: "Dai dadi al calcolo dello stipendio e alla contribuzione al Bilancio Pubblico: l'esperienza di gioco completa.",
        quote: "Gli studenti imparano confrontando le condizioni di vita nei diversi paesi dell'UE.",
        type: "local",
        src: "/video.mp4",
      },
    },
    testimonials: {
      badge: "Testimonianze",
      title: "Testimonianze dalla sperimentazione",
      featured: {
        quote:
          "Raccomanderei caldamente questo gioco ai miei colleghi. Gli studenti erano completamente coinvolti ed entusiasti. Tutte le domande legate all'aspetto europeo hanno innescato una competizione costruttiva. Hanno imparato argomenti finanziari difficili giocando e confrontando le condizioni di vita nei vari paesi europei. Anche l'ispettrice scolastica irlandese presente ha elogiato il gioco.",
        author: "Docente, Centre for European Schooling (CES)",
        location: "Scuola europea accreditata di Dunshaughlin, Irlanda",
        date: "Aprile 2024",
      },
      quotes: [
        {
          quote:
            "In una sola ora gli studenti discutevano di imposte e scelte di bilancio con reale maturità e interesse.",
          author: "Docente di Economia",
          role: "Scuola pilota, Lussemburgo",
        },
        {
          quote:
            "Non sembrava affatto una lezione, eppure ho memorizzato tutto sulle tasse e sul bilancio pubblico!",
          author: "Studente (16 anni)",
          role: "Partecipante alla sperimentazione, Lussemburgo",
        },
        {
          quote:
            "Un gioco che rende concreti principi di solidarietà civica che sui libri di testo rimangono astratti.",
          author: "Docente di Scienze Sociali",
          role: "Rete scolastica europea",
        },
      ],
    },
    collaborate: {
      badge: "Scuole Pilota",
      title: "Collaboriamo",
      description:
        "Cerchiamo scuole pilota in tutta Europa, partner educativi e co-finanziamenti pubblici per la scalatura digitale — così che l'educazione finanziaria e civica sia accessibile a tutti.",
      quote:
        "L'educazione non è solo ciò che impariamo — è come comprendiamo e attraversiamo il nostro mondo. Rendiamola reale, rilevante e coinvolgente.",
      btnSubmit: "Richiedi un preventivo",
      emailsTitle: "Contatto diretto",
      form: {
        name: "Nome e Cognome",
        school: "Nome della Scuola / Istituto",
        email: "Email istituzionale",
        country: "Paese",
        role: "Ruolo (Docente, Dirigente scolastico, Coordinatore)",
        message: "Come vorresti sperimentare Mobility Era nel tuo istituto?",
      },
    },
    footer: {
      tagline: "Unire la ricerca accademica alla società civile dal 2014.",
      rights: "Tutti i diritti riservati.",
      trademark:
        "Mobility Era Game è un marchio registrato di Researchista (Reg. BOIP n. 1395977, Classe 28.41).",
      partnership:
        "Progetto pilota sostenuto dall'Istituto della Banca europea per gli investimenti (BEI) e da SCRIPT (Lussemburgo).",
    },
  },

  ro: {
    nav: {
      home: "Acasă",
      whatIsIt: "Ce este?",
      framework: "Cadrul UE",
      whyMatters: "De ce contează",
      whatYouGet: "Ce primești",
      media: "În acțiune",
      testimonials: "Rezultate pilot",
      collaborate: "Să colaborăm",
      requestQuote: "Cere o ofertă",
    },
    hero: {
      badge: "41 de Țări Europene • Strategie & Cultură Generală",
      title1: "MOBILITY",
      title2: "ERA",
      subtitle: "Jocul de Societate",
      description:
        "Alfabetizare financiară, conștiință civică și incluziune digitală — într-un singur joc, aliniat la cadrul european. Într-o oră de curs, elevii de peste 14 ani învață să navigheze prin viața reală: venituri, impozite, muncă și drepturi civice.",
      frameworkNote:
        "Aliniat la Cadrul de competențe financiare UE/OCDE-INFE pentru copii și tineri. Pilotat și măsurat în 10 școli din Luxemburg.",
      btnCurriculum: "Vezi integrarea în programa ta",
      btnStudy: "Descarcă studiul pilot (PDF)",
    },
    awards: {
      title: "Recunoaștere și Premii Europene",
      tripleE: "Triple E Awards 2023",
      tripleEDesc: "Premiul European (Inițiativă de implicare comunitară)",
      bafta: "BAFTA Awards 2024",
      baftaDesc: "Games Beyond Entertainment (Etapa a doua)",
      dutchEdTech: "Membru al Dutch EdTech",
      luxStartup: "Membru al Luxembourg Startup Association",
    },
    whatIsIt: {
      badge: "Inovație EdTech",
      title: "Ce este Mobility Era?",
      description1:
        "Mobility Era este un joc educațional (cu aplicație demo gratuită pe App Store și Google Play) care îi pregătește pe tineri pentru situații reale care implică venituri, impozitare, muncă și cetățenie.",
      description2:
        "Inspirat dintr-o teză de doctorat finanțată de Fondul Național de Cercetare din Luxemburg (FNR), îmbină rigoarea academică cu un joc accesibil. O sesiune de maximum o oră, 4–5 jucători pe tablă, potrivindu-se perfect într-o singură oră de curs fără pregătire prealabilă a profesorului.",
      specs: {
        time: "60–90 Min",
        timeDesc: "Se încadrează într-o singură oră de curs",
        players: "4–5 Jucători",
        playersDesc: "Pe fiecare tablă de joc, încurajând dialogul",
        prep: "Zero Pregătire",
        prepDesc: "Include ghid didactic complet și scenarii de lucru",
        academic: "Riguros Științific",
        academicDesc: "Bazat pe teză de doctorat și studiu pilot EIBI / UNU-MERIT",
      },
    },
    framework: {
      badge: "Educație Bazată pe Dovezi",
      title: "Aliniat la Cadrul UE de competențe financiare",
      subtitle: "Nu doar „inspirat” de el — măsurat riguros în școli",
      pilotInfo:
        "Mobility Era Game se încadrează în Cadrul de competențe financiare UE/OCDE-INFE pentru copii și tineri (2023). Iată cum o singură sesiune de joc acoperă cele patru arii, măsurat în studiul pilot cu 195 de elevi în 10 școli din Luxemburg.",
      areas: [
        {
          id: "01",
          name: "Banii și tranzacțiile",
          coverage: "Acoperită integral (4 din 4 teme)",
          desc: "Jocul folosește propria monedă (European Currency Units - EKUs) și Cărți de Țară cu venituri brute și nete reale și impozitul pe venit din 42 de țări europene; fiecare mutare vine cu un contract de muncă.",
          points: [
            "Peste 300 de bancnote de la 1 la 1.000 EKUs",
            "Venituri brute și nete reale din 42 de țări europene",
            "Cote oficiale de impozit pe venit",
            "Contract de muncă obligatoriu la fiecare relocare",
          ],
          highlight: "95% dintre elevi au înțeles diferența dintre salariul brut și cel net",
        },
        {
          id: "02",
          name: "Planificarea și gestionarea finanțelor",
          coverage: "Acoperită în proporție de circa 75%",
          desc: "O simulare a ciclului de viață de la 11 la 99 de ani: jucătorii alcătuiesc bugete, gestionează venituri și cheltuieli și aleg între consum, economisire și investiții în sănătate și educație.",
          points: [
            "Simulare de viață între 11 și 99 de ani",
            "Gestionarea cheltuielilor curente și a economiilor",
            "Investiții strategice în Sănătate (+HeP) și Educație",
            "Pensii și asigurări sociale introduse prin Bugetul Public",
          ],
        },
        {
          id: "03",
          name: "Risc și recompensă",
          coverage: "Parțial acoperită",
          desc: "Reversurile financiare apar prin evenimentele jocului — pierderea locului de muncă, sancțiuni, costuri de mutare. Asigurările formale nu fac parte din Ediția 1 (spunem asta deschis, pentru că credibilitatea contează).",
          points: [
            "Evenimente neprevăzute: pierderea jobului, cheltuieli medicale",
            "Arbitraj între alegeri prudente și oportunități cu risc ridicat",
            "Rolul plaselor de siguranță socială",
          ],
        },
        {
          id: "04",
          name: "Peisajul financiar",
          coverage: "Cea mai puternică dimensiune a jocului",
          desc: "Spre deosebire de jocurile clasice unde decide o bancă privată, în Mobility Era un Buget Public distribuie salariile, încasează impozitele și plătește pensiile, consolidând principiul solidarității statului social european.",
          points: [
            "Mecanismul Bugetului Public și solidaritatea civică",
            "Cum finanțează impozitele școlile, spitalele și infrastructura",
            "Drepturile consumatorilor și responsabilitățile civice în UE",
            "+10% creștere a nivelului de cunoaștere a Uniunii Europene",
          ],
          highlight: "Bugetul Public înlocuiește banca privată clasică de tip Monopoly",
        },
      ],
      statsTitle: "Ce spun elevii că au învățat cel mai mult (Rezultate pilot)",
      stats: [
        { label: "Geografie și informații despre țări", value: 40, color: "#1a66ff" },
        { label: "Impozite și finanțe publice", value: 35, color: "#0ea5e9" },
        { label: "Gestionarea banilor și economie", value: 19, color: "#10b981" },
        { label: "Situații de viață și securitate socială", value: 6, color: "#f59e0b" },
      ],
      paperTitle:
        "The Impact of Educational Gaming on Financial Education: A National Pilot Project Using the Mobility Era Game in Luxembourg",
      paperCitation:
        "Working paper de Dr. Irina Burlacu-De Paoli (UNU-MERIT / Universitatea din Maastricht), finanțat de Institutul Băncii Europene de Investiții (BEI) și implementat de Researchista.",
      paperInstitution:
        "Date culese de la 195 de elevi din 10 licee în parteneriat cu SCRIPT și Ministerul Educației din Luxemburg.",
      coordinatorsNote:
        "Pentru coordonatorii curriculari: un document detaliat de corespondență cu competențele este disponibil la cerere.",
    },
    whyMatters: {
      badge: "Pentru Școli",
      title: "De ce contează pentru școala ta",
      items: [
        {
          tag: "Credibilitate Europeană",
          title: "Aliniat la Cadrul Oficial UE",
          desc: "Cadrul este limbajul comun al educației financiare în UE — arată cum jocul se înscrie în strategiile naționale.",
        },
        {
          tag: "Impact Imediat",
          title: "O Oră, Impact Real",
          desc: "Educație financiară fără să răstorni orarul: o oră de curs, zero pregătire pentru profesor.",
        },
        {
          tag: "Transdisciplinar",
          title: "Mai Mult Decât Finanțele",
          desc: "Îmbină educația financiară, civică și digitală laolaltă — mai multe obiective curriculare atinse simultan.",
        },
        {
          tag: "Validat Științific",
          title: "Măsurat, nu Doar Conceput",
          desc: "Pilotat în 10 școli din Luxemburg cu 195 de elevi de peste 14 ani într-un studiu înainte-după finanțat de BEI. 52% vor să rejoace la ore.",
        },
      ],
    },
    whatYouGet: {
      badge: "Pachet Didactic",
      title: "Ce primești",
      items: [
        {
          title: "Joc de societate fizic",
          desc: "Tablă rezistentă, 300+ bancnote EKU, 42 de cărți de țară, cărți de viață, pioni din lemn și zaruri.",
          icon: "box",
        },
        {
          title: "Ghid didactic complet",
          desc: "Scenarii de clasă la cheie și propuneri de dezbatere — zero timp de pregătire.",
          icon: "book",
        },
        {
          title: "Aplicație demo gratuită",
          desc: "Pe App Store și Google Play pentru aprofundare digitală individuală.",
          icon: "smartphone",
        },
        {
          title: "Ateliere și formare profesori",
          desc: "Sesiuni dedicate pentru cadre didactice susținute de echipa Researchista.",
          icon: "users",
        },
      ],
    },
    media: {
      badge: "Din Școli",
      title: "Vezi-l în acțiune",
      subtitle:
        "Urmărește cum profesorii și elevii folosesc Mobility Era pentru a înțelege taxele și cetățenia europeană.",
      video1: {
        tag: "Televiziunea Națională • Moldova",
        title: "Reportaj TV despre inovația în educație",
        desc: "Subiect la televiziunea națională din Moldova arătând jocul în acțiune în școli și impactul său direct în clasă.",
        quote: "Uită-te la reportaj pentru a vedea cum folosesc profesorii și elevii Mobility Era în clase reale.",
        type: "local",
        src: "/herovideo.mp4",
      },
      video2: {
        tag: "Profesoară Universitară • Irlanda",
        title: "Recenzia unei profesoare la NUIG Galway",
        desc: "O profesoară de fiscalitate și finanțe de la National University of Ireland explică de ce jocul face diferența în programul de Master.",
        quote: "Jucat în școli și universități din toată UE — pentru că e distractiv și clarifică concepte fiscale complexe.",
        type: "youtube",
        src: "https://www.youtube.com/embed/Wut1_fKW-Ts",
      },
      video3: {
        tag: "Dinamica Jocului la Clasă",
        title: "Cum transformă 60 de minute învățarea",
        desc: "De la aruncarea zarurilor la calculul salariului brut/net și contribuția la Bugetul Public, urmărește fluxul de joc.",
        quote: "Elevii participă la o competiție pozitivă în timp ce asimilează deprinderi financiare fundamentale.",
        type: "local",
        src: "/video.mp4",
      },
    },
    testimonials: {
      badge: "Mărturii din Școli",
      title: "Mărturii din programul-pilot",
      featured: {
        quote:
          "Recomand cu căldură acest joc colegilor mei. Elevii au fost pe deplin captivați și implicați în joc. L-au găsit stimulativ, iar toate întrebările legate de aspectul european al jocului au dus la o competiție pozitivă între elevi. Au învățat teme dificile de finanțe în timp ce se jucau și au putut compara situațiile de viață din diferite țări europene. Inspectorul irlandez prezent a lăudat jocul, menționând că a învățat și ea lucruri noi.",
        author: "Profesoară, CES (Centre for European Schooling)",
        location: "Școală europeană acreditată în Dunshaughlin, Irlanda",
        date: "Aprilie 2024",
      },
      quotes: [
        {
          quote:
            "Într-o singură oră de curs, elevii dezbăteau despre taxe și compromisuri bugetare cu un interes și o maturitate remarcabile.",
          author: "Profesor de economie",
          role: "Școală-pilot, Luxemburg",
        },
        {
          quote:
            "Nu s-a simțit deloc ca o oră plictisitoare, dar am reținut tot ce am discutat despre impozite și bugetul de stat!",
          author: "Elev (16 ani)",
          role: "Participant în pilot, Luxemburg",
        },
        {
          quote:
            "Jocul creează o atmosferă dinamică în care elevii colaborează și înțeleg în mod natural principiul solidarității europene.",
          author: "Profesoară de științe sociale",
          role: "Rețea școlară europeană",
        },
      ],
    },
    collaborate: {
      badge: "Școli Partenere",
      title: "Să colaborăm",
      description:
        "Căutăm școli pilot în toată Europa, parteneri educaționali și co-finanțări publice pentru dezvoltarea digitală — astfel încât educația financiară și civică să devină accesibilă tuturor.",
      quote:
        "Educația nu este doar ceea ce învățăm — este felul în care înțelegem și navigăm prin lumea noastră. Fă-o reală, relevantă și captivantă.",
      btnSubmit: "Cere o ofertă",
      emailsTitle: "Contact direct",
      form: {
        name: "Numele dumneavoastră",
        school: "Numele școlii / instituției",
        email: "Email instituțional",
        country: "Țara",
        role: "Funcție (ex. Profesor, Director, Coordonator)",
        message: "Cum doriți să pilotați Mobility Era în școala dumneavoastră?",
      },
    },
    footer: {
      tagline: "Conectăm cercetarea academică cu societatea din 2014.",
      rights: "Toate drepturile rezervate.",
      trademark:
        "Mobility Era Game este marcă înregistrată a Researchista (BOIP Reg. nr. 1395977, Clasa 28.41).",
      partnership:
        "Proiect pilot național susținut de Institutul Băncii Europene de Investiții (BEI) și SCRIPT (Luxemburg).",
    },
  },

  es: {
    nav: {
      home: "Inicio",
      whatIsIt: "¿Qué es?",
      framework: "Marco UE",
      whyMatters: "Por qué es relevante",
      whatYouGet: "Qué recibes",
      media: "Míralo en acción",
      testimonials: "Resultados piloto",
      collaborate: "Colaboremos",
      requestQuote: "Solicitar presupuesto",
    },
    hero: {
      badge: "41 Países Europeos • Estrategia & Cultura General",
      title1: "MOBILITY",
      title2: "ERA",
      subtitle: "El Juego de Mesa",
      description:
        "Alfabetización financiera, conciencia cívica e inclusión digital — en un solo juego, alineado con el marco europeo. En una hora de clase, los estudiantes de 14 años o más aprenden a desenvolverse en la vida real: ingresos, impuestos, trabajo y derechos cívicos.",
      frameworkNote:
        "Alineado con el marco de competencias financieras UE/OCDE-INFE para la infancia y la juventud. Pilotado y medido en 10 escuelas de Luxemburgo.",
      btnCurriculum: "Descubre cómo se integra en tu programa",
      btnStudy: "Descargar el estudio piloto (PDF)",
    },
    awards: {
      title: "Premios y Reconocimientos Europeos",
      tripleE: "Triple E Awards 2023",
      tripleEDesc: "Premio Europeo (Community Engagement Initiative)",
      bafta: "BAFTA Awards 2024",
      baftaDesc: "Games Beyond Entertainment (Segunda fase)",
      dutchEdTech: "Miembro de Dutch EdTech",
      luxStartup: "Miembro de la Luxembourg Startup Association",
    },
    whatIsIt: {
      badge: "Innovación EdTech",
      title: "¿Qué es Mobility Era?",
      description1:
        "Mobility Era es un juego educativo de mesa (con una aplicación demo gratuita en App Store y Google Play) que prepara a los jóvenes para afrontar situaciones reales relacionadas con ingresos, impuestos, trabajo y ciudadanía.",
      description2:
        "Inspirado en una tesis doctoral financiada por el Fondo Nacional de Investigación de Luxemburgo (FNR), combina rigor académico con un juego accesible y dinámico. Una sesión de máximo una hora, 4–5 jugadores por tablero, cabe en una sola hora de clase sin preparación del docente.",
      specs: {
        time: "60–90 Min",
        timeDesc: "Cabe en una sola hora lectiva",
        players: "4–5 Jugadores",
        playersDesc: "Por tablero, estimula el debate entre iguales",
        prep: "Cero Preparación",
        prepDesc: "Guía didáctica completa y escenarios listos",
        academic: "Rigor Científico",
        academicDesc: "Basado en tesis doctoral y estudio piloto EIBI / UNU-MERIT",
      },
    },
    framework: {
      badge: "Educación Basada en Datos",
      title: "Alineado con el marco de competencias financieras de la UE",
      subtitle: "No solo «inspirado» en él — medido empíricamente en aulas",
      pilotInfo:
        "Mobility Era Game se ajusta al marco de competencias financieras UE/OCDE-INFE para la infancia y la juventud (2023). Así cubre una sola sesión de juego sus cuatro áreas, medido con 195 estudiantes en 10 escuelas de Luxemburgo.",
      areas: [
        {
          id: "01",
          name: "Dinero y transacciones",
          coverage: "Cubierta por completo (4 de 4 temas)",
          desc: "El juego usa su propia moneda (European Currency Units - EKUs) y Cartas de País con ingresos brutos y netos reales y el impuesto sobre la renta de 42 países europeos; cada mudanza viene con un contrato de trabajo.",
          points: [
            "Más de 300 billetes de 1 a 1.000 EKUs",
            "Salarios brutos y netos reales en 42 países europeos",
            "Tipos impositivos oficiales",
            "Contrato de trabajo obligatorio en cada traslado",
          ],
          highlight: "El 95% de los estudiantes aprendió la diferencia entre salario bruto y neto",
        },
        {
          id: "02",
          name: "Planificación y gestión de las finanzas",
          coverage: "Cubierta en un 75% aproximadamente",
          desc: "Una simulación del ciclo vital de los 11 a los 99 años: los jugadores presupuestan, gestionan ingresos y gastos y eligen entre consumo, ahorro e inversión en salud y educación.",
          points: [
            "Simulación del ciclo vital de 11 a 99 años",
            "Gestión de gastos corrientes y presupuesto familiar",
            "Inversiones estratégicas en Salud (+HeP) y Educación",
            "Jubilación y pensiones a través del Presupuesto Público",
          ],
        },
        {
          id: "03",
          name: "Riesgo y recompensa",
          coverage: "Parcialmente cubierta",
          desc: "Los reveses financieros llegan por eventos del juego — pérdida de empleo, sanciones, costes de mudanza. El seguro formal no forma parte de la Edición 1 (lo decimos abiertamente, porque la credibilidad importa).",
          points: [
            "Acontecimientos vitales: cambio de empleo, gastos sanitarios imprevistos",
            "Equilibrio entre opciones seguras y decisiones con mayor rentabilidad",
            "Comprensión de las redes de seguridad social",
          ],
        },
        {
          id: "04",
          name: "Panorama financiero",
          coverage: "La dimensión más fuerte del juego",
          desc: "A diferencia de los juegos clásicos donde decide un banco privado, en Mobility Era un Presupuesto Público reparte salarios, recauda impuestos y paga pensiones, fomentando la solidaridad del Estado de bienestar europeo.",
          points: [
            "Mecanismo del Presupuesto Público y solidaridad ciudadana",
            "Cómo los impuestos financian hospitales, escuelas e infraestructuras",
            "Derechos del consumidor y responsabilidades cívicas en la UE",
            "+10% de mejora en conocimiento sobre la Unión Europea",
          ],
          highlight: "El Presupuesto Público sustituye a la banca privada tipo Monopoly",
        },
      ],
      statsTitle: "Lo que los estudiantes más aprendieron (Resultados del estudio piloto)",
      stats: [
        { label: "Geografía y datos de países", value: 40, color: "#1a66ff" },
        { label: "Impuestos y finanzas públicas", value: 35, color: "#0ea5e9" },
        { label: "Gestión del dinero y economía", value: 19, color: "#10b981" },
        { label: "Situaciones de vida y bienestar social", value: 6, color: "#f59e0b" },
      ],
      paperTitle:
        "The Impact of Educational Gaming on Financial Education: A National Pilot Project Using the Mobility Era Game in Luxembourg",
      paperCitation:
        "Documento de trabajo de la Dra. Irina Burlacu-De Paoli (UNU-MERIT / Universidad de Maastricht), financiado por el Instituto del Banco Europeo de Inversiones (BEI) e implementado por Researchista.",
      paperInstitution:
        "Datos recogidos en 10 escuelas con 195 alumnos en colaboración con SCRIPT y el Ministerio de Educación de Luxemburgo.",
      coordinatorsNote:
        "Para coordinadores curriculares: hay disponible previa solicitud un documento detallado de correspondencia con el marco educativo.",
    },
    whyMatters: {
      badge: "Para Educadores",
      title: "Por qué es relevante para tu escuela",
      items: [
        {
          tag: "Credibilidad Europea",
          title: "Alineado con el Marco Oficial UE",
          desc: "El marco es el lenguaje común de la educación financiera en la UE — muestra cómo el juego encaja en las estrategias nacionales.",
        },
        {
          tag: "Impacto Inmediato",
          title: "Una Hora, Impacto Real",
          desc: "Educación financiera sin alterar el horario: una hora de clase, cero preparación para el profesor.",
        },
        {
          tag: "Interdisciplinar",
          title: "Más que Finanzas",
          desc: "Combina educación financiera, cívica y digital en una sola experiencia en economía, geografía e idiomas.",
        },
        {
          tag: "Evaluado Científicamente",
          title: "Medido, no solo Diseñado",
          desc: "Pilotado en 10 escuelas de Luxemburgo con 195 estudiantes en un estudio antes-después financiado por el BEI. El 52% quiere repetir.",
        },
      ],
    },
    whatYouGet: {
      badge: "Kit Educativo",
      title: "Qué recibes",
      items: [
        {
          title: "Juego de mesa físico",
          desc: "Tablero resistente, más de 300 billetes EKU, 42 cartas de país, cartas de vida, peones de madera y dados.",
          icon: "box",
        },
        {
          title: "Guía didáctica completa",
          desc: "Escenarios listos para usar y fichas de debate — cero tiempo de preparación previa.",
          icon: "book",
        },
        {
          title: "App demo gratuita",
          desc: "En App Store y Google Play para reforzar los aprendizajes fuera del aula.",
          icon: "smartphone",
        },
        {
          title: "Talleres a medida y formación",
          desc: "Sesiones de capacitación para profesorado y coordinadores impartidas por Researchista.",
          icon: "users",
        },
      ],
    },
    media: {
      badge: "En las Aulas",
      title: "Míralo en acción",
      subtitle:
        "Descubre cómo docentes y alumnos usan Mobility Era para comprender los impuestos y la movilidad en Europa.",
      video1: {
        tag: "Televisión Nacional • Moldavia",
        title: "Reportaje en la televisión nacional",
        desc: "Reportaje sobre innovación educativa que muestra el juego en acción en las escuelas y su impacto directo en el aula.",
        quote: "Mira el reportaje para ver cómo profesores y estudiantes usan Mobility Era en aulas reales.",
        type: "local",
        src: "/herovideo.mp4",
      },
      video2: {
        tag: "Profesora Universitaria • Irlanda",
        title: "Reseña de la National University of Ireland, Galway",
        desc: "Una profesora de fiscalidad y finanzas de la NUIG explica por qué el juego facilita el aprendizaje de temas complejos en el Máster.",
        quote: "Jugado en escuelas y universidades de toda la UE — porque es divertido y clarifica la fiscalidad.",
        type: "youtube",
        src: "https://www.youtube.com/embed/Wut1_fKW-Ts",
      },
      video3: {
        tag: "Dinámica en el Aula",
        title: "Cómo 60 minutos transforman el aprendizaje",
        desc: "Desde tirar los dados hasta calcular salarios brutos/netos y aportar al Presupuesto Público, vive la dinámica de una sesión.",
        quote: "Los alumnos compiten amistosamente mientras adquieren competencias vitales para su futuro.",
        type: "local",
        src: "/video.mp4",
      },
    },
    testimonials: {
      badge: "Opiniones del Piloto",
      title: "Testimonios del piloto",
      featured: {
        quote:
          "Recomendaría encarecidamente este juego a mis compañeros. Los alumnos se involucraron plenamente y quedaron fascinados. Encontraron el juego estimulante y todas las preguntas sobre la dimensión europea suscitaron una competencia positiva. Aprendieron conceptos complejos de finanzas mientras jugaban y comparaban situaciones de vida en diferentes países europeos. La inspectora irlandesa presente elogió el juego.",
        author: "Profesora, CES (Centre for European Schooling)",
        location: "Escuela europea acreditada de Dunshaughlin, Irlanda",
        date: "Abril 2024",
      },
      quotes: [
        {
          quote:
            "En una sola hora de clase, los estudiantes debatían sobre impuestos y equilibrio presupuestario con enorme madurez.",
          author: "Profesor de Economía",
          role: "Escuela piloto, Luxemburgo",
        },
        {
          quote:
            "¡No parecía una lección teórica, pero memoricé todo sobre cómo se financian las escuelas y hospitales públicos!",
          author: "Estudiante (16 años)",
          role: "Participante del piloto, Luxemburgo",
        },
        {
          quote:
            "El juego facilita que los alumnos comprendan el principio de solidaridad ciudadana y se ayuden mutuamente en los cálculos.",
          author: "Profesora de Ciencias Sociales",
          role: "Red escolar europea",
        },
      ],
    },
    collaborate: {
      badge: "Red de Escuelas Piloto",
      title: "Colaboremos",
      description:
        "Buscamos escuelas piloto por toda Europa, socios educativos y cofinanciación pública para escalar la versión digital — para que la educación financiera y cívica sea accesible para todos.",
      quote:
        "La educación no es solo lo que aprendemos — es cómo entendemos y navegamos por nuestro mundo. Hagámosla real, relevante y atractiva.",
      btnSubmit: "Solicitar presupuesto",
      emailsTitle: "Contacto directo",
      form: {
        name: "Tu Nombre",
        school: "Escuela / Institución",
        email: "Correo institucional",
        country: "País",
        role: "Cargo (Docente, Director/a, Coordinador/a)",
        message: "¿Cómo te gustaría pilotar Mobility Era en tu centro educativo?",
      },
    },
    footer: {
      tagline: "Conectando la investigación académica con la sociedad desde 2014.",
      rights: "Todos los derechos reservados.",
      trademark:
        "Mobility Era Game es una marca registrada de Researchista (Reg. BOIP n.º 1395977, Clase 28.41).",
      partnership:
        "Proyecto piloto nacional apoyado por el Instituto del Banco Europeo de Inversiones (BEI) y SCRIPT (Luxemburgo).",
    },
  },
};
