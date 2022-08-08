import * as types from './type'


const initialState = {
    detailMovie: {}
}


const detailReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_DETAIL_MOVIE:
            return {
                detailMovie: action.detailMovie
            }
        default:
            return { ...state }
    }

}

export default detailReducer