import Card from "../Components/Card";
import { globalState } from "../Components/utils/global.context";

const Favs = () => {

  const {state, dispatch} = globalState()

  const deleteFav = (id) => {
    if (confirm("¿Esta seguro de eliminar de favoritos?")) {
      const newFavs = state.favs.filter(dentArray => dentArray.id != id)
      dispatch({type: "DELETE_FAVS", payload: newFavs})
    }
  }
  
  return (
    <>
      <h1>Favoritos</h1>
      <div className="card-grid">

      {state.favs.length != 0 ? (state.favs.map((dentista) => (
            <Card key={dentista.id} dentista={dentista}>
              <button onClick={() => {deleteFav(dentista.id)}}  className="delButton">Eliminar 🗑</button>  
             </Card>
          ))) : <h3>Agregue favoritos desde home</h3>}      
      </div>
    </>
  );
};

export default Favs;
