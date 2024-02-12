// components/Footer.jsx

const Footer = () => {
  return (
    <div>
      <hr />
      <div className="footer-container">
        <p>© {new Date().getFullYear()} Kota's Portfolio</p>
        <div className="social_icons">
          {/* twitter */}
          <a
            href="https://x.com/plou__m?s=20"
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
        </div>
      </div>
    </div>
  );
};

export default Footer;
