import React from "react";

const Application2 = () => {
  return (
    <div>
      <div className="about-container"></div>
      <div className="justify-center border p-3 bg-gray-900">
        <div className="flex items-center justify-center">
          <p className="text-2xl text-white-700 font-bold underline py-2">
            量子タイピングゲーム
          </p>
        </div>

        <a href="https://app.qualcloud.net/" target="_blank">
          <img
            src="/typingapp.png"
            alt="Quantum Circuit Simulator Application"
            width={700}
            style={{ margin: "auto" }}
            className="translate hover:scale-95"
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
              className="fa-brands fa-github text-3xl py-4 px-2 hover:text-amber-300 
					hover:scale-110 translate shadow"
              style={{ fontSize: "3rem" }}
            ></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Application2;
