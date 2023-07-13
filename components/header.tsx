import Link from "next/link";
import { IconType } from "react-icons";
import {
  BsMedium,
  BsGithub,
  BsLinkedin,
  BsStackOverflow,
} from "react-icons/bs";
import { MdEmail } from "react-icons/md";

export default function Header() {
  const headerIcons = [
    MdEmail,
    BsGithub,
    BsLinkedin,
    BsStackOverflow,
    BsMedium,
  ];

  const mapper = (Val: IconType, ind: number) => {
    return (
      <Link href="/" className="header-icon-link">
        <Val key={ind} className="header-icon" />
      </Link>
    );
  };

  return (
    <header className="header-main">
      <div className="header-icon-container">{headerIcons.map(mapper)}</div>
      <div className="header-link-container">
        <Link href="/#projects" className="to-projects">
          Projects
        </Link>
        <Link href="/#contactMe" className="to-contact">
          Contact Me
        </Link>
      </div>
    </header>
  );
}
