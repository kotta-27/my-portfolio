import React, { useState, useEffect, useRef } from "react";

const Application3 = () => {
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
      <div className="about-container overflow-hidden "></div>
      <div className="justify-center border p-3 bg-gray-900 text-white">
        <div className="relative flex flex-col md:flex-row justify-center items-center mb-6">
          <div className="text-2xl font-bold underline py-2 my-5">
            掲示板ジェネレータ
          </div>
          <div
            className="md:absolute md:right-0 md:mr-20 px-4 py-3 rounded-lg font-bold text-sm text-center duration-300 ease-in-out shadow-lg mt-4 md:mt-0"
            style={{
              background: "linear-gradient(135deg, #FFD700, #FFA500)",
              color: "#000",
              textShadow: "1px 1px 2px rgba(0,0,0,0.1)",
              boxShadow:
                "0 4px 6px rgba(0,0,0,0.1), 0 1px 3px rgba(0,0,0,0.08)",
            }}
          >
            Progate×AWS
            <br />
            ハッカソン最優秀賞作品
          </div>
        </div>

        <a href="" target="_blank">
          <img
            src="/nanjapp.png"
            alt="Quantum Circuit Simulator Application"
            width={700}
            style={{ margin: "auto" }}
            className="translate scale-on-hover-app"
            shadow="true"
          />
        </a>
        <div className="flex items-center justify-center py-3 text-center">
          フロントエンド：React，バックエンド：Python<br></br>
          ユーザ入力からキーワードを受け取り，それにあった内容のスレッドを自動生成します．
          <br />
          生成モデルにはClaude 3 HaikuとStable
          Diffusionを用い，その制御にはAmazon Bedrockを用いました．
        </div>
        <div className="flex justify-end">
          {" "}
          {/* Added container div with flex and justify-end */}
          <a
            href="https://github.com/kotta-27/202406hackathon_frontend"
            target="_blank"
          >
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

export default Application3;
