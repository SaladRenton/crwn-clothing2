import Directory from '../../../components/directory-item/directory.component.jsx';
import Categories from '../../categories/categories.component.jsx';
import { Outlet } from 'react-router-dom';



const Home = () => {
    const categories = Categories(); // Llama a Categories para obtener el array

    return (
        <div className='categories-container'>
            <Directory categories={categories} />
            <Outlet></Outlet>
        </div>
    );
}

export default Home;