import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { StateProvider } from "./StateProvider";
import { UserProvider } from "./UserContext";
import reducer, { initialState } from "./reducer";
import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <UserProvider>
        <Router>
          <App />
        </Router>
      </UserProvider>
    </StateProvider>
  </React.StrictMode>
);
