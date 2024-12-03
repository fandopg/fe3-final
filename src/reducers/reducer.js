export const reducer = (state, action) => {
    switch (action.type) {
      case "cambiarTema":
        if (state.tema === "claro") {
                return {...state, tema: "oscuro"}
            } else {
                return {...state, tema: "claro"}
            }
        case "addFavs": 
            return {...state, favs: [...state.favs, action.payload]}
      default:
        throw new Error("Error accion no existente");
        
    }
  } 