import Header from "../components/Header/Header";
import image from "../assets/home.png";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { checkout } from "../redux/cartSlice";
import CartDisplay from "../components/CartDisplay/CartDisplay";
import { useEffect } from "react";

function Checkout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { items, localId } = useSelector((store) => ({
    items: store.cart.items,
    localId: store.auth.localId,
  }));

  useEffect(() => {
    if (!localId) {
      navigate('/auth');
    }
  }, [localId, navigate]);

  function onCheckout(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    dispatch(checkout({
      localId: localId,
      items: items,
      ...Object.fromEntries(formData.entries()),
    }));
    navigate('/');
  }

  return (
    <>
      <Header
        title="Checkout"
        image={image}>
        Please enter your information.
      </Header>

      <CartDisplay />

      <form onSubmit={onCheckout}>
        <div className="checkout">
          <label><br />
            <h3> First name:</h3>
            <input placeholder="Type..." type="text" name="firstName" required />
          </label>
          <label><br />
            <h3> Last name:</h3>
            <input type="text" placeholder="Type..." name="lastName" required />
          </label>
          <label><br />
            <h3>Address:</h3>
            <input placeholder="Type..." type="text" name="address" required />
          </label>
          <label><br />
            <h3>Phone:</h3>
            <input placeholder="Type..." type="text" name="phone" required />
          </label><br />

          <button>Complete the order</button>
        </div>
      </form>

    </>
  );
}

export default Checkout;