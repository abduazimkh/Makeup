import React, { useState } from "react";
import { Tilt } from "react-tilt";
// import { ReactComponent as EmptyStarIcon } from "../../assests/icons/star-regular1.svg";
// import { ReactComponent as StarIcon } from "../../assests/icons/star-solid.svg";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { Tooltip } from "antd";
import "./CardItem.scss"
import { NavLink } from "react-router-dom";
const defaultOptions = {
  reverse: false,
  max: 35,
  perspective: 1000,
  scale: 1.05,
  speed: 500,
  transition: true,
  axis: null,
  reset: true,
  easing: "cubic-bezier(.03,.98,.52,.99)",
};


function CardItem({ card }) {
  const [showDetails, setDetails] = useState(false);  

  
  const showDetailsHandler = () => {
    setDetails(true);
  };
  const hideDetailsHandler = () => {
    setDetails(false);
  };
  
  return (
    <Tilt options={defaultOptions} className="card-item flip-card">
      <div
        className={`flip-card-inner ${showDetails ? "flip-card-active" : ""}`}
      >
        <div className="card-item-info flip-card-front">
          <div
            className="card-item-header"
            style={{
              background: `linear-gradient(135deg, #20806e 8%, #6b046b 83%)`,
            }}
          >
            <p className="card-item-title">{card?.product_name}</p>
            <div className="card-item-photo">
              <NavLink to={`/single-card/${card.id}`}>
                <img src={card?.image_link} alt="produc error" />
              </NavLink>
            </div>
          </div>
          <div className="card-item-body">
            <p className="card-item-title">
              {card?.name}
              {card?.isNew ? <span>New</span> : null}
            </p>
            <div className="card-item-button">
              <div className="card-item-button--price">
                <p>${card?.price}</p>
                <p>{card?.currency}</p>
              </div>
              <p
                className="card-item-button--add "
                onClick={showDetailsHandler}
              >
                More Details
              </p>
            </div>
          </div>
        </div>
        <div className="card-item-details flip-card-back">
          <Tooltip title="Hide Details">
            <div className="go-back" onClick={hideDetailsHandler}>
              <ArrowLeftOutlined />
            </div>
          </Tooltip>
          <div className="card-item-details-section-one">
            <div className="card-item-photo">
              <NavLink to={`/single-card/${card.id}`}>
                <img src={card?.image_link} alt="produc error" />
              </NavLink>
            </div>
            <p className="card-item-title">{card?.name}</p>
            <div className="card-item-details--description">
              <p>{card?.description.length > 50 ? card?.description.slice(0, 50)+"..." : card?.description ? card?.description.length === 0 : "Deacription Not Found"}</p>
            </div>
          </div>
          <div className="card-item-button">
            <div className="card-item-button--price">
              <p>${card?.price}</p>
              <p>{card?.currency}</p>
            </div>
            <p className="card-item-button--add " onClick={hideDetailsHandler}>
              Buy Now
            </p>
          </div>
        </div>
      </div>
    </Tilt>
  );
}

export default CardItem;
