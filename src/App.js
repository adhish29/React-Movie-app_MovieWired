import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Segments from "./components/Segments";
import Favourites from "./components/Favourites";
import Popular from "./components/Popular";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Segments />
        <Routes>
          <Route path="/" element={<Popular />} />
          <Route path="/popular" element={<Popular />} />
          <Route path="/favourites" element={<Favourites />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
