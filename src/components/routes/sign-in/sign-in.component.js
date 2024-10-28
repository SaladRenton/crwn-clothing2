import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../../utils/firebase/firebase.utils'

const SignIn = () => {
  const logGoogleUser  = async () => {
    try {
      const response = await signInWithGooglePopup();
      const { user } = response; // Desestructuramos 'user' aquí

      const userDocRef = await createUserDocumentFromAuth(user); // Ahora 'user' está definido y se puede usar

      // Aquí puedes continuar con más lógica si es necesario
    } catch (error) {
      console.error(error);
      alert('An error occurred while signing in with Google. Please try again later.');
    }
  };

  return (
    <div>
      <h1>
        Sign In Page
      </h1>
      <button onClick={logGoogleUser }>
        Sign in with Google Popup
      </button>
    </div>
  );
};

export default SignIn;