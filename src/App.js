import './App.css';
import NavBar from './Components/Navbar/Navbar'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartContextProvider } from './Context/CartContext';
import Cart from './Components/Cart/Cart'
import Checkout from './Components/Checkout/Checkout'
import PageError404 from './Components/PageError404/PageError404'
import PerfilUsuario from './Components/PerfilUsuario/PerfilUsuario';

function App() {

  return (
    <div className="App bg-light vh-100">
      <CartContextProvider>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}  /> 
          <Route path='/category/:categoryId' element={<ItemListContainer/>}  /> 
          <Route path='/detalles/:productId' element={<ItemDetailContainer/>}  />  
          <Route path='/cart/' element={<Cart/>}  />  
          <Route path='/checkout/' element={<Checkout/>}  />  
          <Route path='/*' element={<PageError404/>}  />  
          <Route path='/perfil' element={<PerfilUsuario/>}  />  
        </Routes>
      </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;
