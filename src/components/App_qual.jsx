import React from "react";

const App_qual = () => {
  return (
    <div>
      <div className="justify-center border p-3 bg-gray-900 text-white mt-20">
        <div className="relative flex flex-col md:flex-row justify-center items-center mb-6">
          <div className="w-full sm:w-1/3" />
          <div className="text-2xl font-bold underline py-2 my-5 sm:my-0 w-full sm:w-1/3 text-center">
            量子タイピングゲーム
          </div>
          <div className="w-full sm:w-1/3 flex justify-end">
            <div
              className="px-4 py-3 rounded-lg font-bold text-sm text-center duration-300 ease-in-out shadow-lg mt-4 sm:mt-0"
              style={{
                background: "linear-gradient(135deg, #4F46E5, #2563EB)",
                color: "#ffffff",
                textShadow: "1px 1px 2px rgba(0,0,0,0.2)",
                boxShadow:
                  "0 4px 6px rgba(37, 99, 235, 0.3), 0 1px 3px rgba(37, 99, 235, 0.1)",
              }}
            >
              QC4U2 GroupWork
              <br />
              全体5位
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
          フロントエンド：Remix，バックエンド：Qulacs(Python)<br></br>
          ユーザがタイピングする単語の情報を用いて量子機械学習を行い，<br></br>
          ユーザがより難しいと感じる単語を出題するタイピングゲームです．
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
