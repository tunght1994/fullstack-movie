import * as types from './types'

const initialState = {
    isLoading: false,
}

const loading = (state = initialState, action) => {
    const { type, payload } = action;
    if (type === types.ENABLE_LOADING)
        return {
            ...state,
            isLoading: true,
        }
    if (type === types.DISABLE_LOADING)
        return {
            ...state,
            isLoading: false,
        }
    if (type === types.SHOW_LOADING) {
        return {
            ...state,
            isLoading: true,
        };
    }
    if (type === types.HIDE_LOADING) {
        return {
            ...state,
            isLoading: false,
        };
    }
    return state;

}

export default loading