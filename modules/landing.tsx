import Image from "next/image";

export default function Landing() {
  return (
    <section className="landing-main">
      <div className="img-container">
        <Image
          src="/assets/images/AbhasC.webp"
          alt="main pic"
          fill
          sizes="100%"
        />
      </div>
      <h1 className="landing-name">Hello, I am Abhas</h1>
      <p className="landing-intro">
        A frontend developer specialized in React and Next
      </p>
    </section>
  );
}
