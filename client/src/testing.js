import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { lay1 } from "./actions";
import { lay2 } from "./actions";
import { lay3 } from "./actions";
import { lay4 } from "./actions";

 function Testing() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>choice: {counter}</h1>
      <button onClick={() => dispatch(lay1())}>layout1</button>
      <button onClick={() => dispatch(lay2())}>layout2</button>
      <button onClick={() => dispatch(lay3())}>layout3</button>
      <button onClick={() => dispatch(lay4())}>layout4</button>
    </div>
  );
};

export default Testing;
