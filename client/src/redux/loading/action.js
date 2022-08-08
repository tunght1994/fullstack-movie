import * as types from './types'

export const enableLoading = () => ({
    type: types.ENABLE_LOADING
})
export const disableLoading = () => ({
    type: types.DISABLE_LOADING
})


export const showLoading = () => dispatch => {
    dispatch({
        type: types.SHOW_LOADING,
    })
}

export const hideLoading = () => dispatch => {
    dispatch({
        type: types.HIDE_LOADING,
    })
}
