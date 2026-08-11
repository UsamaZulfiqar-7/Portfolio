export const personalInfo = {
  name: "Usama Zulfiqar",
  title: "Full Stack Developer & Data Analyst",
  description:
    "I transform ideas into elegant digital solutions. With expertise in React, Node.js, and data analytics, I build web applications that solve real problems.",
  image: "https://i.imgur.com/placeholder.jpg",
};

export const socialLinks = {
  github: "https://github.com/UsamaZulfiqar-7",
  linkedin: "https://www.linkedin.com/in/usama-zulfiqar-2570ba343/",
  twitter: "https://twitter.com",
  email: "usamazulfiqar173@gmail.com",
};

export const stats = [
  { label: "Projects Completed", value: "25+", suffix: "" },
  { label: "Years Experience", value: "2", suffix: "" },
  { label: "Happy Clients", value: "10+", suffix: "" },
  { label: "Code Commits", value: "850", suffix: "+" },
];

export const skills = {
  frontend: [
    { name: "React.js", level: 75, icon: "⚛️" },
    { name: "Tailwind CSS", level: 85, icon: "🎨" },
    { name: "HTML/CSS", level: 95, icon: "🌐" },
    { name: "JavaScript", level: 80, icon: "📝" },
  ],
  programming: [
    { name: "Python", level: 85, icon: "🐍" },
    { name: "Java", level: 75, icon: "☕" },
    { name: "SQL", level: 80, icon: "📊" },
    { name: "Git", level: 85, icon: "📦" },
  ],
  database: [
    { name: "MySQL", level: 80, icon: "🗄️" },
    { name: "MongoDB", level: 75, icon: "🍃" },
    { name: "Database Design", level: 80, icon: "🏗️" },
    { name: "Query Optimization", level: 80, icon: "⚡" },
  ],
  dataAnalytics: [
    { name: "Python Analytics", level: 85, icon: "📈" },
    { name: "Power BI", level: 80, icon: "📊" },
    { name: "Excel Analytics", level: 90, icon: "📑" },
    { name: "Data Visualization", level: 85, icon: "📉" },
  ],
  tools: [
    { name: "VS Code", level: 95, icon: "💻" },
    { name: "GitHub", level: 90, icon: "🐙" },
    { name: "Figma", level: 70, icon: "🎭" },
    { name: "Postman", level: 80, icon: "🔧" },
  ],
};

export const projects = [
  {
  id: 1,
  title: "LostLink-AI-Web-App",
  description:
    "Smart Lost and Found web application that connects people who lose items with people who find them. The system uses role-based authentication, QR codes, location tracking, real-time notifications, admin-approved chat, and ResNet50 AI-powered image similarity matching to identify potential lost and found item matches.",
  category: "Web Development",
  tech: [
    "React.js",
    "Vite",
    "Tailwind CSS",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Mongoose",
    "Python",
    "FastAPI",
    "ResNet50",
    "Socket.io",
    "JWT",
    "QR Code",
    "Leaflet",
    "Framer Motion"
  ],
  gradient: "from-blue-500 to-purple-600",
  github: "https://github.com/UsamaZulfiqar-7/LostLink-AI-Web-App.git",
},
  {
    id: 2,
    title: "CleanAI — Smart Data Cleaning Assistant",
    description:
      "AI-assisted data cleaning tool that detects column types automatically, removes duplicates, patches missing values, validates emails/phones, standardizes dates, flags outliers, and generates a full data quality dashboard with a downloadable PDF report.",
    category: "Data Analytics",
    tech: ["Python", "Streamlit", "Pandas", "Plotly", "ReportLab"],
    gradient: "from-amber-500 to-emerald-600",
    github: "https://github.com/UsamaZulfiqar-7/CleanAI",
  },
  {
    id: 3,
    title: "Secret Love Surprise",
    description:
        "A romantic interactive surprise website featuring a secret love message, special memories, photos, and memorable moments with an elegant and engaging user experience.",
    category: "Web Development",
    tech: ["HTML", "CSS", "JavaScript"],
    gradient: "from-pink-500 to-rose-500",
    github: "https://github.com/UsamaZulfiqar-7/Secret-Love-Surprise",
},
  {
  id: 4,
  title: "SAM — Voice-Controlled Desktop Agent",
  description:
    "Wake-word activated Windows automation agent built in Python. Listens for voice commands and performs system tasks — opening apps, web/YouTube search, volume control, screenshots, PC lock/shutdown, and file search — with offline text-to-speech feedback. ⚠️ Still in progress — not complete yet, actively being refined and tested.",
  category: "AI / Automation",
  tech: ["Python", "SpeechRecognition", "PyAudio", "pyttsx3", "PyAutoGUI", "Anthropic API"],
  gradient: "from-indigo-500 to-purple-500",
  status: "In Progress",
  github: "https://github.com/UsamaZulfiqar-7/Sam-Agent.git",
},
  {
  id: 5,
  title: "SQL Sales Dataset Project",
  description:
    "SQL-based data analysis project using Customers, Orders, and Products datasets to practice relational database concepts, complex SQL queries, joins, aggregations, filtering, and sales insights.",
  category: "Database & SQL",
  tech: ["SQL", "MySQL", "Database", "Data Analysis"],
  gradient: "from-cyan-500 to-blue-600",
  github: "https://github.com/UsamaZulfiqar-7/SQL-Sales-Dataset-Project.git",
},
  {
    id: 3,
    title: "Namaz Accountability Lock",
    description:
        "A premium Android Islamic digital-wellbeing app that helps users maintain prayer consistency through configurable reminders, accountability tracking, prayer streaks, and an optional phone restriction system when a prayer is missed.Not Complete Yet.",
    category: "Android Development",
    tech: [
        "Kotlin",
        "Jetpack Compose",
        "Android SDK",
        "Room",
        "DataStore",
        "WorkManager",
        "AlarmManager"
    ],
    gradient: "from-emerald-500 to-teal-500",
    github: "https://github.com/YourUsername/namaz-accountability-lock",
},
];

export const education = [
  {
    type: "education",
    degree: "Bachelor of Science in Computer Science",
    institution: "University of Technology",
    year: "2023",
    description:
      "Focused on software engineering, data structures, and web technologies. GPA: 3.8/4.0",
  },
  {
    type: "education",
    degree: "Associate Degree in Information Technology",
    institution: "Technical Institute",
    year: "2021",
    description:
      "Foundation in programming and database management, honors graduate.",
  },
  {
    type: "certification",
    degree: "Google Data Analytics Professional Certificate",
    institution: "Coursera",
    year: "2023",
    description:
      "Advanced data analysis, visualization, and business intelligence techniques.",
  },
  {
    type: "certification",
    degree: "React Advanced Patterns",
    institution: "Frontend Masters",
    year: "2024",
    description:
      "Deep dive into React hooks, performance optimization, and architectural patterns.",
  },
];

export const services = [
  {
    title: "Web Development",
    icon: "💻",
    gradient: "from-blue-500 to-cyan-500",
    description:
      "Custom React applications with modern UI/UX, responsive design, and optimized performance for web platforms.",
  },
  {
    title: "Backend Development",
    icon: "⚙️",
    gradient: "from-purple-500 to-indigo-500",
    description:
      "RESTful APIs with Node.js and Express, database design, authentication, and server-side optimization.",
  },
  {
    title: "Data Analytics",
    icon: "📊",
    gradient: "from-emerald-500 to-teal-500",
    description:
      "Business intelligence dashboards, data visualization, and predictive analysis using Power BI and Python.",
  },
  {
    title: "Database Design",
    icon: "🗄️",
    gradient: "from-orange-500 to-red-500",
    description:
      "Relational and NoSQL database architecture, optimization, and migration strategies.",
  },
  {
    title: "UI/UX Design",
    icon: "🎨",
    gradient: "from-pink-500 to-rose-500",
    description:
      "Responsive layouts, accessibility optimization, and interactive components for better user engagement.",
  },
  {
    title: "Consulting",
    icon: "🤝",
    gradient: "from-yellow-500 to-amber-500",
    description:
      "Technology consultation, project planning, code review, and mentoring for development teams.",
  },
];

export const githubUsername = "UsamaZulfiqar-7";
export const emailjsConfig = {
  serviceId: "service_id",
  templateId: "template_id",
  publicKey: "public_key",
};
