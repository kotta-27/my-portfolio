import React from "react";

const App_qcircuit = () => {
  return (
    <div>
      {/* <div className="about-container">
        <h2 className="font-weight-600" id="application-name">
          <span className="text-green-700">A</span>pplication
        </h2>
      </div> */}
      <div className="justify-center border p-3 bg-gray-900 mt-20">
        <div className="flex items-center justify-center">
          <p className="text-2xl text-white-700 font-bold underline py-2 my-5">
            量子回路デモアプリケーション
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
          React.js，Django，Qiskitによる量子回路シミュレータ．<br></br>
          ブラウザ上で簡単に量子ゲートによる演算のシミュレートが可能です．
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
