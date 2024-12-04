import { Link } from "react-router-dom";
import doctorImg from "/images/doctor.jpg"

const Card = ({dentista, children}) => {

  return (
    <div className="card">
        <Link to={`/detalle/${dentista.id}`}>
          <h3>{dentista.name}</h3>
          <img src={doctorImg} alt="imagen doctor" width="100%"/>
          <h2>{dentista.username}</h2>
        </Link>
        
        {children}
    </div>
  );
};

export default Card;
