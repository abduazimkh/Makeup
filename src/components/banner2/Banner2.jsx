import c from "./Banner2.module.css";
import { Container } from "../../utils";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { connect, useSelector } from "react-redux";
import { productsData } from "../../redux/actions/product-action";
import { useEffect } from "react";
import first from "../../assets/images/first.png"
import second from "../../assets/images/second.png"
import third from "../../assets/images/third.png"
import furth from "../../assets/images/furth.png"

const Bannerr = (props) => {
  const data = useSelector(state => state.product.products_data)

  useEffect(() => {
    props.productsData();
  }, []);

  return (
    <Container>
      <div className={c.banner_conatiner}>
      <div className={c.circle1}></div>
      <div className={c.circle2}></div>
      <div
        className={c.slider_products}
        style={{ display: "flex", justifyContent: "flex-end"}}
      >
        <Swiper
          autoplay={{delay: 3000}}
          slidesPerView={4}
          slidesPerGroup={1}
          spaceBetween={30}
          loop={true}
          breakpoints={{
          300: {
              slidesPerView: 1,
          },
          600: {
              slidesPerView: 3,
          },
          900: {
              slidesPerView: 4,
          }

          }}
          modules={[Autoplay, Pagination, Navigation]}
          className={c.mySwiperb}
        >
          <SwiperSlide  data-swiper-autoplay={2000} className={c.slider2}>
            <img src={first} alt="img" />
          </SwiperSlide>
          <SwiperSlide className={c.slider2}>
            <img src={second} alt="img" />
          </SwiperSlide>
          <SwiperSlide className={c.slider2}>
            <img src={third} alt="img" />
          </SwiperSlide>
          <SwiperSlide className={c.slider2}>
            <img src={furth} alt="img" />
          </SwiperSlide>
          {data?.slice(50, 60).map((i, index) => (
            <SwiperSlide key={index} className={c.slider2}>
              <img src={i.image_link} alt="img" />
            </SwiperSlide>
          ))}
                  
        </Swiper>
      </div>
      </div>
    </Container>
  );
};

export default connect(null, { productsData })(Bannerr);
