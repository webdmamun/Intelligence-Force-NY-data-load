import React from "react";

const Name = (props) => {
  const { name } = props.name;
  console.log(props);
  return (
    <>
      <div>
        <p>
          <i class="fas fa-arrow-right"></i> {name}
        </p>
      </div>
    </>
  );
};

export default Name;
