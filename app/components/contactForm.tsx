import React from "react";
import AnimatedRoutes from "../animatedRoutes";

const ContactForm = () => {
  return (
    <AnimatedRoutes>
      <form
        className="bg-yellow-400 rounded-xl text-black pb-8 mt-8"
        name="contact"
        method="POST"
        data-netlify="true"
      >
        <input type="hidden" name="form-name" value="contact" />
        <section className="py-8 w-2/3 m-auto">
          <div className="flex flex-col py-2">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="flex flex-col py-2">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="flex flex-col py-2">
            <label htmlFor="phone">Phone Number:</label>
            <input type="tel" id="phone" name="phone" required />
          </div>
          <div className="flex flex-col py-2">
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" required></textarea>
          </div>
        </section>
        <button
          className="bg-purple-600 text-yellow-400 p-1 rounded-lg"
          type="submit"
          id="submit"
          title="submit"
        >
          Submit
        </button>
      </form>
    </AnimatedRoutes>
  );
};

export default ContactForm;
