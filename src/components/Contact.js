import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    yourName: '',
    yourSurname: '',
    yourEmail: '',
    yourSubject: '',
    yourMessage: '',
  });

  const handleChange = event => {
    const { name, value } = event.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <section id="contact">
      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-lg-9">
            <h1 className="mb-3">Contact Us</h1>
            <form onSubmit={handleSubmit}>
              <div className="row g-3">
                <div className="col-md-6">
                  <label htmlFor="your-name" className="form-label">
                    Your Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="your-name"
                    name="yourName"
                    value={formData.yourName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="your-surname" className="form-label">
                    Your Surname
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="your-surname"
                    name="yourSurname"
                    value={formData.yourSurname}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="your-email" className="form-label">
                    Your Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="your-email"
                    name="yourEmail"
                    value={formData.yourEmail}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="your-subject" className="form-label">
                    Your Subject
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="your-subject"
                    name="yourSubject"
                    value={formData.yourSubject}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-12">
                  <label htmlFor="your-message" className="form-label">
                    Your Message
                  </label>
                  <textarea
                    className="form-control"
                    id="your-message"
                    name="yourMessage"
                    rows="5"
                    value={formData.yourMessage}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-12">
                  <div className="row">
                    <div className="col-md-6">
                      <button
                        type="submit"
                        className="btn btn-dark w-100 fw-bold"
                      >
                        Send
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <footer className="page-footer">
        <span>2023 © All rights reserved - codewithbalaji </span>
      </footer>
    </section>
  );
}

export default Contact;
