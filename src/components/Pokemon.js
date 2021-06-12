function Pokemon(props) {
  return (
    <ul className="card">
      <li>
        <img className="image" src={props.img} alt={props.name}></img>
      </li>

      <li className="tittle">{props.name}</li>

      <ul className="types">
        {props.types.map((element) => (
          <li className="text">{element}</li>
        ))}
      </ul>
    </ul>
  );
}

export default Pokemon;
