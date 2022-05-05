import Header from "../components/Header/Header";
import headerImage from "../assets/about.jpg";

function About(){
  return(
    <>
    <Header
      title="About Pottery."
      image={headerImage}>
   The definition of pottery, used by the ASTM International, is "all fired ceramic wares that contain clay when formed, except technical, structural, and refractory products. 
    </Header>
    </>
  );
}
export default About;