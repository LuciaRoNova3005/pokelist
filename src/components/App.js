import "../stylesheets/App.css";
import list from "../data/list.json";
import Pokelist from "./Pokelist";
import React, { useState } from "react";

function App() {
  const [pokemonData] = useState(list);
  return (
    <>
      <header>
        <h1 className="tittle tittle1">Mi lista de pokemon</h1>
      </header>
      <main>
        <Pokelist dataList={pokemonData} />
      </main>
    </>
  );
}

export default App;
