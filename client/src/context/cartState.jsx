import React, { useState } from "react";
import CartContext from "./cartContext";

export default function CartState(props) {
  const [cart, setCart] = useState({
    items: [],
    total: 0,
  });

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {props.children}
    </CartContext.Provider>
  );
}
