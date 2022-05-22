import Header from "../components/Header/Header";
import headerImage from "../assets/product.jpg";
import ProductList from "../components/ProductList/ProductList";
import { getProducts } from "../data/products";

function Products() {
  return (
    <>
      <Header
        title="Pick your type of pottery!"
        image={headerImage}>
        To create a piece of pottery, the potter must form a ceramic/clay body into a specific object, whether by hand built or wheel thrown techniques, and then heat it at a high temperature in a kiln to remove water from the clay.
      </Header>

      <ProductList products={getProducts()} />
    </>
  );
}
export default Products;