function Pokemon(props) {
  return (
    <div className="card">
      <img className="image" src={props.img} alt={props.name}></img>

      <h2 className="tittle">{props.name}</h2>

      <div className="types">
        {props.types.map((element) => (
          <p className="text">{element}</p>
        ))}
      </div>
    </div>
  );
}

export default Pokemon;
