import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef(null);
  const [values, setValues] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleChange = (e) => {
    setValues((values) => ({
      ...values,
      [e.target.name]: e.target.value,
    }));
  };
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_bezr3gv",
        "template_89e6e78",
        form.current,
        "iO5AjE8vJgnf7SZBB"
        )
        .then(
          (response) => {
            console.log("SUCCESS!", response.status, response.text);
            setValues({
                name: "",
                email: "",
                message: "",
              });
            },
            (err) => {
          console.log("FAILED!", err);
        }
      );

    e.target.reset();
  };
  return (
    <div
      id="Contact"
      name="contact"
      className=" bg-gradient-to-b from-black to-gray-800 w-full text-white h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-5">Submit the form below to get in touch with me</p>
        </div>
        <div className="flex justify-center items-center ">
          <form
            onSubmit={sendEmail}
            ref={form}
            className="flex flex-col w-full  md:w-1/2"
          >
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter your name"
              onChange={handleChange}
              value={values.name}
              className=" p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              required
            />
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Enter your email"
              onChange={handleChange}
              value={values.email}
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              required
            />
            <textarea
              name="message"
              id="message"
              rows="10"
              placeholder="Enter your message"
              onChange={handleChange}
              value={values.message}
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              required
            />
            <button
              type="submit"
              className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 
          px-6 py-3 mt-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300"
            >
              let's talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
