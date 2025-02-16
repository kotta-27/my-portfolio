import React, { useState, useEffect, useRef } from "react";
import ApplicationTitle from "./ApplicationTitle";

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const titleRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => {
      if (titleRef.current) {
        observer.unobserve(titleRef.current);
      }
    };
  }, []);

  return (
    <div className="mx-auto max-w-7xl px-6 py-8">
      <ApplicationTitle myTitle={"Skills"} />
      <div className="grid grid-cols-2 gap-8 md:grid-cols-4 sm:grid-cols-4">
        {[
          { name: "HTML", icon: "fa-html5", color: "hover:bg-[#E34F26]" },
          { name: "CSS", icon: "fa-css3-alt", color: "hover:bg-[#264DE4]" },
          { name: "JavaScript", icon: "fa-js-square", color: "hover:bg-[#d4bb00]" },
          { name: "React", icon: "fa-react", color: "hover:bg-[#61DAFB]" },
          { name: "Node", icon: "fa-node-js", color: "hover:bg-[#339933]" },
          { name: "Python", icon: "fa-python", color: "hover:bg-[#3776AB]" },
          { name: "Java", icon: "fa-java", color: "hover:bg-[#ef7000]" },
          { name: "C / C++", icon: "", color: "hover:bg-[#3cfda6]" },
          { name: "Flutter(勉強中)", icon: "fa-flutter", color: "hover:bg-[#3c73fd]" },
          { name: "Ruby（Rails）", icon: "", color: "hover:bg-[#f32929]" },
        ].map((skill, index) => (
          <div
            key={index}
            className={`bg-gray-300 text-gray-900 flex items-center justify-center gap-4 p-4 rounded-lg shadow-md  ${skill.color} hover:scale-105 hover:text-white`}
          >
            {skill.icon && <i className={`fa-brands ${skill.icon} text-2xl`}></i>}
            <p className="">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
