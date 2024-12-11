
import CategoryPreview from '../../category-preview/category-preview.component'
import { Spinner } from '../../spinner/spinner.component';
import { selectCategoriesMap, selectIsLoading } from '../../../store/categories/categories.selector';
import { useSelector } from 'react-redux';


const CategoriesPreview = () => {
    const categoriesMap = useSelector(selectCategoriesMap);
    const isLoading = useSelector(selectIsLoading)

    return (
        <>
            {isLoading ? (<Spinner />) :
                (Object.keys(categoriesMap).map(title => (
                    <CategoryPreview
                        key={title}
                        title={title}
                        products={categoriesMap[title]}
                    />
                )))
            }
        </>
    )
}

export default CategoriesPreview;