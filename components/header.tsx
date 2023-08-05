import Link from "next/link";

export default function Header() {
  const headerLinks = ["home", "about me", "abilities", "work", "contact"];

  const mapper = (val: string, ind: number) => {
    return (
      <Link href="/" key={ind} className="header-link">
        <span className="header-link-span-1">0{ind}</span>
        <span className="header-link-span-2">{`// ${val}`}</span>
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
