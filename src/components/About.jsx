// components/About.jsx

import Image from "next/image";

const About = () => {
  return (
    <div className="flex-col w-full">
      <hr className="w-full " />
      <div className="about-container">
        <h2 id="about-name" >
          <span className="text-blue-700 ">A</span>bout Me
        </h2>
        <div className="flex-about">
          <div className="about-text">
            <p>
              芝浦工業大学大学院 理工学研究科 電気・電子情報工学専攻．<br />
              学部では情報工学・コンピュータサイエンスを学び，4年次に
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
              卒業研究："虚時間発展を用いた励起状態探索の最短ベクトル問題への応用"
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
              [ 経歴 ]  <br></br>
              {/* 2022．8：SEGA．1dayプログラマ体験インターン参加 <br></br>
              2022．10：CRESCO．ドローンプログラミングインターン参加 <br></br> */}
              2023．2：統計検定2級合格<br></br>
              2023．8：理化学研究所主催「量子コンピュータってなんだろう？」学生スタッフ
              <br></br>
              2023．9〜 ：量子ベンチャー「QunaSys」量子x情報インターン<br></br>
              2024．2〜：量子コンピューティング公開伴送型生配信授業「QC4U2」参加 <br></br> <br></br>
              [ 実績 ]  <br></br>
              2024．5：量子コンピューティング公開伴送型生配信授業「QC4U2」GroupWork 全体5位 量子タイピングゲーム
              <br /> &nbsp;&nbsp;&nbsp;
              <a href="https://app.qualcloud.net/"
                 target="_blank"
                 className="underline hover:text-blue-500 transition-color duration-500">作品はこちら</a>
              <br></br>
              2024．5：量子アニーリングアイディアソン GroupWork 全体2位  <br></br>
            </p>
            <p>趣味：スマブラ，スノボ🏂，ボウリング🎳</p>
          </div>
          <div
            className="about-img"
            style={{ position: "relative", width: "350px", height: "450px" }}
          >
            <Image
              src="/photo2.jpg"
              alt="sample"
              className="profile-img"
              //   layout="responsive"
              width={500}
              height={100}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
