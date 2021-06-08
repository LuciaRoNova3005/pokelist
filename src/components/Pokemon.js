function Pokemon(props) {
  return (
    <div className="card">
      <img src={props.img} alt={props.name}></img>
      <div className="container-info">
        <h2>{props.name}</h2>
        <div>
          {props.types.map((element) => (
            <p>{element}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Pokemon;
