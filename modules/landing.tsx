import Image from "next/image";
import { BsArrowDown } from "react-icons/bs";
import { PiMouseSimple } from "react-icons/pi";

export default function Landing() {
  return (
    <section className="landing-main" id="landing">
      <div className="img-container">
        <Image
          src="/assets/images/landing-back.webp"
          alt="main pic"
          priority
          fill
          sizes="100%"
        />
      </div>
      <h1 className="landing-name">ABHAS CHATTERJEE</h1>
      <p className="landing-intro">FRONT END DEVELOPER AND SOFTWARE ENGINEER</p>
      <div className="scroll-anim">
        <BsArrowDown className="arrow-down" />
        <PiMouseSimple className="mouse-down" />
      </div>
    </section>
  );
}
