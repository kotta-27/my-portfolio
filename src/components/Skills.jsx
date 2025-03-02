import React from "react";
import { useLanguage } from '../contexts/LanguageContext';
import ApplicationTitle from "./ApplicationTitle";

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

  return (
    <div className="py-12" id="skills-name">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ApplicationTitle myTitle="Skills" />
        <div className="lg:text-center mb-12">
          <p className="mt-4 max-w-2xl text-xl text-gray-200 lg:mx-auto">
            {translations.skills.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300"
            >
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">
                  {category.title}
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {category.skills.map((skill, skillIdx) => (
                    <div
                      key={skillIdx}
                      className="group relative bg-gray-50 rounded-lg p-4 hover:bg-gray-200 transition-all duration-300 border-2 border-gray-200"
                    >
                      <div className="flex items-center space-x-3">
                        <i
                          className={`${skill.icon} text-3xl`}
                          style={{ color: skill.color }}
                        />
                        <span className="text-gray-700 group-hover:text-gray-900 font-bold">
                          {skill.name}
                        </span>
                      </div>
                      <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 w-0 group-hover:w-full transition-all duration-300" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
