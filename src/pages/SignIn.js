import Header from "../components/Header/Header";
import headerImage from "../assets/home.jpg";

function SignIn(){
  return(
    <>
    <Header
      title="Pottery Studio!"
      image={headerImage}>
    </Header>
    <div>
      <input type="email">
        <label>Email address</label>     
         </input>
    </div>
    </>
  );
}
export default SignIn;