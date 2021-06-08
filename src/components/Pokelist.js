import list from "../data/list.json";
import Pokemon from "./Pokemon";

const Pokelist = (props) => {
  return (
    <ul>
      {list.map((element) => (
        <li>
          <Pokemon
            img={element.url}
            name={element.name}
            types={element.types}
          ></Pokemon>
        </li>
      ))}
    </ul>
  );
};

export default Pokelist;
