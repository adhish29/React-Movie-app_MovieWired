import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Segments from "./components/Segments";
import Favourites from "./components/Favourites";
import Popular from "./components/Popular";
import SingleMovie from "./components/SingleMovie";
import MyProvider from "./context/FavouriteContext";

function App() {
  return (
    <div className="App">
      <MyProvider>
        <BrowserRouter>
          <NavBar />
          <Segments />
          <Routes>
            <Route path="/" element={<Popular />} />
            <Route path="/popular" element={<Popular />} />

            <Route path="/favourites" element={<Favourites />} />
            <Route path="/movies/:id" element={<SingleMovie />} />
          </Routes>
        </BrowserRouter>
      </MyProvider>
      <Footer />
    </div>
  );
}

export default App;
