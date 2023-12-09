import { useState } from "react";
import c from "./Utils.module.scss";
import { AiOutlineDislike } from "react-icons/ai";
import a from "../assets/images/a.png"
const Container = ({children}) => {
  return (
    <div className={c.container}>{children}</div>
  )
}

const Card = ({id, product, image, title, text, price, icon}) => {
  const [errorPlaceholder, setErrorPlaceholder] = useState(false);

  
  return (
    <div className={c.card}>
      <i>
      <AiOutlineDislike />
      </i>
      <img onError={(e, s) => {
        if(!s){
          setErrorPlaceholder(true)
        }
      }} src={!image || errorPlaceholder ? a : image } alt="" />
      <h3>{title}</h3>
      <p>{text}</p>
      <strong>{icon}{price}</strong>

      <button className={c.btn}>Add to Bag</button>
    </div>
  )
}

export { Container, Card }