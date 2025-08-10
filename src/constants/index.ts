import project1 from "../assets/projects/project-1.jpeg";
import project2 from "../assets/projects/project-2.jpeg";
import project3 from "../assets/projects/project-3.jpeg";
import project4 from "../assets/projects/project-4.jpeg";

//All the details about the website is mentioned below

export const HERO_CONTENT = `Creative and detail-oriented FullStack Developer with hands-on experience in building responsive, scalable Fullstack applications. 
Proficient in modern JavaScript, API integration, and version control with a passion for intuitive UI/UX design and performance 
optimization.`;

export interface Experience {
  year: string;
  role: string;
  company: string;
  description: string;
  technologies: string[];
}

export interface Project {
  title: string;
  image: string;
  description: string;
  technologies: string[];
}

export interface Contact {
  address: string;
  phoneNo: string;
  email: string;
}

export const EXPERIENCES: Experience[] = [
  {
    year: "June 2024 - September 2024",
    role: "Frontend Intern",
    company: "Naxa pvt ltd.",
    description: `I built responsive and dynamic user interfaces using React.js and Tailwind CSS, resulting in improved load times and enhanced mobile usability. I collaborated closely with designers and backend developers to implement reusable UI components, ensuring consistency and efficiency across the application. Additionally, I strengthened version control practices by effectively using Git, including creating pull requests and conducting thorough code reviews. My contributions also focused on improving the overall user experience by delivering accessible, clean, and visually appealing interface designs.
`,
    technologies: ["Javascript", "React.js", "Tailwind CSS", "Typescript"],
  },
];

export const PROJECTS: Project[] = [
  {
    title: "Gemini Clone",
    image: project1,
    description:
      "I developed a Gemini-inspired frontend using React.js, carefully replicating the original design and functionality to maintain a familiar user experience. The project emphasized a fully responsive layout and precise UI alignment with the original site structure. I implemented a prompt search feature and recent chat history, closely mirroring Gemini's interactive flow. Additionally, I integrated the Google Gemini API to deliver accurate, context-aware responses to user prompts.",
    technologies: ["Javascript", "React.js", "Tilwind CSS", "Google Gemini API"],
  },
  {
    title: "Empora | Employee Management System",
    image: project2,
    description:
      "I built a full-stack web application using the MERN stack, implementing JWT authentication and role-based access control for secure and tailored user access. The application featured CRUD operations for managing Employees, Departments, and Notices, ensuring smooth and efficient data handling. I developed a Leave and Work-from-Home (WFH) management system with a credit-based approach to provide flexibility and maintain accuracy. The platform also included salary allocation with automatic leave deductions, a detailed salary history, and a comprehensive holidays list. For production readiness and scalability, I deployed the frontend on Vercel and the backend on Render.",
    technologies: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB"],
  },
  {
    title: "Event Management",
    image: project3,
    description:
      "I developed a responsive web application for managing events, following a mobile-first design approach to ensure optimal usability across devices. The application utilized localStorage-based data persistence to maintain event details without the need for a backend. I designed and integrated a date and venue conflict detection feature to prevent double bookings, enhancing scheduling accuracy. Additionally, I provided both list and calendar views, allowing users to easily view, edit, and delete events.",
    technologies: [
      "React.js", "Material UI", "Javascript"
    ],
  },
  {
    title: "AcePTE | Client Website",
    image: project4,
    description:
      "Developed a real-world client project for AcePTE, featuring a minimalistic design to effectively showcase course details and provide a streamlined contact interface.",
    technologies: [
      "React.js",
      "Tailwind CSS",
      "Javascript"
    ],
  },
];

export const CONTACT: Contact = {
  address: "Kathmandu, Nepal",
  phoneNo: "+977 9765757161",
  email: "gauravmahto269@gmail.com",
};
