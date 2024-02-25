import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import EarthCanvas from "../canvas/Earth";
import { FaArrowUp } from "react-icons/fa";
import Socials from "../header_components/Socials";
import { Link as ScrollLink } from "react-scroll";

const ContactMe = () => {
  const form = useRef();
  const [submitStatus, setSubmitStatus] = useState("Send");

  const sendEmail = (e) => {
    e.preventDefault();

    setSubmitStatus("Sending...");

    emailjs
      .sendForm(
        "service_cc80zd6",
        "template_grsl5ag",
        form.current,
        "WOPnM97bxVX80Bcke"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          setSubmitStatus("Sent");

          // Reset submit button after 2 seconds
          setTimeout(() => {
            setSubmitStatus("Send");
          }, 2000);
        },
        (error) => {
          console.log(error.text);
          setSubmitStatus("Failed");

          // Reset submit button after 2 seconds
          setTimeout(() => {
            setSubmitStatus("Send");
          }, 2000);
        }
      );
  };

  return (
    <div className="contact-me" id="contact-me">
      <div>
        <EarthCanvas />
        <div className="contact-form">
          <div>
            <h2>GET IN TOUCH</h2>
            <h2>SEND A MAIL</h2>
          </div>
          <form ref={form} onSubmit={sendEmail} autoComplete="on">
            <div>
              <label htmlFor="name">Your Name</label>
              <input
                id="name"
                type="name"
                name="user_name"
                placeholder="What's your Name?"
                autoComplete="on"
                required
              />
            </div>
            <div>
              <label htmlFor="email">Your Email</label>
              <input
                id="email"
                type="email"
                name="user_email"
                placeholder="What's your Email?"
                autoComplete="on"
                required
              />
            </div>
            <div>
              <label htmlFor="message">Send me a Message</label>
              <textarea
                id="message"
                type="text"
                name="message"
                placeholder="What do you want to say?"
                required
              />
            </div>
            <div>
              <input
                type="submit"
                value={submitStatus}
                disabled={submitStatus !== "Send"}
              />
            </div>
          </form>
        </div>
      </div>
      <Socials />
      <div className="end-div">
        <h6>© 2024 Designed and built by me - David Odion</h6>
        <ScrollLink to="header" smooth={true} duration={1000}>
          <FaArrowUp />
        </ScrollLink>
      </div>
    </div>
  );
};

export default ContactMe;
