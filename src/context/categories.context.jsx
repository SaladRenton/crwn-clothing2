import { createContext, useState, useEffect } from "react";
import { getCaregoriesAndDocuments } from "../utils/firebase/firebase.utils.js"

export const CategoriesContext = createContext({
    categoriesMap: {},
    setCategoriesMap: () => { }, // Cambio aquí
});

export const CategoriesProvider = ({ children }) => {
    const [categoriesMap, setCategoriesMap] = useState({});
    const value = { categoriesMap, setCategoriesMap };

    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoryMap = await getCaregoriesAndDocuments()
            
            setCategoriesMap(categoryMap) // Añadí esta línea para actualizar el estado
        }

        getCategoriesMap()
    },[])

    return (
        <CategoriesContext.Provider value={value}>
            {children}
        </CategoriesContext.Provider>
    );
}