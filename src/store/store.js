import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { rootReducer } from "./root-reducer";

// Configuración del middleware
const middleWares = [process.env.NODE_ENV === "development" && logger].filter(
  Boolean
);

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["user"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST"], // Ignorar la acción de persistencia
        ignoredPaths: ["register"], // Ignorar la ruta de registro
      },
    }).concat(middleWares), // Agregar middlewares adicionales
});

export const persistor = persistStore(store);

/* 







const composeEnhancer =
  (process.env.NODE_ENV !== 'production' &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;



const persistedReducer = persistReducer(persistConfig, rootReducer);

const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares));


  persistedReducer,
  undefined,
  composedEnhancers
);


 */
