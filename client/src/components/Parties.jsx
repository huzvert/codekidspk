import React, { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Parties({ onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    subject: "",
    email: "",
    additionalInfo: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false); // Add state for submitting

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setIsSubmitting(true); // Set submitting state to true
    const formDatab = new FormData(e.target);

    try {
      const response = await fetch(import.meta.env.VITE_PARTIES_SCRIPT_URL, {
        method: "POST",
        body: formDatab,
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      setIsSubmitted(true);
      setTimeout(onClose, 3000); // Close popup after 3 seconds
    } catch (error) {
      console.error("There was a problem with the submission:", error);
    } finally {
      setIsSubmitting(false); // Reset submitting state
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
          <Button
            type="submit"
            disabled={isSubmitting} // Disable the button when submitting
            className="w-full default-button"
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </Button>
        </form>
      )}
    </div>
  );
}
