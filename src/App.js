import Home from "./pages/Home";
import Contacts from "./pages/Contacts";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import NotFound from "./pages/NotFound";
import Products from "./pages/Products";
import About from "./pages/About";

function App() {
  return (
    <div className="App">

      <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      </Layout>

    </div>
  );
}

export default App;
