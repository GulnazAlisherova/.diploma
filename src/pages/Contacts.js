import contactImage from "../assets/contact.png";

function Contacts() {
  return (
    <>
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
      
      <div className="card4">
        <div className="line">
          <h3>Get in touch</h3>
          <p>gulnaz@gmail.com</p>
          +7 (903) 508 16 01
          <br />
          +7 (495) 508 16 01
        </div>
        <img src={contactImage} alt="portlandlogo" />
      </div>



    </>
  );
}

export default Contacts; 