import SignUpForm from '../../sign-up-form/sign-up-form';
import SignInForm from '../../sign-in-form/sign-in-form.jsx';
import './authentication.style.scss'


const Authentication = () => {


  




  return (
    <div className='authentication-container'>
      <SignInForm />      
      <SignUpForm />
    </div>
  );
};

export default Authentication;