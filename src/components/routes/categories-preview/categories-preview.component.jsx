import { useContext } from 'react';

import { CategoriesContext } from '../../../context/categories.context';
import CategoryPreview from '../../category-preview/category-preview.component'


const CategoriesPreview = () => {
    const { categoriesMap } = useContext(CategoriesContext);

    return (
        <>
            {Object.keys(categoriesMap).map(title => (
                <CategoryPreview 
                    key={title}
                    title={title} 
                    products={categoriesMap[title]} 
                />
            ))}
        </>
    )
}

export default CategoriesPreview;