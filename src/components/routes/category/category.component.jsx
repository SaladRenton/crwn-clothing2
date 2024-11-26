import { useContext, useState, useEffect, Fragment } from 'react'
import { useParams } from 'react-router-dom'
import { CategoriesContext } from '../../../context/categories.context'
import ProductCard from '../../product-card/product-card'
import {CategoryContainer, CategoryTitle} from './category.styles.jsx'

const Category = () => {
    const { category } = useParams()
    const { categoriesMap } = useContext(CategoriesContext)
    const [products, setProducts] = useState([])  // Cambiado a array vacío

    useEffect(() => {
        setProducts(categoriesMap[category])
    }, [category, categoriesMap])

    return (


        <Fragment>
            <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
            <CategoryContainer>
                {products && products.map((product) =>
                    <ProductCard key={product.id} product={product} />)}
            </CategoryContainer>
        </Fragment>
    )
}

export default Category