import './App.css';
import { Header } from './components/Header';
import { Card } from './components/Card';
import {imagen1, imagen2, imagen3} from './assets/img'
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header title= "Galería de Imágenes con React"></Header>
      <main className='contenedorCards'>
        <Card url={imagen1} title= "Van Damme" description="Esta es la descripcion del perro 1" ></Card>
        <Card url={imagen2} title= "Schwarzenegger" description="Esta es la descripcion del perro 2" ></Card>
        <Card url={imagen3} title= "Stallone" description="Esta es la descripcion del perro 2" ></Card>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
