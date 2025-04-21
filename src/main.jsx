import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// console.log 확인용
console.log("환경변수:", import.meta.env.BASE_URL);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
