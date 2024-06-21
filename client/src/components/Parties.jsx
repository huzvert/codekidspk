import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';

export default function Parties({ onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    subject: '',
    email: '',
    additionalInfo: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const formDatab = new FormData(e.target);

    try {
      const response = await fetch(import.meta.env.VITE_PARTIES_SCRIPT_URL, {
        method: 'POST',
        body: formDatab,
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      setIsSubmitted(true);
      setTimeout(onClose, 2000); // Close popup after 2 seconds
    } catch (error) {
      console.error('There was a problem with the submission:', error);
    }
  };

  return (
    <div>
      {isSubmitted ? (
        <div className="text-center text-green-500">
          Form submitted successfully!
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700">
              Name:
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
              />
            </label>
          </div>
          <div>
            <label className="block text-gray-700">
              Age:
              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
                required
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
              />
            </label>
          </div>
          <div>
            <label className="block text-gray-700">
              Subject:
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
              />
            </label>
          </div>
          <div>
            <label className="block text-gray-700">
              Email:
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
              />
            </label>
          </div>
          <div>
            <label className="block text-gray-700">
              Additional Info:
              <textarea
                name="additionalInfo"
                value={formData.additionalInfo}
                onChange={handleChange}
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
              />
            </label>
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Submit
          </button>
        </form>
      )}
    </div>
  );
}
