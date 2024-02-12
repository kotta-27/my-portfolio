import React from "react";

const Application = () => {
  return (
    <div>
      <div className="about-container">
        <h2 className="font-weight-600">
          <span className="text-green-700">A</span>pplication
        </h2>
      </div>
      <div className="justify-center border p-3 bg-gray-900">
        <div className="flex items-center justify-center">
          <p className="text-lg text-white-700 font-bold underline py-2">
            量子回路デモアプリケーション
          </p>
        </div>

        <a href="https://watabelab.github.io/quantumcircuit/" target="_blank">
          <img
            src="/watabeapp.png"
            alt="Quantum Circuit Simulator Application"
            width={700}
            style={{ margin: "auto" }}
            className="translate hover:scale-95"
            shadow
          />
        </a>
        <div className="flex items-center justify-center py-3">
          React.js，Django，Qiskitによる量子回路シミュレータ．<br></br>
          ブラウザ上で簡単に量子ゲートによる演算のシミュレートが可能です．
        </div>
      </div>
    </div>
  );
};

export default Application;
