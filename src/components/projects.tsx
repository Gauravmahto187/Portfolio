import { PROJECTS } from "../constants/index";
import { motion } from "framer-motion";

interface ProjectType {
  title: string;
  image: string;
  description: string;
  technologies: string[];
}

const imageVariant = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0 },
};

const contentVariant = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0 },
};

const Projects = () => {
  // Project URLs array in the same order as PROJECTS
  const projectUrls = [
    "https://gemini-clone-snowy.vercel.app/",
    "https://empora-one.vercel.app/login", 
    "https://event-management-nu-henna.vercel.app/",
    "https://acepte.vercel.app/"
  ];

  return (
    <div className="border-b border-neutral-900 p-4">
      <motion.h1
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h1>
      <div>
        {PROJECTS.map((project: ProjectType, index: number) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              className="w-full lg:w-1/4"
              initial="hidden"
              whileInView="visible"
              variants={imageVariant}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <a 
                href={projectUrls[index]} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block cursor-pointer"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="mb-6 rounded w-[350px] h-[250px] lg:w-[300px] lg:h-[200px] hover:opacity-80 transition-opacity duration-300"
                />
              </a>
            </motion.div>
            <motion.div
              className="w-full max-w-full lg:w-3/4"
              initial="hidden"
              whileInView="visible"
              variants={contentVariant}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <h6 className="mb-2 font-semibold">{project.title}</h6>
              <p className="mb-4 text-neutral-400">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech: string, techIndex: number) => (
                  <span
                    key={techIndex}
                    className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
