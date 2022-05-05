import { Link } from "react-router-dom";
import classes from "./TypesItem.module.css";
import CupsImage from "../../../assets/cups.jpg";
import VasesImage from "../../../assets/vase.jpg";
import PlatesImage from "../../../assets/plate.jpg";

function TypesItem({kind}) {
  return ( 
    <div className={classes.TypesItem}>

      <img src={CupsImage}/>
      <div>
        <Link to="/">Cups</Link>
      </div>

      <img src={VasesImage}/>
      <div>
        <Link to="/">Vases</Link>
      </div>

      <img src={PlatesImage}/>
      <div>
        <Link to="/">Plates</Link>
      </div>
    </div>
   );
}

export default TypesItem;