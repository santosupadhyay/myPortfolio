import React, { useRef } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_spko1tq", "template_6red53x", form.current, {
        publicKey: "yedohunsKRj6CmCqe",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
    e.target.reset();
  };

  return (
    <>
      <div
        className="flex justify-center items-center p-5 min-h-[80vh] "
        id="contact"
      >
        <div className="card glass md:w-96 w-full bg-base-300">
          <div className="card-body">
            <h2 className="font-bold text-lg text-center">Contact Me !</h2>
            <p className="text-center">
              Wanna contact me? Please go through this form.
            </p>

            <form ref={form} className="card-body" id="myForm" action="POST" onSubmit={sendEmail}>
              <label
                name="name"
                className="input input-bordered flex items-center gap-2"
              >
                Name
                <input type="text" className="grow" placeholder="Sandy" />
              </label>
              <label className="input input-bordered flex items-center gap-2">
                Email
                <input
                  type="text"
                  className="grow"
                  placeholder="hello@example.com"
                  name="email"
                />
              </label>
              <textarea
                className="textarea resize-none textarea-bordered"
                placeholder="Write Something"
                name="message"
              ></textarea>

              <div className="card-actions justify-end">
                <button className="btn btn-primary">Send</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

