// components/Footer.jsx

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const scrollToElement = () => {
    const element = document.getElementById("projects-name-test"); // 要素のIDを指定して取得
    element.scrollIntoView({ behavior: "smooth", block: "start" }); // 要素までスクロール
  };
  return (
    <div>
      <hr />
      <div className="footer-container">
        <p>© {new Date().getFullYear()} Kota's Portfolio</p>
        <a
          href=""
          onClick={scrollToTop}
          className="border px-3 py-1 rounded-lg text-lg hover:bg-gray-600 transition duration-300"
        >
          TOP
        </a>
        <div className="social_icons">
          {/* twitter */}
          <a
            href="https://x.com/mel134983774?s=21&t=R42xS1Q9nVQVgQYX8-PIPQ"
            aria-label="Twitter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-twitter"></i>
          </a>
          {/* github */}
          <a
            href="https://github.com/kotta-27/"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-github"></i>
          </a>
          {/* instagram */}
          <a
            href="https://www.instagram.com/ko._.ta00?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            aria-label="Instagram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-instagram"></i>
          </a>

          <div id="projects-name-test"></div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
