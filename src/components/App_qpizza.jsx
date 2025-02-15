import React, { useState, useEffect, useRef } from "react";
import ApplicationTitle from "./ApplicationTitle";

const App_qpizza = () => {
  return (
    <div className="mx-auto max-w-7xl">
      <div className="justify-center border p-3 bg-gray-900 text-white mt-20">
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
          Reactを用いて作成．<br></br>
          適切な量子ゲートを作用させて，お題に合うピザをつくるゲームです．
          <br />
          丁寧な解説をつけており，量子情報を学ぶ第一歩になれば幸いです．
          <br />
          理研×未来館イベント「クイズとゲームで迫る！量子コンピュータ」の展示作品として作成しました．
          <br />
          日本語/英語/中国語に対応しています．
          <br />
          <br />
          2024/12/01：理研サイトQ-Portalに掲載されました！
          <br />
          <a
            href="https://x.com/Q_Portal_/status/1861987301041275218"
            style={{
              color: "#00A8FF",
              wordWrap: "break-word",
              textDecoration: "underline",
              transition: "color 0.3s",
              ":hover": {
                color: "#AAA5FF",
              },
            }}
          >
            https://x.com/Q_Portal_/status/1861987301041275218
          </a>
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
