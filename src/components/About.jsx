import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

const About = () => {
  const [isVisible, setIsVisible] = useState({
    title: false,
    content: false,
    image: false,
  });
  const titleRef = useRef(null);
  const contentRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target === titleRef.current) {
            setIsVisible((prev) => ({ ...prev, title: true }));
          } else if (entry.target === contentRef.current) {
            setIsVisible((prev) => ({ ...prev, content: true }));
          } else if (entry.target === imageRef.current) {
            setIsVisible((prev) => ({ ...prev, image: true }));
          }
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    if (titleRef.current) observer.observe(titleRef.current);
    if (contentRef.current) observer.observe(contentRef.current);
    if (imageRef.current) observer.observe(imageRef.current);

    return () => {
      if (titleRef.current) observer.unobserve(titleRef.current);
      if (contentRef.current) observer.unobserve(contentRef.current);
      if (imageRef.current) observer.unobserve(imageRef.current);
    };
  }, []);

  const underlineStyle = {
    position: "absolute",
    bottom: "-5px",
    left: "0",
    width: "100%",
    height: "3px",
    backgroundColor: "currentColor", // Tailwind's blue-700
    transform: "scaleX(0)",
    transformOrigin: "left",
    transition: "transform 1.5s ease-out",
  };

  return (
    <div className="flex-col w-full">
      <hr className="w-full" />
      <div className="about-container overflow-hidden">
        <div
          ref={titleRef}
          className={`relative inline-block transition-all duration-1000 ease-out transform ${
            isVisible.title
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-full"
          }`}
        >
          <h2
            id="about-name"
            className="text-4xl mb-2"
            style={{ position: "relative" }}
          >
            <span className="text-blue-700 inline-block transition-all duration-300 transform hover:scale-110">
              A
            </span>
            <span className="inline-block transition-all duration-300 transform hover:scale-110">
              b
            </span>
            <span className="inline-block transition-all duration-300 transform hover:scale-110">
              o
            </span>
            <span className="inline-block transition-all duration-300 transform hover:scale-110">
              u
            </span>
            <span className="inline-block transition-all duration-300 transform hover:scale-110">
              t
            </span>
            <span className="inline-block transition-all duration-300 transform hover:scale-110">
              {" "}
            </span>
            <span className="inline-block transition-all duration-300 transform hover:scale-110">
              M
            </span>
            <span className="inline-block transition-all duration-300 transform hover:scale-110">
              e
            </span>
            <span
              style={{
                ...underlineStyle,
                transform: isVisible.title ? "scaleX(1)" : "scaleX(0)",
              }}
            />
          </h2>
        </div>
        <div className="flex-about">
          <div
            ref={contentRef}
            className={`about-text transition-all duration-1000 ease-out transform ${
              isVisible.content
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-full"
            }`}
          >
            {/* Content remains unchanged */}
            <p>
              <span className="text-3xl about-my-name">
                水野 航太 (Mizuno Kota)
              </span>
            </p>
            <p>
              芝浦工業大学大学院 理工学研究科 電気・電子情報工学専攻 M1
              <br />
              学部では情報工学を学び，4年次に
              <a
                href="http://watabegroup.quie.ise.shibaura-it.ac.jp/"
                target="_blank"
                className="underline hover:text-blue-500 transition-color duration-500"
              >
                量子情報工学研究室
              </a>
              に配属．
            </p>
            <p>
              卒業研究："虚時間発展を用いた励起状態探索の最短ベクトル問題への応用"{" "}
              <br />
              研究テーマ：量子コンピューティング，量子アルゴリズム，虚時間発展法，格子暗号，Floquet
              Engineering
              <a href="" target="_blank">
                <span
                  className="focus:text-blue-200 underline hover:text-blue-500 
                transition-color duration-500"
                >
                  {" "}
                  {/* ダウンロード */}
                </span>
              </a>
            </p>
            <p>
              [ 経歴 ] <br></br>
              2023/2：統計検定2級合格<br></br>
              2023/8：理化学研究所主催「
              <a
                href="https://www.riken.jp/pr/events/events/20230811_1/index.html"
                target="_blank"
                className="underline hover:text-blue-500 transition-color duration-500"
              >
                量子コンピュータってなんだろう？
              </a>
              」学生スタッフ
              <br></br>
              2023/9〜 ：株式会社QunaSys 量子x情報インターン<br></br>
              2024/2〜：量子コンピューティング公開伴送型生配信授業QC4U2 参加{" "}
              <br></br>
              2024/6〜：株式会社CRISP エンジニアインターン
              <br></br> <br></br>[ 実績 ] <br></br>
              2024/5：量子コンピューティング公開伴送型生配信授業「QC4U2」GroupWork
              全体5位 量子タイピングゲーム
              <br /> &nbsp;&nbsp;&nbsp;
              <a
                href="https://app.qualcloud.net/"
                target="_blank"
                className="underline hover:text-blue-500 transition-color duration-500"
              >
                作品はこちら
              </a>
              <br></br>
              2024/5：量子アニーリングアイディアソン GroupWork 全体2位 <br></br>
              2024/6：Progateハッカソン powered by AWS 最優秀賞
            </p>
            <p>趣味：スマブラ，スノボ🏂，ボウリング🎳，数学</p>
          </div>
          <div
            ref={imageRef}
            className={`about-img transition-all duration-1000 ease-out transform ${
              isVisible.image
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-full"
            }`}
            style={{ position: "relative", width: "400px", height: "450px" }}
          >
            <Image
              src="/mepic.jpg"
              alt="sample"
              className="profile-img"
              width={1000}
              height={1000}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
