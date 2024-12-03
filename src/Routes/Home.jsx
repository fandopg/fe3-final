import { useEffect, useState } from 'react'
import Card from '../Components/Card'
import axios from "axios"

const Home = () => {
  const [dentistas, setDentistas] = useState([])

  const url = `https://jsonplaceholder.typicode.com/users`

  useEffect(() => {
    axios(url).then((res) => {
      setDentistas(res.data)
    })
  }, [])
  return (
    <main className="" >
      <h1>Dentistas</h1>
      <div className='card-grid'>
        {/* Aqui deberias renderizar las cards */}
        {
          dentistas.map((dentista) => (
            <Card key={dentista.id} dentista={dentista} />
          ))
        }

      </div>
    </main>
  )
}

export default Home