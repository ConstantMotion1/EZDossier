import React from 'react';
import ReactDOM from 'react-dom';
// import Portfolio from './pages/Portfolio';
// import './index.css';
import App from './App';
// import Test from './testing';
// import reportWebVitals from './reportWebVitals';


let myStore = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(

  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);
