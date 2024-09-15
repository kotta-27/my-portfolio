import React, { useState, useEffect, useRef } from "react";

const ApplicationTitle = ({ myTitle }) => {
  const [isTitleVisible, setIsTitleVisible] = useState(false);
  const titleRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsTitleVisible(true);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    if (titleRef.current) observer.observe(titleRef.current);

    return () => {
      if (titleRef.current) observer.unobserve(titleRef.current);
    };
  }, []);

  const underlineStyle = {
    position: "absolute",
    bottom: "-10px",
    left: "0",
    width: "100%",
    height: "3px",
    backgroundColor: "currentColor",
    transform: isTitleVisible ? "scaleX(1)" : "scaleX(0)",
    transformOrigin: "left",
    transition: "transform 1.5s ease-out",
  };

  // Dynamic color class generation
  const titleColorClass = "app-name-head-" + myTitle.toLowerCase();

  return (
    <div className="about-container overflow-hidden p-4">
      <div className="h-20"></div>
      <div
        ref={titleRef}
        className={`relative inline-block font-bold transition-all duration-1000 ease-out ${
          isTitleVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <h2
          className="text-2xl sm:text-4xl mb-2"
          style={{ position: "relative" }}
        >
          {myTitle.split("").map((char, index) => (
            <span
              key={index}
              className={`inline-block transition-all duration-300 transform ${
                isTitleVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-full opacity-0"
              } hover:scale-110 ${index === 0 ? titleColorClass : ""}`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              {char}
            </span>
          ))}
          <span style={underlineStyle} />
        </h2>
      </div>
    </div>
  );
};

export default ApplicationTitle;
