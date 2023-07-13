import Image from "next/image";

export default function Projects() {
  const projectDeets = [
    {
      name: "React Space",
      decr: "Handy tool belt you create amazing\
        AR components in a React app, with redux integration via\
        middleware.",
      src: "/assets/images/photo1.jpg",
    },
    {
      name: "React Infinite Scroll",
      decr: "A scrollable bottom sheet with virtualization\
        support, native animations at 60fps and fully implemented in JS land.",
      src: "/assets/images/photo2.jpg",
    },
    {
      name: "Photo Gallery",
      decr: "A one stop shop for photographers to share\
        and monetize their photos, allowing them to have a second\
        source of income.",
      src: "/assets/images/photo3.jpg",
    },
    {
      name: "Event planner",
      decr: "A mobile application for leisure seekers to discover\
        unique events and activities in their city with a few taps.",
      src: "/assets/images/photo4.jpg",
    },
  ];

  const mapper = (
    val: {
      name: string;
      decr: string;
      src: string;
    },
    ind: number
  ) => {
    return (
      <div className="project-container" key={ind}>
        <div className="img-container">
          <Image src={val.src} alt="main pic" fill sizes="100%" />
        </div>
        <span className="proj-name">{val.name}</span>
        <p className="proj-decr">{val.decr}</p>
        <span className="proj-more">{`See More ->`}</span>
      </div>
    );
  };

  return (
    <section className="projects-main" id="projects">
      <h2 className="projects-name">Featured Projects</h2>
      <div className="projects-container">{projectDeets.map(mapper)}</div>
    </section>
  );
}
