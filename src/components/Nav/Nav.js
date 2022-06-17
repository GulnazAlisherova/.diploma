import classes from "./Nav.module.css";
import NavItem from "./NavItem/NavItem";

function Nav() {
  return (
    
    <ul className={classes.Nav}>
      <NavItem url="/">Home</NavItem>
      <NavItem url="/about">About</NavItem>
      <NavItem url="/products">All Products</NavItem>
      <NavItem url="/contacts">Contacts</NavItem>
      
      {/* <i  class="fa-solid fa-cart-shopping " ></i> */}
    </ul>
  );
}
export default Nav;