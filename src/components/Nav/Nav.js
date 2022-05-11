import Logo from "../ui/Logo/Logo";
import "./Nav.css";
import NavItem from "./NavItem/NavItem";
  
function Nav() {
  return (
    <nav className="Nav">
      <div className="container">
        <Logo />
        <ul>
          <NavItem url="/">Home</NavItem>
          <NavItem url="/about">About</NavItem>
          <NavItem url="/products">Products</NavItem>
          <NavItem url="/contacts">Contacts</NavItem>
          {/* <NavItem url="/process">Process</NavItem> */}
        </ul>
      </div>
    </nav>
  );
}
export default Nav;