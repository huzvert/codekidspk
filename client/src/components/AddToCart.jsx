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

function applyDiscount(Course, enrollments) {
  if (Course.discount) {
    const discountPrice = (Course.price * Course.discount) / 100;
    Course.price = Course.price - discountPrice;
  }

  if (
    Course.multi_enrollment_discount?.applicable &&
    enrollments >= Course.multi_enrollment_discount?.min_enrollments
  ) {
    Course.price =
      Course.price -
      (Course.price * Course.multi_enrollment_discount.discount_percentage) /
        100;
  }

  return Course;
}

export default function AddToCart({ course }) {
  const { cart, setCart } = useContext(CartContext);
  const [enrollments, setEnrollments] = useState(1);
  const [date, setDate] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const Course = applyDiscount(JSON.parse(JSON.stringify(course)), enrollments);

  const handleAddToCart = () => {
    const existingCourseIndex = cart.items.findIndex(
      item => item.id === Course.id
    );
    let newItems;

    if (existingCourseIndex !== -1) {
      // Course is already in the cart, increase its enrollments
      newItems = cart.items.map((item, index) =>
        index === existingCourseIndex
          ? { ...item, enrollments: item.enrollments + Number(enrollments) }
          : item
      );
    } else {
      // Course is not in the cart, add it as a new item
      newItems = [
        ...cart.items,
        {
          id: Course.id,
          name: Course.title,
          price: Course.price,
          enrollments: Number(enrollments),
          date: date,
          image: Course.coverImage,
        },
      ];
    }

    setCart({
      items: newItems,
      total: cart.total + Number(Course.price) * Number(enrollments),
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
          <DialogTitle>{Course.title}</DialogTitle>
          <DialogDescription>
            Price: <span className="text-c_accent">PKR {Course.price}/-</span>
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-4 py-4">
          <Label htmlFor="enrollments">Enrollments</Label>
          <Input
            type="number"
            id="enrollments"
            name="enrollments"
            placeholder="Enter enrollments"
            min="1"
            required
            value={enrollments}
            onChange={e => setEnrollments(e.target.value)}
          />
        </div>

        <div className="grid gap-4 py-4">
          <Label htmlFor="date">Pick a date</Label>
          <select
            id="date"
            name="date"
            className="input bg-white border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
            onChange={e => setDate(Course.timetables[e.target.value])}
          >
            {Course.timetables?.map((timetable, index) => (
              <option key={index} value={index}>
                {timetable.dates} - {timetable.timings}
              </option>
            ))}
          </select>
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
