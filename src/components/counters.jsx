import React from "react";
import Counter from "./counter";

// Stateless Functional Component + Object Destructuring
const Counters = ({ counters, onReset, onIncrement, onDelete }) => {
  console.log("Counters - Rendered");
  return (
    <div>
      <button className="btn btn-primary btn-sm m-2" onClick={onReset}>
        Reset
      </button>
      {counters.map((counter) => (
        <Counter
          key={counter.id}
          counter={counter}
          onIncrement={onIncrement}
          onDelete={onDelete}>
          {/*<h4>Counter #{counter.id}</h4> {/*children attr can be passed*/}
        </Counter>
      ))}
    </div>
  );
};

export default Counters;
