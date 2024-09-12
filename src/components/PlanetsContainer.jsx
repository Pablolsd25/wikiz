// src/components/PlanetsContainer.js

import { useState, useEffect } from "react";
import { fetchPlanets } from "../services/apiServices";
import PlanetCarousel from "./PlanetCarousel";

const PlanetsContainer = () => {
  const [planets, setPlanets] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const getPlanets = async () => {
      try {
        setLoading(true);
        const data = await fetchPlanets();
        setPlanets(data.items || []);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    getPlanets();
  }, []);

  const nextPlanet = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % planets.length);
  };

  const prevPlanet = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? planets.length - 1 : prevIndex - 1
    );
  };
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <PlanetCarousel
      planets={[planets[currentIndex]]}
      onNext={nextPlanet}
      onPrev={prevPlanet}
    />
  );
};

export default PlanetsContainer;
