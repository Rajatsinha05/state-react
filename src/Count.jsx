import React, { useState } from "react";

const Count = ({ initial, add, remove }) => {
  let [counter, setCounter] = useState(initial);

  

  const handleIncrement = () => {
    setCounter(counter + add);
  };
  const handleDecrement = () => {
    setCounter(counter - remove);
  };

  return (
    <div>
      <h1>Count : {counter}</h1>
      <button onClick={handleIncrement}>INC</button>
      <button onClick={handleDecrement}>Dec</button>
    </div>
  );
};

export default Count;
