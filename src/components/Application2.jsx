import React from "react";

const Application2 = () => {
  return (
    <div>
      <div className="about-container"></div>
      <div className="justify-center border p-3 bg-gray-900 text-white">
        <div className="relative flex justify-center items-center mb-6">
          <div className="text-2xl font-bold underline py-2 my-5">
            量子タイピングゲーム
          </div>
          <div
            className="absolute right-0 mr-20 px-4 py-3 rounded-lg font-bold text-sm text-center transform hover:scale-105 transition-transform duration-300 ease-in-out shadow-lg"
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

        <a href="https://app.qualcloud.net/" target="_blank">
          <img
            src="/typingapp.png"
            alt="Quantum Circuit Simulator Application"
            width={700}
            style={{ margin: "auto" }}
            className="translate scale-on-hover-app"
            shadow
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

export default Application2;
