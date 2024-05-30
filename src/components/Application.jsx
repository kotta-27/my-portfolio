import React from "react";

const Application = () => {
  return (
    <div>
      <div className="about-container">
        <h2 className="font-weight-600" id="application-name">
          <span className="text-green-700">A</span>pplication
        </h2>
      </div>
      <div className="justify-center border p-3 bg-gray-900">
        <div className="flex items-center justify-center">
          <p className="text-lg text-white-700 font-bold underline py-2">
            量子回路デモアプリケーション
          </p>
        </div>

        <a href="https://kotta-27.github.io/react-quantumcircuit/" target="_blank">
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
        <div className="flex justify-end"> {/* Added container div with flex and justify-end */}
        <a href="https://github.com/kotta-27/react-quantumcircuit"
        target="_blank">
                    <i
                      className="fa-brands fa-github text-3xl py-4 px-2 hover:text-amber-300 
					hover:scale-110 translate shadow"
                    ></i>
                  </a>
                  </div>
      </div>
    </div>
  );
};

export default Application;
