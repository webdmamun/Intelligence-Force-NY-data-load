import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Person from "../Person/Person";
import "./Cards.css";

// Set State
const Cards = () => {
  const [persons, setPersons] = useState([]);
  const [cart, setCart] = useState([]);

  // fetch JSON data
  useEffect(() => {
    fetch("./fakedb.JSON")
      .then((res) => res.json())
      .then((data) => setPersons(data));
  }, []);

  // Handle Cart Area
  const handleAddIntelligent = (intelligent) => {
    const newCart = [...cart, intelligent];
    setCart(newCart);
  };

  // Return Function
  return (
    <div className="container mt-3">
      <div className="card-container">
        <div className="card-item row gy-5">
          {persons.map((person) => (
            <Person
              key={person.id}
              person={person}
              handleAddIntelligent={handleAddIntelligent}
            ></Person>
          ))}
        </div>
        <div className="cart-container ms-3">
          <Cart cart={cart}></Cart>
        </div>
      </div>
    </div>
  );
};

export default Cards;
