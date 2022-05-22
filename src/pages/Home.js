import Header from "../components/Header/Header";
import headerImage from "../assets/home.png";
import CategoryList from "../components/CategoryList/CategoryList";
import { getCategories } from "../data/categories";

function Home() {
  return (
    <>
    <Header
      title="Welcome to our ceramic shop!"
      image={headerImage}>
      A ceramic is any of the various hard, brittle, heat-resistant and corrosion-resistant materials made by shaping and then firing an inorganic
    </Header>
    <CategoryList categories={getCategories()} />
   
   
   </>
  );
}
export default Home;
