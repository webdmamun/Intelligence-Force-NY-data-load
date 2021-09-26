import React from "react";
import "./Person.css";

const Person = (props) => {
  // Data Destructuring
  const { name, title, salary, age, img } = props.person;

  // retrun the function
  return (
    <div className="single-card col-4">
      <div className="card h-100">
        <img
          src={img}
          className="card-img-top mx-auto d-block person-img"
          alt=""
        />
        <div className="card-body">
          <h2 className="text-center">{name}</h2>
          <p>Title: {title}</p>
          <p>Age: {age}</p>
          <p>Salary: {salary}</p>
          <div className="text-center">
            <button
              onClick={() => props.handleAddIntelligent(props.person)}
              className="btn btn-primary"
            >
              <i class="fas fa-list"></i> Add Intelligent
            </button>
          </div>
          <div className="social d-flex justify-content-around mt-2">
            <a href="/profile">
              <i class="fas fa-user social-icon"></i>
            </a>
            <a href="/linkedin">
              <i class="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Person;
