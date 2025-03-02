import React from "react";
import { useLanguage } from '../contexts/LanguageContext';
import ApplicationTitle from "./ApplicationTitle";
import { motion } from "framer-motion";

const Skills = () => {
  const { translations } = useLanguage();

  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", icon: "devicon-react-original colored", color: "#61DAFB" },
        { name: "Vue.js", icon: "devicon-vuejs-plain colored", color: "#4FC08D" },
        { name: "Next.js", icon: "devicon-nextjs-plain colored", color: "#000000" },
        { name: "TypeScript", icon: "devicon-typescript-plain colored", color: "#3178C6" },
        { name: "JavaScript", icon: "devicon-javascript-plain colored", color: "#F7DF1E" },
        { name: "Tailwind", icon: "devicon-tailwindcss-plain colored", color: "#06B6D4" }
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Python", icon: "devicon-python-plain colored", color: "#3776AB" },
        { name: "Django", icon: "devicon-django-plain colored", color: "#092E20" },
        { name: "Rails", icon: "devicon-rails-plain colored", color: "#CC0000" },
        { name: "Node.js", icon: "devicon-nodejs-plain colored", color: "#339933" }
      ]
    },
    {
      title: "Infrastructure",
      skills: [
        { name: "AWS", icon: "devicon-amazonwebservices-plain colored", color: "#FF9900" },
        { name: "GCP", icon: "devicon-googlecloud-plain colored", color: "#4285F4" },
        { name: "Docker", icon: "devicon-docker-plain colored", color: "#2496ED" },
        { name: "GitHub", icon: "devicon-github-original colored", color: "#181717" },
      ]
    }
  ];

  const skillCategoriesElse = [
    {
      title: "Other",
      skills: [
        { name: "Java", icon: "devicon-java-plain colored", color: "#007396" },
        { name: "C#", icon: "devicon-csharp-plain colored", color: "#239120" },
        { name: "C++", icon: "devicon-cplusplus-plain colored", color: "#00599C" },
        { name: "C", icon: "devicon-c-plain colored", color: "#00599C" },
        { name: "Julia", icon: "devicon-julia-plain colored", color: "#9558B2" },
        { name: "HTML", icon: "devicon-html5-plain colored", color: "#E34F26" },
        { name: "CSS", icon: "devicon-css3-plain colored", color: "#1572B" },
        { name: "Figma", icon: "devicon-figma-plain colored", color: "#F24E1E" },
      ]
    }
  ];
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        duration: 0.6
      }
    }
  };

  return (
    <div className="py-12" id="skills-name">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <ApplicationTitle myTitle="Skills" />
        <div className="lg:text-center mb-12">
          <p className="mt-4 max-w-2xl text-xl text-gray-200 lg:mx-auto">
            {translations.skills.description}
          </p>
        </div>
        {/* Frontend, Backend, Infrastructure */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-7"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
        >
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden border-l-4 border-blue-400"
            >
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">
                  {category.title}
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {category.skills.map((skill, skillIdx) => (
                    <div
                      key={skillIdx}
                      className="group relative bg-gray-50 rounded-lg py-2 px-2 sm:p-4 hover:bg-gray-200 transition-all duration-300 border-2 border-gray-200"
                    >
                      <div className="flex items-center space-x-1 sm:space-x-1">
                        <i
                          className={`${skill.icon} text-xl md:text-base lg:text-2xl`}
                          style={{ color: skill.color }}
                        />
                        <span className="text-gray-700 group-hover:text-gray-900 font-bold text-sm md:text-base">
                          {skill.name}
                        </span>
                      </div>
                      <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 w-0 group-hover:w-full transition-all duration-300" />
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Other */}
        <motion.div
          className="mt-12 w-full lg:w-1/2 mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
        >
          {skillCategoriesElse.map((category, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden border-l-4 border-green-400"
            >
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">
                  {category.title}
                </h3>
                <div className="grid grid-cols-3 gap-4">
                  {category.skills.map((skill, skillIdx) => (
                    <div
                      key={skillIdx}
                      className="group relative bg-gray-50 rounded-lg py-2 px-2 sm:p-4 hover:bg-gray-200 transition-all duration-300 border-2 border-gray-200"
                    >
                      <div className="flex items-center space-x-1 sm:space-x-1">
                        <i
                          className={`${skill.icon} text-xl md:text-base lg:text-2xl`}
                          style={{ color: skill.color }}
                        />
                        <span className="text-gray-700 group-hover:text-gray-900 font-bold text-sm md:text-base">
                          {skill.name}
                        </span>
                      </div>
                      <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 w-0 group-hover:w-full transition-all duration-300" />
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
