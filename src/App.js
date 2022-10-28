import './App.css';
import BasicExample from './Components/Navbar/Navbar'
import Products from './Products/Products'
import DetallesDelProducto from './Components/DetallesDelProducto/DetallesDelProducto';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartContextProvider } from './Context/CartContext';
import Cart from './Components/Cart/Cart'
import Checkout from './Components/Checkout/Checkout'

function App() {
  return (
    <div className="App bg-light vh-100">
      <CartContextProvider>
      <BrowserRouter>
        <BasicExample/>
        <Routes>
          <Route path='/' element={<Products/>}  /> 
          <Route path='/detalles/:productId' element={<DetallesDelProducto/>}  />  
          <Route path='/cart/' element={<Cart/>}  />  
          <Route path='/checkout/' element={<Checkout/>}  />  
        </Routes>
      </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;
