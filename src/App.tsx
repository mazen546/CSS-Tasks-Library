import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import { components } from "./components/componentsData";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {components.map((nav, i) => (
          <Route key={i} path={nav.route} element={<nav.element />} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
