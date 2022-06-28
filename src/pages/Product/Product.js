import { useParams } from "react-router-dom";
import CartButton from "../../components/CartButton/CartButton";
import { getProduct } from "../../data/products";
import classes from "./Product.module.css"

function Product() {
  const params = useParams();
  const product = getProduct(params.productId);

  if (!product) {
    return null;
  }

  return (
    <div className={classes.Product}>
      <div className={classes.Product2}>
        <h2 className={classes.title}>{product.title}</h2>
        <p className={classes.text}>{product.description}</p>
        <button className={classes.ProductButton}>
          {product.price}$
        </button>
        <CartButton productId={params.productId} />
      </div>
      <img className={classes.image} src={product.image} alt={product.title} />
      
    </div>
  );
}

export default Product;