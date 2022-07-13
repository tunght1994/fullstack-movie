import rootReducer from "."
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";
import { applyMiddleware, legacy_createStore as createStore} from "redux";

const composeEnhancers = composeWithDevTools({
    trace: true,
    traceLimit: 25,
});

const midleware = [thunk]
  
const configureStore = (initialState = {}) => {
    return createStore(
        rootReducer,
        initialState,
        composeEnhancers(applyMiddleware(...midleware))
    )
}
export default configureStore