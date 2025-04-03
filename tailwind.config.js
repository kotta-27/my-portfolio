/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      scale: {
        '102': '1.02',
      },
    },
    fontFamily: {
      body: [
        "Hiragino Sans",
        "Meiryo",
        "sans-serif",
        'Hiragino Sans',
        'ヒラギノ角ゴシック',
        'メイリオ',
        'Meiryo',
        'MS Ｐゴシック',
        'MS PGothic',
        'sans-serif',
        'YuGothic',
        'Yu Gothic',
      ],
      myName: [
        'Yu Gothic',
        'sans-serif',
      ]
    },
  },
  plugins: [],
};
