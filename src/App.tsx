import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
import ListaCategoria from "./components/categoria/listacategoria/ListaCategoria";
import FormCategoria from "./components/categoria/formcategoria/FormCategoria";
import DeletarCategoria from "./components/categoria/deletarcategoria/DeletarCategoria";

function App() {
  return (
    <div className="w-full">
      <BrowserRouter>
        <Navbar />
        <div className="h-fit">
          <Routes>
            <Route path="/"element={<Home />}/>
            <Route path="/home"element={<Home />}/>
            <Route path="/categoria"element={<ListaCategoria />}/>
            <Route path="/cadastrar"element={<FormCategoria />}/>
            <Route path="/cadastrar/:id"element={<FormCategoria />}/>
            <Route path="/deletar/:id"element={<DeletarCategoria />}/>

          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
