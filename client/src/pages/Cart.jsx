import React, { useContext } from "react";
import CartContext from "../context/cartContext";
import Checkout from "@/components/Checkout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Cart() {
  const { cart, setCart } = useContext(CartContext);
  const { items, total } = cart;

  function handleRemoveItem(id) {
    const itemToRemove = items.find(item => item.id === id);
    setCart({
      items: items.filter(item => item.id !== id),
      total: total - itemToRemove.price * itemToRemove.enrollments,
    });
  }

  function handleEnrollmentsChange(id, change) {
    const updatedItems = items.map(item => {
      if (item.id === id) {
        const newEnrollments = Math.max(item.enrollments + change, 1); // Ensure enrollments doesn't go below 1
        const priceDifference =
          (newEnrollments - item.enrollments) * item.price;
        return { ...item, enrollments: newEnrollments, price: item.price };
      }
      return item;
    });

    const newTotal = updatedItems.reduce(
      (sum, item) => sum + item.price * item.enrollments,
      0
    );

    setCart({ items: updatedItems, total: newTotal });
  }

  if (items.length === 0) {
    return (
      <main className="text-center">
        <h2 className="text-3xl">Your cart is empty</h2>
        <Link to="/programs" className="default-button mt-4 p-5">
          Book Now
        </Link>
      </main>
    );
  }

  return (
    <main>
      <section className="text-center bg-black text-white">
        <h2 className="relative inline-block text-3xl sm:text-6xl">
          Cart
          <span className="absolute left-1/2 transform -translate-x-1/2 bottom-[-10px] w-3/4 h-0.5 bg-c_accent"></span>
        </h2>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {items.map(item => (
          <div key={item.id} className="bg-white p-4 shadow-md">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-40 object-cover"
            />
            <h2 className="text-lg font-bold mt-2">{item.name}</h2>
            <p className="text-sm text-gray-600 mt-1">PKR {item.price}/- </p>
            <div className="flex items-center mt-1">
              <p className="mr-2">Enrollments: </p>
              <Button
                variant="link"
                className="text-xl p-[4px] py-[2px] h-auto"
                onClick={() => handleEnrollmentsChange(item.id, -1)}
              >
                -
              </Button>
              <p className="text-sm text-gray-600 mx-2">{item.enrollments}</p>
              <Button
                variant="link"
                className="text-xl p-[4px] py-[2px] h-auto"
                onClick={() => handleEnrollmentsChange(item.id, 1)}
              >
                +
              </Button>
            </div>
            <Button
              className="default-button mt-4"
              onClick={() => handleRemoveItem(item.id)}
            >
              Remove
            </Button>
          </div>
        ))}
      </section>

      <section className="text-center mt-8">
        <h2 className="text-2xl mb-4">Total:PKR {total}/-</h2>

        <Checkout />
      </section>
    </main>
  );
}
