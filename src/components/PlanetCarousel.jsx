// src/components/PlanetCarousel.js

import PlanetItem from "./PlanetItem";
import "./PlanetCarousel.css";

const PlanetCarousel = ({ planets, onNext, onPrev }) => {
  return (
    <div className="carousel">
      <button onClick={onPrev}>Previous</button>
      <div className="carousel-content">
        {planets.length > 0 && <PlanetItem planet={planets[0]} />}
      </div>
      <button onClick={onNext}>Next</button>
    </div>
  );
};

export default PlanetCarousel;
