import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom"
function App() {
  const user = true;
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="products" element={<ProductList/>}/>
        <Route path="products/:category" element={<ProductList/>}/>
        <Route path="product/:id" element={<Product/>}/>
        <Route path="cart" element={<Cart/>}/>
        <Route path="login" element={ user ? <Navigate to="/" replace/> : <Login/>} />
        <Route path="register" element={ user ? <Navigate to="/" replace/> : <Register/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
