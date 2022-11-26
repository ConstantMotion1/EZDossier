import React from "react";
import ReactDOM from "react-dom";
// import App from './App';
import '../src/App.css'
import Test from "./testing";
import allReducers from './reducers'
import { Provider } from "react-redux";
import { createStore } from "redux";

let myStore = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={myStore}>
    <Test />
  </Provider>,
  document.getElementById("root")
);
