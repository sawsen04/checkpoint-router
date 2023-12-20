import "./App.css";
import Home from "./pages/Home";
import React, { useState } from "react";
/*import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";
import FooterOne from "./components/FooterOne";
import FooterTwo from "./components/FooterTwo"*/
import { Routes, Route } from "react-router-dom";
import PublicLayout from "./layouts/PublicLayout";
import Movies from "./pages/Movies";
import { data } from "./data";
import Movie from "./pages/Movie";
function App() {
    const [movies, setMovies] = useState(data);
  return (
    <Routes>
      <Route path="/" element={<PublicLayout />}>
        <Route index element={<Home />} />
        <Route
          path="Movies"
          element={<Movies movies={movies} setMovies={setMovies} />}
        />
        <Route path="/Movie/:id" element={<Movie movies={movies} />} />
      </Route>
    </Routes>
  );
}

export default App;
