import React from 'react'
import { Link } from 'react-router-dom'
import { globalState } from './utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context
const Navbar = () => {

  const {state, dispatch} = globalState()
  
  return (
    <nav>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <Link to="/"><ul>HOME</ul></Link>
      <Link to="/contacto"><ul>CONTACTO</ul></Link>
      <Link to="/favoritos"><ul>FAVORITOS</ul></Link>
      <button onClick={() => dispatch({type: "cambiarTema"})}> Change theme </button>
    </nav>
  )
}

export default Navbar