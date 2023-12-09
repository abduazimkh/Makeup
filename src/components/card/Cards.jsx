import c from "./Cards.module.scss";
import a from "../../assets/images/a.png"
import b from "../../assets/images/b.png"
import cc from "../../assets/images/c.png"
import { Container } from "../../utils";

const Cards = () => {
  return (
    <Container>
      <div className={c.cards}>
        <div className={c.card}>
          <img src={a} alt="image" />
          <p>Gisou I Infused with the power of honey to nourish and hydrate your lips</p>
          <strong>Shop now</strong>
        </div>
        <div className={c.card}>
          <img src={b} alt="image" />
          <p>Gisou I Infused with the power of honey to nourish and hydrate your lips</p>
          <strong>Shop now</strong>
        </div>
        <div className={c.card}>
          <img src={cc} alt="image" />
          <p>Gisou I Infused with the power of honey to nourish and hydrate your lips</p>
          <strong>Shop now</strong></div>
      </div>
    </Container>
  )
}

export default Cards