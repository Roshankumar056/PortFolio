import image3 from "../assets/image3.png";
import image4 from "../assets/image4.png";
import image5 from "../assets/image5.png";
import image7 from "../assets/image7.png";
import image8 from "../assets/image8.png";

const projects = [

  {
    id: 1,
    title: "The Yum Voice",
    description:
      "A voice-enabled web application using React to enhance the food discovery experience by offering users real-time recommendations of the top 5 dishes from nearby restaurants. The application utilizes Web Speech API for capturing voice commands and integrates with Firebase Realtime Database for data handling—all without a custom backend.DocMeet is a comprehensive doctor appointment booking system designed to facilitate seamless interactions between patients, doctors, and administrators. The system is built using a modern tech stack and follows a microservices architecture pattern.",
    technologies: ["React", "CSS", "JavaScript"],
    githubUrl: "https://github.com/Biman721443/YumVoice",
    liveUrl: "https://yum-voice.vercel.app/",
    featured: true,
    imageUrl: image3,
  },
  {
    id: 2,
    title: "The OuizApp ",
    description:
      "This Category-Wise Quiz App is an interactive platform where users can read various books—including novels, biographies, and stories—and then test their understanding through quizzes. It features broad categories like English, General Studies, Geography, and History. With Firebase Authentication and Realtime Database, the app securely manages user data and progress, offering a personalized and engaging learning experience for all types of readers.",
    technologies: ["React", "CSS", "JavaScript"],
    githubUrl: "https://github.com/Roshankumar056/QuizApp",
    liveUrl: "https://quiz-app-ochre-ten.vercel.app/",
    featured: true,
    imageUrl: image8,
  },
    {
    id: 3,
    title: "The Scheduling App",
    description:
      "A responsive and user-friendly scheduling application designed to help users efficiently manage their tasks and appointments. Built using HTML, CSS, and JavaScript, this app focuses on simplicity and functionality, providing an intuitive interface for creating, editing, and deleting schedules.",
    technologies: ["HTML", "CSS", "JavaScript", "Firebase"],
    githubUrl: "https://github.com/Roshankumar056/Scheduling-App",
    liveUrl: "https://schedpro.netlify.app/",
    featured: true,
    imageUrl: image7,
  },

  {
    id: 4,
    title: "Infinite Scrolling Website",
    description:
      "An infinite scrolling website loads new content automatically as users scroll down, eliminating page reloads or buttons. It provides a smooth, continuous browsing experience, ideal for feeds, galleries, or large content lists to keep users engaged.",
    technologies: ["HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/Roshankumar056/Infinte-Scrolling",
    liveUrl: "https://infinitescrollingofdogimage.netlify.app/",
    featured: false,
    imageUrl: image4,
  },
  {
    id: 5,
    title: "Cross-Generation Knowledge Transfer App",
    description:
      "An interactive platform designed to bridge the generational gap by allowing users from different age groups to share knowledge, experiences, and skills in an organized and engaging way.",
    technologies: ["React", "CSS", "JavaScript","Firebase"],
    githubUrl: "https://github.com/Roshankumar056/Cross-Generation",
    liveUrl: "https://cross-generation-l6qh.vercel.app/",
    featured: false,
    imageUrl: image5,
  }  
];

export default projects;
