import "./Footer.css";

function Footer() {
  return (
    
    <div>
    <footer className="Footer">Ceramic 2022
      {/* <div className="text">
         <ul>
         <li><a href="/">WEEBLY THEMES</a></li>
         <li><a href="/">PRE-SALE FAQS</a></li>
         <li><a href="/">SUBMIT A TICKET</a></li>
       </ul>
       <ul>
         <li><a href="/">SERVICES</a></li>
         <li><a href="/">THEME TWEAK</a></li>
       </ul>
       <ul>
       <li><a href="/">SHOWCASE</a></li>
       <li><a href="/">SUPPORT</a></li>
       <li><a href="/">WIDGETKIT</a></li>
       </ul>
       </div> */}
       <div className="icons">
         <ul>
           <li><a href="/"><i class="fa-brands fa-facebook-f"></i></a></li>
           <li><a href="/"><i class="fa-brands fa-twitter"></i></a></li>
           <li><a href="/"><i class="fa-brands fa-google-plus-g"></i></a></li>
           <li><a href="/"><i class="fa-brands fa-instagram"></i></a></li>
         </ul>
         ©Copyright All rights reserved.
       </div>
    </footer>
    
    </div>
  );
}
export default Footer; 