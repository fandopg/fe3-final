import { createContext, useContext, useEffect, useReducer } from "react";
import { reducer } from "../../reducers/reducer";

const ContextGlobal = createContext();

const localFavs = JSON.parse(localStorage.getItem("favs"))
const localTema = JSON.parse(localStorage.getItem("tema"))

const initialState = {
  tema: localTema || "light",
  favs: localFavs || []
}

const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    localStorage.setItem("favs", JSON.stringify(state.favs))
    localStorage.setItem("tema", JSON.stringify(state.tema))
  }, [state])
  

  return (
    <ContextGlobal.Provider value={{state, dispatch}}>
      {children}
    </ContextGlobal.Provider>
  );
};

export default ContextProvider



export const globalState = () => useContext(ContextGlobal)