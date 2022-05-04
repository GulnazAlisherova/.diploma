import "./Nav.css";
import NavItem from "./NavItem/NavItem";

function Nav() {
  return (
    <nav  className="Nav">
       <Logo />
      <ul>
       <NavItem url="/">Home</NavItem>
       <NavItem url="/about">About</NavItem>
       <NavItem url="/products">Products</NavItem>
       <NavItem url="/contacts">Contacts</NavItem>
      </ul>
    </nav>
  );
} 

export default Nav;