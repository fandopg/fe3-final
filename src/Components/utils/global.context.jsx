import { createContext, useContext, useEffect, useReducer } from "react";
import { reducer } from "../../reducers/reducer";
import axios from "axios";

const ContextGlobal = createContext();

const localFavs = JSON.parse(localStorage.getItem("favs"))
const localTema = JSON.parse(localStorage.getItem("tema"))

const initialState = {
  dentistas: [],
  tema: localTema || "light",
  favs: localFavs || []
}

const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const url = `https://jsonplaceholder.typicode.com/users`

  useEffect(() => {
    axios(url).then((res) => {
      dispatch({ type: "GET_DENTIST", payload: res.data });
    });
  }, []);

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