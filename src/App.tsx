import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./page";
import "./App.css";
import "./_styles/styles.css";
import "./_styles/colors.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
