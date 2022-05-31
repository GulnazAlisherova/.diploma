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
     {/* <div className="full-card">
     <div className="card">
          <img src="http://www.clker.com/cliparts/f/D/Z/i/d/G/phone-logo-hi.png" alt="picture of phone"/>
          <h3>Talk to sales</h3>
          <p>Want to order your type of Ceramic? Just pick up the phone to chat with a member of our team.</p>
          <h4>+996 789 987 00</h4>
      </div>
      
        <div className="card">
          <img src="https://pngimage.net/wp-content/uploads/2018/06/message-symbol-png-7.png" alt=" picture of message"/>
          <h3>Send a message for customer</h3>
          <p>Want to order your type of Ceramic? Just pick up the phone to chat with a member of our team.</p>
          <h4>+996 789 987 00</h4>
        </div>
     </div> */}
    </>
  );
}

export default Contacts; 