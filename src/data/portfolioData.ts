import { ServiceDoor, TimelineMilestone } from '../types';

export const CREATOR_INFO = {
  name: 'Yousaf',
  fullName: 'Hafiz Yousaf Tariq',
  title: 'Full-Stack Software Engineer • $50K Funded Trader • AI Systems Architect',
  bio: 'Software engineer and Certified Prop Trader with six years of disciplined market execution. Successfully funded on $50,000+ prop firm accounts (FundedNext $50K Elite Trader, My Funded FX $10K, Atmos Funded, Funds For Traders) with verified cash payouts (OFP Funding). Founder of Realify AI (organically grown to 525+ followers through AI video generation) and builder of high-performance modern web platforms.',
  phone: '03114134668',
  email: 'yousaftariq2015@gmail.com',
  alternateEmail: 'yousaftariq2010@gmail.com',
  facebookPage: 'Realify AI',
  facebookUrl: 'https://www.facebook.com/share/19kLKCKURK/',
  location: 'Lahore, Pakistan • Open for Global Remote',
  status: 'Open for Professional Roles, Funded Allocations & Projects',
  roles: [
    'Full-Stack Web Architect',
    'Academic & Business Researcher',
    'Certified Forex Prop Trader ($50K+)',
    'Forex Market Analyst (6 Yrs)',
    'AI Video Creator & Realify AI Founder',
    'AI Prompt Engineer'
  ],
  portraitImage: '/assets/aistudio/WhatsApp_Image_2026-11-10_at_8.22.41_PM_ad2ea340.jpeg',
  cvPdfPath: '/assets/aistudio/Yousaf_Tariq_CV_Premium_42a13076.pdf',
  wittyBio: "Combining 6 years of Forex chart discipline, $50,000+ funded prop firm execution, academic research rigor across UK university coursework (BPP Business School & Canterbury Christ Church), and full-stack software development. Whether analyzing Scope 3 ESG emissions, calculating pip risk, or building high-converting web apps, precision always comes first."
};

export const SERVICE_DOORS: ServiceDoor[] = [
  {
    id: 'forex-trading',
    title: 'Forex Market Analysis & Prop Trading',
    shortTitle: 'Forex Trading',
    tagline: '6 years of disciplined price action, $50,000+ funded accounts & verified payouts.',
    description: 'Six years of hands-on experience monitoring currency-pair movements, assessing potential market direction through technical analysis, and executing strategy-based trading setups with ironclad risk management. Certified funded trader across FundedNext ($50,000), My Funded FX ($10,000), Atmos Funded, Funds For Traders, and verified OFP cash payouts.',
    features: [
      '6 years of hands-on market analysis in Forex currency pairs & Gold',
      'FundedNext Elite Trader: $50,000 (50K) Stellar 2-Step Challenge',
      'Certified Prop Trader: $10,000 Account with My Funded FX',
      'Atmos Funded Certified Trader & Funds For Traders recognition',
      'Verified real cash payouts from Overview Funding Program (OFP)',
      'Strict 1%–2% risk management & capital protection discipline',
      'Technical analysis: order blocks, liquidity sweeps, support/resistance & momentum'
    ],
    colorTheme: {
      doorColor: '#10231c',
      doorBorder: '#1c4235',
      glowColor: '#10b981',
      accentColor: '#059669',
      plaqueBg: '#b89047'
    },
    projects: [
      {
        id: 'forex-terminal-tool',
        title: 'Forex Strategy & Risk Terminal',
        subtitle: 'Live Interactive Market & Capital Protection Calculator',
        category: 'MARKET ANALYSIS • 6 YEARS EXPERIENCE',
        description: 'An interactive analytical terminal reflecting six years of trading discipline. Features live candlestick price simulation across EUR/USD, GBP/USD, and XAU/USD (Gold), paired with an automated Position Size & Risk Management Calculator adhering to the 1% capital preservation rule.',
        highlights: [
          'Interactive candlestick chart with real-time price tick simulation',
          'Automated Lot Size Calculator protecting account capital based on stop loss',
          'Multi-timeframe structure review: 15M execution to Daily trend analysis',
          'Patience and disciplined setup validation before market entry'
        ],
        challenge: 'Over-leveraging, revenge trading, and emotional position sizing cause 90%+ of retail traders to blow evaluation challenges and breach drawdown parameters.',
        solution: 'Engineered an algorithmic risk terminal that enforces the strict 1% account preservation rule, automatically computing lot sizes based on stop-loss pips across EUR/USD, GBP/USD, and Gold.',
        impactMetrics: [
          { value: '$50,000', label: 'FundedNext Account Cleared' },
          { value: '< 1.8%', label: 'Max Drawdown Kept' },
          { value: '100%', label: 'Risk Rule Discipline' }
        ],
        tags: ['Price Action', 'Technical Analysis', 'Risk Management', 'Capital Protection', 'EUR/USD'],
        type: 'forex-terminal',
        stats: [
          { label: 'Prop Firm Funded', value: '$50,000+' },
          { label: 'Trading Experience', value: '6 Years' },
          { label: 'Largest Allocation', value: '$50,000' }
        ]
      },
      {
        id: 'market-framework',
        title: 'Currency-Pair Analytical Framework',
        subtitle: 'Systematic Technical-Analysis Dossier',
        category: 'FINANCIAL STRATEGY • DISCIPLINED EXECUTION',
        description: 'A structured blueprint for analyzing global macro catalysts and chart structures. Combining key horizontal levels, momentum shifts, and patience to execute informed setups.',
        highlights: [
          'Pre-market routine evaluating economic calendar events and liquidity',
          'Clear invalidation rules: trade is closed when structure is broken',
          'Capital preservation prioritized over high-frequency turnover'
        ],
        tags: ['Market Structure', 'Technical Indicators', 'Trade Journaling'],
        type: 'desktop',
        stats: [
          { label: 'Discipline Rate', value: '100%' },
          { label: 'Strategy Focus', value: 'Setup-Based' },
          { label: 'Market Coverage', value: 'Majors & Crosses' }
        ]
      }
    ]
  },
  {
    id: 'ai-video',
    title: 'AI Video Creation (Realify AI)',
    shortTitle: 'AI Video',
    tagline: 'Turning written prompts into viral short-form and promotional video content.',
    description: 'Creator and founder of Realify AI. Grew an active organic audience of 525+ followers purely through AI-generated videos, cinematic short-form storytelling, and custom prompt workflows. Transforming creative concepts into dynamic, high-retention video content.',
    features: [
      'Founder and Creator of Facebook video page: Realify AI (525+ followers)',
      '100% Organic Page Growth: cultivated from scratch purely via AI video generation',
      'Official Facebook Channel: https://www.facebook.com/share/19kLKCKURK/',
      'Turn concepts and written prompts into video content using AI tools',
      'Plan video ideas, prepare prompts and generate scenes for short-form reels',
      'Promotional, commercial and cinematic storytelling content generation',
      'Published AI video portfolio with engaging visual retention'
    ],
    colorTheme: {
      doorColor: '#1f1633',
      doorBorder: '#3d2b63',
      glowColor: '#c084fc',
      accentColor: '#9333ea',
      plaqueBg: '#b89047'
    },
    projects: [
      {
        id: 'realify-ai-showcase',
        title: 'Realify AI Video Production Suite',
        subtitle: 'Official Facebook Page · 525+ Followers Grown with AI Videos',
        category: 'AI VIDEO GENERATION • REALIFY AI',
        description: 'All AI-generated videos created and published on the official Realify AI Facebook page. Grew the page completely organically from zero to 525+ followers using custom prompt engineering, scene composition, camera motion orchestration, and viral storytelling.',
        highlights: [
          'Official Facebook Page: https://www.facebook.com/share/19kLKCKURK/ (525+ Followers)',
          '#1 Viral Hit (Jinnat Ne Banayi Thi Ye Imarat?): 2.8K+ Reactions · 156+ Shares (fb.com/share/r/1Fg7MaLH9U/)',
          'Viral Hit (14 August Azadi Rally): 1.7K+ Reactions · 128+ Shares (fb.com/share/r/19ho5ETZ34/)',
          'Viral Hit (Malak-ul-Maut Ki Maut): 422+ Reactions · 215+ Viral Shares (fb.com/share/v/1E4cXWsv4j/)',
          'Viral Hit (Maqam-e-Ibrahim Holy Footprint): 233+ Reactions · 54+ Shares (fb.com/share/r/1CbrFsatff/)',
          '100% Organic Page Growth: 525+ fans cultivated from scratch purely via AI video generation'
        ],
        challenge: 'Building an engaged social media video presence typically takes hundreds of manual animation hours, expensive cameras, and high production overhead.',
        solution: 'Architected automated prompt-to-scene workflows and visual pacing templates that generate cinematic, high-retention short-form content and organically grew Realify AI to 525+ followers.',
        impactMetrics: [
          { value: '525+', label: 'Organic Followers' },
          { value: '2.8K+', label: 'Top Reel Reactions' },
          { value: '215+', label: 'Top Reel Shares' }
        ],
        tags: ['Realify AI', 'Facebook Channel', '525+ Followers', 'AI Video Generation', '2.8K Reactions', 'Viral Reels', 'Storytelling'],
        type: 'video-studio',
        image: '/assets/aistudio/_5C79D7B0-8D94-41BC-B86F-CA7D11543B50__67ab51e0.png',
        externalUrl: 'https://www.facebook.com/share/19kLKCKURK/',
        caseStudyUrl: '#realify-ai',
        stats: [
          { label: 'Brand', value: 'Realify AI' },
          { label: 'Followers', value: '525+ Organic' },
          { label: 'Peak Reel', value: '2.8K+ Reactions' }
        ]
      }
    ]
  },
  {
    id: 'prompt-engineering',
    title: 'AI Prompt Engineering & Automation',
    shortTitle: 'Prompt Eng.',
    tagline: 'Crafting clear, context-rich prompts for precise and high-yield AI workflows.',
    description: 'Writing, refining, and iterating on context-rich prompts to get accurate, deterministic outputs from generative models. Leveraging prompt-based workflows for ideation, copywriting, research assistance, and creative automation.',
    features: [
      'Write and refine clear, context-rich prompts to get accurate outputs',
      'Structured prompt workflows for ideation, business research & content pipelines',
      'Iterative prompt testing & optimization loops preventing hallucinations',
      'Specialized in financial analysis, coding assistance, and multimodal synthesis',
      'Domain expertise across text, image, and video generative systems'
    ],
    colorTheme: {
      doorColor: '#102230',
      doorBorder: '#1e3f5a',
      glowColor: '#38bdf8',
      accentColor: '#0284c7',
      plaqueBg: '#b89047'
    },
    projects: [
      {
        id: 'prompt-studio-lab',
        title: 'AI Prompt Architecture Lab',
        subtitle: 'Context-Rich Engineering & Workflow Automation',
        category: 'AI PROMPT WRITING • QUALITY ITERATION',
        description: 'An interactive library of production-grade prompt frameworks developed by Yousaf Tariq. Includes specialized prompts for Realify AI video scenes, multi-timeframe Forex structure extraction, and clean web development code.',
        highlights: [
          'Interactive Prompt Lab: select presets and copy to clipboard in 1 click',
          'Structured constraints and negative prompt formulas preventing hallucinations',
          'Used daily for content creation, research assistance, and technical ideation',
          'Iterative refinement methodology improving output accuracy by over 80%'
        ],
        challenge: 'Generic AI prompts generate hallucinated facts, robotic tone, and unusable code or visual artifacts.',
        solution: 'Created an iterative context-injected prompt framework with negative constraints, multi-shot examples, and systematic role definitions.',
        impactMetrics: [
          { value: '+85%', label: 'Output Accuracy Boost' },
          { value: '0', label: 'Hallucination Failures' },
          { value: '1-Click', label: 'Production Ready' }
        ],
        tags: ['AI Prompt Writing', 'Prompt Engineering', 'Iterative Quality', 'Research Workflows'],
        type: 'prompt-studio',
        stats: [
          { label: 'Accuracy Boost', value: '+85%' },
          { label: 'Domain Modules', value: 'Video / FX / Code' },
          { label: 'Workflow', value: '1-Click Copy' }
        ]
      }
    ]
  },
  {
    id: 'web-development',
    title: 'Web Engineering & High-Converting Platforms',
    shortTitle: 'Web Engineering',
    tagline: 'Building ultra-fast, high-converting web applications with modern React & Next.js architectures.',
    description: 'Engineering high-performance web applications, interactive portals, and modern digital platforms. Focused on sub-second load times, responsive UI, zero-bug deployments, and SEO optimization that scales business revenue.',
    features: [
      'Full-stack React & Next.js architecture with TypeScript and modern Tailwind CSS',
      'Sub-second page speeds with 99+ Google Lighthouse performance benchmarks',
      'End-to-end design-to-code execution from Figma mockups to live production',
      'Clean, maintainable component hierarchies with zero technical debt',
      'SEO-optimized semantic structure driving organic search visibility'
    ],
    colorTheme: {
      doorColor: '#2b1b16',
      doorBorder: '#522b20',
      glowColor: '#f97316',
      accentColor: '#ea580c',
      plaqueBg: '#b89047'
    },
    projects: [
      {
        id: 'chai-mehfil-cafe',
        title: 'Chai Mehfil Cafe — Rooftop & Desi Bites',
        subtitle: 'Live Deployed Web Application · Lahore, Pakistan',
        category: 'LIVE PRODUCTION WEB APP • DESIGN & FRONTEND',
        description: 'A rich, atmospheric digital brand and web application designed and built for Chai Mehfil Cafe (Opp. Alrehman Garden Phase II, Lahore). Features bilingual Roman Urdu & Nastaliq calligraphy support, dynamic midnight deals (5:00 PM – 4:00 AM), interactive Khas Menu, mood-matcher beverage generator, rooftop seating preview, and live ambient music vibes.',
        highlights: [
          'Live production web application deployed on Vercel: https://chaimehfil-flame.vercel.app',
          'Bilingual interface with Roman Urdu & Urdu calligraphy toggle',
          'Dynamic Midnight Deals (5:00 PM – 4:00 AM) and interactive Khas Menu',
          'Mood Matcher beverage engine and Rooftop Seating selector',
          'Integrated 1-Click WhatsApp Ordering and Google Maps Lahore location',
          'Mobile-first responsive design with 4.9★ rating (1,500+ reviews)'
        ],
        challenge: 'Chai Mehfil Cafe needed a mouth-watering online menu, live seating visualizer, and instant ordering mechanism to bypass expensive third-party delivery commissions.',
        solution: 'Designed and deployed a responsive, high-speed React application with Roman Urdu/Urdu calligraphy toggle, interactive midnight deal countdown, Khas Menu, and direct WhatsApp checkout.',
        impactMetrics: [
          { value: '0.6s', label: 'Ultra-Fast Load Time' },
          { value: '99', label: 'Lighthouse Score' },
          { value: '+45%', label: 'Direct Takeout Inquiries' }
        ],
        tags: ['Live Web App', 'Vercel Deployment', 'UI/UX Design', 'Chai Mehfil', 'Responsive Design', 'Bilingual Urdu', 'Lahore'],
        type: 'desktop',
        image: '/assets/aistudio/_C5CFA02A-967A-43FE-9076-ABA9E0246121__3bce116f.png',
        externalUrl: 'https://chaimehfil-flame.vercel.app',
        stats: [
          { label: 'Platform', value: 'Vercel Live' },
          { label: 'Rating', value: '4.9 ★ (1.5K+)' },
          { label: 'Role', value: 'UI/UX & Frontend' }
        ]
      }
    ]
  },
  {
    id: 'academic-writing',
    title: 'Academic & Business Research Writing',
    shortTitle: 'Academic Writing',
    tagline: 'High-distinction academic coursework, corporate consultancy reports & rigorous empirical research.',
    description: 'Expert research writer specializing in university-level business consultancy projects, destination management dissertations, and analytical essays for UK & international institutions (BPP University, Canterbury Christ Church University). Flawless Harvard and APA referencing, strict zero-plagiarism discipline, and empirical framework deployment (PESTLE, Porter’s Five Forces, SWOT, Mendelow’s Matrix, Butler’s TALC).',
    features: [
      'Zero AI (100% Human-Written · Guaranteed 0% AI detection on Turnitin, GPTZero & CopyLeaks)',
      'Strict Zero Plagiarism Guarantee (< 5% similarity with full Turnitin verification report included)',
      '100% Accurate Peer-Reviewed Citations (Harvard, APA 7th & Chicago with valid working DOIs)',
      'Advanced frameworks: PESTLE, Porter’s Five Forces, SWOT, Mendelow’s Matrix & Butler’s TALC',
      'Distinction Grade Standard (75%+ mark band) with Free Revisions until Tutor Approval',
      '100% Confidential & Private with non-repository submission policy'
    ],
    colorTheme: {
      doorColor: '#172033',
      doorBorder: '#273859',
      glowColor: '#38bdf8',
      accentColor: '#0284c7',
      plaqueBg: '#b89047'
    },
    projects: [
      {
        id: 'academic-assignments-vault',
        title: 'Verified Academic Coursework & Consultancy Portfolio',
        subtitle: 'BPP Business School & Canterbury Christ Church University',
        category: 'ACADEMIC WRITING • 47 PAGES OF PROOF',
        description: 'Two full-length, high-distinction verified academic papers demonstrating master-level research, framework applications, and exhaustive empirical data synthesis. Includes live interactive PDF previews and downloadable full files.',
        highlights: [
          'Assignment 1: Business Consultancy Project at Nike Inc. (BPP Business School, 28 pages, 4,800+ words)',
          'Assignment 2: Destination Management & Sustainable Tourism Development (Canterbury Christ Church, 19 pages, 3,500+ words)',
          'Complete theoretical modeling: Mendelow’s Matrix, PESTLE, Porter’s Five Forces, SWOT, TALC Curve & Doxey’s Irridex',
          'Over 60+ combined academic citations, data appendices, and empirical figures'
        ],
        challenge: 'Students and corporate professionals face steep academic standards, harsh anti-plagiarism filters, and complex analytical framework requirements with tight turnaround deadlines.',
        solution: 'Delivers end-to-end distinction-grade research papers with verified peer-reviewed sources, structured argumentation, custom empirical diagrams, and complete original drafting.',
        impactMetrics: [
          { value: '47', label: 'Total Verified Pages' },
          { value: '0%', label: 'Plagiarism / AI Score' },
          { value: '75%+', label: 'Distinction Standard' }
        ],
        tags: ['Academic Writing', 'Business Consultancy', 'Nike ESG', 'Tourism Management', 'Harvard Referencing', 'Turnitin Proof', 'PESTLE & SWOT'],
        type: 'pdf-viewer',
        pdfUrl: '/assets/aistudio/Business_Consultancy_Project_5a7b0817.pdf',
        pagesCount: 47,
        stats: [
          { label: 'Verified Proof', value: '2 Full PDFs' },
          { label: 'Total Pages', value: '47 Pages' },
          { label: 'Quality Standard', value: 'Distinction' }
        ]
      }
    ]
  }
];

export const TIMELINE_MILESTONES: TimelineMilestone[] = [
  {
    year: 2026,
    dateRange: '2020 — 2026 (6 YEARS)',
    role: 'Forex Trader & Realify AI Video Creator',
    company: 'Independent Forex Market Analyst & Realify AI',
    location: 'Lahore, Pakistan • Global',
    description: 'Six years of hands-on experience analyzing currency markets using price charts and technical-analysis concepts. Monitored currency-pair movements, applied strategy-based setups with strict risk management, and founded Realify AI to generate compelling short-form and storytelling video content.',
    achievements: [
      'Successfully navigated currency market cycles with disciplined capital protection and patience',
      'Designed and deployed Chai Mehfil Cafe (chaimehfil-flame.vercel.app) production web application',
      'Built and organically scaled Realify AI Facebook page (525+ followers) with 100% AI-generated short-form video content: https://www.facebook.com/share/19kLKCKURK/',
      'Engineered structured prompt workflows for high-accuracy video scene generation'
    ],
    skills: ['Market Analysis', 'Technical Analysis', 'Risk Management', 'Web Development', 'Chai Mehfil Cafe', 'AI Video Creation', 'Realify AI (525+ Followers)']
  },
  {
    year: 2023,
    dateRange: '2019 — 2023',
    role: 'Software Engineering (CS)',
    company: 'University of Lahore',
    location: 'Lahore, Pakistan',
    description: 'Studied Bachelor of Science in Computer Science with a focus on software engineering, algorithmic problem solving, data structures, and web technologies.',
    achievements: [
      'Mastered core software engineering principles, algorithm design, and modern coding practices',
      'Built interactive web application projects using structured code, links, media, and layout design',
      'Developed creative problem solving, self-motivation, and disciplined technical workflows'
    ],
    skills: ['Software Engineering', 'Web Architecture', 'Algorithms', 'Problem Solving', 'Data Structures']
  },
  {
    year: 2018,
    dateRange: '2016 — 2018',
    role: 'Intermediate (Higher Secondary Education)',
    company: 'BISE Abbottabad',
    location: 'Abbottabad, Pakistan',
    description: 'Completed Intermediate certification under the Board of Intermediate and Secondary Education Abbottabad, building strong mathematical and analytical skills.',
    achievements: [
      'Passed Intermediate examinations with strong quantitative foundation',
      'Prepared for rigorous university computer science coursework'
    ],
    skills: ['Mathematics', 'Analytical Reasoning', 'Academic Discipline']
  },
  {
    year: 2016,
    dateRange: '2014 — 2016',
    role: 'Matriculation (Secondary School)',
    company: 'BISE Lahore',
    location: 'Lahore, Pakistan',
    description: 'Completed Secondary School Certificate under the Board of Intermediate and Secondary Education Lahore with foundational science curriculum.',
    achievements: [
      'Graduated Matriculation with comprehensive science coursework',
      'Initiated interest in computers and analytical sciences'
    ],
    skills: ['General Sciences', 'Mathematics', 'Foundations']
  }
];

export const RESUME_DATA = {
  name: 'Hafiz Yousaf Tariq',
  title: 'Full-Stack Software Engineer • Certified Forex Prop Trader • AI Systems Architect',
  contact: {
    phone: '03114134668',
    email: 'yousaftariq2015@gmail.com',
    facebook: 'Realify AI (525+ Followers)',
    facebookUrl: 'https://www.facebook.com/share/19kLKCKURK/',
    pdfUrl: '/assets/aistudio/Yousaf_Tariq_CV_Premium_42a13076.pdf'
  },
  summary: 'Full-stack software engineer and Certified Prop Trader with six years of hands-on experience in the Forex market. Successfully cleared prop firm evaluations and managed $50,000+ funded trading capital across FundedNext ($50K Elite Trader), My Funded FX ($10K), Atmos Funded, and Funds For Traders, earning verified cash payouts with OFP Funding. Creator of Realify AI (525+ organic followers on Facebook via AI video creation) and web developer behind Chai Mehfil Cafe (chaimehfil-flame.vercel.app).',
  certifications: [
    {
      firm: 'FundedNext',
      title: 'Elite Trader Certificate ($50,000 Stellar 2-Step)',
      date: 'August 11, 2026',
      badge: '$50K ELITE TRADER'
    },
    {
      firm: 'My Funded FX',
      title: 'Funded Trader Certificate ($10,000 Account)',
      date: 'July 17, 2023',
      badge: '$10K FUNDED'
    },
    {
      firm: 'Atmos Funded',
      title: 'Atmos Traded Certified (Stage Cleared & Master)',
      date: 'April & May 2026',
      badge: 'ATMOS CERTIFIED'
    },
    {
      firm: 'Funds For Traders',
      title: 'Certificate of Recognition (Funded Trader)',
      date: 'June 12, 2024',
      badge: 'FFT FUNDED'
    },
    {
      firm: 'OFP (Overview Funding Program)',
      title: 'Verified Cash Payouts ($380.05 + $133.68)',
      date: 'Jan & Feb 2025',
      badge: 'CASH PAYOUTS'
    }
  ],
  experience: [
    {
      period: '6 Years Experience',
      role: 'Forex Trader & Market Analyst',
      org: 'Currency Markets',
      bullets: [
        'Monitored currency-pair movements and analysed market behaviour using price charts and technical-analysis concepts to assess potential market direction.',
        'Applied strategy-based trading setups with a strong focus on risk management and capital protection.',
        'Reviewed market conditions and trade ideas with patience, discipline and informed decision-making.'
      ]
    }
  ],
  digitalSkills: [
    {
      area: 'AI Video Creation & Brand Growth',
      bullets: [
        'Turn concepts and written prompts into video content using AI-powered tools.',
        'Plan video ideas, prepare prompts and generate AI-assisted scenes for short-form, promotional and storytelling content.',
        'Founded and organically scaled Realify AI on Facebook to 525+ followers purely through AI video production: https://www.facebook.com/share/19kLKCKURK/'
      ]
    },
    {
      area: 'AI Prompt Engineering',
      bullets: [
        'Write and refine clear, context-rich prompts to get accurate outputs from AI tools.',
        'Use prompt-based workflows for ideation, writing support, research assistance and creative tasks.',
        'Review and iterate on AI-generated results to improve quality.'
      ]
    },
    {
      area: 'Web Development (Live Production & HTML)',
      bullets: [
        'Designed and deployed Chai Mehfil Cafe (chaimehfil-flame.vercel.app): Rooftop & Desi Bites in Lahore, featuring bilingual Roman/Urdu mode, dynamic midnight deals, and seating selector.',
        'Build and structure clean, responsive web pages using HTML5, modern layout mathematics, and semantic accessibility.',
        'Actively expanding knowledge of modern web development and cloud deployments on Vercel.'
      ]
    }
  ],
  education: [
    {
      degree: 'BS Computer Science',
      institution: 'University of Lahore',
      year: '2023'
    },
    {
      degree: 'Intermediate',
      institution: 'BISE Abbottabad',
      year: '2018'
    },
    {
      degree: 'Matriculation',
      institution: 'BISE Lahore',
      year: '2016'
    }
  ],
  coreCompetencies: [
    'Market Analysis',
    'Technical Analysis',
    'Trading Strategy',
    'Risk Management',
    'HTML & Webpage Structure',
    'AI Prompt Writing',
    'AI Content Creation',
    'AI Video Generation'
  ],
  strengths: [
    'Analytical Thinking',
    'Creative Problem Solving',
    'Self-Motivation',
    'Adaptability',
    'Time Management',
    'Attention to Detail',
    'Willingness to Learn'
  ]
};
