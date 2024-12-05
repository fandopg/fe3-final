export const reducer = (state, action) => {
    switch (action.type) {
        case "GET_DENTIST":
            return {...state, dentistas: action.payload}

        case "CHANGE_THEME":
            if (state.tema === "light") {
                    return {...state, tema: "dark"}
                } else {
                    return {...state, tema: "light"}
                }

        case "ADD_FAVS": 
            return {...state, favs: [...state.favs, action.payload]}

        case "DELETE_FAVS": 
            return {...state, favs: action.payload}

        case "LOADING":
            return {...state, loading: action.payload}
            
      default:
        throw new Error("Error accion no existente");
        
    }
  } 