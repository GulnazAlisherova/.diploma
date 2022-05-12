import { useParams } from "react-router-dom";
import Header from "../components/Header/Header";
import headerImage from "../assets/header.webp";
import { getProducts } from "../data/products";
import ProductList from "../components/ProductList/ProductList";

function Products() {
  const params = useParams();
  const product = getProducts(params.productId);

  if (!product) { 
    return null;
  }

  return (
    <>
      <Header
        title="Pick your type of pottery!"
        image={headerImage}>
        A ceramic is any of the various hard, brittle, heat-resistant and corrosion-resistant materials made by shaping and then firing an inorganic, nonmetallic material, such as clay, at a high temperature.
      </Header>
      
      <ProductList products={getProducts()} />
    </>
  );
}

export default Products;