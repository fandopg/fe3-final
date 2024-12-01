import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom'
import doctorImg from "/images/doctor.jpg"


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
 
  const params = useParams()

  const url = `https://jsonplaceholder.typicode.com/users/${params.id}`

  const [dentista, setDentista] = useState({})
  
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
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
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
      <h3>{dentista.name}</h3>
      <img src={doctorImg} alt="imagen doctor" width="20%"/>
      <h4>{dentista.email}</h4>
      <h4>{dentista.phone}</h4>
      <h4>{dentista.website}</h4>
    </>
  )
}

export default Detail