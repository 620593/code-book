import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";
import App from "./App.jsx";
import { ScrollToTop } from "./components/index.js";
import { FilterProvider, CartProvider } from "./context";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <CartProvider>
        <FilterProvider>
          <ScrollToTop />
          <ToastContainer autoClose={3000} position={"bottom-right"} />
          <App />
        </FilterProvider>
      </CartProvider>
    </Router>
  </StrictMode>
);
