import "materialize-css/dist/css/materialize.min.css";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";
import App from "./components/App";
import registerServiceWorker from "./registerServiceWorker";
import reduxThunk from "redux-thunk";

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();

console.log("&&&&&&&&&&&&&&&&&&&&&");
console.log("Stripe key is:  ", process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);
console.log("Environment is:  ", process.env.NODE_ENV);
console.log("&&&&&&&&&&&&&&&&&&&&&");
