import Header from "../components/Header/Header";
import headerImage from "../assets/contact.jpg";

function Contacts() {
  return (
    <>
      <Header
        title="Get in touch"
        image={headerImage}>
        Want to get in touch? We'd love to hear from you. Here's  how you can reach us...
      </Header>

      <div className="container2">
        <form id="contact" action="">
          <h3>Quick Contact</h3>
          <h4>Contact us today, and get reply with in 24 hours!</h4>
          <fieldset>
            <input placeholder="Name" type="text" tabindex="1" required autofocus />
          </fieldset>
          <fieldset>
            <input placeholder="Email Address" type="email" tabindex="2" required />
          </fieldset>
          <fieldset>
            <input placeholder=" Phone Number" type="tel" tabindex="3" required />
          </fieldset>
          <fieldset>
            <textarea placeholder="Type your Message here..." tabindex="5" required></textarea>
          </fieldset>
          <fieldset>
            <button >Submit</button>
          </fieldset>
        </form>
      </div>

    </>
  );
}

export default Contacts; 