import React from "react";
import "./Cart.css";
import Name from "./Name/Name";

// calculate cart area
const Cart = (props) => {
  const { cart } = props;
  let total = 0;
  for (const person of cart) {
    total = total + person.salary;
  }
  return (
    <>
      <div className="cart-area">
        <h2>Intelligent Added: {props.cart.length} </h2>
        <h4>Total: {total}</h4>
      </div>
      <div className="cart-area mt-3">
        <h2>Added Intelligent</h2>
        {cart.map((name) => (
          <Name name={name}></Name>
        ))}
      </div>
    </>
  );
};

export default Cart;
