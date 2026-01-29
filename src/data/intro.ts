import { WorkExperience, Projects } from '../app/components/section-b/section-b';

export const intro = {
  intro: `I am a Full Stack Web and Mobile developer from Kenya.
    I have a passion in creating seamless,beautiful and creative websites.
    I pay close attention to detail and strive for excellence in every design I create.
    I have experience with various programming languages specifically web technologies.
    Life ia a continous and learning process so work makes me more rigorous.
    I'm always learning to keep up with the latest web and mobile development practices to stay ahead of the curve.`,
};

export const education = {
  campus:
    'During my time in campus, I pursued a degreen in Information and Communication Technology. I engaged in diverse range of coursework,delving into subjects such as Programming, Software development, Database Management and Networking. My academic journey equipped me with practical skills in creating innovative solutions and implimenting techologies. ',
};

export const work: WorkExperience[] = [
  {
    desc: [
      'Architected and deployed a scalable backend infrastructure to support agentic AI features, utilizing Python and Node.js to orchestrate LLM-driven workflows.',
      'Architected scalable backend services that power complex React-based AI dashboards.',
      'Engineered a real-time instant chat system using WebSockets and optimized worker threads, supporting thousands of concurrent users with a 30% reduction in latency.',
      'Optimized data persistence using Redis and MongoDB, implementing advanced indexing and caching layers to handle high-throughput AI event pipelines.',
      'Established CI/CD best practices and security protocols (SAST/DAST), achieving 99.9% software delivery reliability.',
      'Mentored a distributed team of engineers, conducting rigorous code reviews and defining architectural guidelines to ensure high-quality code.',
      'Collaborated with cross-functional teams to translate business requirements into technical specifications for AI-driven features.',
    ],
    pos: 'Lead backend Developer, Australia - Remote',
    technology: ['Javascript', 'Git', 'Node', 'AI', 'Python'],
    date: 'Aug 2025 – Present',
    company: 'Berrijam AI',
    url: 'https://www.berrijam.com/',
  },
  {
    desc: [
      'Designed and implemented secure financial transaction flows by integrating mobile payment systems (MomoPay), ensuring PCI-DSS compliance and data integrity for high-volume digital payments.',
      'Developed and optimized reusable component libraries using React and Zustand, ensuring high performance and responsiveness for native-like mobile banking and logistics applications.',
      'Collaborated with cross-functional business teams to translate user specifications into detailed technical requirement documents and system manuals.',
      'Led the SIT (System Integration Testing) and UAT (User Acceptance Testing) cycles, identifying and resolving critical edge cases in payment processing to achieve a 95%+ bug-resolution rate prior to production.',
      'Managed secure API communication using RESTful services and OAuth 2.0 protocols, improving data flow efficiency by 30%, and securing sensitive user information.',
      'Maintained rigorous change control procedures while deploying application updates through CI/CD pipelines (GitHub Actions), ensuring 99.9% system uptime and reliability.',
    ],

    pos: 'Lead Frontend Developer,  Uganda - Remote',
    technology: ['Javascript', 'Git', 'Node', 'React'],
    date: 'Sept 2025 – Nov 2025',
    company: 'Pataparcel LTD',
    url: 'https://pickupwaka.com/',
  },
  {
    desc: [
      "I've currently been training in the company's projects with my peers to enhance my programming skills in C, Golang, JavaScript, UX - UI Design, Rust ...etc",
      "It's a peer to peer learning model to enhance my skills for the market jobs",
      'Develop and maintain scalable, responsive web applications using React and TypeScript, ensuring optimal usability and performance.',
      'Translate Figma wireframes into clean, well-structured code using HTML5, CSS3, and modern JavaScript (ES6+).',
      'Implement complex state management solutions (Context API, Zustand) to manage data flow for interactive client tools.',
      'Refactor legacy UI components, reducing UI bugs by 20% and improving overall frontend maintainability.',
      'Contributed to frontend system design, specializing in state management, performance optimization, and reusable component patterns.',
      'Refactored and optimized legacy components, improving maintainability and reducing UI bugs by 20%.',
      'Implemented comprehensive testing suites with Jest, Playwright, and Supertest, ensuring consistent reliability across releases.',
      'Managed frontend architecture for reusability and maintainability, utilizing component-based design principles improving development efficiency by 20%',
      'Containerized applications using Docker, establishing container-based development workflows, and integrating CI/CD pipelines to streamline deployment processes.',
      'Participated actively in extensive code reviews, providing constructive feedback, enforcing best practices, and driving continuous improvement in development standards.',
      'Developed cross-platform mobile applications using Flutter and Kotlin Multiplatform, addressing platform-specific compatibility issues to deliver a seamless user experience.',
      'Collaborated with product designers, backend engineers, and QA teams, contributing to sprint planning, design reviews, and architectural discussions.',
      'Collaborated effectively with cross-functional teams and stakeholders, demonstrating strong communication skills and a proactive problem-solving approach.',
    ],
    pos: 'Apprentice Developer',
    technology: ['Golang', 'Javascript', 'HTML', 'Shell', 'UX', 'Node', 'Git', 'Docker'],
    date: 'Apr, 2024 - Present',
    company: 'Zone 01 Kisumu',
    url: 'https://www.zone01kisumu.ke',
  },
  {
    desc: [
      'One month of intensive coding to access my skills for the selection process into the Zone01 Kisumu 2 year program.',
    ],
    pos: 'Piscine Candidate',
    technology: ['Golang', 'Shell'],
    date: 'Oct, 2023 - Nov, 2023 ',
    company: 'Zone 01 Kisumu',
    url: 'https://www.zone01kisumu.ke',
  },
  {
    desc: [
      'Within the period of attachment, I did maintaince of company computers',
      'Network Card installation, Hard-Disks & anti-virus installation.',
      'I also did capturing of data (sun system) to the server and report preparation in the Finance Department - ICT Section',
    ],
    pos: 'I.T Attachee',
    technology: ['Computer Networking', 'Software Update', 'Data Capture'],
    date: 'Oct, 2021 - Dec, 2021',
    company: 'Chemelil Sugar Company',
    url: '',
  },
];

export const projects: Projects[] = [
  {
    name: 'PickupWaka',
    description: 'A React based web application for pickupwaka which deals with courier services.',
    languages: ['React', 'React-Native'],
    url: 'https://pickupwaka.com',
  },
  {
    name: 'Social Network',
    description:
      'A facebook like React web app with reaal-time notification and messaging features',
    languages: ['React', 'Golang', 'Javascript', 'SQLite'],
    url: 'https://pickupwaka.com',
  },
  {
    name: 'Lem-In',
    description:
      'A golang project terminal application to deeepen my understanding of Algorithms. It uses BFS (Breadth First Search) Algorithm to find faster optimal path to place the ants without collusion.',
    languages: ['Golang'],
    url: 'https://github.com/Aaron-Ochieng/lem-in.git',
  },
  {
    name: 'Geolocalization',
    description:
      'A web project testing on api usage & displaying of maps on a webpage. The project generates coordinates (longitudes & latitude) based on a given location name & placing the markers on a map.',
    languages: ['Golang', 'HTML', 'Javascript'],
    url: 'https://github.com/Aaron-Ochieng/go-geolocalization.git',
  },
  {
    name: 'Flask-Mongodb',
    description:
      'A Web project written in python using flask framework & MongoDB as its database. This project was to test my ability on data handling, authentication & FrontEnd-BackEnd MongoDB configuration.',
    languages: ['Python', 'MongoDB'],
    url: 'https://github.com/Aaron-Ochieng/Flaskblog-Mongodb.git',
  },
  {
    name: 'Food-App',
    description:
      'A UI design of a food app. The project was written to deepen my understanding of Flutter, a dart framework used to develop Mobile, Web & Desktop applications',
    languages: ['Flutter'],
    url: 'https://github.com/Aaron-Ochieng/food_app.git',
  },
  {
    name: 'Net Cat',
    description:
      'A recreation of netcat server functionality.Its a terminal app written in golang & It behaves like a telegram app. The app allows a max number of conections of 10 in the server, message formatting, not sending of empty messages ...etc',
    languages: ['Golang'],
    url: 'https://github.com/Aaron-Ochieng/net-cat.git',
  },
  {
    name: 'ATM Management System',
    description:
      'A recreation of netcat server functionality.Its a terminal app written in golang & It behaves like a telegram app. The app allows a max number of conections of 10 in the server, message formatting, not sending of empty messages ...etc',
    languages: ['C', 'MakeFile', 'SQLite3', 'Shell'],
    url: 'https://github.com/Aaron-Ochieng/net-cat.git',
  },
];
