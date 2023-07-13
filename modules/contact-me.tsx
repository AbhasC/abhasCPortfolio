export default function ContactMe() {
  return (
    <section className="contact-main" id="contactMe">
      <h2 className="contact-name">Contact Me</h2>
      <form className="contact-form">
        <input
          type="text"
          className="cm-form-ip cm-name"
          placeholder="Name"
        ></input>
        <input
          type="email"
          className="cm-form-ip cm-email"
          placeholder="Email"
        ></input>
        <input
          type="text"
          className="cm-form-ip cm-inquiry"
          placeholder="Type of Inquiry"
        ></input>
        <textarea
          cols={10}
          className="cm-form-ip cm-message"
          placeholder="Your message"
        ></textarea>
        <button type="submit" className="cm-form-button">
          SUBMIT
        </button>
      </form>
    </section>
  );
}
