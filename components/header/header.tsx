import Image from "next/image";
import Link from "next/link";
import { BsLinkedin, BsGithub, BsTwitter } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";
import { IconContext } from "react-icons";
const iconStyles = { padding: "0 5px", fontSize: "24px", cursor: "pointer" };
export const Header = () => {
  return (
    <div className="header">
      <Image alt="Kai" src="/Kai.png" width="140" height="140" />
      <br />
      <IconContext.Provider value={{ size: "1.5em" }}>
        <div className="social-icons">
          <Link href="https://github.com/KaiDevrim" passHref>
            <BsGithub style={iconStyles} className="social-icon" />
          </Link>
          <Link href="https://twitter.com/DevrimKai" passHref>
            <BsTwitter style={iconStyles} className="social-icon" />
          </Link>
          <Link href="https://www.linkedin.com/in/kai-mccormick/" passHref>
            <BsLinkedin style={iconStyles} className="social-icon" />
          </Link>
          <Link href="mailto:kai@devrim.tech" passHref>
            <IoMdMail style={iconStyles} className="social-icon" />
          </Link>
        </div>
      </IconContext.Provider>
      <h2> Hello! My name is </h2>
      <h1> Kai Devrim McCormick </h1>
      <p> Student • King of the Pirates • He/Him </p>
    </div>
  );
};

export default Header;
