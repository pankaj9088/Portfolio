import { PortfolioData } from '../types';
import chessmasterImg from '../assets/images/chessmaster_preview_1786347649846.jpg';

export const portfolioData: PortfolioData = {
  personal: {
    name: 'Pankaj Kumar Sah',
    role: 'Software Developer',
    headline: 'Building scalable, modern, and user-centric web applications',
    degree: 'B.Tech in Electronics and Communication Engineering',
    semester: '8th Semester (Final Year)',
    email: 'sahpankajkumar690@gmail.com', // Replaceable in config
    location: 'West Bengal, India',
    github: 'https://github.com/pankaj9088',
    linkedin: 'https://www.linkedin.com/in/pankaj-kumar-sah-977538380/',
    resumeUrl: '/resume-pankaj-kumar-sah.pdf', // Easily replaceable URL
    bio: 'I am Pankaj Kumar Sah, a Software Developer with a strong interest in building practical, scalable, and user-focused software applications. I specialize in Java, Python, and JavaScript, along with modern technologies such as React, Node.js, Express.js, MongoDB, and MySQL. My experience includes developing real-time communication platforms, e-commerce applications, authentication systems, and intelligent web applications. I enjoy turning ideas into reliable software solutions while focusing on problem solving, clean architecture, maintainable code, and continuous learning. I am passionate about exploring new technologies and creating software that solves real-world problems and delivers a smooth user experience.',
    shortAbout: 'Engineering student dedicated to building clean, maintainable, and scalable software applications. Experienced in React, Node.js, Express, databases, and real-time communication architectures.'
  },

  skills: [
    {
      id: 'programming',
      title: 'Programming Languages',
      description: 'Languages used for core algorithms, object-oriented design, and full-stack development',
      skills: [
        { name: 'JavaScript', level: 'Advanced', tag: 'ES6+' },
        { name: 'Java', level: 'Intermediate', tag: 'Core & OOP' },
        { name: 'Python', level: 'Intermediate', tag: 'Scripting & ML' }
      ]
    },
    {
      id: 'frontend',
      title: 'Frontend Development',
      description: 'Crafting highly responsive, accessible, and interactive user interfaces',
      skills: [
        { name: 'React.js', level: 'Advanced', tag: 'Hooks & SPA' },
        { name: 'Tailwind CSS', level: 'Advanced', tag: 'Utility-First' },
        { name: 'HTML5', level: 'Advanced', tag: 'Semantic Web' },
        { name: 'CSS3', level: 'Advanced', tag: 'Flexbox & Grid' },
        { name: 'Bootstrap', level: 'Intermediate', tag: 'Responsive UI' }
      ]
    },
    {
      id: 'backend',
      title: 'Backend Development',
      description: 'Architecting robust RESTful microservices, APIs, and server-side logic',
      skills: [
        { name: 'Node.js', level: 'Advanced', tag: 'Runtime Engine' },
        { name: 'Express.js', level: 'Advanced', tag: 'API Framework' },
        { name: 'REST APIs', level: 'Advanced', tag: 'Architecture' }
      ]
    },
    {
      id: 'database',
      title: 'Databases',
      description: 'Data modeling, optimization, and relational / document database management',
      skills: [
        { name: 'MongoDB', level: 'Advanced', tag: 'NoSQL / Mongoose' },
        { name: 'MySQL', level: 'Intermediate', tag: 'Relational / SQL' }
      ]
    },
    {
      id: 'auth-realtime',
      title: 'Authentication & Real-Time',
      description: 'Securing user sessions and enabling instant bi-directional communications',
      skills: [
        { name: 'JWT', level: 'Advanced', tag: 'Token Auth' },
        { name: 'Firebase Auth', level: 'Intermediate', tag: 'OAuth & Identity' },
        { name: 'Socket.IO', level: 'Advanced', tag: 'WebSockets' }
      ]
    },
    {
      id: 'tools',
      title: 'Developer Tools',
      description: 'Essential workflow, version control, and API testing platforms',
      skills: [
        { name: 'Git', level: 'Advanced', tag: 'Version Control' },
        { name: 'GitHub', level: 'Advanced', tag: 'CI/CD & Code Review' },
        { name: 'VS Code', level: 'Advanced', tag: 'Primary IDE' },
        { name: 'Postman', level: 'Advanced', tag: 'API Testing' }
      ]
    },
    {
      id: 'cs-core',
      title: 'Core Computer Science',
      description: 'Fundamental theoretical concepts driving efficient software engineering',
      skills: [
        { name: 'Data Structures & Algorithms', level: 'Core', tag: 'DSA' },
        { name: 'Object-Oriented Programming', level: 'Core', tag: 'OOP' },
        { name: 'Database Management Systems', level: 'Core', tag: 'DBMS' },
        { name: 'Operating Systems', level: 'Core', tag: 'OS Fundamentals' },
        { name: 'Computer Networks', level: 'Core', tag: 'TCP/IP & Protocols' }
      ]
    }
  ],

  projects: [
    {
      id: 'chessmaster',
      title: 'ChessMaster — Full-Stack Real-Time Chess Platform',
      shortDescription: 'Full-stack real-time chess platform featuring online multiplayer, Stockfish WebAssembly AI, tactics puzzles, and post-match centipawn evaluations.',
      fullDescription: 'A feature-complete, modern web application inspired by ChessMaster. Includes real-time online multiplayer, Stockfish Wasm AI integration, interactive tactics puzzles, comprehensive post-match game review with centipawn evaluation graphs, customizable board themes, and Web Audio API synthesized sound effects.',
      problemSolved: 'Delivered an all-in-one interactive web chess experience combining real-time WebSocket multiplayer, zero-latency local Stockfish AI analysis, and synthesized audio feedback without heavy external dependencies.',
      keyFeatures: [
        'Real-time online multiplayer with room codes and move synchronization',
        'Stockfish WebAssembly AI integration with adjustable difficulty levels',
        'Interactive tactics puzzle engine for chess skill improvement',
        'Post-match game review with centipawn evaluation graphs & blunder detection',
        'Customizable chessboard themes, piece sets, and sound effects via Web Audio API',
        'Live move history, clock timers, undo/resign controls, and leaderboard tracking'
      ],
      technologies: ['React.js', 'Node.js', 'Socket.IO', 'Stockfish Wasm', 'Tailwind CSS', 'Web Audio API', 'TypeScript'],
      featured: true,
      category: 'Full Stack',
      image: chessmasterImg,
      githubUrl: 'https://github.com/pankaj9088/-Chess.git',
      liveUrl: 'https://github.com/pankaj9088/-Chess.git',
      learned: [
        'Integrating WebAssembly Stockfish engine for high-performance client-side chess evaluation',
        'Handling complex chess rule states, PGN parsing, and FEN string validations',
        'Synthesizing chess sound effects directly using Web Audio API',
        'Managing synchronized game clocks and real-time multiplayer board states via Socket.IO'
      ],
      screenshots: [
        { caption: 'Interactive Chessboard & Real-Time Match Control', url: chessmasterImg }
      ]
    },
    {
      id: 'chatgo',
      title: 'ChatGo — Real-Time Chat Application',
      shortDescription: 'Full-stack instant messaging platform with WebSocket real-time communication, typing indicators, and file sharing.',
      fullDescription: 'ChatGo is a modern, feature-rich real-time chat application designed for high concurrency and low latency. Built with Socket.IO and Node.js backend paired with a dynamic React frontend, it supports instant messaging, real-time presence, media attachments, and secure JWT token-based session management.',
      problemSolved: 'Eliminated latency and polling overhead in communication platforms by establishing persistent bi-directional WebSocket connections with automatic reconnect handlers.',
      keyFeatures: [
        'Real-time bi-directional messaging powered by Socket.IO',
        'Secure user authentication with JWT & encrypted passwords',
        'Live online/offline status indicators and presence tracking',
        'Interactive real-time typing indicators',
        'File and image attachment sharing support',
        'Responsive layout optimized for both mobile and desktop screens'
      ],
      technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Socket.IO', 'JWT', 'Tailwind CSS'],
      featured: true,
      category: 'Full Stack',
      image: 'https://images.unsplash.com/photo-1611606063065-ee7946f0787a?auto=format&fit=crop&w=1000&q=80',
      githubUrl: 'https://github.com/pankaj9088/ChatGo---Real-Time-Chat-Application.git',
      liveUrl: 'https://chatgo-demo.pankajkumarsah.dev',
      learned: [
        'Managing persistent socket connection lifecycles in React functional components',
        'Implementing state synchronization across multiple client sessions',
        'Optimizing MongoDB indexes for fast chat history retrieval'
      ],
      screenshots: [
        { caption: 'Real-time Chat Interface & Active Rooms', url: 'https://images.unsplash.com/photo-1611606063065-ee7946f0787a?auto=format&fit=crop&w=800&q=80' },
        { caption: 'Media Sharing & User Profile Overview', url: 'https://images.unsplash.com/photo-1577563908411-5077b6dc7624?auto=format&fit=crop&w=800&q=80' }
      ]
    },
    {
      id: 'smart-resume-analyzer',
      title: 'Smart Resume Analyzer & Job Matcher',
      shortDescription: 'Intelligent resume analysis platform that parses tech skills and calculates percentage match against job requirements.',
      fullDescription: 'Smart Resume Analyzer is a web application designed to help job seekers optimize their resumes for ATS screening. It extracts key engineering skills, highlights missing keywords, and produces actionable job match feedback.',
      problemSolved: 'Helps students and candidates identify skill gaps and tailor technical resumes specifically for competitive developer positions.',
      keyFeatures: [
        'Resume text parsing and automated keyword extraction',
        'Job description comparison algorithm for match scoring',
        'Categorized technical skill breakdown (Languages, Frameworks, Tools)',
        'Personalized improvement recommendations and resume optimization tips',
        'Interactive analytics visualizer'
      ],
      technologies: ['React.js', 'JavaScript', 'Tailwind CSS', 'Node.js', 'REST API'],
      featured: false,
      category: 'Web Utility',
      image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=1000&q=80',
      githubUrl: 'https://github.com/pankaj9088/Smart-Resume-Analyzer.git',
      liveUrl: 'https://smart-resume-analyzer-4ihcqv25f.vercel.app',
      learned: [
        'Implementing text parsing and regex pattern matching algorithms',
        'Designing intuitive data visualizations for skill match scoring',
        'Creating clean file import and drop zone user interfaces'
      ]
    },
    {
      id: 'plant-disease-recognition',
      title: 'Plant Disease Recognition Web Application',
      shortDescription: 'Machine learning web app utilizing computer vision models to diagnose crop diseases with 74.40% accuracy.',
      fullDescription: 'An artificial intelligence web application created to assist agricultural diagnosis by analyzing leaf imagery. Powered by a machine learning model integrated with a Streamlit web portal, it delivers instant disease identification and treatment insights.',
      problemSolved: 'Provides accessible digital crop health diagnostics directly to farmers and researchers through a lightweight web interface.',
      keyFeatures: [
        'Image-based plant leaf disease detection',
        'Trained Machine Learning model delivering 74.40% accuracy',
        'Streamlit interactive web dashboard',
        'Automated recommendations for agricultural remedies and preventive measures'
      ],
      technologies: ['Python', 'Machine Learning', 'OpenCV / PyTorch', 'Streamlit'],
      featured: false,
      category: 'Machine Learning',
      image: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&w=1000&q=80',
      githubUrl: 'https://github.com/pankaj9088/Plant-Disease-Recognition-Web-App.git',
      liveUrl: '',
      learned: [
        'Pre-processing image dataset pipelines for machine learning models',
        'Evaluating model performance metrics and classification reports',
        'Building fast Python web application interfaces with Streamlit'
      ]
    },
    {
      id: 'weather-app',
      title: 'Real-Time Weather Web Application',
      shortDescription: 'Clean weather dashboard fetching real-time atmospheric metrics and multi-day forecasts via OpenWeather API.',
      fullDescription: 'A sleek, responsive weather application providing current weather metrics, humidity, wind speeds, and location-based forecasts with smooth visual animations.',
      problemSolved: 'Delivers rapid weather information through intuitive location searching and clean API response handling.',
      keyFeatures: [
        'Location search with auto-completion support',
        'Real-time temperature, humidity, wind, and pressure data',
        'Dynamic UI background transitions reflecting current weather conditions',
        'Mobile-friendly responsive card views'
      ],
      technologies: ['React.js', 'JavaScript', 'REST API', 'Tailwind CSS'],
      featured: false,
      category: 'Web Utility',
      image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&w=1000&q=80',
      githubUrl: 'https://github.com/pankaj9088/WINDY.git',
      liveUrl: '',
      learned: [
        'Handling external REST API integration and error fallback states',
        'Asynchronous data fetching with Loading UI feedback',
        'Geolocational API handling in web applications'
      ]
    }
  ],

  journey: [
    {
      year: '2024',
      title: 'Building Strong Programming Foundations',
      description: 'Focused on strengthening core programming and software development fundamentals while developing practical problem-solving skills.',
      highlights: [
        'Built a strong foundation in Java, Python, HTML5, CSS3, and JavaScript',
        'Learned and applied Object-Oriented Programming (OOP) concepts',
        'Practiced Data Structures and Algorithms (DSA) and problem-solving',
        'Worked with MySQL and fundamental database concepts',
        'Started building responsive web applications',
        'Learned Git and GitHub for version control and project management'
      ]
    },
    {
      year: '2025',
      title: 'Full-Stack Development & Real-World Projects',
      description: 'Expanded into modern full-stack development and began building complete applications with frontend, backend, databases, authentication, and real-time functionality.',
      highlights: [
        'Developed applications using React.js',
        'Built scalable REST APIs using Node.js and Express.js',
        'Worked with MongoDB and Mongoose for database management',
        'Implemented JWT-based authentication and authorization',
        'Developed ChatGo, a real-time communication platform using Socket.IO',
        'Built e-commerce and other full-stack applications',
        'Improved understanding of software architecture, API design, and database integration'
      ]
    },
    {
      year: '2026',
      title: 'Software Engineering & Advanced Application Development',
      description: 'Focused on building more complete software solutions, improving code quality, and strengthening knowledge of computer science and software engineering principles.',
      highlights: [
        'Developed Smart Resume Analyzer & Job Matcher and other intelligent web applications',
        'Built ChessMaster, a full-stack real-time chess platform',
        'Worked on applications involving real-time communication, authentication, APIs, databases, and business logic',
        'Strengthened knowledge of DBMS, Operating Systems, Computer Networks, OOP, and DSA',
        'Improved clean code, debugging, documentation, and software design practices',
        'Continued exploring modern technologies and preparing for Software Developer and Software Engineer opportunities'
      ]
    }
  ],

  education: {
    degree: 'B.Tech in Electronics and Communication Engineering',
    field: 'Electronics and Communication Engineering (ECE)',
    institution: 'Academy of Technology',
    university: 'Maulana Abul Kalam Azad University of Technology (MAKAUT)',
    semester: '8th Semester (Final Year Student)',
    duration: '2022 - 2026',
    status: 'Final Year / Graduating 2026',
    highlights: [
      'Pursuing Bachelor of Technology with focus on core engineering and software fundamentals',
      'Strong coursework in Data Structures, Algorithms, DBMS, Operating Systems, and Computer Networks',
      'Active developer contributor building real-world software applications alongside academic curriculum',
      'Consistent focus on practical software development and modern web development stacks'
    ]
  }
};
