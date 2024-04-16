import React, { useContext ,useState} from "react";
import "./Modal.css";
import Rating from "../BookSlider/Rating";
import {Link} from "react-router-dom"
import BookStoreContext from '../../Context/bookStorContext.js'

function Modal({ databooks, open }) {
  const { title, image, author, price, rating, reviews, inStock,id } = databooks;
  const {addToCart } = useContext(BookStoreContext);
  const [qty, setQty] = useState(1);


  return (
    <div className="full-modal" >
      <div className="content-modal">
        <i
          class="bi bi-x-circle"
          onClick={() => {
            open(false);
          }}
        ></i>
        <div className="img-content">
          <img src={`/books/${image}`} alt={title} />
        </div>
        <div className="info-book">
          <div className="top">
            <h3>{title}</h3>
          </div>
          <div className="top">
            <b>status:</b>
            {inStock ? "in stock" : "not instock"}
          </div>
          <div className="top">
            <Rating rating={rating} reviews={reviews} />
          </div>
          <div className="top">
            <b>
              Author:<span> {author}</span>
            </b>
          </div>

          <div className="top">
            <b>
              Price : <span>{price} </span>
            </b>
          </div>
          <div className="top all-info">
            <input type="number" min="1" max="100" className="input-order"  onChange={e => setQty(e.target.value)} />
            <button className="add-to"  onClick={() => addToCart(databooks,qty)}>
              <i class="bi bi-cart-plus"></i>
              Add to cart
            </button>
          </div>
          <div className="top">
<Link to={`/book/${id}`}> 
            <button className="details">
              
              See more detailes
              
              </button></Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
