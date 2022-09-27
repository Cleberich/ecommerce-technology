import './App.css';
import BasicExample from './Components/Navbar/Navbar'
import TextoPrincipal from './Components/TextoPrincipal/TextoPrincipal';
import Filtros from './Components/Filtros/Filtros'
import Products from './Products/Products'
import Portada from './Components/Portada/Portada';
function App() {
  return (
    <div className="App">
      <BasicExample/>
      <Portada />
      <div className="body">
      <TextoPrincipal/>
      <Filtros/>
      <h2 className="h2titulo mt-5 mb-4 text-start">Todos los modelos. <span className="h2titulospan"> Elegí el tuyo hoy!</span></h2>
      <Products/>
      </div>
    </div>
  );
}

export default App;
