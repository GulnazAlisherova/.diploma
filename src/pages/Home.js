import Header from "../components/Header/Header";
import headerImage from "../assets/headerr.png";
// import CategoryList from "../components/CategoryList/CategoryList";
// import { getCategories } from "../data/categories";
function Home() {
  return (
    <>
      <Header
        title="Pottery"
        image={headerImage}
        p="Book a table"
      >
        Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam
        amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit
        clita duo justo magna dolore erat amet
      </Header>
    </>
  );
}

export default Home;