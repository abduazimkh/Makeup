import n from "./Nav.module.scss";

import logo from "../../assets/images/logo.svg";

import { FaSearch } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { BsMinecartLoaded } from "react-icons/bs";

import { NavLink } from "react-router-dom";
import { Container } from "../../utils";
import data from "../../categories/category.json";
import { useEffect, useRef, useState } from "react";
// import { connect } from "react-redux";
// import { categoryData } from "../../redux/actions/category-action";

const Nav = () => {
  const [type, setType] = useState([])
  const t = Object.keys(data)

  const handleClick = (e) => {
    // for(var a in data){
    //   console.log(data[a].categry);
    //   data[a].category.map(i => {
    //   })
    // }
    
    // if(e.target.closest("a")){
    //   props.categoryData(e.target.closest("a").innerText)
    // }
  }

  // useEffect(() => {
  //   props.categoryData()
  // }, [])

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
      <div className={n.dropdown}>
        <div className={n.types_w}>
        <Container>
          <div onClick={handleClick} className={n.types}>
            {
              t.map(types => {
                return (
                  <NavLink className={({isActive}) => isActive ? `${n.link} ${n.link__active}` : `${n.link}`} key={types} end to={"/category/"+types}>{types}</NavLink>
                )
              })
            }
          </div>
        </Container>
        </div>
      </div>
    </>
  )
}

export default (Nav)