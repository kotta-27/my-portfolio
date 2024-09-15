import React, { useState, useEffect, useRef } from "react";

const Application4 = () => {
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
      <div className="about-container overflow-hidden">
        <div
          ref={titleRef}
          className={`relative inline-block font-weight-600 transition-all duration-1000 ease-out transform ${
            isTitleVisible
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-full"
          }`}
          id="application-name"
        >
          <h2 className="text-4xl mb-2" style={{ position: "relative" }}>
            <span className="text-green-700 inline-block transition-all duration-300 transform hover:scale-110">
              A
            </span>
            <span className="inline-block transition-all duration-300 transform hover:scale-110">
              p
            </span>
            <span className="inline-block transition-all duration-300 transform hover:scale-110">
              p
            </span>
            <span className="inline-block transition-all duration-300 transform hover:scale-110">
              l
            </span>
            <span className="inline-block transition-all duration-300 transform hover:scale-110">
              i
            </span>
            <span className="inline-block transition-all duration-300 transform hover:scale-110">
              c
            </span>
            <span className="inline-block transition-all duration-300 transform hover:scale-110">
              a
            </span>
            <span className="inline-block transition-all duration-300 transform hover:scale-110">
              t
            </span>
            <span className="inline-block transition-all duration-300 transform hover:scale-110">
              i
            </span>
            <span className="inline-block transition-all duration-300 transform hover:scale-110">
              o
            </span>
            <span className="inline-block transition-all duration-300 transform hover:scale-110">
              n
            </span>
            <span
              style={{
                ...underlineStyle,
                transform: isTitleVisible ? "scaleX(1)" : "scaleX(0)",
              }}
            />
          </h2>
        </div>
      </div>
      <div className="justify-center border p-3 bg-gray-900 text-white">
        <div className="relative flex flex-col sm:flex-row items-center mb-6">
          <div className="w-full sm:w-1/3" />
          <div className="text-2xl font-bold underline py-2 my-5 sm:my-0 w-full sm:w-1/3 text-center">
            Quantum Pizza
          </div>
          <div className="w-full sm:w-1/3 flex justify-end">
            <div
              className="px-4 py-3 rounded-lg font-bold text-sm text-center duration-300 ease-in-out shadow-lg mt-4 sm:mt-0"
              style={{
                marginRight: "1rem",
                background: "linear-gradient(135deg, #00A8FF, #AAA5FF)",
                color: "#000",
                textShadow: "1px 1px 2px rgba(0,0,0,0.1)",
                boxShadow:
                  "0 4px 6px rgba(0,0,0,0.1), 0 1px 3px rgba(0,0,0,0.08)",
              }}
            >
              理研×未来館イベント
              <br />
              展示作品
            </div>
          </div>
        </div>

        <a href="https://qpizza-game.vercel.app/" target="_blank">
          <img
            src="/qpizzaapp.png"
            alt="Quantum Circuit Simulator Application"
            width={700}
            style={{ margin: "auto" }}
            className="translate scale-on-hover-app"
            shadow="true"
          />
        </a>
        <div className="flex items-center justify-center py-3 text-center">
          Reactを用いて作成．<br></br>
          適切な量子ゲートを作用させて，お題に合うピザをつくるゲームです．
          <br />
          丁寧な解説をつけており，量子情報を学ぶ第一歩になれば幸いです．
          <br />
          理研×未来館イベント「クイズとゲームで迫る！量子コンピュータ」の展示作品として作成しました．
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

export default Application4;
