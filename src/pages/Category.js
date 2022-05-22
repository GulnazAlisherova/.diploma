import { useParams } from "react-router-dom";
import Header from "../components/Header/Header";
import ProductList from "../components/ProductList/ProductList";
import { getCategory } from "../data/categories";
import { getProducts } from "../data/products";

function Category() {
  const params = useParams();
  const category = getCategory(params.categoryId);

  if (!category) {
    return null;
  }

  return (
    <>
      <Header
        title={category.title}
        image={category.image}>
        {category.desciption}
      </Header>
      <ProductList products={getProducts()}/>
    </>
  );
}

export default Category; 