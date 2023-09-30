import { IconType } from "react-icons";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandPython } from "react-icons/tb";

export default function Expertise() {
  const expertiseDeets = [
    {
      logo: RiReactjsLine,
      name: "Frontend Dev, ReactJS, NextJS",
      decr: "Passionate about UI/UX. Have done freelance\
      projects based on HTML, CSS, JS/TS,\
      ReactJS library and NextJS framework.",
    },
    {
      logo: HiOutlineComputerDesktop,
      name: "Software Development",
      decr: "Experienced in both functional and OOP: C, C++, Python, JavaScript and TypeScript.",
    },
    {
      logo: TbBrandPython,
      name: "AI, ML, Process Automation",
      decr: "Have extensively used python and R, and their diverse\
      library portfolios for various hackathon projects and case studies.",
    },
  ];

  const mapper = (
    val: {
      logo: IconType;
      name: string;
      decr: string;
    },
    ind: number
  ) => {
    return (
      <div className="exp-container" key={ind}>
        <div className="exp-head">
          <val.logo />
          <span className="exp-name">{val.name}</span>
        </div>
        <span>{`<h3>`}</span>
        <p className="exp-decr">{val.decr}</p>
        <span>{`</h3>`}</span>
      </div>
    );
  };

  return (
    <section className="expertise-main" id="expertise">
      <h2 className="expertise-name">{`Areas I've dabbled in`}</h2>
      <div className="expertise-container">
        {expertiseDeets.map(mapper)}
        <p className="titanic">
          Fun fact: The RMS Titanic came to rest 3800 metres below MSL after
          sinking more than 111 years ago.
        </p>
      </div>
    </section>
  );
}
