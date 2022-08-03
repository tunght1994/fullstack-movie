import * as types from './type'


const initialState = {
    listBanner: [],
    listMovie: [],
    listMovieAll: [],
    listTv: []
}


const homeReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_TRENDING_SUCCESS: 
            return {
                ...state,
                listBanner: action.listBanner
            }
        
        case types.GET_MOVIE_LIST_SUCCESS: 
            return {
                ...state,
                listMovie: action.listMovie
            }

        case types.GET_MOVIE_LIST_ALL_SUCCESS: 
            return {
                ...state,
                listMovieAll: action.listMovieAll
            }

        case types.GET_TV_LIST_SUCCESS: 
            return {
                ...state,
                listTv: action.listTv
            }
            
        default:
            return state
    }
}


export default homeReducer