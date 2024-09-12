import { useState, useEffect } from "react";
import { fetchPlanets } from "../services/apiServices";

export default function PlanetList() {
  const [planets, setPlanets] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getPlanets = async () => {
      try {
        setLoading(true);
        const data = await fetchPlanets();
        setPlanets(data.items);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    getPlanets();
  }, []);

  if (loading) {
    return <div>Loading planets...</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <ul>
      {planets.map((planet) => (
        <li key={planet.id}>{planet.name}</li>
      ))}
    </ul>
  );
}
