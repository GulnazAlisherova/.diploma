import { Link } from "react-router-dom";
import classes from "./ProductItem.module.css";
function ProductItem({ product }) {
  return (
    <div className={classes.ProductItem}>
      <div className={classes.effectToRight}>
        <div className={classes.card5}>
          <Link to={"/products/" + product.productId}>
            <div className={classes.ProductItemImage}>
              <img src={product.image} alt={product.title} />
              <div className={classes.price}>${product.price}</div>
              <div className={classes.ProductItemText}>
                <h3>{product.title}</h3>
               
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default ProductItem;