import React from "react";
import ApplicationTitle from "./ApplicationTitle";
import { useLanguage } from '../contexts/LanguageContext';

const App_tex = () => {
  const { translations } = useLanguage();

  return (
    <div className="mx-auto max-w-7xl my-10">
      <ApplicationTitle myTitle={"Applications"} />
      <div className="justify-center border p-3 bg-gray-900 text-white rounded-lg">
        <div className="relative flex flex-col sm:flex-row items-center mb-6">
          <div className="w-full sm:w-1/3" />
          <div className="text-2xl font-bold underline py-2 my-5 sm:my-0 w-full sm:w-1/3 text-center">
            {translations.applications.tex.title}
          </div>
        </div>

        <a href="https://img2tex-app.vercel.app/" target="_blank">
          <img
            src="/texapp.png"
            alt="Quantum Circuit Simulator Application"
            width={700}
            style={{ margin: "auto" }}
            className="translate scale-on-hover-app shadow-md"
          />
        </a>
        <div className="flex-col items-center justify-center py-3 text-center">
          {translations.applications.tex.description.map((line, index) => (
            <React.Fragment key={index}>
              {line}<br />
            </React.Fragment>
          ))}
          <br />
          <span className="underline">{translations.applications.tex.note}</span>
        </div>
        <div className="flex justify-end">
          {" "}
          {/* Added container div with flex and justify-end */}
          <a href="https://github.com/kotta-27/img2tex-app" target="_blank">
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

export default App_tex;
