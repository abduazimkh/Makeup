import n from "./Nav.module.scss";

import logo from "../../assets/images/logo.svg";

import { FaSearch } from "react-icons/fa";
import { BsMinecartLoaded } from "react-icons/bs";
import { GoHeart } from "react-icons/go";

import { NavLink } from "react-router-dom";
import { Container } from "../../utils";
import data from "../../categories/category.json";
import { useEffect, useState } from "react";
import { connect, useSelector } from "react-redux";
import { currencyData } from "../../redux/actions/currency-action";
import { searchData } from "../../redux/actions/search-action";
import { subCategory } from "../../redux/actions/category-action";


const Nav = (props) => {
  const t = Object.keys(data)
  const [select, setSelect] = useState("");
  const [search, setSearch] = useState("");

  const subcategory = useSelector(state => state.category)

  console.log(subcategory);
  
  useEffect(() => {
    for(var i in data){
      var a = [];
      data[i]?.category?.map(c =>{
        a.push(c)
      })
      console.log(a);
        props.subCategory(a)
    }
  }, [])

  useEffect(() => {
    props.currencyData(select)
    props.searchData(search)
  }, [select, search])

  return (
    <>
      <div className={n.top}>
        <p>Get up to 25% off large fragrances* | Shop now | FREE Delivery over £20</p>
      </div>

      <Container>
        <div className={n.top_nav}>
          <select onChange={(e) => setSelect(e.target.value)}>
            <option value="uzs">UZS</option>
            <option value="usd">USD</option>
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
            <input value={search} onChange={(e) => setSearch(e.target.value)} type="text" placeholder="Search"/>
            <button><FaSearch/></button>
          </div>
    
          <div>
            <div className={n.page}>
              <NavLink to="liked" >
                <GoHeart />
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
          <div className={n.types}>
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

export default connect(null, { currencyData, searchData, subCategory })(Nav)