import React from "react";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import "./Movie.css";
function Movie({ movies }) {
  let { id } = useParams();
  let Movie = movies.find((movie) => movie.id === id);
  return (
    <div className="extra-info">
      <ReactPlayer url={Movie.trailer} />
      <p className="desc">Description: {Movie.description}</p>
    </div>
  );
}

export default Movie;
