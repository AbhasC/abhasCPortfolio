import { AiOutlineLinkedin, AiOutlineGithub } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

export default function Footer() {
  return (
    <footer className="footer-main">
      <div className="link-section-left">
        <div className="link-left -1">
          <a
            href="https://github.com/AbhasC"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiOutlineGithub />
          </a>
        </div>
        <div className="link-left -2">
          <a
            href="https://www.linkedin.com/in/abhas-chatterjee-330b1a1a4"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiOutlineLinkedin />
          </a>
        </div>
      </div>
      <span className="footer-text">
        Abhas Chatterjee . © 2023 &nbsp; | | &nbsp; Design elements inspired by
        Gobind Singh
      </span>
      <div className="link-section-right">
        <div className="link-right -1">
          <a
            href="mailto:theabhaschatterjee@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <HiOutlineMail />
          </a>
        </div>
        <div className="link-right -2">
          <a
            href="https://wa.me/916354981673"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </footer>
  );
}
