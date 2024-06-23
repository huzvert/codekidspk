import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function Careers() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    resume: "",
    coverLetter: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setIsSubmitting(true);
    const formDatab = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      formDatab.append(key, value);
    });

    try {
      const response = await fetch(import.meta.env.VITE_CAREERS_SCRIPT_URL, {
        method: "POST",
        body: formDatab,
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: "",
          email: "",
          phone: "",
          resume: "",
          coverLetter: "",
        }); // Clear the form after submission
      }, 3000);
    } catch (error) {
      console.error("There was a problem with the submission:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto my-8">
      <div className="max-w-lg mx-auto">
        <Card className="bg-gray-800">
          <CardHeader>
            <CardTitle className="text-c_secondary-light tracking-wider">
              Join Our Team
            </CardTitle>
          </CardHeader>
          <CardContent>
            {isSubmitted ? (
              <div className="text-center text-c_primary-light">
                Application submitted successfully!
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-white">
                    Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-white">
                    Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full"
                  />
                </div>
                <div>
                  <Label htmlFor="phone" className="text-white">
                    Phone
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full"
                  />
                </div>
                <div>
                  <Label htmlFor="resume" className="text-white">
                    Resume (URL)
                  </Label>
                  <Input
                    id="resume"
                    name="resume"
                    type="url"
                    value={formData.resume}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full"
                  />
                </div>
                <div>
                  <Label htmlFor="coverLetter" className="text-white">
                    Cover Letter
                  </Label>
                  <Textarea
                    id="coverLetter"
                    name="coverLetter"
                    value={formData.coverLetter}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full"
                  />
                </div>
                <Button
                  type="submit"
                  className="default-button mt-4"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </Button>
              </form>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
