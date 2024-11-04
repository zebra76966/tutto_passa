import React from "react";
import "./contact.css";

const ContactForm = () => {
  return (
    <div className="form-container">
      <form className="form">
        <div className="form-group">
          <label htmlFor="email text-light"> Your Email</label>
          <input required name="email" id="email" type="text" />
        </div>
        <div className="form-group">
          <label htmlFor="textarea text-light">How Can We Help You?</label>
          <textarea required cols={50} rows={10} id="textarea" name="textarea" defaultValue={"          "} />
        </div>
        <button type="submit" className="form-submit-btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
