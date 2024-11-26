import { useState } from "react";
//import { createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import FormInput from "../form input/form-input.component";
import {SignUpContainer, ButtonsContainer} from './sign-in-form.styles.jsx'
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component'
import { signInWithGooglePopup, signInAuthUserWithEmailAndPassword } from '../../utils/firebase/firebase.utils'

const defaultFormFields = {
    email: '',
    password: '',
}

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;
    const [error, setError] = useState(null);

    const signInWithGoogle = async (event) => {
        event.preventDefault();

        await signInWithGooglePopup();



    };

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError(null);

        try {
            const user = await signInAuthUserWithEmailAndPassword(email, password);
            console.log(user)
            resetFormFields();
        } catch (error) {
            switch (error.code) {
                case 'auth/wrong-password':
                    setError('Incorrect password for email');
                    break;
                case 'auth/user-not-found':
                    setError('User not found with this email');
                    break;
                default:
                    console.error(error);
                    setError('An error occurred while signing in. Please try again later.');
            }
        }
    }

    return (
        <SignUpContainer>
            <h2>Already have an account?</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    label="Email"
                    type="email"
                    required
                    onChange={handleChange}
                    name="email"
                    value={email}
                />

                <FormInput
                    label="Password"
                    type="password"
                    required
                    onChange={handleChange}
                    name="password"
                    value={password}
                />

                {error && <p style={{ color: 'red' }}>{error}</p>}

                <ButtonsContainer>
                    <Button type="submit">Sign in</Button>
                    <Button type='button' buttonType={BUTTON_TYPE_CLASSES.google} onClick={signInWithGoogle}>
                        Google sign in
                    </Button>
                </ButtonsContainer>
            </form>
        </SignUpContainer>
    );
}

export default SignInForm;