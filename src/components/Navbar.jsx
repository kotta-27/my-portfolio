import Link from "next/link";
import Footer from "./Footer";

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="logo">
        <Link href="/">Kochin's Portfolio</Link>
      </div>
      <a
        href=""
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Resume
      </a>
    </div>
  );
};

export default Navbar;
