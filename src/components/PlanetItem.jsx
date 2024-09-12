// src/components/PlanetItem.js

const PlanetItem = ({ planet }) => {
  if (!planet) {
    return <div>No planet data available</div>;
  }

  return (
    <div className="planet-item">
      <img src={planet.image} alt={planet.name} className="planet-image" />
      <h3>{planet.name}</h3>
    </div>
  );
};

export default PlanetItem;
