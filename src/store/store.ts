import { compose, createStore, applyMiddleware, Middleware } from "redux";
import { persistStore, persistReducer, PersistConfig } from "redux-persist";
import logger from "redux-logger";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web and AsyncStorage
import { thunk } from "redux-thunk"; // Asegúrate de que esto esté importado
import { rootReducer } from "./root-reducer";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "./root-saga";

export type RootState = ReturnType<typeof rootReducer>;

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

type ExtendedPersistConfig =  PersistConfig<RootState> & {
whitelist: (keyof RootState)[]
}

const persistConfig: ExtendedPersistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const sagaMIddleware = createSagaMiddleware();

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Incluye thunk en la lista de middlewares
const middleWares = [
  thunk, // Agrega thunk aquí
  process.env.NODE_ENV !== "production" && logger,
  sagaMIddleware,
].filter((middleware): middleware is Middleware => Boolean(middleware));

const composedEnhancer =
  (process.env.NODE_ENV !== "production" &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const composedEnhancers = composedEnhancer(applyMiddleware(...middleWares));

export const store = createStore(
  persistedReducer,
  undefined,
  composedEnhancers
);

sagaMIddleware.run(rootSaga);

export const persistor = persistStore(store);
