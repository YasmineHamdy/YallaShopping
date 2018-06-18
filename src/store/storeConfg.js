import productReducer from './reducers/productReducer'
import cartReducer from './reducers/cartReducer'
import { routerReducer , routerMiddleware} from 'react-router-redux'
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware'
import logger from 'redux-logger'
import createHistory from 'history/createBrowserHistory'
import { applyMiddleware,createStore,combineReducers } from 'redux'

export const history = createHistory();

const middleware = routerMiddleware(history)

const store =createStore(combineReducers(
    {
        productReducer,
        cartReducer,
        router:routerReducer
    }),
    applyMiddleware(logger,thunk,promise(),middleware)

);
export default store;
