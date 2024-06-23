import React, { useState } from "react";
import { Button } from "@/components/ui/button";

function MailList() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = e => {
    setEmail(e.target.value);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setIsSubmitting(true);
    const formDatab = new FormData();
    formDatab.append("email", email);

    try {
      const response = await fetch(
        import.meta.env.VITE_MAILING_LIST_SCRIPT_URL,
        {
          method: "POST",
          body: formDatab,
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setEmail(""); // Clear the email input after submission
      }, 3000);
    } catch (error) {
      console.error("There was a problem with the submission:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <h3 className="font-heading mb-3">
        Join Our Mailing List for Course Updates
      </h3>
      {isSubmitted ? (
        <div className="text-center text-c_primary-light">
          Subscription successful!
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col text-white">
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={handleInputChange}
            required
            className="border-2 bg-transparent border-c_accent focus:outline-none p-2"
          />
          <Button
            type="submit"
            className="default-button"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Subscribe"}
          </Button>
        </form>
      )}
    </>
  );
}

export default MailList;
