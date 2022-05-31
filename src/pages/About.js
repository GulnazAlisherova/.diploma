import Header from "../components/Header/Header";
import headerImage from "../assets/about.webp";

function About(){
  return(
    <>
    <Header
      title="About Pottery."
      image={headerImage}>
   The definition of pottery, used by the ASTM International, is "all fired ceramic wares that contain clay when formed, except technical, structural, and refractory products. 
    </Header>
    <div className="about">
     <div className="about-container">
     <p>
      Welcome to mellow pottery studio. We are a small independently owned studio in downtonw, run by a potter and their cat who both believe that the joy of pottery and unique products should be accessible to all. Message us to learn more about our creations, classes, events or just to chat about all things pottery. 
      </p>
      <iframe id="video"  src="https://player.vimeo.com/external/619065576.sd.mp4?s=3482097d3373b8212280faa1b417729858771c9d&profile_id=165&oauth2_token_id=57447761">
          </iframe> 
      <img src="https://images.pexels.com/photos/9736295/pexels-photo-9736295.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="woman kneading clay"/>
     </div>
    </div>
    </>
  );
  
}
export default About;