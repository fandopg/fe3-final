import Card from '../Components/Card'
import { globalState } from '../Components/utils/global.context'

const Home = () => {
  const {state, dispatch} = globalState()
  
  const addFav = (dentista)=>{
    const enArray = state.favs.some(dentArray => dentArray.id == dentista.id)
    if (enArray) {
      alert("Dentista ya se encuentra en favoritos")
    } else {
      dispatch({type: "ADD_FAVS", payload: dentista})
      alert("Dentista agregado a favoritos")
    }
  }

  return (
    <main className="" >
      <h1>Dentistas</h1>
      <div className='card-grid'>
        {
          state.dentistas.map((dentista) => (
            <Card key={dentista.id} dentista={dentista}>
              <button onClick={() => {addFav(dentista)}}  className="favButton">Agregar a favoritos ⭐</button>
            </Card>
          ))
        }
      </div>
    </main>
  )
}

export default Home