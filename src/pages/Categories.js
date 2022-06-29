import Header from "../components/Header/Header";
import headerImage from "../assets/product.jpg";
import { getCategories } from "../data/categories";
import CategoryList from "../components/CategoryList/CategoryList";

function Categories() {
  return (
    <>
      <Header
        title="Find something for yourself!"
        image={headerImage}>
        Ceramic artifacts have an important role in archaeology for understanding the culture, technology, and behavior of peoples of the past. 
      </Header>

      <CategoryList categories={getCategories()} />
    </>
  );
}

export default Categories;