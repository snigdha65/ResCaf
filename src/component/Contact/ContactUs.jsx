import React, { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can implement the logic to handle the form submission.
    console.log(formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white shadow-2xl rounded p-8 max-w-md w-full">
      <h2 className="font-dancing font-bold text-2xl text-red-500 text-center">Discovers</h2>
        <h1 className="text-2xl font-bold mb-4">Contact Us</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-bold">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="border rounded w-full p-2"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-bold">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="border rounded w-full p-2"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 font-bold">
              Message:
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="border rounded w-full p-2"
              rows="4"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-red-900 text-white py-2 px-4 rounded hover:bg-red-600"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
