import { combineReducers } from "redux";
import homeReducer from './HomeMovie/home'
import loading from './loading/loading'
import detailReducer from './DetailMovie/detailMovie'

const app = combineReducers({
    homeReducer,
    detailReducer,
    loading
})

const rootReducer = (state, action) => {
    return app(state, action)
}

export default rootReducer