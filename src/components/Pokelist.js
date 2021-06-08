import React from "react";
import Pokemon from "./Pokemon";

const Pokelist = (props) => {
  return (
    <ul>
      {props.dataList.map((element) => (
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
