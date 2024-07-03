import React, { useState, useContext } from "react";
import CartContext from "@/context/cartContext";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import "tailwindcss/tailwind.css";

export default function Checkout() {
  const { cart, setCart } = useContext(CartContext);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [formData, setFormData] = useState({
    parentName: "",
    parentEmail: "",
    parentContact: "",
    studentNames: "",
    studentAges: "",
    priorExperience: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = e => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setIsSubmitting(true);

    const formDatab = new FormData(e.target);
    formDatab.append("items", JSON.stringify(cart.items));
    formDatab.append("total", cart.total);

    try {
      const response = await fetch(import.meta.env.VITE_ORDERS_SCRIPT_URL, {
        method: "POST",
        body: formDatab,
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      setIsSubmitted(true);
      setTimeout(() => {
        setIsDialogOpen(false);
        setIsSubmitted(false);
        setCart({ items: [], total: 0 });
        setIsSubmitting(false);
      }, 5000);
    } catch (error) {
      console.error("There was a problem with the submission:", error);
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogTrigger asChild>
          <Button
            className="default-button"
            onClick={() => setIsDialogOpen(true)}
          >
            Checkout
          </Button>
        </DialogTrigger>

        <DialogContent className="sm:max-w-[425px] max-h-screen overflow-y-auto">
          {isSubmitted ? (
            <div className="text-center text-green-500">
              Your order details are submitted successfully! You will be
              contacted by our team shortly.
            </div>
          ) : (
            <>
              <DialogHeader>
                <DialogTitle>Checkout</DialogTitle>
                <DialogDescription>
                  Please enter your details to proceed with the checkout.
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="grid gap-4 py-4">
                <div>
                  <Label htmlFor="parentName">Parent Name</Label>
                  <Input
                    type="text"
                    id="parentName"
                    name="parentName"
                    placeholder="Enter parent's name"
                    value={formData.parentName}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="parentEmail">Parent Email</Label>
                  <Input
                    type="email"
                    id="parentEmail"
                    name="parentEmail"
                    placeholder="Enter parent's email"
                    value={formData.parentEmail}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="parentContact">Parent Contact Number</Label>
                  <Input
                    type="text"
                    id="parentContact"
                    name="parentContact"
                    placeholder="Enter parent's contact number"
                    value={formData.parentContact}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="studentNames">Student Name(s)</Label>
                  <Input
                    type="text"
                    id="studentNames"
                    name="studentNames"
                    placeholder="Enter student name(s) separated by commas"
                    value={formData.studentNames}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="studentAges">Student Age(s)</Label>
                  <Input
                    type="text"
                    id="studentAges"
                    name="studentAges"
                    placeholder="Enter student age(s) separated by commas"
                    value={formData.studentAges}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="priorExperience">
                    Prior Coding Experience
                  </Label>
                  <Input
                    type="text"
                    id="priorExperience"
                    name="priorExperience"
                    placeholder="Enter prior coding experience (if any)"
                    value={formData.priorExperience}
                    onChange={handleInputChange}
                  />
                </div>

                <DialogFooter>
                  <Button
                    type="submit"
                    className="default-button"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Submit"}
                  </Button>
                </DialogFooter>
              </form>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
