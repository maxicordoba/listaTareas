import React from "react";
import ItemTarea from "./ItemTarea";

const ListaTareas = (props) => {
  return (
    <ul className="list-group my-5">
      {
        props.arregloTareas.map((elemento, indice)=> <ItemTarea key={indice} dato={elemento} borrarTarea={props.borrarTarea} ></ItemTarea>)
      }
    </ul>
  );
};

export default ListaTareas;