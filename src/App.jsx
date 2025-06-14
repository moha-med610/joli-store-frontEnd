
import { Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
// import Cart from "./pages/Cart";
import Nav from "./components/Home/Nav";
import ScrollToTop from "./components/ScrollToTop";
import ComingSoon from "./pages/comingSoon";


function App() {
  return (
    <>
      <ScrollToTop />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<ComingSoon />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}


export default App
