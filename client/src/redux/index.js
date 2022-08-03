import { combineReducers } from "redux";
import homeReducer from './HomeMovie/home'

const app = combineReducers({
    homeReducer
})

const rootReducer = (state, action) => {
    return app(state, action)
}

export default rootReducer