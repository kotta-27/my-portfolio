import React from "react";
import { useLanguage } from '../contexts/LanguageContext';

const Badge = ({ gradient, textColor, children }) => (
  <div className="w-full px-3">
    <div
      className={`
        px-3 py-3 rounded-lg font-bold text-center
        transform transition-all duration-300 hover:scale-105
        shadow-lg
      `}
      style={{
        background: gradient,
        color: textColor,
        fontSize: "0.8rem",
        textShadow: "1px 1px 2px rgba(0,0,0,0.1)",
        boxShadow: "0 4px 6px rgba(0,0,0,0.1), 0 1px 3px rgba(0,0,0,0.08)",
      }}
    >
      {children}
    </div>
  </div>
);

const App_qual = () => {
  const { translations } = useLanguage();
  const { badge } = translations.applications.qual;

  return (
    <div className="mx-auto max-w-7xl">
      <div className="justify-center border p-3 bg-gray-900 text-white mt-20 rounded-lg">
        <div className="relative flex flex-col md:flex-row justify-center items-center mb-6">
          <div className="w-full sm:w-1/3" />
          <div className="text-2xl font-bold underline py-2 my-5 sm:my-0 w-full sm:w-1/3 text-center">
            {translations.applications.qual.title}
          </div>
          <div className="w-full sm:w-1/3 flex justify-end">
            <div className="flex flex-row gap-2">
              <Badge
                gradient="linear-gradient(135deg, #4F46E5, #2563EB)"
                textColor="#fff"
              >
                <span>{badge.line1}</span>
                <br />
                <span>{badge.line2}</span>
              </Badge>
            </div>
          </div>
        </div>

        <a href="https://app.qualcloud.net/" target="_blank">
          <img
            src="/typingapp.png"
            alt="Quantum Circuit Simulator Application"
            width={700}
            style={{ margin: "auto" }}
            className="translate scale-on-hover-app"
            shadow="true"
          />
        </a>
        <div className="flex items-center justify-center py-3">
          {translations.applications.qual.description.map((line, index) => (
            <React.Fragment key={index}>
              {line}<br></br>
            </React.Fragment>
          ))}
        </div>
        <div className="flex justify-end">
          {" "}
          {/* Added container div with flex and justify-end */}
          <a href="https://github.com/itscreek/qual-frontend" target="_blank">
            <i
              className="fa-brands fa-github text-3xl py-4 px-2 scale-on-hover-github translate shadow"
              style={{ fontSize: "3rem" }}
            ></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default App_qual;
