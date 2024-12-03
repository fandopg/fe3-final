
import { Route, Routes } from "react-router-dom";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Favs from "./Routes/Favs";
import Detail from "./Routes/Detail";
import { globalState } from "./Components/utils/global.context";
import Layout from "./Layouts/Layout";


function App() {
  const {state} = globalState()

  return (
      <div className={`app ${state.tema}`}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/contacto" element={<Contact />} />
            <Route path="/favoritos" element={<Favs />} />
            <Route path="/detalle/:id" element={<Detail />} />
            <Route path="*" element={<h1>Nada por aqui </h1>} />
          </Route>
        </Routes>
      </div>
  );
}

export default App;
