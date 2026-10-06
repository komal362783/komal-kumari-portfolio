import type { Project, SkillCategory, SoftSkill, ExperienceItem, Certification, PipelineStep } from '../types';

export const PERSONAL_INFO = {
  name: "Komal Kumari",
  headline: "Turning Data Into Meaningful Insights",
  secondaryText: "Computer Science Student | Data Analytics Enthusiast",
  roles: ["Data Analytics Intern", "Fresher Data Analyst"],
  location: "Agra, Uttar Pradesh, India",
  email: "komalkumari68635@gmail.com",
  phone: "7310659107",
  github: "https://github.com/komal362783",
  linkedin: "https://www.linkedin.com/in/komal-kumari-016747373",
  education: {
    degree: "B.Tech in Computer Science Engineering",
    institution: "Faculty of Engineering & Technology, Agra College, Agra",
    university: "Dr. A.P.J. Abdul Kalam Technical University (AKTU), Lucknow",
    duration: "2023 – 2027",
    expectedGraduation: "2027",
  },
  bio: "I am a Computer Science Engineering student focused on Data Analytics and practical data-driven problem solving. I enjoy transforming raw data into meaningful insights through Python, SQL, Excel, Power BI and data visualization.",
  resumeUrl: "/Komal_Kumari_Resume.pdf", // put your resume PDF in the public/ folder with this exact name
  heroSkills: ["Python", "SQL", "Excel", "Power BI", "Data Visualization"]
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "data-analytics",
    categoryName: "DATA ANALYTICS",
    iconName: "TrendingUp",
    skills: [
      { name: "Data Analysis", levelDescription: "Exploratory & structured analysis to uncover patterns", highlight: true },
      { name: "Data Cleaning & Processing", levelDescription: "Handling nulls, typecasting, validation & deduplication", highlight: true },
      { name: "Data Visualization", levelDescription: "Translating complex metrics into clear visual stories", highlight: true }
    ]
  },
  {
    id: "bi-spreadsheets",
    categoryName: "BI & SPREADSHEETS",
    iconName: "LayoutDashboard",
    skills: [
      { name: "Microsoft Power BI", levelDescription: "Interactive dashboards, reports & KPI tracking", highlight: true },
      { name: "Data Modeling", levelDescription: "Star/Snowflake schemas, relationship mapping & filters" },
      { name: "Microsoft Excel", levelDescription: "Formulas, Pivot Tables, conditional formatting & lookups", highlight: true }
    ]
  },
  {
    id: "python-libraries",
    categoryName: "PYTHON & DATA LIBRARIES",
    iconName: "Code2",
    skills: [
      { name: "Python", levelDescription: "Data structures, analytical scripting & modular code", highlight: true },
      { name: "Pandas", levelDescription: "Dataframe manipulation, grouping, aggregations & transformations", highlight: true },
      { name: "NumPy", levelDescription: "Numerical computing, array operations & vectorization" },
      { name: "Matplotlib", levelDescription: "Statistical plotting, subplots & custom charts" },
      { name: "Seaborn", levelDescription: "Distribution plots, heatmaps & correlation analysis" },
      { name: "Plotly", levelDescription: "Interactive multi-dimensional charts & web visual components" }
    ]
  },
  {
    id: "database",
    categoryName: "DATABASE",
    iconName: "Database",
    skills: [
      { name: "SQL — Basic", levelDescription: "Foundational relational querying & data extraction", highlight: true }
    ],
    sqlSpecialTopics: ["SELECT", "WHERE", "JOINs", "GROUP BY", "Subqueries"]
  },
  {
    id: "version-control",
    categoryName: "VERSION CONTROL",
    iconName: "GitBranch",
    skills: [
      { name: "GitHub", levelDescription: "Repository management, versioning & open-source collaboration", highlight: true }
    ]
  }
];

export const SOFT_SKILLS: SoftSkill[] = [
  {
    name: "Communication",
    description: "Conveying technical data insights clearly to both technical and non-technical stakeholders.",
    iconName: "MessageSquareText"
  },
  {
    name: "Analytical Thinking",
    description: "Breaking down complex data problems into logical, testable hypotheses and step-by-step solutions.",
    iconName: "BrainCircuit"
  },
  {
    name: "Problem-Solving",
    description: "Identifying data bottlenecks, resolving data inconsistencies, and designing practical analytics workflows.",
    iconName: "Lightbulb"
  },
  {
    name: "Attention to Detail",
    description: "Meticulous validation of data types, edge-case null handling, and metric accuracy.",
    iconName: "CheckCheck"
  },
  {
    name: "Time Management",
    description: "Structuring project milestones systematically to deliver clean, reproducible analytics deliverables.",
    iconName: "Clock"
  },
  {
    name: "Teamwork",
    description: "Collaborating effectively within engineering and analytics teams with empathy and shared purpose.",
    iconName: "Users2"
  }
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    company: "CodeAlpha",
    role: "Data Analytics Intern",
    type: "Virtual Internship",
    duration: "1 August 2026 – 30 August 2026",
    location: "Remote / Virtual",
    description: "Completed a practical, task-driven Data Analytics internship focused on end-to-end exploratory data analysis, sentiment intelligence, e-commerce performance visualization, and web scraping pipelines.",
    deliverables: [
      "Conducted thorough Exploratory Data Analysis (EDA) on retail and e-commerce datasets to identify sales drivers and profit trends.",
      "Engineered text analytics workflows leveraging NLP techniques (NLTK, VADER) to classify customer sentiments and evaluate feedback.",
      "Developed interactive data applications using Streamlit and Plotly for dynamic multi-parameter visualization.",
      "Constructed automated data extraction pipelines with Python Requests and BeautifulSoup for web-scraped analytics datasets."
    ],
    technologies: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Plotly", "Streamlit", "NLTK", "BeautifulSoup"]
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: "business-performance-360",
    title: "Business Performance 360° Dashboard",
    category: "End-to-End Business Analytics",
    filterTags: ["Power BI", "Python", "SQL", "Visualization"],
    shortDescription: "An end-to-end business intelligence solution unifying SQL querying, Python exploratory analysis, Excel structured reporting, and an interactive Power BI dashboard.",
    technologies: ["SQL", "Python", "Pandas", "NumPy", "Excel", "Power BI", "Data Modeling", "Data Visualization"],
    keyCapabilities: [
      "Full ETL & Data Validation Pipeline",
      "Relational Data Modeling in Power BI",
      "Multi-dimensional KPI & Margin Breakdown",
      "Actionable Executive Recommendations"
    ],
    githubUrl: "https://github.com/komal362783/Business-Performance-360-Dashboard",
    isSyntheticData: true,
    dataLabel: "Fictional / Synthetic Data",
    caseStudy: {
      problem: "Organizations often possess raw transactional and operational records across disparate tables, making it difficult for management to quickly track holistic revenue velocity, product margins, and regional sales distribution in one single view.",
      approach: [
        "Ingested multi-table transactional records and performed structured data cleaning and type validation.",
        "Executed SQL aggregations using JOINs and GROUP BY clauses to extract core revenue and order metrics.",
        "Conducted Python data audits with Pandas and NumPy to identify statistical distributions and trends.",
        "Designed star-schema relationships and built an interactive Power BI dashboard highlighting executive KPIs."
      ],
      tools: ["Power BI", "SQL", "Python", "Pandas", "Excel", "DAX Formulas"],
      analysisHighlights: [
        "Data validation & schema design for seamless dimensional slicing across regions and product categories.",
        "SQL queries designed to isolate high-value transaction cohorts and calculate category contributions.",
        "Interactive drill-down reports enabling instant transition between macro KPIs and granular order details."
      ],
      insights: [
        "Visualized top-performing product segments contributing significantly to cumulative revenue.",
        "Demonstrated the effectiveness of integrated data modeling in accelerating business decision cycles."
      ]
    }
  },
  {
    id: "customer-voice-analytics",
    title: "Customer Voice Analytics",
    category: "NLP & Sentiment Analysis",
    filterTags: ["Python", "NLP", "Visualization"],
    shortDescription: "An interactive natural language processing pipeline that ingests customer reviews, preprocesses text, and classifies sentiment polarity and emotions via VADER & Streamlit.",
    technologies: ["Python", "Pandas", "NumPy", "NLTK", "VADER", "NLP", "Matplotlib", "Seaborn", "Plotly", "Streamlit"],
    keyCapabilities: [
      "Text Cleaning, Tokenization & Stopword Filtering",
      "VADER Compound Sentiment Scoring",
      "Emotion & Polarity Distribution Visuals",
      "Interactive Streamlit Web Dashboard"
    ],
    githubUrl: "https://github.com/komal362783/CodeAlpha_CustomerVoiceSentimentAnalysis",
    isSyntheticData: true,
    caseStudy: {
      problem: "Unstructured feedback and reviews hold critical customer sentiment signals, but reading through thousands of free-text comments manually is impractical for product and support teams.",
      approach: [
        "Built a text preprocessing pipeline removing noise, special characters, and standard English stopwords using NLTK.",
        "Applied VADER (Valence Aware Dictionary and sEntiment Reasoner) to calculate positive, neutral, and negative sentiment polarity scores.",
        "Created dynamic interactive distributions using Plotly and Seaborn.",
        "Constructed a lightweight Streamlit dashboard to allow dynamic review filtering and sentiment threshold tuning."
      ],
      tools: ["Python", "NLTK", "VADER", "Streamlit", "Plotly", "Pandas"],
      analysisHighlights: [
        "Extracted compound sentiment distributions revealing overall customer approval rates.",
        "Token frequency analysis highlighting recurring keywords associated with positive vs negative feedback.",
        "Explicitly conducted on a synthetic dataset clearly labeled for reproducible testing."
      ],
      insights: [
        "Demonstrated how automated NLP pipelines can categorize large volumes of customer text in seconds.",
        "Highlighted specific customer feedback themes that directly guide feature prioritization."
      ]
    }
  },
  {
    id: "ecommerce-sales-insights",
    title: "E-Commerce Sales & Customer Insights",
    category: "Exploratory Analytics & Visualization",
    filterTags: ["Python", "EDA", "Visualization"],
    shortDescription: "Comprehensive exploratory data analysis and interactive Streamlit application uncovering purchasing patterns, regional performance, and product category trends.",
    technologies: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Plotly", "Streamlit"],
    keyCapabilities: [
      "Feature Engineering & Datetime Decomposition",
      "Regional & Category Sales Breakdown",
      "Customer Purchase Frequency Analysis",
      "Dynamic Multi-Chart Streamlit Dashboard"
    ],
    githubUrl: "https://github.com/komal362783/CodeAlpha_EcommerceSalesDataVisualization",
    isSyntheticData: true,
    dataLabel: "Synthetic Data",
    caseStudy: {
      problem: "E-commerce retailers need granular clarity on which products, regions, and seasonal time windows drive peak sales volume, alongside identifying customer segments with high order value.",
      approach: [
        "Cleaned e-commerce transaction records, imputed missing fields, and converted timestamps into temporal features (month, weekday, quarter).",
        "Engineered customer aggregation metrics including total spend, average order value (AOV), and repeat frequency.",
        "Plotted multi-variable correlations using Seaborn heatmaps and Plotly interactive bar charts.",
        "Deployed a multi-page interactive Streamlit dashboard allowing users to filter by region and date range."
      ],
      tools: ["Python", "Pandas", "Streamlit", "Plotly", "Seaborn", "NumPy"],
      analysisHighlights: [
        "Evaluated monthly sales trajectories to reveal seasonal purchase peaks.",
        "Segmented product catalogs to identify top revenue generators versus low-turnover items.",
        "Interactive geospatial and regional filtering for localized performance audits."
      ],
      insights: [
        "Highlighted specific product categories that yield consistent high margins.",
        "Provided data-driven recommendations on inventory timing and promotional campaigns."
      ]
    }
  },
  {
    id: "superstore-sales-profit-eda",
    title: "Superstore Sales & Profit Analysis",
    category: "Exploratory Data Analysis (EDA)",
    filterTags: ["Python", "EDA", "Visualization"],
    shortDescription: "In-depth statistical and visual exploration of retail superstore data analyzing the delicate relationship between heavy discounting, sales volume, and net profit margins.",
    technologies: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Jupyter Notebook"],
    keyCapabilities: [
      "Discount vs Profit Correlation Analysis",
      "Customer Segment Profitability Mapping",
      "Geographical & State-Level Margin Breakdown",
      "Statistical Distribution & Outlier Detection"
    ],
    githubUrl: "https://github.com/komal362783/CodeAlpha_Superstore_EDA",
    isSyntheticData: true,
    dataLabel: "Synthetic Superstore-style Data",
    caseStudy: {
      problem: "In retail operations, aggressive discount strategies often drive high revenue numbers on paper while severely eroding actual operating profit margins.",
      approach: [
        "Conducted end-to-end Exploratory Data Analysis (EDA) within Jupyter Notebook on superstore transaction logs.",
        "Examined statistical distributions across Sales, Quantity, Discount, and Profit variables.",
        "Created scatter plots, box plots, and facet grids with Seaborn to evaluate discount thresholds.",
        "Analyzed geographical profit anomalies across regions and states."
      ],
      tools: ["Jupyter Notebook", "Python", "Pandas", "Seaborn", "Matplotlib"],
      analysisHighlights: [
        "Discovered clear threshold points where discounts exceeding specific percentages turned net transactions negative.",
        "Segmented performance across Consumer, Corporate, and Home Office customer groups.",
        "Visualized category-level profit ratios to highlight sub-categories causing consistent loss."
      ],
      insights: [
        "Illustrated that high gross sales do not guarantee healthy profitability when discount governance is weak.",
        "Proposed strategic discount caps to protect business bottom-line margins."
      ]
    }
  },
  {
    id: "web-scraping-analytics",
    title: "Web Scraping & Data Analytics",
    category: "Data Extraction & Automated Pipeline",
    filterTags: ["Python", "EDA", "Visualization"],
    shortDescription: "Automated web scraping pipeline built in Python to extract unstructured online listings, parse HTML elements, clean messy data, and visualize structured findings.",
    technologies: ["Python", "Requests", "BeautifulSoup", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
    keyCapabilities: [
      "Automated HTTP Requests & Header Management",
      "HTML DOM Parsing & Tag Extraction via BeautifulSoup",
      "Data Cleaning, Type Casting & Deduplication",
      "Exploratory Visualization & Price Distribution Analysis"
    ],
    githubUrl: "https://github.com/komal362783/CodeAlpha_WebScraping",
    caseStudy: {
      problem: "Valuable market and competitor data frequently resides locked within web pages without direct API endpoints, requiring reliable programmatic extraction and formatting.",
      approach: [
        "Constructed a modular Python script using Requests to fetch target web pages with proper User-Agent headers.",
        "Utilized BeautifulSoup to parse the DOM tree, locate target class selectors, and extract relevant item attributes.",
        "Sanitized extracted text strings (stripping currencies, handling missing specs) and loaded results into Pandas DataFrames.",
        "Performed exploratory visual analysis using Matplotlib and Seaborn on scraped metrics."
      ],
      tools: ["Python", "BeautifulSoup4", "Requests", "Pandas", "Matplotlib"],
      analysisHighlights: [
        "Handled pagination and error handling to ensure uninterrupted extraction.",
        "Transformed unstructured HTML content into clean, tabular CSV/DataFrame assets.",
        "Analyzed price distributions and category density across scraped entities."
      ],
      insights: [
        "Demonstrated capability in building custom data ingestion pipelines from scratch when no structured API exists."
      ]
    }
  },
  {
    id: "insightai-in-progress",
    title: "InsightAI - Business Analytics Dashboard",
    category: "In Progress - Full-Stack Analytics",
    filterTags: ["Python", "SQL", "Visualization"],
    shortDescription: "A React + FastAPI + PostgreSQL analytics dashboard I am building: upload a sales CSV, store it in a database and view sales analytics. AI insights are planned for the next phase.",
    technologies: ["React", "Vite", "FastAPI", "Python", "PostgreSQL"],
    keyCapabilities: [
      "In progress: CSV upload and sales analytics",
      "Planned: AI-generated insights (next phase)",
      "Currently uses sample data, not a real dataset"
    ],
    githubUrl: "https://github.com/komal362783/InsightAI-Frontend",
    isSyntheticData: true,
    dataLabel: "Sample Data",
    inProgress: true,
    caseStudy: {
      problem: "Business owners often have sales data in spreadsheets but no quick way to see which products and regions drive revenue. InsightAI is my attempt to make that a few clicks.",
      approach: [
        "Frontend: React + Vite dashboard (the public repo currently holds the interface only).",
        "Backend: FastAPI + PostgreSQL for CSV upload and sales queries (being built, not yet on GitHub).",
        "Next: replace sample data with a cleaned public dataset and add charts."
      ],
      tools: ["React", "Vite", "FastAPI", "PostgreSQL"],
      analysisHighlights: [
        "Status: work in progress. Nothing here is a finished feature yet.",
        "The linked repository is the frontend only."
      ],
      insights: [
        "No analytical findings yet. They will be added once real data is loaded."
      ]
    }
  }
];

export const PIPELINE_STEPS: PipelineStep[] = [
  {
    stepNumber: 1,
    id: "raw-data",
    title: "RAW DATA",
    tagline: "Ingestion & Schema Inspection",
    description: "Connecting to diverse data sources (CSVs, Excel workbooks, SQL tables, web-scraped DOMs) and auditing initial schema structure.",
    techniques: ["Schema verification", "Encoding validation", "Initial head/info inspection", "Source consistency checking"],
    toolsUsed: ["Python", "Pandas", "SQL", "Requests"],
    sampleLogic: "df = pd.read_csv('raw_dataset.csv')\ndf.info() # Check non-null counts & dtypes"
  },
  {
    stepNumber: 2,
    id: "clean",
    title: "CLEAN",
    tagline: "Sanitization & Preprocessing",
    description: "Transforming messy raw inputs into a clean, dependable analytical asset by handling missing values, duplicates, and data types.",
    techniques: ["Missing value imputation / drop", "Duplicate removal", "Datetime casting", "Text stripping & normalization"],
    toolsUsed: ["Pandas", "NumPy", "NLTK", "Excel"],
    sampleLogic: "df.drop_duplicates(inplace=True)\ndf['Date'] = pd.to_datetime(df['Date'])\ndf['Amount'].fillna(df['Amount'].median(), inplace=True)"
  },
  {
    stepNumber: 3,
    id: "analyze",
    title: "ANALYZE",
    tagline: "Querying & Exploratory Analysis",
    description: "Extracting patterns, calculating summary statistics, and executing SQL queries to evaluate key performance indicators.",
    techniques: ["SQL GROUP BY & JOIN queries", "Correlation matrix computation", "Statistical summary (mean/std/IQR)", "Cohort segmentation"],
    toolsUsed: ["SQL", "Python", "Pandas", "NumPy"],
    sampleLogic: "SELECT category, SUM(sales) AS total_sales, AVG(profit) AS avg_profit\nFROM transactions\nGROUP BY category\nORDER BY total_sales DESC;"
  },
  {
    stepNumber: 4,
    id: "visualize",
    title: "VISUALIZE",
    tagline: "Dashboarding & Visual Storytelling",
    description: "Designing intuitive, uncluttered charts and interactive dashboards that make trends instantly perceptible.",
    techniques: ["Power BI Star Schema modeling", "Interactive Plotly / Streamlit widgets", "Seaborn distribution & heatmap plots", "KPI card layout"],
    toolsUsed: ["Power BI", "Plotly", "Seaborn", "Streamlit", "Matplotlib"],
    sampleLogic: "fig = px.bar(df, x='Region', y='Revenue', color='Segment',\n             title='Regional Revenue Distribution')\nst.plotly_chart(fig)"
  },
  {
    stepNumber: 5,
    id: "insight",
    title: "INSIGHT",
    tagline: "Pattern & Bottleneck Discovery",
    description: "Translating statistical distributions and chart trends into clear, factual findings without speculation.",
    techniques: ["Discount-to-profit margin thresholding", "Sentiment driver identification", "Regional variance evaluation", "Customer cluster analysis"],
    toolsUsed: ["Analytical Reasoning", "EDA Synthesis"],
    sampleLogic: "# Finding: High-discount orders (>20%) result in negative operating margin\nmargin_leak = df[df['Discount'] > 0.20]['Profit'].sum()"
  },
  {
    stepNumber: 6,
    id: "decision",
    title: "DECISION",
    tagline: "Actionable Recommendations",
    description: "Equipping team leaders and stakeholders with clear, data-supported actions to optimize operations and drive impact.",
    techniques: ["Discount governance guidelines", "Inventory allocation timing", "Targeted customer outreach", "Clear executive summaries"],
    toolsUsed: ["Executive Communication", "Presentation"],
    sampleLogic: "// Actionable output:\n// 1. Cap product discounts at 15% for Consumer segment\n// 2. Prioritize high-margin categories in regional stock"
  }
];

export const CERTIFICATIONS_DATA: Certification[] = [
  {
    id: "tata-genai-forage",
    title: "TATA — GenAI Powered Data Analytics Job Simulation",
    issuer: "Forage",
    date: "July 2026",
    badgeType: "enterprise",
    verificationNote: "Practical simulation encompassing enterprise exploratory data analysis, business scenario modeling, and GenAI-assisted analytical workflows."
  },
  {
    id: "ibm-ml-python",
    title: "Machine Learning with Python",
    issuer: "IBM Cognitive Class",
    date: "Certified",
    badgeType: "technical",
    verificationNote: "Hands-on foundation in supervised and unsupervised analytical models, data splitting, evaluation metrics, and Python ML pipelines."
  },
  {
    id: "oracle-foundations-associate",
    title: "Oracle Certified Foundations Associate",
    issuer: "Oracle",
    date: "Certified",
    badgeType: "foundational",
    verificationNote: "Covers core database concepts, cloud infrastructure principles, and enterprise information architectures."
  }
];
