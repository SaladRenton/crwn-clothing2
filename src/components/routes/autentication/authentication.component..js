import SignUpForm from '../../sign-up-form/sign-up-form';
import SignInForm from '../../sign-in-form/sign-in-form.jsx';
import {AuthenticationContainer} from './authentication.style.jsx'


const Authentication = () => {

  return (
    <AuthenticationContainer>
      <SignInForm />
      <SignUpForm />
    </AuthenticationContainer>
  );
};

export default Authentication;