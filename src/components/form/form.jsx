import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import css from "./form.module.scss";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_hedoz2i",
        "template_rb7rsum",
        form.current,
        "aJuek7Hnl3SMzW4gB"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail} className={css.container}>
      <div className={css.form}>
        <div className={css.champs}>
          <label>Nom</label>
          <input type="text" name="user_name" />
        </div>
        <div className={css.champs}>
          <label>Mail</label>
          <input type="email" name="user_email" />
        </div>

        <div className={css.champs}>
          <label>Message</label>
          <textarea name="message" className={css.champs__message} />
        </div>
      </div>

      <input type="submit" value="ENVOYER" className={css.button} />
    </form>
  );
};

export default Contact;
