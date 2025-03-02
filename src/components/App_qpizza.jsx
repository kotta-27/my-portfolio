import React from "react";
import { useLanguage } from '../contexts/LanguageContext';
const App_qpizza = () => {
  const { translations } = useLanguage();

  return (
    <div className="mx-auto max-w-7xl">
      <div className="justify-center border p-3 bg-gray-900 text-white mt-20 rounded-lg">
        <div className="relative flex flex-col sm:flex-row items-center mb-6">
          <div className="w-full sm:w-1/3" />
          <div className="text-2xl font-bold underline py-2 my-5 sm:my-0 w-full sm:w-1/3 text-center">
            Quantum Pizza
          </div>
          {/* バナー1 */}
          <div className="w-full sm:w-1/3 flex justify-end">
            <div className="w-1/2 flex justify-end" style={{ height: "80px" }}>
              <div
                className="px-2 py-5 rounded-lg font-bold text-sm text-center duration-300 ease-in-out shadow-lg mt-4 sm:mt-0"
                style={{
                  background: "linear-gradient(135deg, #00A8FF, #AAA5FF)",
                  color: "#000",
                  fontSize: "0.7rem",
                  textShadow: "1px 1px 2px rgba(0,0,0,0.1)",
                  boxShadow:
                    "0 4px 6px rgba(0,0,0,0.1), 0 1px 3px rgba(0,0,0,0.08)",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                理研×未来館イベント
                <br />
                展示作品
              </div>
            </div>
            <div className="w-1/2 flex justify-end" style={{ height: "80px" }}>
              <div
                className="px-2 py-5 rounded-lg font-bold text-sm text-center duration-300 ease-in-out shadow-lg mt-4 sm:mt-0"
                style={{
                  background: "linear-gradient(135deg, #0044FF, #7766FF)",
                  color: "#fff",
                  fontSize: "0.7rem",
                  textShadow: "1px 1px 2px rgba(0,0,0,0.1)",
                  boxShadow:
                    "0 4px 6px rgba(0,0,0,0.1), 0 1px 3px rgba(0,0,0,0.08)",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                理研サイト
                <br />
                Q-Portal 掲載作品
              </div>
            </div>
          </div>
        </div>

        <a href="https://qpizza-game.vercel.app/" target="_blank">
          <img
            src="/qpizzaapp2.png"
            alt="Quantum Circuit Simulator Application"
            width={700}
            style={{ margin: "auto" }}
            className="translate scale-on-hover-app"
            shadow="true"
          />
        </a>
        <div className="flex-col items-center justify-center py-3 text-center">
          {translations.applications.pizza.description.map((line, index) => (
            <React.Fragment key={index}>
              {line}<br />
            </React.Fragment>
          ))}
          <br />
          {translations.applications.pizza.notes.map((note, index) => (
            <React.Fragment key={index}>
              {note.note}<br />
              <a href={note.link} target="_blank" className="underline text-blue-500 hover:text-blue-200 transition-colors duration-300 break-all">
                {note.link}
              </a>
            </React.Fragment>
          ))}
        </div>
        <div className="flex justify-end">
          {" "}
          {/* Added container div with flex and justify-end */}
          <a href="https://github.com/kotta-27/qpizza-game" target="_blank">
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

export default App_qpizza;
