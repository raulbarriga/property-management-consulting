"use client";

import React, { useState } from "react";
import { Open_Sans } from "next/font/google";
import { useForm } from "react-hook-form";
import ContactInputBox from "./ContactInputBox";
import ContactTextArea from "./ContactTextArea";
import { sendContactForm } from "@/util/api";

const openSans = Open_Sans({ subsets: ["latin"] });

const ContactForm = () => {
  // const [formData, setFormData] = useState({
  //   name: "",
  //   email: "",
  //   phone: "",
  //   message: "",
  // });
  // const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    //
    // reset,
  } = useForm({
    defaultValues: { name: "", email: "", phone: "", message: "" },
  });

  // const validateEmail = (email) => {
  //   const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //   return re.test(email);
  // };

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData((prevState) => ({
  //     ...prevState,
  //     [name]: value,
  //   }));
  // };

  const onSubmit = async (data, e) => {
    // data is the react hook form object that contains all the form input fields
    e.preventDefault();

    // if (!validateEmail(formData.email)) {
    //   setSubmissionStatus("Please enter a valid email address.");
    //   return;
    // }

    // setIsSubmitting(true);

    try {
      console.log("data: ", data);
      /*
etch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      */
      // const response =
      await sendContactForm(data);
      // if (response.ok) {
      // setSubmissionStatus("Message sent successfully!");
      // setFormData({
      //   name: "",
      //   email: "",
      //   phone: "",
      //   message: "",
      // });
      // } else {
      //   setStatus("error");
      // }
    } catch (error) {
      console.error("Error:", error);
      // setSubmissionStatus("Failed to send message.");
    }
    // finally {
    //   setIsSubmitting(false);
    // }
  };

  const onBlurHandler = (e) => {
    const inputHighlight = e.target;

    inputHighlight.style.backgroundColor = "#ff40401a";
    inputHighlight.style.borderWidth = "1px";
    inputHighlight.style.borderColor = "#ff4040";
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* name */}
        <div className="mb-6">
          <ContactInputBox
            type="text"
            name="name"
            id="name"
            placeholder="Your Name"
            // value={formData.name}
            // onChange={handleChange}
            register={register}
            validationRules={{
              required: "You must enter your name",
              maxLength: {
                value: 200,
                message: "Name must be less than 200 characters",
              },
              onBlur: onBlurHandler,
            }}
          />
          {errors.name && (
            <div className="text-red-500">{errors.name.message}</div>
          )}
        </div>
        {/* email */}
        <div className="mb-6">
          <ContactInputBox
            type="email"
            name="email"
            id="email"
            placeholder="Your Email"
            // value={formData.email}
            // onChange={handleChange}
            register={register}
            validationRules={{
              required: "You must enter a valid email",
              pattern: {
                value:
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: "You must enter a valid email",
              },
              maxLength: {
                value: 128,
                message: "Email must be less than 128 characters",
              },
              onBlur: onBlurHandler,
            }}
          />
          {errors.email && (
            <div className="text-red-500">{errors.email.message}</div>
          )}
        </div>
        {/* phone */}
        <div className="mb-6">
          <ContactInputBox
            type="tel"
            name="phone"
            id="phone"
            placeholder="Your Phone"
            // value={formData.phone}
            // onChange={handleChange}
            register={register}
            validationRules={{
              required: "You must enter your phone number",
              maxLength: {
                value: 20,
                message: "Phone must be less than 20 characters",
              },
              onBlur: onBlurHandler,
            }}
          />
          {errors.phone && (
            <div className="text-red-500">{errors.phone.message}</div>
          )}
        </div>
        {/* message */}
        <div className="mb-6">
          <ContactTextArea
            row="6"
            placeholder="Your Message"
            name="message"
            id="message"
            // defaultValue=""
            // value={formData.message}
            // onChange={handleChange}
            register={register}
            validationRules={{
              required: "You must enter your message",
              onBlur: onBlurHandler,
            }}
          />
          {errors.message && (
            <div className="text-red-500">{errors.message.message}</div>
          )}
        </div>
        {/* submit button */}
        <div className="">
          <button
            type="submit"
            disabled={isSubmitting}
            // p-3 removed w-full to keep button small & not too wide
            className={`${openSans.className} rounded-md border border-transparent py-3 px-7 text-white transition bg-black hover:bg-transparent hover:border hover:border-black hover:text-black`}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </div>
        {/* {submissionStatus && <p>{submissionStatus}</p>} */}
      </form>
    </>
  );
};

export default ContactForm;
