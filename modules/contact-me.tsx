export default function ContactMe() {
  return (
    <section className="contact-main" id="contactMe">
      <h2 className="contact-name">Contact Me</h2>
      <div className="contact-container">
        <div className="contact-text">
          <h3 className="contact-heading">Get in touch</h3>
          <p className="contact-subheading">
            Please feel free to contact me if any freelance opportunity arises.
            I&apos;ll do my best to get back to you, whether if you have a
            question or just want to say hi.
          </p>
        </div>
        <form className="contact-form">
          <input
            type="text"
            className="cm-form-ip cm-name"
            placeholder="Your name"
          ></input>
          <input
            type="email"
            className="cm-form-ip cm-email"
            placeholder="Your email"
          ></input>
          <input
            type="text"
            className="cm-form-ip cm-inquiry"
            placeholder="Your inquiry"
          ></input>
          <textarea
            rows={30}
            cols={10}
            className="cm-form-ip cm-message"
            placeholder="Your message"
          ></textarea>
          <button type="submit" className="cm-form-button">
            SUBMIT
          </button>
        </form>
      </div>
    </section>
  );
}
