import { useState, useEffect, Fragment } from 'react'
import { useParams } from 'react-router-dom'

import ProductCard from '../../product-card/product-card'
import { CategoryContainer, CategoryTitle } from './category.styles.jsx'

import { useSelector, } from 'react-redux'
import { selectCategoriesMap, selectIsLoading } from '../../../store/categories/categories.selector.js'

import  Spinner  from '../../spinner/spinner.component.jsx'

const Category = () => {
    const { category } = useParams();
    const categoriesMap = useSelector(selectCategoriesMap);
    const isLoading = useSelector(selectIsLoading);
    const [products, setProducts] = useState(categoriesMap[category]);
  
    useEffect(() => {
      setProducts(categoriesMap[category]);
    }, [category, categoriesMap]);

    return (
        <Fragment>
          <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
          {isLoading ? (
            <Spinner />
          ) : (
            <CategoryContainer>
              {products &&
                products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
            </CategoryContainer>
          )}
        </Fragment>
      );
    };
    
export default Category