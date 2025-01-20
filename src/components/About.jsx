import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import ApplicationTitle from "./ApplicationTitle";

const About = () => {
  const [isVisible, setIsVisible] = useState({
    title: false,
    content: false,
    image: false,
  });
  const [isExpanded, setIsExpanded] = useState(false);
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

  const handleToggle = () => {
    setIsExpanded((prev) => !prev);
  };

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
    <div className="flex-col w-full about-wrapper">
      <div className="about-container overflow-hidden">
        <div className="h-20"></div>
        <ApplicationTitle myTitle={"About"} />
        <div className="flex-about w-full">
          <div
            ref={contentRef}
            className={`about-text transition-all duration-1000 ease-out transform  ${
              isVisible.content
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-full"
            }`}
          >
            <p>
              <span className="about-my-name">Kota Mizuno / 水野 航太</span>
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
            </p>
            <p className="text-2xl">🎉論文投稿しました！</p>
            <div className="bg-gray-100 rounded-md flex flex-col justify-center items-center p-2 mb-5">
              <p>
                <a
                  href="https://arxiv.org/abs/2408.16062v2"
                  target="_blank"
                  className="underline text-blue-700 hover:text-blue-500 transition-color duration-500 text-center"
                >
                  Quantum Algorithm for Shortest Vector Problems with Folded
                  Spectrum Method
                </a>
              </p>
              <p className="text-black">
                Kota Mizuno, Shohei Watabe <br />
                arXiv:2408.16062[v2] [quant-ph]
              </p>
            </div>
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
              2024/6〜：株式会社CRISP エンジニアインターン <br></br>
              2024/8：理化学研究所×日本科学未来館主催「
              <a
                href="https://www.miraikan.jst.go.jp/events/202408033551.html"
                target="_blank"
                className="underline hover:text-blue-500 transition-color duration-500"
              >
                クイズとゲームでせまる！量子コンピュータ
              </a>
              」学生スタッフ <br />
              2024/8〜：量子ICT人材育成プログラムNQC 参加 <br />
              2024/9〜：株式会社スタディスト ソフトウェアエンジニアインターン{" "}
              <br />
              2024/10〜：株式会社Jij インターン{"  "}
              <a
                href="https://www.j-ij.com/ja/recruit/interview-mizuno"
                style={{
                  color: "#0077FF",
                  textDecoration: "underline",
                  transition: "color 0.3s",
                  ":hover": {
                    color: "#AAA5FF",
                  },
                }}
              >
                インタビュー記事はこちら
              </a>
              <br></br>
              <br></br>[ 実績 ] <br></br>
              2024/5：量子コンピューティング公開伴送型生配信授業「QC4U2」GroupWork
              全体5位 量子タイピングゲーム
              {/* <br /> &nbsp;&nbsp;&nbsp;
              <a
                href="https://app.qualcloud.net/"
                target="_blank"
                className="underline hover:text-blue-500 transition-color duration-500"
              >
                作品はこちら
              </a> */}
              <br></br>
              2024/5：量子アニーリングアイディアソン GroupWork 全体2位 <br></br>
              2024/6：Progateハッカソン powered by AWS 最優秀賞 <br></br>
              2024/10：量子アニーリング国際ネットワークINQA2024国際会議
              ポスター発表 <br></br>
              2024/10：Quantum Innovation2024 ポスターセッション発表
              <button onClick={handleToggle}>
                <div className="handle-toggle-button">!!!!</div>
              </button>
              <br></br>
              {isExpanded && (
                <div className="award-container">
                  <p>
                    このセッションで
                    <span className="award-name">
                      "Poster Presentation Award for Young Researcher"
                    </span>
                    を受賞しました！ 🎉 <br />
                    <div className="award-img-container">
                      <img
                        src="me_and_poster.jpg"
                        alt="award"
                        className="award-img"
                        // width={"100px"}
                      />
                    </div>
                    <a
                      href="https://www.shibaura-it.ac.jp/headline/award/20250117_7070_002.html"
                      target="_blank"
                    >
                      大学の広報記事
                    </a>
                  </p>
                </div>
              )}
              2024/10：第13回量子ソフトウェア研究発表会 口頭発表 <br></br>
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
            style={{ position: "relative", width: "300px", height: "400px" }}
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
