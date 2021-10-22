import "../stylesheets/App.scss";
import list from "../data/list.json";
import Pokelist from "./Pokelist";
import React, { useState } from "react";
import Pokelistfav from "./Pokelistfav";

function App(props) {
  const [data] = useState(list);
  const [pokemonFav, setFavs] = useState([]);

  const handleFav = (ev) => {
    const favPokeId = data.find(
      (fav) => fav.id === parseInt(ev.currentTarget.id)
    );

    if (!pokemonFav.includes(favPokeId)) {
      setFavs([...pokemonFav, favPokeId]);
      console.log(pokemonFav);

      return;
    }
    const newFavoriters = pokemonFav.filter(
      (pokemon) => pokemon.id !== parseInt(ev.currentTarget.id)
    );
    setFavs(newFavoriters);
    console.log(pokemonFav);
  };
  console.log(pokemonFav);
  return (
    <>
      <header>
        <h1 className="tittle tittle1">Mi lista de pokemon</h1>
      </header>
      <main>
        <Pokelist dataList={list} handleFav={handleFav} />
        <Pokelistfav dataFav={pokemonFav} handleFav={handleFav}></Pokelistfav>
      </main>
    </>
  );
}

export default App;
