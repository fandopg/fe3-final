import { useEffect, useState } from 'react'
import Card from '../Components/Card'
import axios from "axios"
import { globalState } from '../Components/utils/global.context'

const Home = () => {
  const [dentistas, setDentistas] = useState([])
  const {state, dispatch} = globalState()
  const url = `https://jsonplaceholder.typicode.com/users`

  useEffect(() => {
    axios(url).then((res) => {
      setDentistas(res.data)
    })
  }, [])

  const addFav = (dentista)=>{
    const enArray = state.favs.some(dentArray => dentArray.id == dentista.id)
    if (enArray) {
      alert("Dentista ya se encuentra en favoritos")
    } else {
      dispatch({type: "addFavs", payload: dentista})
      alert("Dentista agregado a favoritos")
    }
  }

  return (
    <main className="" >
      <h1>Dentistas</h1>
      <div className='card-grid'>
        {
          dentistas.map((dentista) => (
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