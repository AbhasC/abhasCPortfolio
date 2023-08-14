import Link from "next/link";

export default function Header() {
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
      <Link href={`#${val.tgt}`} key={ind} className="header-link">
        <span className="header-link-span-1">0{ind}</span>
        <span className="header-link-span-2">{`// ${val.name}`}</span>
      </Link>
    );
  };

  return (
    <header className="header-main">
      <Link href="/" className="header-my-name">
        AbhasChatterjee<span>.</span>
        <strong>_</strong>
        <span>{`//`}</span>
      </Link>
      <div className="header-link-container">{headerLinks.map(mapper)}</div>
    </header>
  );
}
