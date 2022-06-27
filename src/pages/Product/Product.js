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
        <p className={classes.p}>{product.description}</p>
        <button className={classes.btn}>
          {product.price}$
        </button>
      </div>
      <img className={classes.image} src={product.image} alt={product.title} />
      <CartButton productId={params.productId} />
    </div>
  );
}

export default Product;