import './App.css';
import BasicExample from './Components/Navbar/Navbar'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
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
          <Route path='/' element={<ItemListContainer/>}  /> 
          <Route path='/category/:categoryId' element={<ItemListContainer/>}  /> 
          <Route path='/detalles/:productId' element={<ItemDetailContainer/>}  />  
          <Route path='/cart/' element={<Cart/>}  />  
          <Route path='/checkout/' element={<Checkout/>}  />  
        </Routes>
      </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;
