import { useEffect, useState } from "react";
import c from "./Utils.module.scss";
import a from "../assets/images/a.png";
import { connect, useSelector } from "react-redux";
import {
  addToCart,
  incCart,
  decCart,
  remuveCart,
} from "../redux/actions/cart-action";
import { likedCart, dislikedCart } from "../redux/actions/like-action";
import { NavLink } from "react-router-dom";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

export const Container = ({ children }) => {
  return <div className={c.container}>{children}</div>;
};

const Card = (props) => {
  const { id, product, image, title, text, price, icon, click } = props;
  const [errorPlaceholder, setErrorPlaceholder] = useState(false);
  const like_products = useSelector((state) => state.like.liked_products);
  const cart_products = useSelector((state) => state.cart.cart_products);
  const select = useSelector((state) => state.currency.currency_data);

  const handleAddToCart = (product) => {
    product.count = 1;
    props.addToCart(product);
  };

  const handleIncrementProductCount = (product) => {
    props.incCart(product);
  };

  const handleDecrementProductCount = (product) => {
    props.decCart(product);
  };

  function handleLikeProduct(product) {
    props.likedCart(product);
  }

  function handleDislikeProduct(product) {
    props.dislikedCart(product);
  }

  return (
    <div className={c.card}>
      <ul className="card__top-icons">
        {like_products.findIndex((likeproduct) => likeproduct.id === id) !==
        -1 ? (
          <i>
            <AiFillHeart onClick={() => handleDislikeProduct(product)} />
          </i>
        ) : (
          <i>
            <AiOutlineHeart onClick={() => handleLikeProduct(product)} />
          </i>
        )}
      </ul>

      <NavLink to={`/single-card/${id}`}>
        <img
          onError={(e, s) => {
            if (!s) {
              setErrorPlaceholder(true);
            }
          }}
          src={!image || errorPlaceholder ? a : image}
          alt=""
        />
      </NavLink>

      <h3>{title}</h3>
      <p>{text}</p>
      <strong>
        {icon ? "$" : icon && select}
        {select === "uzs" ? price * 12300 : price}
      </strong>

      {cart_products.findIndex((cardproduct) => cardproduct.id === id) !==
      -1 ? (
        <div className={c.button_wrapper}>
          <button
            className={c.btn}
            onClick={() => handleDecrementProductCount(product)}
          >
            -
          </button>
          <strong className={c.span}>
            {cart_products.find((cartproduct) => cartproduct.id === id).count}
          </strong>
          <button
            className={c.btn}
            onClick={() => handleIncrementProductCount(product)}
          >
            +
          </button>
        </div>
      ) : (
        <button onClick={() => handleAddToCart(product)} className={c.btn}>
          Add to Basket
        </button>
      )}
    </div>
  );
};

export default connect(null, {
  addToCart,
  incCart,
  decCart,
  likedCart,
  dislikedCart,
})(Card);
