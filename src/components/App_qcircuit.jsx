import React from "react";
import { useLanguage } from '../contexts/LanguageContext';

const App_qcircuit = () => {
  const { translations } = useLanguage();

  return (
    <div className="mx-auto max-w-7xl">
      <div className="justify-center border p-3 bg-gray-900 mt-20 rounded-lg">
        <div className="flex items-center justify-center">
          <p className="text-2xl text-white-700 font-bold underline py-2 my-5">
            {translations.applications.qcircuit.title}
          </p>
        </div>

        <a
          href="https://kotta-27.github.io/react-quantumcircuit/"
          target="_blank"
        >
          <img
            src="/watabeapp.png"
            alt="Quantum Circuit Simulator Application"
            width={700}
            style={{ margin: "auto" }}
            className="translate scale-on-hover-app"
            shadow="true"
          />
        </a>
        <div className="flex items-center justify-center py-3">
          {translations.applications.qcircuit.description.map((line, index) => (
            <React.Fragment key={index}>
              {line}<br></br>
            </React.Fragment>
          ))}
        </div>
        <div className="flex justify-end">
          {" "}
          {/* Added container div with flex and justify-end */}
          <a
            href="https://github.com/kotta-27/react-quantumcircuit"
            target="_blank"
          >
            <i
              className="fa-brands fa-github text-3xl py-4 px-2  shadow scale-on-hover-github"
              style={{ fontSize: "3rem" }}
            ></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default App_qcircuit;
