import axios from 'axios';
import { useState } from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom'
import doctorImg from "/images/doctor.jpg"

const Detail = () => {
 
  const params = useParams()

  const url = `https://jsonplaceholder.typicode.com/users/${params.id}`

  const [dentista, setDentista] = useState({})
  
  useEffect(() => {
    axios(url).then((res) => {
      setDentista(res.data)
    }).catch((err) => {
      console.log(err)
    })
    }, [])
  
  return (
    <>
      <h1>Detalles del dentista:</h1>
      <h3>{dentista.name}</h3>
      <img src={doctorImg} alt="imagen doctor" width="20%"/>
      <h4>{dentista.email}</h4>
      <h4>{dentista.phone}</h4>
      <h4>{dentista.website}</h4>
    </>
  )
}

export default Detail