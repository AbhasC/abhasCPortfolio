import { useMemo, useRef, useState } from "react";
import Image from "next/image";

const workLinks = [
  {
    link: "https://ashucrafts.vercel.app/",
    src: "/assets/images/work/ashu.png",
    title: "AshuCrafts",
    decr: "A Live project made on NextJS, and uses a CMS and Nodemailer",
    type: "webdev",
    status: "live",
  },
  {
    link: "https://abhas-chatterjee.vercel.app/",
    src: "/assets/images/work/mine.png",
    title: "My Portfolio",
    decr: "This one right here. You're on it right now. Made on NextJS",
    type: "webdev",
    status: "live",
  },
  {
    link: "https://quantumshift.vercel.app/",
    src: "/assets/images/work/qshift.png",
    title: "QuantumShift",
    decr: "A Live project made on NextJS and is under construction",
    type: "webdev",
    status: "live",
  },
  {
    link: "https://mr-coconetto.vercel.app/",
    src: "/assets/images/work/coco.png",
    title: "Mr. Coconetto",
    decr: "Worked as a collaborator in a team in this live project based on NextJS",
    type: "webdev",
    status: "live",
  },
  {
    link: "https://github.com/AbhasC/MovieSearchUsingAPICall",
    src: "/assets/images/work/movapi.png",
    title: "Movie search",
    decr: "An movie search agent using API calls to fetch movie details",
    type: "webdev",
    status: "no",
  },
  {
    link: "https://github.com/AbhasC/ExpenseTracker",
    src: "/assets/images/work/expt.png",
    title: "Expense Tracker",
    decr: "An expense tracker, made both in vanilla HTML-CSS-JS and ReactJS",
    type: "webdev",
    status: "no",
  },
  {
    link: "https://github.com/AbhasC/Disease_Classification_in_R",
    src: "/assets/images/work/dispred.png",
    title: "Disease Prediction using R",
    decr: "An AIML hackathon project made in collaboration with a friend",
    type: "aiml",
    status: "no",
  },
  {
    link: "https://github.com/BharathwajManoharan/ML_Hackathon23",
    src: "/assets/images/work/temppred.png",
    title: "Air pollution classification using python",
    decr: "An AIML hackathon project made in collaboration with two friends",
    type: "aiml",
    status: "no",
  },
  {
    link: "https://github.com/AbhasC/ABInBev_GCC/tree/main/Case_2",
    src: "/assets/images/work/linkauto.png",
    title: "Notification automation",
    decr: "An automation project using selenium and nodemailer in python",
    type: "auto",
    status: "no",
  },
  {
    link: "https://github.com/AbhasC/WebScraping-Top-Grossing_Movies",
    src: "/assets/images/work/movauto.png",
    title: "Movie earnings",
    decr: "A web scraper which extracts and ranks gross details of movies",
    type: "auto",
    status: "no",
  },
  {
    link: "https://github.com/AbhasC/ABInBev_GCC/tree/main/Case_1",
    src: "/assets/images/work/drinkpred.png",
    title: "Production visualization",
    decr: "A data visualization where final and actual targets are compared",
    type: "data",
    status: "no",
  },
  {
    link: "https://github.com/AbhasC/-Data-Visualization-GOOGL-NASDAQ-Dataset-in-R",
    src: "/assets/images/work/googdata.png",
    title: "Stock value visualization",
    decr: "A data visualization Google NASDAQ stock price increase over time",
    type: "data",
    status: "no",
  },
];

export default function Work() {
  const [currentValue, setCurrentValue] = useState("all");
  const renderedList = useMemo(() => {
    return workLinks.filter((elem) => {
      if (currentValue === "all") {
        return true;
      } else {
        return elem.type === currentValue;
      }
    });
  }, [currentValue]);

  const mapper = (
    elem: {
      link: string;
      src: string;
      title: string;
      decr: string;
      type: string;
      status: string;
    },
    index: number
  ) => {
    return (
      <a
        className="work-container"
        key={index}
        href={elem.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="img-container">
          <Image src={elem.src} alt={elem.title} fill sizes="100%" />
        </div>
        <h3 className="work-title">{elem.title}</h3>
        <p className="work-description">{elem.decr}</p>
      </a>
    );
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onChangeHandler = (e: any) => {
    const value = e.target.value;
    setCurrentValue(value);
  };

  return (
    <section className="work-main">
      <div className="work-header">
        <div className="header-text">
          <h2 className="header-text-heading">My Works</h2>
          <p className="header-text-subheading">
            Below are the projects I&apos;ve done, both deployed production
            works and personal assignments, the bounds of which range from
            front-end development to automation.
          </p>
        </div>
        <div className="work-anim-container"></div>
      </div>
      <div className="works-wrapper">
        <div className="works-filter">
          <span className="filter-span">Filter By</span>
          <TempRadio
            value="all"
            text="all"
            defaultChecked
            onChangeHandler={onChangeHandler}
          />
          <TempRadio
            value="webdev"
            text="web dev"
            onChangeHandler={onChangeHandler}
          />
          <TempRadio
            value="aiml"
            text="Ai-ML"
            onChangeHandler={onChangeHandler}
          />
          <TempRadio
            text="Automation"
            value="auto"
            onChangeHandler={onChangeHandler}
          />
          <TempRadio
            text="Data Science"
            value="data"
            onChangeHandler={onChangeHandler}
            lastOne
          />
        </div>
        <div className="works-container">{renderedList.map(mapper)}</div>
      </div>
    </section>
  );
}

const TempRadio = ({
  value,
  text = "",
  defaultChecked = false,
  onChangeHandler = () => void 0,
  lastOne = false,
}: {
  value: string;
  text: string;
  defaultChecked?: boolean;
  onChangeHandler?: (e?: React.ChangeEvent<HTMLInputElement>) => void;
  lastOne?: boolean;
}) => {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <>
      <div>
        <input
          type="radio"
          className="selbut"
          id={value}
          name="but"
          defaultChecked={defaultChecked}
          value={value}
          ref={ref}
          onChange={onChangeHandler}
        />
        <label htmlFor={value}>{text}</label>
      </div>
      {lastOne ? null : <span>|</span>}
    </>
  );
};
