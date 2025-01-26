import React, { useState, useEffect, useRef } from "react";
import ApplicationTitle from "./ApplicationTitle";

const App_tex = () => {
  const [isTitleVisible, setIsTitleVisible] = useState(false);
  const titleRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsTitleVisible(true);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    if (titleRef.current) observer.observe(titleRef.current);

    return () => {
      if (titleRef.current) observer.unobserve(titleRef.current);
    };
  }, []);

  const underlineStyle = {
    position: "absolute",
    bottom: "-5px",
    left: "0",
    width: "100%",
    height: "3px",
    backgroundColor: "currentColor",
    transform: "scaleX(0)",
    transformOrigin: "left",
    transition: "transform 1.5s ease-out",
  };

  return (
    <div>
      <ApplicationTitle myTitle={"Applications"} />
      <div className="justify-center border p-3 bg-gray-900 text-white">
        <div className="relative flex flex-col sm:flex-row items-center mb-6">
          <div className="w-full sm:w-1/3" />
          <div className="text-2xl font-bold underline py-2 my-5 sm:my-0 w-full sm:w-1/3 text-center">
            Img2LaTex Converter
          </div>
        </div>

        <a href="" target="_blank">
          <img
            src="/texapp.png"
            alt="Quantum Circuit Simulator Application"
            width={700}
            style={{ margin: "auto" }}
            className="translate scale-on-hover-app"
            shadow="true"
          />
        </a>
        <div className="flex-col items-center justify-center py-3 text-center">
          Reactを用いて作成．<br></br>
          画像を読み込み，画像内の数式をLaTexコードを生成するアプリケーション．<br />
          Gemini APIを用いて画像解析を行い，LaTexコードを生成します．<br />
          「数式について説明する」ボタンもあり，数式の簡単な解説を表示します．<br /><br />
          <span className="underline">※現在は，APIの利用上，ログイン認証を設けています．</span>
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
