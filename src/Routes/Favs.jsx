import React from "react";
import Card from "../Components/Card";
import { globalState } from "../Components/utils/global.context";


const Favs = () => {

  const {state} = globalState()
  
  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">

      {state.favs.length != 0 ? (state.favs.map((dentista) => (
            <Card key={dentista.id} dentista={dentista} />
          )))  : <h3>Agregue favoritos desde home</h3>}      
      </div>
    </>
  );
};

export default Favs;
