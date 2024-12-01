import React from "react";
import { Link } from "react-router-dom";
import doctorImg from "/images/doctor.jpg"

const Card = ({dentista}) => {

  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
    
  }

  return (
    <div className="card">
        {/* En cada card deberan mostrar en name - username y el id */}

        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <Link to={`/detalle/${dentista.id}`}>
          <h3>{dentista.name}</h3>
          <img src={doctorImg} alt="imagen doctor" width="100%"/>
          <h2>{dentista.username}</h2>
        </Link>
        <button onClick={addFav} className="favButton">Add fav</button>
    </div>
  );
};

export default Card;
