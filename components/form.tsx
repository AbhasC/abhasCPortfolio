import React, { useRef } from "react";
import { useEasyGoogleForm } from "@hymns-of-web/use-easy-google-form";

export default function MyCustomGForm() {
  const ref = useRef<HTMLFormElement>(null);
  const onSubmit = useEasyGoogleForm({
    formRef: ref,
    gFormId: "1FBp-F_joxJBAQ47usj9Hp5cE9_P_GS8j5nQeng6KwXE",
    links: [
      {
        entryId: "1236744528",
        formId: "RfzOC",
        type: "text",
      },
      {
        entryId: "1808646633",
        formId: "ptuDg",
        type: "text",
      },
      {
        entryId: "676216516",
        formId: "lRbdC",
        type: "text",
      },
      {
        entryId: "1917835238",
        formId: "bhklw",
        type: "textarea",
      },
    ],
  });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const formHandler = (e: any) => {
    onSubmit(e);
    alert("Your message has been sent");
    if (ref) {
      ref.current?.reset();
    }
  };
  return (
    <form onSubmit={formHandler} ref={ref} className="contact-form">
      <input
        type="text"
        id="RfzOC"
        className="cm-form-ip cm-name"
        placeholder="Your name"
        required
      />
      <input
        type="email"
        id="ptuDg"
        className="cm-form-ip cm-name"
        placeholder="Your email"
        required
      />
      <input
        type="text"
        id="lRbdC"
        className="cm-form-ip cm-inquiry"
        placeholder="Your inquiry"
        required
      />
      <textarea
        id="bhklw"
        rows={30}
        cols={10}
        className="cm-form-ip cm-message"
        placeholder="Your message"
        required
      />
      <button type="submit" className="cm-form-button">
        SUBMIT
      </button>
    </form>
  );
}
