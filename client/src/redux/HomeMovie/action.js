import Axios from 'axios'

import * as types from './type'

import { hostAPI, KEY, MOVIE, TRENDING, TV } from '../../keys'


const apiTrending = `${hostAPI}/${TRENDING}/all/week?api_key=${KEY}`

// Movie
const apiMovieListNowPlaying = `${hostAPI}/${MOVIE}/now_playing?api_key=${KEY}&language=en-US&page=1`
const apiMovieListTopRate = `${hostAPI}/${MOVIE}/top_rated?api_key=${KEY}&language=en-US&page=1`
const apiMovieListUpcoming = `${hostAPI}/${MOVIE}/upcoming?api_key=${KEY}&language=en-US&page=1`

// TV
const apiTVListPopular = `${hostAPI}/${TV}/popular?api_key=${KEY}&language=en-US&page=1`
const apiTVListTopRate = `${hostAPI}/${TV}/top_rated?api_key=${KEY}&language=en-US&page=1`

export const bannerAction = () => async dispach => {
    try {
        const res = await Axios.get(apiTrending)
        const { data } = res
        dispach({
            type: types.GET_TRENDING_SUCCESS,
            listBanner: data.results
        })

    } catch (error) {
        console.log(error)
    }
}

export const movieListAction = () => async dispach => {
    try {
        const resNowPlaying = await Axios.get(apiMovieListNowPlaying)
        const resTopRate = await Axios.get(apiMovieListTopRate)
        const resUpcoming = await Axios.get(apiMovieListUpcoming)
        const res = resNowPlaying.data.results.concat(resTopRate.data.results, resUpcoming.data.results)

        dispach({
            type: types.GET_MOVIE_LIST_SUCCESS,
            listMovie: res
        })
    } catch (error) {
        console.log(error)
    }
}

export const movieListAllAction = () => async dispach => {
    try {
        const resNowPlaying = await Axios.get(apiMovieListNowPlaying)
        const resTopRate = await Axios.get(apiMovieListTopRate)
        const resUpcoming = await Axios.get(apiMovieListUpcoming)

        const resTvPopular = await Axios.get(apiTVListPopular)
        const resTvTopRate = await Axios.get(apiTVListTopRate)

        const res = resTvPopular.data.results.concat(resTopRate.data.results, resUpcoming.data.results, resNowPlaying.data.results, resTvTopRate.data.results)

        dispach({
            type: types.GET_MOVIE_LIST_ALL_SUCCESS,
            listMovieAll: res
        })
    } catch (error) {
        console.log(error)
    }
}

export const TvListAction = () => async dispach => {
    try {
        const resTvPopular = await Axios.get(apiTVListPopular)
        const resTvTopRate = await Axios.get(apiTVListTopRate)

        const res = resTvPopular.data.results.concat(resTvTopRate.data.results)

        dispach({
            type: types.GET_TV_LIST_SUCCESS,
            listTv: res
        })
    } catch (error) {
        console.log(error)
    }
}


export const searchMovieActione = (valueSearch) => async dispach => {
    try {
        const res = await Axios.get(`${hostAPI}/search/keyword?api_key=${KEY}&query=${valueSearch}`)
        const { data } = res
        if(valueSearch) {
            dispach({
                type: types.GET_VALUE_SEARCH_SUCCESS,
                listSearch: data.results
            })
        }else {
            dispach({
                type: types.RESET_VALUE_SEARCH_SUCCESS,
            })
        }

    } catch (error) {
        console.log(error)
    }
}
