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
    <div>
      <div className="skills-container">
        <ApplicationTitle myTitle={"Skills"} />
        <div className="grid-skills">
          <div className="skill-card html">
            <i className="fa-brands fa-html5 html-icon"></i>
            <p>HTML</p>
          </div>
          <div className="skill-card css">
            <i className="fa-brands fa-css3-alt css-icon"></i>
            <p>CSS</p>
          </div>
          <div className="skill-card js">
            <i className="fa-brands fa-js-square js-icon"></i>
            <p>JavaScript</p>
          </div>
          <div className="skill-card react">
            <i className="fa-brands fa-react react-icon"></i>
            <p>React</p>
          </div>
          <div className="skill-card node">
            <i className="fa-brands fa-node-js node-icon"></i>
            <p>Node</p>
          </div>
          <div className="skill-card python">
            <i className="fa-brands fa-python python-icon"></i>
            <p>Python</p>
          </div>
          <div className="skill-card java">
            <i className="fa-brands fa-java"></i>
            <p>Java</p>
          </div>
          <div className="skill-card c">
            <p>C / C++</p>
          </div>
          <div className="skill-card flutter">
            <i className="fa-brands fa-flutter"></i>
            <p>flutter(勉強中)</p>
          </div>
          <div className="skill-card ruby">
            <p>Ruby（Rails）</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
