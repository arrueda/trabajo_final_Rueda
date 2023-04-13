import Navbar from './Components/Nabvar/Nabvar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

/* import Comerciales from "./Compounents/Routes/Comerciales/ItemListContainerRefrig";
import ComercialesId from "./Compounents/Routes/Comerciales/ItemDetailContainerRefrig";
import DataProvider from "./Compounents/Context/DataContext";
import DetailItemCarrito from "./Compounents/Routes/Comerciales/DetailItemCarrito"
 */
import Home from './Components/Routes/Home/Home';
import CartContent from './Components/Routes/CartContent/CartContent';
import Products from './Components/Routes/Products/Products';
import ProductId from './Components/ProductId/ProductId';
import CartElementsId from './Components/Routes/CartContent/CartElementsId';
import { ShoppingCart } from './Components/Routes/CartContent/handleAddToCart';


function App() {

  return (
    <div className="App">
      {/* <DataProvider> */}
        <BrowserRouter>
            <Navbar />
            <Routes>
              <Route exact path="/" element={ <Home /> } />
              <Route exact path="/cart" element={ <CartContent /> } />
              <Route exact path="/cart/:id" element={ <CartElementsId /> } />
              <Route exact path="/productos" element={ <Products /> } />
              <Route exact path="/productos/:id" element={ <ProductId /> } />
              <Route exact path="/shoppingcart" element={ <ShoppingCart /> } />        
              {/* <Route exact path="/cart/:id" element={ <DetailItemCarrito /> } /> */}
              
            </Routes>
          </BrowserRouter>
      {/* </DataProvider> */}

    </div>
  );
}

export default App;
