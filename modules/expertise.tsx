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
      ReactJS and NextJS frameworks.",
    },
    {
      logo: HiOutlineComputerDesktop,
      name: "Software Development",
      decr: "Experienced in both functional and OOP: C, C++, Python, JavaScript, TypeScript.",
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
          <span className="exp-name" style={{}}>
            {val.name}
          </span>
        </div>
        <span>{`<h3>`}</span>
        <p className="exp-decr">{val.decr}</p>
        <span>{`</h3>`}</span>
      </div>
    );
  };

  return (
    <section className="expertise-main" id="expertises">
      <h2 className="expertise-name">{`Areas I've dabbled in`}</h2>
      <div className="expertise-container">{expertiseDeets.map(mapper)}</div>
    </section>
  );
}
