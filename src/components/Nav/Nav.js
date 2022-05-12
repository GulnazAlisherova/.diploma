import NavItem from "./NavItem/NavItem";
import classes from "./Nav.module.css";
function Nav() {
  return (
    <ul className={classes.Nav}>
          <NavItem url="/">Home</NavItem>
          <NavItem url="/about">About</NavItem>
          <NavItem url="/products">Products</NavItem>
          <NavItem url="/contacts">Contacts</NavItem>
          <NavItem url="/sign-in">Sign in</NavItem>
    </ul>
    
  );
}
export default Nav;