import notfoundImage from "../assets/notfound.png";
import Header from "../components/Header/Header";

function NotFound() {
  return (
    <>
      <Header
        title="Page not found"
        image={notfoundImage}>
        Maybe the page you are looking for was moved or deleted.
      </Header>
    </>
  );
}

export default NotFound;