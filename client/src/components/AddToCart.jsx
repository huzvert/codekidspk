import React, { useContext, useState } from "react";
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

export default function AddToCart({ course }) {
  const { cart, setCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleAddToCart = () => {
    const existingCourseIndex = cart.items.findIndex(
      item => item.id === course.id
    );
    let newItems;

    if (existingCourseIndex !== -1) {
      // Course is already in the cart, increase its quantity
      newItems = cart.items.map((item, index) =>
        index === existingCourseIndex
          ? { ...item, quantity: item.quantity + Number(quantity) }
          : item
      );
    } else {
      // Course is not in the cart, add it as a new item
      newItems = [
        ...cart.items,
        {
          id: course.id,
          name: course.title,
          price: course.price,
          quantity: Number(quantity),
          image: course.coverImage,
        },
      ];
    }

    setCart({
      items: newItems,
      total: cart.total + Number(course.price) * Number(quantity),
    });
    setIsDialogOpen(false); // Close the dialog
  };

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="mt-10 outline-button"
          onClick={() => setIsDialogOpen(true)}
        >
          Book Now
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{course.title}</DialogTitle>
          <DialogDescription>
            Price: <span className="text-c_accent">£{course.price}</span>
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-4 py-4">
          <Label htmlFor="quantity">Quantity</Label>
          <Input
            type="number"
            id="quantity"
            name="quantity"
            placeholder="Enter quantity"
            min="1"
            required
            value={quantity}
            onChange={e => setQuantity(e.target.value)}
          />
        </div>

        <DialogFooter>
          <Button className="default-button" onClick={handleAddToCart}>
            Add to cart
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
