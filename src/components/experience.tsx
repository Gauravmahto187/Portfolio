import { EXPERIENCES } from "../constants/index";
import { motion } from "framer-motion";

interface ExperienceType {
  year: string;
  role: string;
  company: string;
  description: string;
  technologies: string[];
}

const yearVariant = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0 },
};

const contentVariant = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0 },
};

const Experience = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1 
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Experience
      </motion.h1>
      <div>
        {EXPERIENCES.map((experience: ExperienceType, index: number) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              className="w-full lg:w-1/4"
              initial="hidden"
              whileInView="visible"
              variants={yearVariant}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <p className="mb-2 text-sm text-neutral-400">{experience.year}</p>
            </motion.div>
            <motion.div
              className="w-full max-w-xl lg:w-3/4"
              initial="hidden"
              whileInView="visible"
              variants={contentVariant}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <h6 className="mb-2 font-semibold">
                {experience.role} - <span className="text-sm text-purple-100">{experience.company}</span>
              </h6>
              <p className="mb-2 text-neutral-400">{experience.description}</p>
              <div className="flex flex-wrap gap-2">
                {experience.technologies.map((tech: string, techIndex: number) => (
                  <span
                    key={techIndex}
                    className="mr-2 mb-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-400"
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

export default Experience;
