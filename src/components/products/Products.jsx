import p from "./Products.module.scss";
import Card,{ Container } from "../../utils";
import { connect, useSelector } from "react-redux";
import { productsData } from "../../redux/actions/product-action";
import { addToCart, incCart, decCart } from "../../redux/actions/cart-action";
import { useEffect } from "react";
import CardItem from "../card/CardItem";

import c from "./Banner2.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import bir from "../../assets/images/bir.png"
import ikki from "../../assets/images/ikki.png"


const Products = (props) => {
  const products = useSelector((state) => state.product.products_data);
  const count = useSelector(state => state.cart.cart_products)

  useEffect(() => {
    props.productsData();
  }, []);

  return (
    <>
      <Container>
        <div className={p.cards}>
          {products.slice(40, 80).map((product) => (
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

      <div className={c.banner_conatiner}>
          <div className={c.circle1}></div>
          <div className={c.circle2}></div>
          <div
            className={c.slider_products}
            style={{ display: "flex", justifyContent: "flex-end"}}
          >
            <Swiper
              autoplay={{delay: 3000}}
              slidesPerView={1}
              slidesPerGroup={1}
              loop={true}
              // pagination={{
              //   clickable: true
              // }}
              // navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              className={c.mySwiperb}
            >
              <SwiperSlide className={c.slider2}>
                <img src={bir} alt="img" />
              </SwiperSlide>
              <SwiperSlide className={c.slider2}>
                <img src={ikki} alt="img" />
              </SwiperSlide>
            </Swiper>
          </div>
      </div>

    <Container>
      <div className={p.cardss}>
        {products?.slice(70, 130).map((card, i) => {
          return <CardItem key={i} card={card} />
          })
        }
      </div>
    </Container>
    </>
  );
};

export default connect(null, { productsData, addToCart, incCart, decCart })(Products);
