import {CategoryPreviewContainer,Title,Preview } from './category-preview.styles.jsx'
import { Fragment } from 'react';
import ProductCard from '../../components/product-card/product-card';

const CategoryPreview = ({ title, products }) => {
    return (
        <CategoryPreviewContainer>
            <Fragment>
                
                    <Title  to={`/shop/${title.toLowerCase()}`} className='title'>
                        {title.toUpperCase()}
                    </Title >
                

                <Preview>
                    {
                        products.slice(0, 4).map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))
                    }
                </Preview>
            </Fragment>                                                                
        </CategoryPreviewContainer>
    )
}

export default CategoryPreview;