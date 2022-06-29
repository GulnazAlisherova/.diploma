import classes from "./CartLink.module.css"
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

export default function CartLink() {
  const number = useSelector(store => {
    return Object.values(store.cart.items).reduce((sum, number) => sum + number, 0);
  });

  return (
    <NavLink to="/cart"><i class="fa-solid fa-cart-shopping"  id={classes.icons2}></i>
     <div className={classes.numbers}>{number}</div> 
     </NavLink>
  );
}