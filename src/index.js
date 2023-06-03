import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import First from "./components/First";
import Second from "./components/Second";
import Third from "./components/Third";
import SecondV2 from "./components/SecondV2";




const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/first",
    element: <First/>,
  },
  {
    path: "/second",
    element: <Second/>,
  },
  {
    path: "/third",
    element: <Third/>,
  },
  {
    path: "/second2",
    element: <SecondV2/>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
