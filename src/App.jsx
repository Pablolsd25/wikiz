import CharacterList from "./components/CharacterList";
import PlanetList from "./components/PlanetList";
import CharacterDetail from "./components/CharacterDetail";
import PlanetsContainer from "./components/PlanetsContainer";
export default function App() {
  return (
    <>
      <div>
        <h1>Personajes</h1>

        <CharacterList />
        <br />
        <br />
        <h1>Planetas</h1>
        <PlanetsContainer />
        <br />
        <br />
        <CharacterDetail characterId={2} />
      </div>
    </>
  );
}
