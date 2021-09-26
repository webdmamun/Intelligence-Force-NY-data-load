import React from "react";
import "./Cart.css";

// calculate cart area
const Cart = (props) => {
  const { cart } = props;
  let total = 0;
  for (const person of cart) {
    total = total + person.salary;
  }
  return (
    <div className="cart-area">
      <h2>Intelligent Added: {props.cart.length} </h2>
      <h4>Total: {total}</h4>
    </div>
  );
};

export default Cart;
