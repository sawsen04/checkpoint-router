import React, { useState } from "react";
import SectionOne from "../components/SectionOne";
import SectionTwo from "../components/SectionTwo";
import FooterTwo from "../components/FooterTwo";
function Movies({ movies, setMovies }) {
  const [search, setSearch] = useState("");
  const [rate, ratingChanged] = useState(0);
  return (
    <div>
      <SectionOne setSearch={setSearch} ratingChanged={ratingChanged} />
      <SectionTwo
        movies={movies}
        setMovies={setMovies}
        search={search}
        rate={rate}
      />
      <FooterTwo />
    </div>
  );
}

export default Movies;
