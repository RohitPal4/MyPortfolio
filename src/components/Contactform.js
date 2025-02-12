import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    subject: '',
    description: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle form submission, for example, sending data to a server
    console.log(formData);
    // Reset form after submission
    setFormData({
      fullname: '',
      email: '',
      subject: '',
      description: ''
    });
  };

  return (
    <div className="cotainer">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: 'auto' }}>
      <div className="mb-3">
        <label htmlFor="fullname" className="form-label">Full Name</label>
        <input
          type="text"
          className="form-control"
          id="fullname"
          name="fullname"
          value={formData.fullname}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email address</label>
        <input
          type="email"
          className="form-control"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="subject" className="form-label">Subject</label>
        <input
          type="text"
          className="form-control"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="description" className="form-label">Description</label>
        <textarea
          className="form-control"
          id="description"
          rows={4}
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
          style={{resize: 'none'}}
        />
      </div>

      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
    </div>
  );
};

export default ContactForm;
