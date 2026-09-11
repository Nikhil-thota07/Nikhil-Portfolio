// Centralized portfolio data for Nikhil Thota
// Easy to update: links, placeholders, text, and project details

export const personalData = {
  name: "Nikhil Thota",
  tagline: "Learning. Building. Growing with AI.",
  subTagline: "I know Python, I'm exploring AI, and I'm building my skills one project at a time.",
  roles: [
    "CSE (AI & ML) Student",
    "Python Developer",
    "Aspiring AI Engineer"
  ],
  status: "Currently learning & building",
  location: "Hyderabad, Telangana, India",
  college: "Narsimha Reddy College of Engineering and Management (NRCM)",
  degree: "First-Year B.Tech — CSE (Artificial Intelligence & Machine Learning)",
  
  heroDescription: 
    "I'm a first-year CSE (AI & ML) student with a working knowledge of Python, exploring Artificial Intelligence and Machine Learning while building projects and developing my technical skills.",
  
  about: {
    intro: "I'm Nikhil Thota, a first-year B.Tech student specializing in Computer Science and Engineering with Artificial Intelligence & Machine Learning.",
    learningPhilosophy: "I currently have a working knowledge of Python and enjoy learning by actually building things. I'm exploring AI, Machine Learning, problem solving, and modern technology while gradually expanding my technical skills.",
    collegeView: "For me, college isn't just about completing a degree. It's about experimenting, creating projects, participating in hackathons, meeting people, and continuously improving.",
    creativeSide: "Alongside technology, I have a strong creative side through dance and choreography, which has helped me develop confidence, communication, discipline, and creativity."
  },

  links: {
    linkedin: "https://www.linkedin.com/in/nikhilthota07/",
    github: "https://github.com/nikhilthota", // Placeholder: update when desired
    youtube: "https://youtube.com/@JustNikhilThings", // Placeholder for Just Nikhil Things
    email: "nikhilthota.aiml@gmail.com", // Placeholder: update with preferred email
    hasCustomGithub: false,
    hasCustomEmail: false,
    hasCustomYoutube: false
  }
};

export const skillsData = {
  currentlyKnown: {
    title: "Python",
    icon: "🐍",
    level: "Working Knowledge",
    category: "Primary Programming Language",
    description: "Python is currently my primary programming language. I use it while learning programming concepts and building small projects.",
    highlights: [
      "Core Syntax & Object-Oriented Fundamentals",
      "Algorithmic Problem Solving",
      "Automation & Utility Scripting",
      "Foundation for AI/ML Exploration"
    ],
    disclaimer: "Working knowledge in active development — continuously building stronger problem-solving skills."
  },
  
  currentlyLearning: [
    {
      id: "ai",
      title: "Artificial Intelligence",
      icon: "Cpu",
      badge: "Currently Learning",
      description: "Exploring foundational AI paradigms, logic reasoning, heuristic search, and modern intelligent agent concepts.",
      focus: ["Core AI Concepts", "Intelligent Systems", "Prompt Engineering Basics"]
    },
    {
      id: "ml",
      title: "Machine Learning",
      icon: "Brain",
      badge: "Currently Learning",
      description: "Studying mathematical foundations, regression, classification, supervised learning workflows, and data intuition.",
      focus: ["Model Principles", "Data Exploration", "Feature Intuition"]
    },
    {
      id: "dsa",
      title: "Data Structures & Algorithms",
      icon: "Code2",
      badge: "Currently Learning",
      description: "Building strong computational problem-solving habits using Python: arrays, strings, basic recursion, and sorting.",
      focus: ["Algorithmic Thinking", "Arrays & Strings", "Complexity Basics"]
    },
    {
      id: "web",
      title: "Web Development",
      icon: "Globe",
      badge: "Currently Learning",
      description: "Understanding modern web architecture, responsive interfaces with React, and turning ideas into usable web apps.",
      focus: ["React Basics", "Modern UI/UX", "Component Design"]
    }
  ]
};

export const projectsData = {
  currentBuilding: [
    {
      id: "smart-canteen",
      title: "Smart Canteen Queue + Crowd Prediction",
      tagline: "Innovative Campus Solution",
      badge: "Exploratory Prototype & Idea",
      status: "Ideation & Prototyping",
      description: "An intelligent campus system concept designed to monitor cafeteria foot traffic, predict queue waiting times, and suggest optimal mealtime windows to help students save valuable time.",
      highlights: [
        "Real-time queue length estimation concept",
        "Crowd density analytics model",
        "Student-friendly mobile dashboard design",
        "Targeted for college campus hackathons"
      ],
      techStack: ["Python", "Computer Vision Concept", "Data Analytics", "React UI"],
      isIdea: true
    },
    {
      id: "python-experiments",
      title: "Python Problem Solving & Mini Scripts",
      tagline: "Hands-on Code Laboratory",
      badge: "Active Coding",
      status: "Continuous Learning",
      description: "A growing repository of scripts and algorithms built while mastering Python fundamentals, data parsing, logic puzzles, and foundational DSA exercises.",
      highlights: [
        "Interactive CLI utility tools",
        "Algorithmic puzzle solutions",
        "Data parsing and formatting scripts"
      ],
      techStack: ["Python 3", "Algorithms", "Automation"],
      isIdea: false
    }
  ],
  futureNote: "More projects are coming as I continue learning Python, AI and Machine Learning."
};

export const journeyData = [
  {
    step: "01",
    title: "School",
    subtitle: "Foundations & Curiosity",
    description: "Developed academic curiosity, analytical thinking, and a passionate creative flair through performing arts.",
    icon: "GraduationCap"
  },
  {
    step: "02",
    title: "Intermediate",
    subtitle: "Mathematics & Analytical Depth",
    description: "Focused on Mathematics and Sciences, discovering an enthusiasm for logical deduction and computing.",
    icon: "BookOpen"
  },
  {
    step: "03",
    title: "B.Tech CSE (AI & ML)",
    subtitle: "NRCM Hyderabad",
    description: "Enrolled in Computer Science Engineering with Artificial Intelligence & Machine Learning at NRCM.",
    icon: "Compass"
  },
  {
    step: "04",
    title: "Learning Python",
    subtitle: "First Programming Language",
    description: "Mastered fundamental programming concepts, syntax, and logic using Python as the core toolkit.",
    icon: "Terminal"
  },
  {
    step: "05",
    title: "Building Projects",
    subtitle: "Code into Action",
    description: "Turning classroom concepts into practical scripts, problem-solving experiments, and small utilities.",
    icon: "FolderGit2"
  },
  {
    step: "06",
    title: "Exploring AI & ML",
    subtitle: "Stepping into the Future",
    description: "Diving into the building blocks of intelligent systems, machine learning pipelines, and predictive models.",
    icon: "BrainCircuit"
  },
  {
    step: "07",
    title: "Hackathons & Innovation",
    subtitle: "Team Collaboration",
    description: "Teaming up with peers to develop prototypes that solve real-world problems such as campus crowd management.",
    icon: "Lightbulb"
  },
  {
    step: "08",
    title: "Aspiring AI Engineer",
    subtitle: "Long-term Goal",
    description: "Aiming to build robust, scalable AI applications and engineer solutions at world-class companies such as Microsoft.",
    icon: "Sparkles"
  }
];

export const hackathonData = {
  title: "Building Beyond the Classroom",
  tagline: "Innovation happens when curiosity meets real problems.",
  description: "I believe college is the best time to experiment fearlessly. Hackathons provide the perfect playground to test crazy ideas, collaborate with diverse minds, and build working prototypes under pressure.",
  interests: [
    { title: "Hackathons", desc: "Fast-paced collaborative problem solving." },
    { title: "Innovative Ideas", desc: "Finding non-obvious angles to daily challenges." },
    { title: "Teamwork", desc: "Syncing minds, dividing challenges, and delivering." },
    { title: "Rapid Prototyping", desc: "Moving from napkin sketch to functional MVP." },
    { title: "Real-World Impact", desc: "Building tools that genuine users benefit from." }
  ],
  featuredIdea: {
    name: "Smart Canteen Queue + Crowd Prediction System",
    problem: "Long unorganized queues during short break intervals cause massive student congestion and lost study time.",
    solution: "A computer vision and historical pattern prediction model that estimates line wait times and alerts students to low-traffic canteen windows.",
    status: "Exploratory Hackathon Concept"
  },
  cta: "Have an idea? Let's build it."
};

export const beyondCodeData = {
  title: "Beyond Code",
  subtitle: "Technology is one side of me. Creativity is another.",
  intro: "Beyond writing code and exploring neural networks, dance has been a defining pillar of my life. As a Dance Instructor and Choreographer with several years of experience, I spend hours mastering rhythm, movement, and expressive storytelling.",
  connection: "Dance isn't just an art form—it is a training ground for engineering mindsets. It taught me how to break down complex sequences into structured steps, communicate vision to large teams, and perform under high pressure.",
  styles: [
    { name: "Freestyle", tag: "Improvisation & Fluidity" },
    { name: "Cinematic", tag: "Storytelling & Emotion" },
    { name: "Tollywood", tag: "High Energy & Mass Appeal" },
    { name: "Bollywood", tag: "Dynamic Expressiveness" },
    { name: "Kids Dance", tag: "Patience & Pedagogical Fun" },
    { name: "Stage Performance", tag: "Presence & Live Energy" },
    { name: "Cultural & Event Choreography", tag: "Coordination & Leadership" }
  ],
  skillsTransferred: [
    { name: "Confidence", desc: "Comfortable commanding stages and presenting technical concepts clearly." },
    { name: "Discipline", desc: "Hours of relentless practice to make complex routines look effortless." },
    { name: "Creativity", desc: "Designing original compositions and finding fresh angles to solve problems." },
    { name: "Communication", desc: "Teaching dancers of all age groups by breaking down nuanced steps." },
    { name: "Teamwork", desc: "Achieving flawless synchrony across large performance crews." },
    { name: "Stage Presence", desc: "Maintaining poise and composure in front of large audiences." }
  ]
};

export const contentCreationData = {
  title: "Creating Beyond Technology",
  channelName: "Just Nikhil Things",
  tagline: "Sharing perspectives on tech, college life, creativity, and entertainment.",
  description: "Content creation is my space to document my journey, share genuine student experiences, and express another dimension of my creativity.",
  topics: [
    { label: "Technology & AI", icon: "Cpu" },
    { label: "College Life", icon: "School" },
    { label: "Skills & Learning", icon: "BookMarked" },
    { label: "Movies & Cinema", icon: "Film" },
    { label: "Comedy & Entertainment", icon: "Smile" },
    { label: "Personal Experiences", icon: "Sparkles" }
  ],
  ctaText: "Channel Link Coming Soon",
  placeholderNote: "Link placeholder — can be updated when new videos launch."
};

export const personalValuesData = [
  {
    number: "01",
    keyword: "Learn",
    quote: "Always keep learning something new.",
    description: "Every day is an opportunity to pick up a new library, understand a new algorithm, or refine a mindset."
  },
  {
    number: "02",
    keyword: "Build",
    quote: "Turn ideas into projects and experiments.",
    description: "Knowledge without execution is just theory. I test my understanding by getting my hands dirty with code."
  },
  {
    number: "03",
    keyword: "Create",
    quote: "Use creativity to make things different.",
    description: "Whether choreographing a routine or designing software, originality and human touch make the difference."
  },
  {
    number: "04",
    keyword: "Grow",
    quote: "Improve consistently, one step at a time.",
    description: "Compounding small daily improvements is how a first-year student evolves into a skilled engineer."
  }
];

export const careerVisionData = {
  title: "Where I'm Headed",
  statement: "My current goal is to build a strong foundation in programming, AI and problem solving. As I progress through my B.Tech journey, I want to work on meaningful AI projects, participate in hackathons, strengthen my technical skills, and eventually become an AI Engineer.",
  targetAspiration: "Aspiring to create transformative AI systems and join premier engineering teams at companies like Microsoft.",
  roadmap: [
    { stage: "Step 01", name: "Python", status: "Active Working Knowledge" },
    { stage: "Step 02", name: "DSA", status: "Currently Learning" },
    { stage: "Step 03", name: "AI/ML", status: "Currently Learning" },
    { stage: "Step 04", name: "Projects", status: "Hands-on Building" },
    { stage: "Step 05", name: "Hackathons", status: "Collaborating & Prototyping" },
    { stage: "Step 06", name: "Internships", status: "Future Milestone" },
    { stage: "Goal", name: "AI Engineer", status: "Career Aspiration" }
  ],
  clarification: "This roadmap reflects my learning journey and future aspirations, not completed industry experience."
};
