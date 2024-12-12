import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import Router from "./Router";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={Router} />
  </React.StrictMode>
);

reportWebVitals();


// import React from "react";
// import ReactDOM from "react-dom/client";
// import { RouterProvider } from "react-router-dom"; 
// import "./index.css";
// import reportWebVitals from "./reportWebVitals";
// import App from "./App";  // Import your main App component, which handles routing

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <App />  {/* Render your App component */}
//   </React.StrictMode>
// );

// reportWebVitals();

