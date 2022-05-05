import Home from "./pages/Home";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Products from "./pages/Products";

import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";

import Process from "./pages/Process";


function App() {
  return (
    <div className="App">

      <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/process" element={<Process />} />
      </Routes>
      </Layout>

    </div>
  );
}

export default App;
