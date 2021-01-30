import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.css";
import { HashRouter as Router } from "react-router-dom";
import store from "./core/store";
import { Provider } from "react-redux";

ReactDOM.render(
  <Provider store={store}>
    <Router basename={process.env.PUBLIC_URL}>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
serviceWorker.unregister();
