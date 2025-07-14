import React from 'react';

const ContactForm = () => {
  return (
    <div className="contact-form-container">
      <form
        className=" contact-form"
        onSubmit={(e) => {
          e.preventDefault();
          alert('Form submitted!');
        }}
      >
        <h2 className="text-3xl font-bold mb-6 text-center">Contact Me</h2>

        <div className="name-field">
          <label htmlFor="name" >
            Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Your Name"
            className="name-input"
            required
          />
        </div>

        <div className="email-field">
          <label htmlFor="email" className="">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="you@example.com"
            className="email-input"
            required
          />
        </div>

        <div className="message-field">
          <label htmlFor="message" className="">
            Message
          </label>
          <textarea
            id="message"
            rows="5"
            placeholder="Your message..."
            className="message-input"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="submit-btn"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
