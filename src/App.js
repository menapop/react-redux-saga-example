import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./components/Home/Home";
function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" exact element={<Home />} />
        {/* <Route path="/:id"   element={Singlepost }  /> */}
      </Routes>
    </div>
  );
}

export default App;
