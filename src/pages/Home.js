import Header from "../components/Header/Header";
import headerImage from "../assets/headerr.png";
import CategoryList from "../components/CategoryList/CategoryList";
import { getCategories } from "../data/categories";

function Home(){
  return(
    <>
    <Header
      title="Welcome to our Pottery Studio!"
      image={headerImage}>
    Pottery is the process and the products of forming vessels and other objects with clay and other ceramic materials, which are fired at high temperatures to give them a hard and durable form.
    </Header>

    <CategoryList categories={getCategories()} />
    </>
  );
}
export default Home;