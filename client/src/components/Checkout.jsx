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
    name: "",
    email: "",
    contactNumber: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false); // New state for submitting state

  const handleInputChange = e => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setIsSubmitting(true); // Set submitting state to true

    const formDatab = new FormData();

    formDatab.append("name", formData.name);
    formDatab.append("email", formData.email);
    formDatab.append("contactNumber", formData.contactNumber);
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
        setIsDialogOpen(false); // Close the dialog
        setIsSubmitted(false); // Reset the submission state
        setCart({ items: [], total: 0 }); // Clear the cart
        setIsSubmitting(false); // Reset submitting state
      }, 5000);
    } catch (error) {
      console.error("There was a problem with the submission:", error);
      setIsSubmitting(false); // Reset submitting state on error
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

        <DialogContent className="sm:max-w-[425px]">
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
                  <Label htmlFor="name">Name</Label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="contactNumber">Contact Number</Label>
                  <Input
                    type="tel"
                    id="contactNumber"
                    name="contactNumber"
                    placeholder="Enter your contact number"
                    value={formData.contactNumber}
                    onChange={handleInputChange}
                    required
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
