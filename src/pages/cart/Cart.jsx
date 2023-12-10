import c from "../../utils/Utils.module.scss";
import Card,{ Container } from "../../utils";

import { useSelector } from "react-redux";


const Cart = (props) => {
  const count = useSelector(state => state.cart.cart_products)


  return (
    <Container>
    <div className={c.cards}>
      {count.map((product) => (
        <Card
          key={product.id}
          image={product.image_link}
          title={product.name?.length > 20 ? product.name.slice(0, 20)+ "..." : product.name}
          text={product.description?.length > 25 ? product.description.slice(0, 25)+"..." : product.description ? product?.description.length === 0 : "Deacription Not Found"}
          icon={product.price_sign}
          price={product.price}
          product={product}
          id={product.id}
        />
      ))}
    </div>
  </Container>
  )
}

export default Cart