import { ServiceDoor, TimelineMilestone } from '../types';

export const CREATOR_INFO = {
  name: 'Yousaf',
  fullName: 'Yousaf Tariq',
  title: 'Computer Science Graduate • Forex Market Analyst • AI & Web Skills',
  bio: 'Computer Science graduate with six years of hands-on experience in the Forex market, combining analytical thinking, disciplined risk management and technical-analysis skills. Skilled in HTML web development, AI prompt engineering and AI video creation (Creator of Realify AI). Passionate about using digital tools and AI to solve practical problems and create engaging content.',
  phone: '03114134668',
  email: 'yousaftariq2015@gmail.com',
  alternateEmail: 'yousaftariq2010@gmail.com',
  facebookPage: 'Realify AI',
  location: 'Lahore, Pakistan • Open for Global Remote',
  status: 'Open for Professional Roles & Collaborative Projects',
  roles: [
    'Forex Market Analyst',
    'AI Video Creator',
    'AI Prompt Engineer',
    'CS Graduate & Web Dev'
  ],
  portraitImage: '/assets/aistudio/WhatsApp_Image_2026-11-10_at_8.22.41_PM_ad2ea340.jpeg',
  cvPdfPath: '/assets/aistudio/Yousaf_Tariq_CV_Premium_42a13076.pdf',
  wittyBio: "Combining 6 years of Forex chart discipline with generative AI pipelines and computer science foundations. Whether calculating pip risk or engineering high-yield video prompts for Realify AI, precision always comes first."
};

export const SERVICE_DOORS: ServiceDoor[] = [
  {
    id: 'forex-trading',
    title: 'Forex Market Analysis',
    shortTitle: 'Forex Trading',
    tagline: '6 years of disciplined price action, currency analysis & strict capital protection.',
    description: 'Six years of hands-on experience monitoring currency-pair movements, assessing potential market direction through technical analysis, and executing strategy-based trading setups with ironclad risk management.',
    features: [
      '6 years of hands-on market analysis in Forex currency pairs',
      'Monitored EUR/USD, GBP/USD, XAU/USD price charts & market behavior',
      'Strategy-based trading setups with strict focus on capital protection',
      'Market review with patience, discipline and informed decision-making',
      'Technical analysis: support/resistance, trendlines, order blocks & liquidity'
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
        tags: ['Price Action', 'Technical Analysis', 'Risk Management', 'Capital Protection', 'EUR/USD'],
        type: 'forex-terminal',
        stats: [
          { label: 'Trading Experience', value: '6 Years' },
          { label: 'Risk Rule', value: '1% - 2% Max' },
          { label: 'Primary Markets', value: 'FX & Gold' }
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
    description: 'Creator of Realify AI. Transforming creative concepts and detailed written prompts into dynamic video content using cutting-edge AI tools. Planning video ideas, generating AI-assisted scenes, and crafting compelling storytelling reels.',
    features: [
      'Founder and Creator of Facebook video channel: Realify AI',
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
        subtitle: 'Short-Form, Promotional & Storytelling Content',
        category: 'AI VIDEO GENERATION • REALIFY AI',
        description: 'All AI-generated videos created and published on the official Realify AI Facebook page. Demonstrates end-to-end prompt engineering, scene composition, camera motion orchestration, and viral narrative pacing.',
        highlights: [
          'Interactive video player with scene switcher and prompt inspection',
          'Hyper-realistic scene generation across cinematic sci-fi and historical narratives',
          'Camera direction: dolly tracking, anamorphic lenses, and volumetric lighting',
          'Published portfolio on Facebook: Realify AI'
        ],
        tags: ['AI Video Generation', 'Realify AI', 'Short-Form Video', 'Prompt-to-Scene', 'Storytelling'],
        type: 'video-studio',
        externalUrl: 'https://facebook.com',
        caseStudyUrl: '#realify-ai',
        stats: [
          { label: 'Brand', value: 'Realify AI' },
          { label: 'Format', value: 'Shorts & Reels' },
          { label: 'Resolution', value: '4K AI Generated' }
        ]
      }
    ]
  },
  {
    id: 'prompt-engineering',
    title: 'AI Prompt Engineering',
    shortTitle: 'Prompt Eng.',
    tagline: 'Crafting clear, context-rich prompts for precise and high-yield AI outputs.',
    description: 'Writing, refining, and iterating on clear, context-rich prompts to get accurate outputs from AI models. Leveraging prompt-based workflows for ideation, writing support, research assistance, and creative automation.',
    features: [
      'Write and refine clear, context-rich prompts to get accurate outputs',
      'Structured prompt workflows for ideation, writing support & research',
      'Iterative prompt testing & optimization loops for peak quality',
      'Specialized in financial analysis, coding, and multi-modal scene synthesis',
      'Domain expertise across text, image, and video generative models'
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
    title: 'Web Development (CS Foundations)',
    shortTitle: 'Web & CS',
    tagline: 'BS Computer Science graduate (2023) building clean, structured web experiences.',
    description: 'Degree in Computer Science from the University of Lahore (2023). Building and structuring web pages using HTML, semantic layout, headings, links, and media. Actively expanding knowledge of modern web-development technologies.',
    features: [
      'BS Computer Science from University of Lahore (Graduated 2023)',
      'Build and structure web pages using HTML, clean layout & typography',
      'Strong analytical thinking and creative problem-solving foundation',
      'Actively expanding knowledge of modern frontend frameworks and tools',
      'Combining technical CS concepts with practical digital tools'
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
        id: 'web-foundations',
        title: 'Modern Web Architecture & Layout Showcase',
        subtitle: 'Semantic Structure & Interactive Components',
        category: 'BS COMPUTER SCIENCE • WEB DEVELOPMENT',
        description: 'Clean, accessible web page architectures built with modern semantic markup, responsive grid structures, and interactive UI states. Demonstrates foundational software engineering discipline paired with modern responsive design.',
        highlights: [
          'Semantic HTML5 structure with zero layout shift',
          'Clean CSS layout mathematics and accessible typography',
          'Integration with dynamic interactive widgets and calculators',
          'University of Lahore Computer Science capstone foundations'
        ],
        tags: ['HTML5', 'Computer Science', 'Page Layout', 'Responsive Design', 'University of Lahore'],
        type: 'desktop',
        image: '/src/assets/images/project_web_platform_1794424699631.jpg',
        stats: [
          { label: 'Degree', value: 'BS Computer Science' },
          { label: 'University', value: 'UOL (2023)' },
          { label: 'Core Skills', value: 'HTML & CS' }
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
      'Built and scaled Realify AI video channels with 100% AI-generated short-form content',
      'Engineered structured prompt workflows for high-accuracy video scene generation'
    ],
    skills: ['Market Analysis', 'Technical Analysis', 'Risk Management', 'AI Video Creation', 'AI Prompt Engineering', 'Realify AI']
  },
  {
    year: 2023,
    dateRange: '2019 — 2023',
    role: 'BS Computer Science',
    company: 'University of Lahore',
    location: 'Lahore, Pakistan',
    description: 'Graduated with a Bachelor of Science in Computer Science. Gained foundational software engineering knowledge, programming logic, data structures, and web development fundamentals.',
    achievements: [
      'Completed 4-year Computer Science degree combining analytical thinking and coding',
      'Built web page projects using structured HTML, links, media, and layout design',
      'Developed creative problem solving, self-motivation, and disciplined technical workflows'
    ],
    skills: ['Computer Science', 'HTML & Webpages', 'Analytical Thinking', 'Problem Solving', 'Data Structures']
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
  name: 'Yousaf Tariq',
  title: 'Computer Science Graduate • Forex Market Analyst • AI & Web Skills',
  contact: {
    phone: '03114134668',
    email: 'yousaftariq2015@gmail.com',
    facebook: 'Realify AI',
    pdfUrl: '/assets/aistudio/Yousaf_Tariq_CV_Premium_42a13076.pdf'
  },
  summary: 'Computer Science graduate with six years of hands-on experience in the Forex market, combining analytical thinking, disciplined risk management and technical-analysis skills. Also skilled in HTML web development, AI prompt engineering and AI video creation. Passionate about using digital tools and AI to solve practical problems and create engaging content. Seeking an opportunity to contribute to a professional team while continuing to grow technically and creatively.',
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
      area: 'AI Video Creation',
      bullets: [
        'Turn concepts and written prompts into video content using AI-powered tools.',
        'Plan video ideas, prepare prompts and generate AI-assisted scenes for short-form, promotional and storytelling content.',
        'Created all AI-generated videos published on my Facebook page, Realify AI: View video portfolio.'
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
      area: 'Web Development (Foundational)',
      bullets: [
        'Build and structure basic web pages using HTML, including headings, paragraphs, links, images and page layout.',
        'Actively expanding knowledge of broader web-development technologies.'
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
