import React from "react";
import AllRoutes from "./routes/AllRoutes";
import { Footer, Header } from "./components";

const App = () => {
  return (
    <div className="App dark:bg-dark">
      <Header />
      <AllRoutes />
      <Footer />
    </div>
  );
};

export default App;
