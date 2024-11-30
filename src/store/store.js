import {compose, createStore, applyMiddleWare} from 'redux'
import logger from 'redux-logger'

import {rootReducer} from './rootReducer'

//---------------------------------------------------------------------------------------------------------------

const middleWares = [logger]

const composedEnhancers = compose(applyMiddleWare(...middleWares))

export const store = createStore(rootReducer, undefined, middleWares)

 


