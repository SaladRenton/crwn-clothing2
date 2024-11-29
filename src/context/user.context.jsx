import { createContext, useEffect } from "react";
import {
  createUserDocumentFromAuth,
  onAuthStateChangedListener,

} from "../utils/firebase/firebase.utils";

import { useReducer } from "react";

import { createAction } from "../utils/reducer/reducer.utils";



const INITIAL_STATE = {
  currentUser: null,
}


export const USER_ACTION_TYPES = {
  SET_CURRENT_USER: 'SET_CURRENT_USER',
}



const userReducer = (state, action) => {
  const { type, payload } = action;


  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return {
        ...state, // Spread the existing state to preserve other properties
        currentUser: payload, // Update the currentUser  with the payload
      };

    default:
      throw new Error(`Unhandled action type: ${type}`);
  }
};


export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => { },
});


export const UserProvider = ({ children }) => {

  const [state, dispatch] = useReducer(userReducer, INITIAL_STATE)

  const { currentUser } = state


  const setCurrentUser = (user) => {
    dispatch(
      createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user)
    );
  }

  const value = { currentUser, setCurrentUser }



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