import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import css from "./form.module.scss";

const Contact = () => {
  const form = useRef();
  const nameRef = useRef("");
  const mailRef = useRef("");
  const [show, setShow] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    if (
      mailRef.current.value.length >= 3 &&
      nameRef.current.value.length >= 2
    ) {
      setShow(true);
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
    } else {
      console.log("erreur");
    }
  };

  return (
    <>
      {!show && (
        <form ref={form} onSubmit={sendEmail} className={css.container}>
          <div className={css.form}>
            <div className={css.champs}>
              <label>Nom</label>
              <input ref={nameRef} type="text" name="user_name" />
            </div>
            <div className={css.champs}>
              <label>Mail</label>
              <input ref={mailRef} type="email" name="user_email" />
            </div>

            <div className={css.champs}>
              <label>Message</label>
              <textarea name="message" className={css.champs__message} />
            </div>
          </div>
          <input type="submit" value="ENVOYER" className={css.button} />;
        </form>
      )}
      {show && <h3>Votre Message a été envoyé.</h3>}
    </>
  );
};

export default Contact;
