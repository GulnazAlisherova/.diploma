import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";

import Home from "./pages/Home";
import Contacts from "./pages/Contacts";
import Products from "./pages/Products";
import About from "./pages/About";

function App() {
  return (
    <div className="App">
      <Nav />
      <Header />

      <Home />
      <About/>
      <Products />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
