import Home from "./pages/Home";
import Product from "./pages/Product";
import Contacts from "./pages/Contacts";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import NotFound from "./pages/NotFound";
import Products from "./pages/Products";
import About from "./pages/About";
import Footer from "./components/Footer/Footer";
import Categories from "./pages/Categories";
import Category from "./pages/Category";

function App() {
  return (
    <div className="App">

      <Layout>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />

          <Route path="/products/:productId" element={<Product />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/categories/:categoryId" element={<Category />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
      <Footer />
    </div>
  );
}

export default App;
