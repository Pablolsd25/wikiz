// src/components/CharacterDetail.js

import { useState, useEffect } from "react";
import { fetchCharacterById } from "../services/apiServices"; // Importa la función fetchCharacterById

const CharacterDetail = ({ characterId }) => {
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getCharacter = async () => {
      try {
        setLoading(true);
        const data = await fetchCharacterById(characterId); // Llama a la función del servicio
        setCharacter(data); // Actualiza el estado con los detalles del personaje
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    getCharacter(); // Ejecuta la función para obtener los detalles del personaje
  }, [characterId]);

  if (loading) return <div>Loading character details...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return character ? (
    <div>
      <h2>{character.name}</h2>
      <p>{character.description}</p>
    </div>
  ) : (
    <div>No character found</div>
  );
};

export default CharacterDetail;
