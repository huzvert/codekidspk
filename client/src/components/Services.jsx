import React, { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Services({ onClose }) {
  const [formData, setFormData] = useState({
    parentName: "",
    contactNumber: "",
    email: "",
    service: "",
    description: "",
  });

  const services = [
    "Parties",
    "Educational Workshops",
    "Stalls at Events",
    "Website Development for Startups and Small Businesses",
  ];
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setIsSubmitting(true);
    const formDatab = new FormData(e.target);

    try {
      const response = await fetch(
        import.meta.env.VITE_OTHER_SERVICES_SCRIPT_URL,
        {
          method: "POST",
          body: formDatab,
        }
      );

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
              Service:
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
              >
                <option disabled value="">
                  Select a service
                </option>
                {services.map(service => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <div>
            <label className="block text-gray-700">
              Service Description:
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
            disabled={isSubmitting}
            className="w-full default-button"
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </Button>
        </form>
      )}
    </div>
  );
}
