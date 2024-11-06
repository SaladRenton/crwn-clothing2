import { useState } from "react";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import FormInput from "../form input/form-input.component";
import './sign-up-form.styles.scss'
import Button from '../button/button.component.jsx'



const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;
    const [error, setError] = useState('');
    




    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError('');

        if (password !== confirmPassword) {
            setError("Passwords do not match");
            alert("Passwords do not match");
            return;
        }

        try {
            const userCredential = await createAuthUserWithEmailAndPassword(email, password);
            if (userCredential && userCredential.user) {
                await createUserDocumentFromAuth(userCredential.user, { displayName });
                resetFormFields();
               
            } else {
                throw new Error('User creation failed');


            }
        } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                setError('Cannot create user, email already in use');
            } else {
                console.error('User creation encountered an error', error);
                setError('User creation failed. Please try again.');
            }
        }
    }

    return (
        <div className="sign-up-container">
            <h2>Don't have an  account?</h2>
            <span>Sign up with email and password</span>
            <form onSubmit={handleSubmit}>

                <FormInput
                    label="Display Name"
                    type="text"
                    required
                    onChange={handleChange}
                    name="displayName"
                    value={displayName}
                />


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


                <FormInput
                    label="Confirm Password"
                    type="password"
                    required
                    onChange={handleChange}
                    name="confirmPassword"
                    value={confirmPassword}
                />

                {error && <p style={{ color: 'red' }}>{error}</p>}


                <Button type="submit">Sign up</Button>
            </form>
        </div>
    )
}

export default SignUpForm;