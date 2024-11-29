import { createContext, useReducer, useEffect } from "react";
import { getCaregoriesAndDocuments } from "../utils/firebase/firebase.utils.js";

// Estado inicial
const initialState = {
    categoriesMap: {},
};

// Definición de acciones
const CATEGORIES_ACTIONS = {
    SET_CATEGORIES: 'SET_CATEGORIES',
};

// Reducer
const categoriesReducer = (state, action) => {
    switch (action.type) {
        case CATEGORIES_ACTIONS.SET_CATEGORIES:
            return {
                ...state,
                categoriesMap: action.payload,
            };
        default:
            return state;
    }
};

// Crear el contexto
export const CategoriesContext = createContext(initialState);

// Componente de proveedor del contexto
export const CategoriesProvider = ({ children }) => {
    const [state, dispatch] = useReducer(categoriesReducer, initialState);

    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoryMap = await getCaregoriesAndDocuments();
            dispatch({ type: CATEGORIES_ACTIONS.SET_CATEGORIES, payload: categoryMap });
        };

        getCategoriesMap();
    }, []);

    const value = { categoriesMap: state.categoriesMap };

    return (
        <CategoriesContext.Provider value={value}>
            {children}
        </CategoriesContext.Provider>
    );
}; 