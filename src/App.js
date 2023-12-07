import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Inicio';
import Footer from './components/Footer';
import Galeria from './components/Galeria';
import Contacto from './components/Contacto';
import Nosotros from './components/Nosotros';
import Quienes from './components/Quienes';

function App() {
  return (
    <div>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/galeria" element={<Galeria />}></Route>
          <Route path="/contacto" element={<Contacto />}></Route>
          <Route path="/nosotros" element={<Nosotros />}></Route>
          <Route path="/quienes" element={<Quienes />}></Route>
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
