import TypesItem from "./TypesItem/TypesItem";
import classes from "./Types.module.css";

function Types ( kind ) {
  const product = {}; 
  return ( 
    <div className={classes.Types}>
      <TypesItem product={product } />
    </div>
  );
}

export default Types;