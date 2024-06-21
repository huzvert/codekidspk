import React, { useContext } from "react";
import CartContext from "../context/cartContext";
import Checkout from "@/components/Checkout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Cart() {
  const { cart, setCart } = useContext(CartContext);
  const { items, total } = cart;

  function handleRemoveItem(id) {
    setCart({
      items: items.filter(item => item.id !== id),
      total: total - items.find(item => item.id === id).price,
    });
  }

  if (items.length === 0) {
    return (
      <main className="text-center">
        <h2 className="text-3xl">Your cart is empty</h2>
        <Link to="/programs" className="default-button mt-4">
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
            <p className="text-sm text-gray-600 mt-1">£{item.price}</p>
            <p className="text-sm text-gray-600 mt-1">
              Quantity: {item.quantity}
            </p>
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
        <h2 className="text-2xl mb-4">Total: £{total}</h2>

        <Checkout />
      </section>
    </main>
  );
}
