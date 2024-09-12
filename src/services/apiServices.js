const BASE_URL = "https://dragonball-api.com/api";

export const fecthCharacters = async () => {
  try {
    const response = await fetch(`${BASE_URL}/characters`);
    if (!response.ok) {
      throw new Error(`Error fetching characters: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Fetch characters failed:", error);
    throw error;
  }
};

export const fetchPlanets = async () => {
  try {
    const response = await fetch(`${BASE_URL}/planets`);
    if (!response.ok) {
      throw new Error(`Error fetching planets: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Fetch planets failed:", error);
    throw error;
  }
};

export const fetchCharacterById = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/characters/${id}`);
    if (!response.ok) {
      throw new Error(`Error fetching character by id: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error(`Fetch character by ID failed for ID ${id}`, error);
    throw error;
  }
};
