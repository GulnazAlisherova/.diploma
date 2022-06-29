import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { decrement, increment, remove } from "../../redux/cartSlice";
import classes from "./CartItem.module.css";

export default function CartItem({ product, actions, quantity }) {
  const dispatch = useDispatch();

  return (
    <div className={classes.CartItem}>
      <div className={classes.containerInner}>
        <div className={classes.cardCart}>
          <div className={classes.cardCartContent}>
            <div className={classes.image}>
              <img src={product.image} alt={product.title} />
            </div>
            <div className={classes.title}>
              <Link className={classes.title2} to="">{product.title}</Link>
            </div>
            <div className={classes.quantity}>
              {actions ? <button onClick={() => dispatch(decrement(product.productId))}>-</button> : null}
              {quantity}
              {actions ? <button onClick={() => dispatch(increment(product.productId))}>+</button> : null}
            </div>
            <div className={classes.subtotal}>
              ${product.price * quantity}
              {actions ? <button onClick={() => dispatch(remove(product.productId))}>REMOVE</button> : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}