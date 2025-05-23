import { BrowserRouter, Routes, Route } from "react-router-dom";


import Header from "./componentes/Header";
import Home from "./pages/Home";


import Login from "./pages/Login";
import Cortes from "./pages/Cortes";
import Cadastro from "./pages/Cadastro";


// rotas de navegação do site 
export default function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/cadastro" element={<Cadastro/>} />
        <Route path="/cortes" element={<Cortes/>} />
      </Routes>
    </BrowserRouter>
  );
}
