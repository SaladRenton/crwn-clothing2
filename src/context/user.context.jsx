import { createContext, useState, useEffect } from "react";
import {
  createUserDocumentFromAuth,
    onAuthStateChangedListener, 
    
} from "../utils/firebase/firebase.utils";

export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => {},
});

export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const value = { currentUser, setCurrentUser };

    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener((user) => {

          if (user) {
            createUserDocumentFromAuth(user)

            
          }
            setCurrentUser(user);
        });
        
        return unsubscribe; // Cleanup function
    }, []); // Los corchetes estaban mal ubicados

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};