import { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';
import {ReactComponent as CrwnLogo} from '../../assets/crown.svg'
import './navigation.styles.scss'
import SignIn from '../routes/sign-in/sign-in.component';


const Navigation = () => {
    return (
        <Fragment>
            <div className='navigation'>
                <Link className='logo-container' to='/'>
                    <CrwnLogo classname= 'logo'/>
                </Link>

                <div className='nav-links-container'>
                    <Link className='nav-link' to='/shop'>
                        SHOP
                    </Link>
                    <Link className='nav-link' to='/signIn'>
                        SIGN IN
                    </Link>




                </div>
            </div>
            <Outlet />
        </Fragment>
    );
};

export default Navigation;