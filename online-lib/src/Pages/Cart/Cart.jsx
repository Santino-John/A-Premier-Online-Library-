import "./Cart.css";
import { useContext } from "react";
import BookStoreContext from "../../Context/bookStorContext";

const Cart = () => {
  const { cartInfo, removeFromCart } = useContext(BookStoreContext);

  return (
    <div className="cart-content">
      <div className="content-cart-shopping">
        <div className="title-cart">
          <h1>Your shopping cart</h1>
        </div>
        <div className="items-cart">
          {cartInfo.map((e) => (
            <div key={e.id} className="cart-item">
              <img
                src={`/books/${e.image}`}
                alt={e.title}
                className="imd-cart"
              />
              <div className="infoo">
                <b>Title: {e.title}</b>
                <b> Author: {e.author}</b>
              </div>
              <div className="quantiety">
                <div className="flex">
                  <div className="qun">
                    <button>
                      <i class="bi bi-dash"></i>
                    </button>
                    <b>{e.quantity} </b>
                    <button>
                      <i class="bi bi-plus-lg"></i>
                    </button>
                  </div>
                  <b className="price-item">${e.price * e.quantity}</b>
                  <div>
                    {" "}
                    <i
                      class="bi bi-trash3-fill"
                      onClick={() => removeFromCart(e.id)}
                    ></i>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="order Summary">
        <div className="b-cart">
          <h1> Order Summary</h1>
        </div>
        <div className="b-cart">
          {" "}
          <b> subtotal </b>
          <b style={{ color: "#242424" }}>
            ${cartInfo.reduce((cu, acc) => cu + acc.price * acc.quantity, 0)}
          </b>
        </div>
        <div className="b-cart">
          {" "}
          <b>Shipping cost </b> <b>0</b>{" "}
        </div>
        <div className="b-cart">
          {" "}
          <b>Discount </b>
          <b>0</b>
        </div>
        <div className="b-cart">
          {" "}
          <b>Total </b>
          <b style={{ color: "#242424" }}>
            ${cartInfo.reduce((cu, acc) => cu + acc.price * acc.quantity, 0)}
          </b>
        </div>
      </div>
    </div>
  );
};

export default Cart;
