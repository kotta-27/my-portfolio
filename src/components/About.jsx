import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import ApplicationTitle from "./ApplicationTitle";

const About = () => {
  const [isVisible, setIsVisible] = useState({
    content: false,
    image: false,
  });
  const [isExpanded, setIsExpanded] = useState(false);
  const contentRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target === contentRef.current) {
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

    if (contentRef.current) observer.observe(contentRef.current);
    if (imageRef.current) observer.observe(imageRef.current);

    return () => {
      if (contentRef.current) observer.unobserve(contentRef.current);
      if (imageRef.current) observer.unobserve(imageRef.current);
    };
  }, []);

  const handleToggle = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <div className="py-12">
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <ApplicationTitle myTitle={"About"} />
        {/* div1 */}
        <div className="flex flex-col mb-12 items-center justify-center">
          <div className="flex flex-col md:flex-row w-full sm:w-2/3">
            <div
              ref={contentRef}
              className={`md:w-2/3 transform transition-all duration-1000 ease-out ${isVisible.content
                ? "translate-x-0 opacity-100"
                : "translate-x-full opacity-0"
                }`}
            >
              <p className="mb-4">
                <span className="text-xl font-bold">Kota Mizuno / 水野 航太</span>
              </p>
              <p className="mb-4">
                芝浦工業大学大学院 理工学研究科 電気・電子情報工学専攻 M1
                <br />
                学部では情報工学を学び，4年次に
                <a
                  href="http://watabegroup.quie.ise.shibaura-it.ac.jp/"
                  target="_blank"
                  className="text-blue-500 transition-colors duration-300 hover:text-blue-200 underline"
                >
                  量子情報工学研究室
                </a>
                に配属．
              </p>
              <p className="mb-4">
                出身：東京
              </p>
              <p className="mb-4">
                趣味：レゴ，ゲーム，カラオケ，スノボ，ボウリング，ダーツ
              </p>

            </div>
            <div
              ref={imageRef}
              className={`md:w-1/3 transition-all duration-1000 ease-out transform ${isVisible.image
                ? "opacity-100 translate-x-0"
                : "-translate-x-full opacity-0"
                }`}
            >
              <div className="relative h-80 w-100">
                <Image
                  src="/mepic.jpg"
                  alt="sample"
                  className="rounded shadow-xl"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </div>
        {/* div2 */}
        <div className="flex w-full justify-center">
          <p className="mb-4 w-full sm:w-2/3">
            <p className="mb-4 text-2xl font-bold">🎉 論文投稿しました！</p>
            <div className="mb-5 rounded-md bg-gray-100 p-4">
              <p className="mb-2">
                <a
                  href="https://arxiv.org/abs/2408.16062v2"
                  target="_blank"
                  className="block text-center text-blue-700 transition-colors duration-300 hover:text-blue-500 underline"
                >
                  Quantum Algorithm for Shortest Vector Problems with Folded
                  Spectrum Method
                </a>
              </p>
              <p className="text-center text-gray-800">
                Kota Mizuno, Shohei Watabe <br />
                arXiv:2408.16062[v2] [quant-ph]
              </p>
            </div>
            <div className="w-full">
              <span className="font-bold text-lg">経歴</span><br></br>
              <p className="ml-5">
                {/* 2023/02：統計検定2級合格<br></br> */}
                2023/08：理化学研究所主催「
                <a
                  href="https://www.riken.jp/pr/events/events/20230811_1/index.html"
                  target="_blank"
                  className="underline text-blue-500 hover:text-blue-200 transition-color duration-300"
                >
                  量子コンピュータってなんだろう？
                </a>
                」学生スタッフ
                <br></br>
                2023/09〜：株式会社QunaSys 量子×情報インターン<br></br>
                2024/02〜：量子コンピューティング公開伴送型生配信授業QC4U2 参加{" "}
                <br></br>
                2024/06〜：株式会社CRISP エンジニアインターン <br></br>
                2024/08：理化学研究所×日本科学未来館主催「
                <a
                  href="https://www.miraikan.jst.go.jp/events/202408033551.html"
                  target="_blank"
                  className="underline text-blue-500 hover:text-blue-200 transition-color duration-300"
                >
                  クイズとゲームでせまる！量子コンピュータ
                </a>
                」学生スタッフ <br />
                2024/08〜：量子ICT人材育成プログラムNQC 参加 <br />
                2024/09〜：株式会社スタディスト ソフトウェアエンジニアインターン{" "} <br />
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;-&nbsp; &nbsp;
                <a
                  href="https://www.j-ij.com/ja/recruit/interview-mizuno"
                  className="text-blue-500 underline hover:text-blue-200 transition-colors duration-300"
                >
                  インタビュー記事はこちら
                </a> <br />
                2024/10〜：株式会社Jij リサーチエンジニアインターン{"  "} <br />
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;-&nbsp; &nbsp;
                <a
                  href="https://www.j-ij.com/ja/recruit/interview-mizuno"
                  className="text-blue-500 underline hover:text-blue-200 transition-colors duration-300"
                >
                  インタビュー記事はこちら
                </a>
                <br></br>
              </p>
            </div>
            <br></br>
            <div className="w-full">
              <span className="font-bold text-lg">実績 </span><br></br>
              <p className="ml-5">
                2024/05：量子コンピューティング公開伴送型生配信授業「QC4U2」グループワーク
                全体5位 量子タイピングゲーム
                <br></br>
                2024/05：量子アニーリングアイディアソン グループワーク 全体2位 <br></br>
                2024/06：Progateハッカソン powered by AWS 最優秀賞 <br></br>
                2024/10：量子アニーリング国際ネットワークINQA2024国際会議
                ポスター発表 <br></br>
                2024/10：Quantum Innovation2024 ポスターセッション発表
                <button onClick={handleToggle}>
                  <div className="handle-toggle-button">!!!!</div>
                </button>
                <br></br>
                {isExpanded && (
                  <div className="mt-4 bg-gray-100 px-20 py-5 rounded-lg">
                    <p className="w-full text-black">
                      このセッションで
                      <span className="font-bold">
                        "Poster Presentation Award for Young Researcher"
                      </span>
                      を受賞しました！ 🎉 <br />
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center mt-2">
                      <div className="w-full sm:w-1/2 flex justify-center">
                        <img
                          src="/me_and_poster.jpg"
                          alt="award"
                          className="rounded-lg shadow-md w-1/2 sm:w-full"
                        />
                      </div>
                      <div className="w-80 aspect-auto sm:ml-10 mt-3">
                        <img
                          src="/qi_award_table.png"
                          alt="award_table"
                          className="rounded-lg shadow-md "
                        />
                      </div>
                    </div>
                  </div>
                )}
                2024/10：第13回量子ソフトウェア研究発表会 口頭発表 <br></br>
              </p>
            </div>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
