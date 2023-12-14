import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import instance from '../../services/api';
import { Container } from '../../utils';
import { CiStar } from "react-icons/ci";
import s from "./SingleCard.module.scss";
import a from "../../assets/images/a.png"
import c from "../../utils/Utils.module.scss";

import { connect, useSelector } from "react-redux";
import { addToCart, incCart, decCart, remuveCart } from "../../redux/actions/cart-action";

const SingleCard = (props) => {
  const { id } = useParams();
  const [product, setProduct] = useState([])
  const [errorPlaceholder, setErrorPlaceholder] = useState(false);
  const cart_products = useSelector((state) => state.cart.cart_products);
  const select = useSelector((state) => state.currency.currency_data);



  const handleAddToCart = (product) => {
    product.count = 1;
    props.addToCart(product)
  };

  const handleIncrementProductCount = (product) => {
    props.incCart(product)
  };

  const handleDecrementProductCount = (product) => {
    props.decCart(product)
  };

  useEffect(() => {
    instance(`products/${id}.json`)
    .then(res => setProduct(res.data))
  }, [])

  console.log(product);

  const handleRangeColor = (e) => {
    if(e.target.closest("div")){
      console.log(e.target.parentElement);
      e.target.parentElement.style= `background-color: ${e.target.closest("div").dataset.color}`
      // console.log(e.target.closest("div").dataset.color);
    }
  }

  return (
    <>
      <div className={s.top}><p>20% Off Selected + Premier Delivery for £7! Use Code: FLASH</p></div>
      <Container>

      <div className={s.single__wrapper}>
        <div onClick={handleRangeColor} className={s.all_img}>
          {
            product?.product_colors?.map((color, i) =>
              <div key={i} data-color={color.hex_value} style={{backgroundColor: color.hex_value}} ></div>  
            )
          }
        </div>

        <div className={s.center__img}>
          <img  onError={(e, s) => {
            if(!s){
              setErrorPlaceholder(true)
            }
          }} src={!product.image_link || errorPlaceholder ? a : product.image_link } alt="" />
          
          <div className={s.center__pay}>
            <p>6 weekly payments from £6.00 with Laybuy Learn more about laybuy Learn more</p>
            <p>6 weekly payments from £6.00 with Laybuy Learn more about laybuy Learn more</p>
            <p>6 weekly payments from £6.00 with Laybuy Learn more about laybuy Learn more</p>
            <p>6 weekly payments from £6.00 with Laybuy Learn more about laybuy Learn more</p>
          </div>

            <hr />

          <div className={s.desc}>
            <h3>FULL INGREDIENTS LIST</h3>
            <p>{product.description}</p>
            <p>{product.description}</p>
            <p>{product.description}</p>
            <p>{product.description}</p>
            <p>{product.description}</p>
          </div>
        </div>

        <div className={s.end__item}>
          <h2>{product.name}</h2>
          <strong>{product.description?.length > 40 ? product.description.slice(20, 130) : product.description}</strong>

          <div className={s.stars}>
            <i>
              <CiStar />
            </i>
            <i>
              <CiStar />
            </i>
            <i>
              <CiStar />
            </i>
            <i>
              <CiStar />
            </i>
            <i>
              <CiStar />
            </i>
            <i>
              <CiStar />
            </i>
          </div>

            <hr />

          <div className={s.pricee}>
            <strong>Join LF Beauty Plus+ to earn 180 Plus +Points when you shop this product*</strong>
            <div><p>{product.currency}:</p><strong>{select ? select : product.price_sign}{product.price}</strong></div>
            <h3>{select ? select : product.price_sign}{product.price}</h3>
            <p className={s.p}>Save: {select ? select : product.price_sign}{product.price + 34}</p>
          </div>

          <hr />

          <div className={s.add__tocart}>
            <p>FREE UK DELIVERY OVER £25</p>
            <p>Quantity</p>
            <div className={s.cart}>
            {cart_products.findIndex((cardproduct) => cardproduct.id === id) !==
      -1 ? (
        <div className={c.button_wrapper `${s.button_wrapper}`}>
          <button
            className={c.btn}
            onClick={() => handleDecrementProductCount(product)}
          >
            -
          </button>
          <strong>
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
          </div>

          <hr />

          <div className={s.basket}>
            <ul>
              <li>Save 60%</li>
            </ul>
            <p>Save 60% Discount has been applied to the RRP. Offer valid for a limited time only.</p>

            <button>SHOP NOW</button>
          </div>

        </div>
    </div>
      </Container>
    </>
  )
}

export default connect(null, { addToCart, incCart, decCart })(SingleCard)