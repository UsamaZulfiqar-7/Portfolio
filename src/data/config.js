// ============================================================
// PORTFOLIO CONFIGURATION — Edit all your info here
// ============================================================

export const personalInfo = {
  name: "Usama Zulfiqar",
  title: "Frontend Web Developer & Data Analyst",
  tagline: "Building elegant interfaces and extracting insights from data.",
  bio: "I'm a BSCS Final Year Student with a passion for crafting modern, responsive web experiences and transforming raw data into meaningful stories. I love blending clean code with analytical thinking to build impactful digital products.",
  location: "Pakistan",
  email: "usamazulfiqar173@email.com",
  phone: "+92 318 7499173",
  resumeLink: "/resume.pdf",
  availableForWork: true,
};

export const socialLinks = {
  github: "https://github.com/UsamaZulfiqar-7",
  linkedin: "https://linkedin.com/in/usamazulfiqar",
  gmail: "mailto:usamazulfiqar173@gmail.com",
};

export const stats = [
  { value: "15+", label: "Projects Completed" },
  { value: "10+", label: "Technologies Learned" },
  { value: "20+", label: "GitHub Repositories" },
  { value: "2+", label: "Years of Coding" },
];

export const skills = {
  frontend: [
    { name: "HTML", level: 95, icon: "🌐" },
    { name: "CSS", level: 90, icon: "🎨" },
    { name: "JavaScript", level: 80, icon: "⚡" },
    { name: "React.js", level: 75, icon: "⚛️" },
    { name: "Tailwind CSS", level: 82, icon: "💨" },
  ],
  programming: [
    { name: "Python", level: 80, icon: "🐍" },
    { name: "Java", level: 70, icon: "☕" },
  ],
  database: [
    { name: "MySQL", level: 78, icon: "🗄️" },
  ],
  dataAnalytics: [
    { name: "Excel", level: 85, icon: "📊" },
    { name: "Power BI", level: 80, icon: "📈" },
    { name: "Data Visualization", level: 82, icon: "📉" },
    { name: "Data Cleaning", level: 78, icon: "🧹" },
  ],
  tools: [
    { name: "Git", level: 85, icon: "🔧" },
    { name: "GitHub", level: 88, icon: "🐙" },
    { name: "VS Code", level: 92, icon: "💻" },
  ],
};

export const projects = [
  {
    id: 1,
    title: "Lost & Found Management System",
    description: "A full-stack web application for managing lost and found items with real-time notifications, user authentication, and admin dashboard.",
    category: "Web Development",
    image: null,
    gradient: "from-blue-500 to-cyan-500",
    tech: ["React.js", "Node.js", "MySQL", "Tailwind CSS"],
    github: "https://github.com/UsamaZulfiqar-7/LostAndFound-Web_app",
    demo: "#",
    featured: true,
  },
  {
    id: 2,
    title: "Fake Currency Detection",
    description: "Deep learning model using CNN and ResNet50 architecture to detect counterfeit currency with 97% accuracy using image classification.",
    category: "Machine Learning",
    image: null,
    gradient: "from-purple-500 to-pink-500",
    tech: ["Python", "TensorFlow", "OpenCV"],
    github: "https://github.com/UsamaZulfiqar-7/fake-currency-detection",
    demo: "#",
    featured: true,
  },
  {
    id: 3,
    title: "Face Attendance System",
    description: "Automated attendance system using facial recognition with real-time detection, database logging, and admin reporting dashboard.",
    category: "Machine Learning",
    image: null,
    gradient: "from-orange-500 to-yellow-500",
    tech: ["Python", "OpenCV", "dlib", "Excel"],
    github: "https://github.com/UsamaZulfiqar-7/Face-Attendance-System",
    demo: "#",
    featured: true,
  },
  {
    id: 4,
    title: "Credit Card Detection",
    description: "Interactive Power BI dashboard analyzing transaction patterns to identify fraudulent activities with visual analytics and KPIs.",
    category: "Data Analytics",
    image: null,
    gradient: "from-green-500 to-teal-500",
    tech: ["Power BI", "Python", "Excel", "MySQL"],
    github: "https://github.com/UsamaZulfiqar-7/Credit-Card-Detection",
    demo: "#",
    featured: false,
  },
  {
    id: 5,
    title: "Student performance Prediction",
    description: "Comprehensive university admission portal with application tracking, document management, merit calculations, and reporting.",
    category: "Web Development",
    image: null,
    gradient: "from-red-500 to-rose-500",
    tech: ["Python", "JavaScript", "HTML", "CSS"],
    github: "https://github.com/UsamaZulfiqar-7/student-performance-prediction",
    demo: "#",
    featured: false,
  },
  {
    id: 6,
    title: "Personal Portfolio Website",
    description: "This very portfolio — built with React.js, Framer Motion, and Tailwind CSS with dark/light mode, smooth animations, and responsive design.",
    category: "Web Development",
    image: null,
    gradient: "from-indigo-500 to-violet-500",
    tech: ["React.js", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/UsamaZulfiqar-7/Portfolio",
    demo: "#",
    featured: false,
  },
];

export const education = [
  {
    year: "2021 – Present",
    degree: "Bachelor of Science in Computer Science",
    institution: "University of Science & Technology",
    description: "Final year student with focus on software engineering, data science, and web technologies. CGPA: 3.5+",
    icon: "🎓",
    type: "education",
  },
  {
    year: "2023",
    degree: "React.js Development Bootcamp",
    institution: "Online Certification",
    description: "Completed intensive bootcamp covering React hooks, state management, REST APIs, and modern frontend patterns.",
    icon: "⚛️",
    type: "certification",
  },
  {
    year: "2023",
    degree: "Data Analysis with Python",
    institution: "Coursera — Google",
    description: "Certified in data analysis including pandas, NumPy, matplotlib, and real-world case studies.",
    icon: "📊",
    type: "certification",
  },
  {
    year: "2022",
    degree: "Power BI Data Analyst",
    institution: "Microsoft Learn",
    description: "Learned DAX, data modeling, report building, and dashboard design with Power BI Desktop and Service.",
    icon: "📈",
    type: "certification",
  },
  {
    year: "2021",
    degree: "Intermediate (Pre-Engineering)",
    institution: "Board of Intermediate Education",
    description: "Completed pre-engineering with strong grades in Mathematics and Physics.",
    icon: "📚",
    type: "education",
  },
];

export const services = [
  {
    icon: "🌐",
    title: "Frontend Web Development",
    description: "Building fast, scalable, and beautiful React.js applications with clean code and best practices.",
    gradient: "from-blue-500 to-cyan-400",
  },
  {
    icon: "📱",
    title: "Responsive Website Design",
    description: "Pixel-perfect responsive designs that work flawlessly across all devices and screen sizes.",
    gradient: "from-purple-500 to-pink-400",
  },
  {
    icon: "📊",
    title: "Dashboard Development",
    description: "Interactive data dashboards with real-time charts, KPIs, and dynamic filtering capabilities.",
    gradient: "from-orange-500 to-yellow-400",
  },
  {
    icon: "🔍",
    title: "Data Analysis",
    description: "Extracting actionable insights from complex datasets using Python, Excel, and statistical methods.",
    gradient: "from-green-500 to-teal-400",
  },
  {
    icon: "📈",
    title: "Power BI Dashboards",
    description: "Professional business intelligence dashboards with DAX measures, drill-throughs, and storytelling.",
    gradient: "from-red-500 to-rose-400",
  },
  {
    icon: "🎨",
    title: "Data Visualization",
    description: "Transforming raw numbers into compelling visual stories that drive informed business decisions.",
    gradient: "from-indigo-500 to-violet-400",
  },
];

export const githubUsername = "usamazulfiqar";

export const emailjsConfig = {
  serviceId: "YOUR_SERVICE_ID",
  templateId: "YOUR_TEMPLATE_ID",
  publicKey: "YOUR_PUBLIC_KEY",
};
