// components/data.js

export const projectData = [
  {
    id: 1,
    title: "Todo List App",
    image: "todoapp2.png",
    langs: ["react"],
    description:
      "シンプルなTO-DOアプリで，next.jsを用いて作成．jsonのサーバはローカル上で動作するライブラリであるjson-serverを用いて，モダンCSSフレームワークであるtailwindも使用．",
    gitHubLink: "https://github.com/olawanlejoel/Todo-List-App",
  },
  {
    id: 2,
    title: "Shift Management App",
    image: "shiftapp.png",
    langs: ["python", "js"],
    description:
      "高度情報演習1Bの授業の開発として作成．PythonのWebアプリケーションフレームワークであるdjangoを用いてシフト管理アプリを作成．カレンダーはJavaScriptで制御し，従業員同士のチャット機能も実装．",
    gitHubLink: "https://github.com/olawanlejoel/Book-Library",
  },
  {
    id: 3,
    title: "Quantum Circuit Simulator",
    image: "tkapp.png",
    langs: ["python"],

    description:
      "PythonのGUIライブラリであるTkinterを用いて作成．内部では自前で実装したテンソル計算によって量子状態の計算を実施し，その確率分布を表示．加算器，ベル状態の雛形も用意．OCで披露．",
    gitHubLink: "https://github.com/olawanlejoel/random-quote-generator",
  },
  {
    id: 4,
    title: "Assignment Management App",
    image: "assapp.png",
    langs: ["java"],

    description:
      "高度情報演習2Cの開発として作成．JavaのGUIフレームワークであるJavaFXを用いて作成し，JDBCを用いてPostgresデータベースと接続．時刻によるリマインダも実装．",
    gitHubLink: "https://github.com/olawanlejoel/Password-Generator",
  },
  {
    id: 5,
    title: "Block-Devided Pointing App",
    image: "pointapp.png",
    langs: ["unity"],

    description:
      "高度情報演習2Cの開発として作成．Unity(C#)による作成．ブロック分割によるポインティングアプリで，従来法と統計的に比較を行った．投票で最多票を獲得．",
    gitHubLink: "https://github.com/olawanlejoel/TwitterUI-clone",
  },
  {
    id: 6,
    title: "Bingo App",
    image: "bingoapp.png",
    langs: ["react"],

    description:
      "文化祭のシミュレートの一環で作成．5x5のビンゴカードを用いた時，統計的に平均何回でビンゴになるかを検証するために作成．C言語による実装．",
    gitHubLink: "https://github.com/olawanlejoel/TwitterUI-clone",
  },
];
