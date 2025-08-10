import logo from "../assets/GM2.png";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { CgMail } from "react-icons/cg";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img src={logo} alt="MyLogo" className="mx-2 w-10 h-10" />
      </div>
     
      <div className="m-8 flex items-center justify-center gap-4 text-3xl">
        <a className="hidden md:block" href="https://www.linkedin.com/in/gaurav-mahto-495458218/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/Gauravmahto187" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a className="hidden md:block" href="https://www.instagram.com/gaurav_mahto269//" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="mailto:gauravmahto269@gmail.com" target="_blank" rel="noopener noreferrer">
          <CgMail />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;