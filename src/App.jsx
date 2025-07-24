import React from 'react';
import profileImg from './assets/profile.png';
import geminiImg from './assets/Gemini.png';
import emporaImg from './assets/Empora.png';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaCheckCircle } from 'react-icons/fa';
import { motion } from 'framer-motion';
import './App.css';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Education', href: '#education' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
];

const skills = [
  {
    title: 'Web Design',
    items: ['UI/UX Design', 'Responsive Design', 'Wireframing', 'User Research'],
  },
  {
    title: 'Frontend',
    items: ['HTML', 'CSS', 'JavaScript', 'ReactJS', 'Tailwind CSS'],
  },
  {
    title: 'Backend',
    items: ['NodeJS', 'MongoDB', 'ExpressJS'],
  },
  {
    title: 'Soft Skills',
    items: ['Communication', 'Team Work', 'Time Management', 'Leadership'],
  },
];

const projects = [
  {
    title: 'Gemini Clone',
    image: geminiImg,
    description: 'A fully functional frontend clone of the Gemini website using React JS and Google Gemini API. Focused on responsive design and layout to replicate the user interface and experience.Built a prompt search feature and recent chat history, closely mirroring Gemini’s user experience.',
    link: 'https://gemini-clone-snowy.vercel.app/',
  },
  {
    title: 'Empora',
    image: emporaImg,
    description: 'Employee Management System using the MERN stack (MongoDB, Express.js, React.js, Node.js). Supports CRUD operations and features a responsive, user-friendly interface.',
    link: 'https://empora-one.vercel.app/login',
  },
];

export default function App() {
  return (
    <div className="min-h-screen bg-[#fafafd] text-gray-900 font-sans">
      {/* Sticky Navbar */}
      <nav className="sticky top-0 z-20 bg-white/80 backdrop-blur-md shadow flex flex-wrap justify-center gap-4 md:gap-8 py-3 px-2 md:px-6 border-b border-gray-100 text-base md:text-lg">
        {navLinks.map(link => (
          <a key={link.name} href={link.href} className="text-gray-700 font-semibold hover:text-purple-600 transition-colors duration-200 px-2 py-1">
            {link.name}
          </a>
        ))}
      </nav>
      {/* Hero Section */}
      <section className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-10 max-w-5xl mx-auto py-12 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-4">
            Hey, I'm <span className="text-purple-600">Gaurav</span> <span className="inline-block">👋</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 max-w-lg mx-auto md:mx-0">
            Student & aspiring <span className="font-semibold text-purple-600">Front-End Developer</span> passionate about building beautiful, intuitive, and responsive web experiences.
          </p>
          <div className="flex gap-4 justify-center md:justify-start mb-4 text-xl sm:text-2xl">
            <a href="https://www.linkedin.com/in/gaurav-mahto-495458218/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700 transition-colors"><FaLinkedin /></a>
            <a href="https://github.com/Gauravmahto187" target="_blank" rel="noopener noreferrer" className="hover:text-gray-800 transition-colors"><FaGithub /></a>
            <a href="mailto:gauravmahto269@gmail.com" className="hover:text-red-500 transition-colors"><FaEnvelope /></a>
            <a href="tel:+9779765757161" className="hover:text-green-600 transition-colors"><FaPhone /></a>
          </div>
          <p className="text-xs sm:text-sm text-gray-500">New Baneshwor, Kathmandu • +977 9765757161 • gauravmahto269@gmail.com</p>
        </div>
        <div className="relative flex items-center justify-center mb-6 md:mb-0">
          <motion.div
            className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-400 via-pink-400 to-blue-400 animate-spin-slow blur-sm opacity-70"
            style={{ zIndex: 1 }}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1.1, opacity: 0.7 }}
            transition={{ duration: 1.2, type: 'spring' }}
          />
          <motion.img
            src={profileImg}
            alt="Profile"
            className="relative w-36 h-36 xs:w-44 xs:h-44 sm:w-56 sm:h-56 rounded-full border-4 border-white shadow-2xl object-cover bg-white/60 backdrop-blur-lg z-10"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.05, rotate: 2 }}
            transition={{ duration: 0.8, type: 'spring' }}
          />
        </div>
      </section>
      {/* Skills Section */}
      <section id="skills" className="max-w-5xl mx-auto mt-14 md:mt-20 px-4 sm:px-6 lg:px-8 flex flex-col items-center md:block">
        <div className="w-full max-w-xs md:max-w-none flex flex-col items-center md:block">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-8 sm:mb-10 flex items-center justify-center text-center">
            Skills<span className="text-purple-600 ml-2">.</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
            {skills.map((cat) => (
              <div key={cat.title} className="text-center md:text-left">
                <h3 className="text-lg sm:text-xl font-bold mb-3">{cat.title}</h3>
                <ul className="space-y-2 text-gray-700 text-base sm:text-lg">
                  {cat.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Projects Section */}
      <section id="projects" className="max-w-5xl mx-auto mt-16 md:mt-24 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-8 sm:mb-10 flex items-center">
          Projects<span className="text-purple-600 ml-2">.</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <motion.div
                className="rounded-3xl bg-white shadow-xl p-4 sm:p-6 flex flex-col justify-between min-h-[420px] hover:shadow-2xl transition-shadow border border-gray-100 h-full"
                whileHover={{ scale: 1.03 }}
              >
                <img src={project.image} alt={project.title} className="rounded-2xl w-full h-44 sm:h-56 object-cover border border-purple-100 mb-2" />
                <h3 className="text-xl sm:text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-2 text-base sm:text-lg line-clamp-4">{project.description}</p>
              </motion.div>
            </a>
          ))}
        </div>
      </section>
      {/* About Section */}
      <section id="about" className="max-w-5xl mx-auto mt-16 md:mt-24 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-6 flex items-center">
          About<span className="text-purple-600 ml-2">.</span>
        </h2>
        <div className="bg-white rounded-3xl shadow-lg p-6 sm:p-8 text-base sm:text-lg text-gray-700">
          Highly motivated and creative aspiring Front-End Developer with a solid foundation in HTML, CSS, JavaScript, React, and Tailwind CSS. Passionate about building intuitive, responsive, and visually engaging user interfaces. Eager to learn new technologies, collaborate in team environments, and contribute meaningfully to real-world projects in dynamic, fast-paced settings.
        </div>
      </section>
      {/* Experience Section */}
      <section id="experience" className="max-w-5xl mx-auto mt-16 md:mt-24 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-6 flex items-center">
          Experience<span className="text-purple-600 ml-2">.</span>
        </h2>
        <div className="bg-white rounded-3xl shadow-lg p-6 sm:p-8">
          <div className="mb-8">
            <h3 className="font-bold text-lg sm:text-xl mb-1">Volunteer <span className="font-normal italic text-gray-600">Futurama, Islington College</span></h3>
            <p className="text-xs sm:text-sm text-gray-500 mb-1">Kamal Pokhari, Kathmandu</p>
            <ul className="list-none space-y-1 text-gray-700 text-base sm:text-lg">
              <li className="flex items-center gap-2"><FaCheckCircle className="text-purple-500" /> Managed a group of 20 people, providing insights into college's facilities and programs.</li>
              <li className="flex items-center gap-2"><FaCheckCircle className="text-purple-500" /> Gained experience in leadership, communication, and time management.</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg sm:text-xl mb-1">Frontend Intern <span className="font-normal italic text-gray-600">Naxa put ltd</span></h3>
            <p className="text-xs sm:text-sm text-gray-500 mb-1">Maharajgunj, Kathmandu | Jun, 2024 - Sep, 2024</p>
            <ul className="list-none space-y-1 text-gray-700 text-base sm:text-lg">
              <li className="flex items-center gap-2"><FaCheckCircle className="text-purple-500" /> Built responsive and dynamic user interfaces using React.js and Tailwind CSS.</li>
              <li className="flex items-center gap-2"><FaCheckCircle className="text-purple-500" /> Collaborated with designers and backend developers for efficient UI components.</li>
              <li className="flex items-center gap-2"><FaCheckCircle className="text-purple-500" /> Strengthened skills in frontend development and version control with Git.</li>
            </ul>
          </div>
        </div>
      </section>
      {/* Education Section */}
      <section id="education" className="max-w-5xl mx-auto mt-16 md:mt-24 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-6 flex items-center">
          Education<span className="text-purple-600 ml-2">.</span>
        </h2>
        <div className="bg-white rounded-3xl shadow-lg p-6 sm:p-8">
          <div className="mb-6">
            <h3 className="font-bold text-base sm:text-lg">Bsc(hons) in Computing</h3>
            <p className="italic text-gray-600">Islington College</p>
            <p className="text-xs sm:text-sm text-gray-500">Kamal Pokhari, Kathmandu - Present</p>
          </div>
          <div>
            <h3 className="font-bold text-base sm:text-lg">+2 Management</h3>
            <p className="italic text-gray-600">United Academy</p>
            <p className="text-xs sm:text-sm text-gray-500">Kumaripati, Lalitpur | Jan, 2019 - Sep, 2021</p>
          </div>
        </div>
      </section>
      
    </div>
  );
}
