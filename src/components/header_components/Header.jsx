import HeaderTop from "./HeaderTop";
import Hero from "./Hero";
import { MdOutlineFileDownload } from "react-icons/md";
import Dev from "../images/Dev.pdf";

const Header = () => {
  const CV = Dev;

  return (
    <div className="header" id="header" name="header">
      <HeaderTop />
      <Hero />
      <div className="header-cv">
        <a href={CV} download>
          Download My CV
          <MdOutlineFileDownload />
        </a>
      </div>
    </div>
  );
};

export default Header;
