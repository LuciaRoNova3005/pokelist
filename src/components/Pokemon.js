function Pokemon(props) {
  return (
    <div>
      <img src={props.img} alt={props.name}></img>
      <h2>{props.name}</h2>
      <div>
        {props.types.map((element) => (
          <p>{element}</p>
        ))}
      </div>
    </div>
  );
}

export default Pokemon;
