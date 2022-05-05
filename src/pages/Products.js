import Header from "../components/Header/Header";
import headerImage from "../assets/products.jpg";
import Types from "../components/Types/Types";
import ProductItem from "../components/ProductList/ProductItem/ProductItem";

function Products(){
  const product = {};
  return(
    <>
    <Header
      title="Pick your type!"
      image={headerImage}>
    Pottery is made by forming a ceramic (often clay) body into objects of a desired shape and heating them to high temperatures in a bonfire.  
    </Header>

    <Types product={product}/>
    </>
  );
}
export default Products;