import React from "react";
import ReactDOM from "react-dom";
import "./assets/css/index.css";
import App from "./pages/App";
import reportWebVitals from "./reportWebVitals";
import ReactGA from "react-ga";
import "bootstrap/dist/css/bootstrap.min.css";

ReactGA.initialize("G-WBJP7DB6VB", { standardImplementation: true });
ReactGA.pageview(window.location.pathname + window.location.search);
// Importing the Bootstrap CSS

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
