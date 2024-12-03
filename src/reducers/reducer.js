export const reducer = (state, action) => {
    switch (action.type) {
      case "cambiarTema":
        if (state.tema === "light") {
                return {...state, tema: "dark"}
            } else {
                return {...state, tema: "light"}
            }
        case "addFavs": 
            return {...state, favs: [...state.favs, action.payload]}
      default:
        throw new Error("Error accion no existente");
        
    }
  } 