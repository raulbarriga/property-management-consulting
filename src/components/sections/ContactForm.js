"use client";

import React, { useState } from "react";
import { Open_Sans } from "next/font/google";
import ContactInputBox from "./Form/ContactInputBox";
import ContactTextArea from "./Form/ContactTextArea";

const openSans = Open_Sans({ subsets: ["latin"] });

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateEmail(formData.email)) {
      setSubmissionStatus("Please enter a valid email address.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmissionStatus("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Error:", error);
      setSubmissionStatus("Failed to send message.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <ContactInputBox
          type="text"
          name="name"
          id="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
        />
        <ContactInputBox
          type="email"
          name="email"
          id="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
        />
        <ContactInputBox
          type="tel"
          name="phone"
          id="phone"
          placeholder="Your Phone"
          value={formData.phone}
          onChange={handleChange}
        />
        <ContactTextArea
          row="6"
          placeholder="Your Message"
          name="message"
          id="message"
          defaultValue=""
          value={formData.message}
          onChange={handleChange}
        />
        <div>
          <button
            type="submit"
            disabled={isSubmitting}
            // p-3 removed w-full to keep button small & not too wide
            className={`${openSans.className} rounded-md border border-forest-green bg-forest-green py-3 px-7 text-white transition hover:bg-opacity-90`}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </div>
        {submissionStatus && <p>{submissionStatus}</p>}
      </form>
    </>
  );
};

export default ContactForm;
