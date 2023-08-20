import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [burgerState, setburgerState] = useState(false);

  const headerLinks = [
    { name: "home", tgt: "landing" },
    { name: "about me", tgt: "about-me" },
    { name: "abilities", tgt: "expertise" },
    { name: "work", tgt: "work" },
    { name: "contact", tgt: "contact-me" },
  ];

  const mapper = (
    val: {
      name: string;
      tgt: string;
    },
    ind: number
  ) => {
    return (
      <Link
        href={`#${val.tgt}`}
        key={ind}
        className="header-link"
        scroll={false}
      >
        <span className="header-link-span-1">0{ind}</span>
        <span className="header-link-span-2">{`// ${val.name}`}</span>
      </Link>
    );
  };

  const func = () => {
    setburgerState(false);
  };

  const clickHandler = () => {
    setburgerState(!burgerState);
    if (!burgerState) {
      document.addEventListener("scroll", func);
    }
    removeEventListener("scroll", func);
  };

  return (
    <header className="header-main">
      <div
        className={`background-fuzzy ${burgerState ? "active" : "inactive"}`}
      ></div>
      <Link href="/" className="header-my-name">
        AbhasChatterjee
        <strong>:</strong>
        <span>{`//`}</span>
      </Link>
      <div className="header-link-container">{headerLinks.map(mapper)}</div>
      <div className="header-burger-menu" onClick={clickHandler}>
        <div className={`burger ${burgerState ? "active" : "inactive"}`}>
          <div className="line _1">
            <div className="line-segment _1"></div>
            <div className="line-segment _2"></div>
          </div>
          <div className="line _2">
            <div className="line-segment _1"></div>
            <div className="line-segment _2"></div>
          </div>
          <div className="line _3">
            <div className="line-segment _1"></div>
            <div className="line-segment _2"></div>
          </div>
        </div>
        <div
          className={`header-burger-menu-links ${
            burgerState ? "active" : "inactive"
          }`}
        >
          {headerLinks.map(mapper)}
        </div>
      </div>
    </header>
  );
}
