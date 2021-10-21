function PokemonFav(props) {
  return (
    <div>
      <h2 className="tittle tittle2">Pokemon Favoritos</h2>
      <div className="container">
        <ul className="card" key={props.key} id={props.id}>
          <li>
            <img className="image" src={props.img} alt={props.name}></img>
          </li>

          <li className="tittle">{props.name}</li>

          <ul className="types">
            {props.types.map((element, index) => (
              <li className="text" key={index}>
                {element}
              </li>
            ))}
          </ul>
        </ul>
      </div>
    </div>
  );
}

export default PokemonFav;
