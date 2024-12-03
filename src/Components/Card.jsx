import { Link } from "react-router-dom";
import doctorImg from "/images/doctor.jpg"
import { globalState } from "./utils/global.context";


const Card = ({dentista}) => {

  const {dispatch} = globalState()

  const addFavLocal = (dentista)=>{
    dispatch({type: "addFavs", payload: dentista})
    alert("Dentista agregado a favoritos")
  }

  return (
    <div className="card">
        <Link to={`/detalle/${dentista.id}`}>
          <h3>{dentista.name}</h3>
          <img src={doctorImg} alt="imagen doctor" width="100%"/>
          <h2>{dentista.username}</h2>
        </Link>
        <button onClick={() => {addFavLocal(dentista)}}  className="favButton">Agregar a favorito</button>
    </div>
  );
};

export default Card;
