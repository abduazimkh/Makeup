import c from "./Banner.module.css";
import banner from "../../assets/images/Hero-slide.png"
import banner2 from "../../assets/images/banner.avif"
import { Container } from "../../utils";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Banner = () => {
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
          slidesPerView={1}
          slidesPerGroup={1}
          loop={true}
          pagination={{
            clickable: true
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className={c.mySwiperb}
        >

          <SwiperSlide className={c.slider2}>
            <img src={banner} alt="img" />
          </SwiperSlide>
          <SwiperSlide className={c.slider2}>
            <img src={banner2} alt="img" />
          </SwiperSlide>
          <SwiperSlide className={c.slider2}>
            <img src={banner} alt="img" />
          </SwiperSlide>
          <SwiperSlide className={c.slider2}>
            <img src={banner2} alt="img" />
          </SwiperSlide>
          
        </Swiper>
      </div>
    </div>
    </Container>
  );
};

export default Banner;
