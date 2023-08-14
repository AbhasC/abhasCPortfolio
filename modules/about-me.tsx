import Image from "next/image";

export default function AboutMe() {
  return (
    <section className="about-me-main" id="about-me">
      <h2 className="about-me-head">A little about me</h2>
      <div className="about-me-text">
        <div className="about-me-para">
          <p>Greetings, passer-by.</p>
          <p>
            I am Abhas Chatterjee, and I am a web developer, software engineer,
            and an Artificial intelligence, Machine learning and Automation
            enthusiast.
          </p>
          <p>
            In the digital realm, I conjure captivating websites and intricate
            software, interweave the magic of artificial intelligence and
            machine learning, and luxuriate in the mersmerizing chronological
            cadence of process automation.
          </p>
          <p>
            Beyond the code, I&apos;m a fanfiction wordsmith, crafting tales
            that transcend reality. With a few strokes of my keyboard, I create
            alternate realities, where characters embark on intrepid odysseys
            and conflicts ignite like shooting stars.
          </p>
          <p>
            As a perpetual student, I embrace the ever-changing multiverse of
            knowledge while continuously exploring the frontiers of
            consciousness, because it is in this synthesis wherein lies the
            magic of discovery, the allure of the unknown, and the promise of a
            visionary future.
          </p>
          <p>
            I welcome you on my journey through the pixels of possibility, the
            words of wonderment, and the zenith of innovation.
          </p>
          <p>Yours creatively, The Coding Bard.</p>
        </div>
        <div className="img-container">
          <Image src="/assets/images/me.jpg" alt="Me" fill sizes="100%"></Image>
        </div>
      </div>
    </section>
  );
}
