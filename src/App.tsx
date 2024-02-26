
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/login/Login';
import NavBar from './components/navBar/NavBar';
import Footer from './components/footer/Footer';
import { AuthProvider } from './contexts/AuthContext';
import FormularioTema from './components/temas/formularioTema/FormularioTema';
import DeletarTema from './components/temas/deletarTema/DeletarTema';
import Cadastro from './pages/cadastro/Cadastro';
import Home from './pages/home/Home';
import ListaTemas from './components/temas/listaTemas/ListaTemas';



function App() {

  return (
    <>
    <AuthProvider>
        <BrowserRouter>
          <NavBar />
          <div className='min-h-[80vh]'>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/login" element={<Login />} />
              <Route path="/cadastro" element={<Cadastro />} />
              <Route path="/home" element={<Home />} />
              <Route path="/temas" element={<ListaTemas />} />
              <Route path="/cadastroTema" element={<FormularioTema/>} />
              <Route path="/editarTema/:id" element={<FormularioTema/>} />
              <Route path="/deletarTema/:id" element={<DeletarTema/>} />
              
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
        </AuthProvider>
    </>
  );
}

export default App;