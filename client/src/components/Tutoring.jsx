import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function Tutoring({ onClose }) {
  const [formData, setFormData] = useState({
    parentName: "",
    childName: "",
    childAge: "",
    contactNumber: "",
    email: "",
    additionalInfo: "",
    subject: "",
  });
  const [courses, setCourses] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  useEffect(() => {
    fetch("/content/courses.json")
      .then(response => response.json())
      .then(data =>
        setCourses(data.courses.filter(course => course.one_to_one_tutoring))
      );
  }, []);

  const handleSubmit = async e => {
    e.preventDefault();
    setIsSubmitting(true);

    const formDatab = new FormData(e.target);

    try {
      const response = await fetch(import.meta.env.VITE_TUTORING_SCRIPT_URL, {
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
      setIsSubmitting(false);
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
              Parent Name:
              <input
                type="text"
                name="parentName"
                value={formData.parentName}
                onChange={handleChange}
                required
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
              />
            </label>
          </div>
          <div>
            <label className="block text-gray-700">
              Child Name:
              <input
                type="text"
                name="childName"
                value={formData.childName}
                onChange={handleChange}
                required
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
              />
            </label>
          </div>
          <div>
            <label className="block text-gray-700">
              Child Age:
              <input
                type="number"
                name="childAge"
                value={formData.childAge}
                onChange={handleChange}
                required
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
              />
            </label>
          </div>
          <div>
            <label className="block text-gray-700">
              Contact Number:
              <input
                type="number"
                name="contactNumber"
                value={formData.contactNumber}
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
          <div>
            <label className="block text-gray-700">
              Subject:
              <select
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
              >
                <option disabled value="">
                  Select a subject
                </option>
                {courses?.map(course => (
                  <option key={course.id} value={course.title}>
                    {course.title}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <Button
            type="submit"
            disabled={isSubmitting} // Disable the button when submitting
            className="default-button w-full"
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </Button>
        </form>
      )}
    </div>
  );
}
