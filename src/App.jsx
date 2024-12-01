
import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Favs from "./Routes/Favs";
import Detail from "./Routes/Detail";
import { temaState } from "./Components/utils/global.context";


function App() {
const {tema} = temaState()

  return (
      <div className={`App ${tema}`}>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/favoritos" element={<Favs />} />
          <Route path="/detalle/:id" element={<Detail />} />
          <Route path="*" element={<h1>Nada por aqui </h1>} />
        </Routes>
        <Footer/>

      </div>
  );
}

export default App;
