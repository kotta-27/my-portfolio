export default function handler(req, res) {
  // ローディング状態をシミュレートするための遅延
  const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

  const generateLoadingState = async () => {
    await delay(1000); // 1秒の遅延

    return {
      status: "loading",
      progress: Math.floor(Math.random() * 100),
      message: "システムを準備中..."
    };
  };

  return generateLoadingState()
    .then(data => {
      res.status(200).json(data);
    })
    .catch(error => {
      res.status(500).json({ error: "ローディング処理中にエラーが発生しました" });
    });
} 