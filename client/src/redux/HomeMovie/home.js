import * as types from './type'


const initialState = {
    listBanner: [],
    listMovie: [],
    listMovieAll: [],
    listTv: [],
    listSearch: [],
    isSearch: true,
    totalResult: 0,
    totalPage: 0
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
                listMovie: action.listMovie,
                totalResult: action.totalResult,
                totalPage: action.totalPage,
                isSearch: false
            }

        case types.GET_MOVIE_LIST_ALL_SUCCESS: 
            return {
                ...state,
                listMovieAll: action.listMovieAll,
                isSearch: false
            }

        case types.GET_TV_LIST_SUCCESS: 
            return {
                ...state,
                listTv: action.listTv,
                isSearch: false
            }
        case types.GET_VALUE_SEARCH_SUCCESS: 
            return {
                ...state,
                listSearch: action.listSearch,
                isSearch: true
            }
        case types.RESET_VALUE_SEARCH_SUCCESS: 
            return {
                ...state,
                listSearch: [],
                isSearch: false
            }
        default:
            return state
    }
}


export default homeReducer