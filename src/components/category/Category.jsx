import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { connect } from "react-redux";
import { categoryData } from "../../redux/actions/category-action";
import { useParams } from 'react-router-dom';
import c from "../../utils/Utils.module.scss";
import Card, { Container } from '../../utils';

const Category = (props) => {
  const { name } = useParams();
  useEffect(() => {
    props.categoryData(name)
  }, [name])

  const category = useSelector(state => state.category.categoty_data)
  const search = useSelector(state => state.search.search_value)

  return (
    <Container>
      <div className={c.cards}>
        {
          category?.filter(i => i.name.indexOf(search) !== -1).map(product => 
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
          )
        }
      </div>
    </Container>
  )
}

export default connect(null, { categoryData })(Category)