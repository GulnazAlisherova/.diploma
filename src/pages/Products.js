import Header from "../components/Header/Header";
import headerImage from "../assets/products.jpg";

function Products(){
  return(
    <>
    <Header
      title="Pick your type!"
      image={headerImage}>
    Pottery is made by forming a ceramic (often clay) body into objects of a desired shape and heating them to high temperatures in a bonfire.  
    </Header>
    </>
  );
}
export default Products;