import { useState, useEffect } from "react";
import { fecthCharacters } from "../services/apiServices";

export default function CharacterList() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getCharacters = async () => {
      try {
        setLoading(true);
        const data = await fecthCharacters();
        setCharacters(data.items);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    getCharacters();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <ul>
      {characters.map((character) => (
        <li key={character.id}>{character.name}</li>
      ))}
    </ul>
  );
}
