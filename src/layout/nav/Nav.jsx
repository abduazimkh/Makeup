import n from "./Nav.module.scss";

import logo from "../../assets/images/logo.svg";

import { FaSearch } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { BsMinecartLoaded } from "react-icons/bs";

import { NavLink } from "react-router-dom";
import { Container } from "../../utils";


const Nav = () => {
  return (
    <>
      <div className={n.top}>
        <p>Get up to 25% off large fragrances* | Shop now | FREE Delivery over £20</p>
      </div>

      <Container>
        <div className={n.top_nav}>
          <select>
            <option value="uz">uz</option>
            <option value="ru">ru</option>
          </select>
        </div>
      </Container>
      <hr />
      <Container>
        <nav>
          <NavLink to="">
            <img src={logo} alt="" />
          </NavLink>
          
          <div className={n.search}>
            <input type="text" placeholder="Search"/>
            <button><FaSearch/></button>
          </div>
    
          <div>
            <div className={n.page}>
              <NavLink to="liked" >
                <FiUser /> 
                Liked Products
              </NavLink>
            </div>
            <div className={n.page}>
              <NavLink to="cart" >
                <BsMinecartLoaded /> My Basket
              </NavLink>
            </div>
          </div>
        </nav>
      </Container>
      <hr />
    </>
  )
}

export default Nav