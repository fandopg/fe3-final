import { createContext, useContext, useState } from "react";

const ContextGlobal = createContext();

const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  const [tema, setTema] = useState("claro")

  const cambiarTema = () => {
    if (tema === "claro") {
      setTema("oscuro");
    } else {
      setTema("claro");
    }
  }

  return (
    <ContextGlobal.Provider value={{tema, setTema, cambiarTema}}>
      {children}
    </ContextGlobal.Provider>
  );
};

export default ContextProvider



export const temaState = () => useContext(ContextGlobal)