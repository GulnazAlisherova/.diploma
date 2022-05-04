import "./Nav.css";
import NavItem from "./NavItem/NavItem";
import Logo from "./ui/Logo/Logo";

function Nav() {
  return (
    <nav className="Nav">
      <Logo />
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/">Categories</a></li>
        <li><a href="/">About</a></li>
        <li><a href="/">Products</a></li>
        <li><a href="/">Contacts</a></li>
        <NavItem url="/">Home</NavItem>
        <NavItem url="/">Products</NavItem>
        <NavItem url="/">Contacts</NavItem>
      </ul>
    </nav>
  );
}

export default Nav;