import { Link } from 'react-router-dom'
import { globalState } from './utils/global.context'

const Navbar = () => {

  const {state, dispatch} = globalState()
  
  return (
    <nav>
      <Link to="/"><ul>HOME</ul></Link>
      <Link to="/contacto"><ul>CONTACTO</ul></Link>
      <Link to="/favoritos"><ul>FAVORITOS</ul></Link>
      <button className="theme-button" onClick={() => dispatch({type: "cambiarTema"})}> Cambiar tema {
        state.tema == "dark" ? "🌛" : "🌞"
        } </button>
    </nav>
  )
}

export default Navbar