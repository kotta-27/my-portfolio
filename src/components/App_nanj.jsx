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

const App_nanj = () => {
  const { translations } = useLanguage();
  const { badge } = translations.applications.nanj;

  return (
    <div className="mx-auto max-w-7xl">
      <div className="justify-center border p-3 bg-gray-900 text-white mt-20 rounded-lg">
        <div className="relative flex flex-col sm:flex-row items-center mb-6">
          <div className="w-full sm:w-1/3" />
          <div className="text-2xl font-bold underline py-2 my-5 sm:my-0 w-full sm:w-1/3 text-center">
            {translations.applications.nanj.title}
          </div>
          <div className="w-full sm:w-1/3 flex justify-end">
            <div>
              <Badge
                gradient="linear-gradient(135deg, #FFD700, #FFA500)"
                textColor="#000"
              >
                <span>{badge.line1}</span>
                <br />
                <span>{badge.line2}</span>
              </Badge>
            </div>
          </div>
        </div>

        <a href="" target="_blank">
          <img
            src="/nanjapp.png"
            alt="Quantum Circuit Simulator Application"
            width={700}
            style={{ margin: "auto" }}
            className="translate scale-on-hover-app"
            shadow="true"
          />
        </a>
        <div className="flex-col items-center justify-center py-3 text-center">
          {translations.applications.nanj.description.map((line, index) => (
            <React.Fragment key={index}>
              {line}<br />
            </React.Fragment>
          ))}
          <br />
          {translations.applications.nanj.notes.map((note, index) => (
            <div className="mb-4">
              <React.Fragment key={index}>
                {note.note}<br />
                <a href={note.link} target="_blank" className="underline text-blue-500 hover:text-blue-200 transition-colors duration-300 break-all">
                  {note.link}
                </a>
              </React.Fragment>
            </div>
          ))}
        </div>
        <div className="flex justify-end">
          {" "}
          {/* Added container div with flex and justify-end */}
          <a
            href="https://github.com/kotta-27/202406hackathon_frontend"
            target="_blank"
          >
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

export default App_nanj;
