import Header from "../components/Header/Header";
import headerImage from "../assets/processing.jpg";
import step1 from "../assets/step1.jpg"
import step2 from "../assets/step2.jpg"
import step3 from "../assets/step3.jpg"
import step4 from "../assets/step4.jpg"
import step5 from "../assets/step5.jpg"
import step6 from "../assets/step6.jpg"
import step7 from "../assets/step7.jpg"
import step8 from "../assets/step8.jpg"
import step9 from "../assets/step9.jpg"
function Process(){
  return(
    <>
    <Header
      title="Our process!"
      image={headerImage}>
  Potters have been forming vessels from clay bodies for millions of years. When  nomadic man  settled down and discovered fire, the firing of clay pots was not  far behind.
    </Header>
<div>
  <img src={step1}></img>
  <img src={step2}></img>
  <img src={step3}></img>
  <img src={step4}></img>
  <img src={step5}></img>
  <img src={step6}></img>
  <img src={step7}></img>
  <img src={step8}></img>
  <img src={step9}></img>

</div>
    </>
    
  );
}
export default Process;