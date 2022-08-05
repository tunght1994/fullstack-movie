import Axios from 'axios'

import * as types from './type'

import { hostAPI, KEY, MOVIE, TRENDING, TV } from '../../keys'


const apiTrending = `${hostAPI}/${TRENDING}/all/week?api_key=${KEY}`

// Movie
const apiMovieListNowPlaying = `${hostAPI}/${MOVIE}/now_playing?api_key=${KEY}&language=en-US`
const apiMovieListTopRate = `${hostAPI}/${MOVIE}/top_rated?api_key=${KEY}&language=en-US`
const apiMovieListUpcoming = `${hostAPI}/${MOVIE}/upcoming?api_key=${KEY}&language=en-US`

// TV
const apiTVListPopular = `${hostAPI}/${TV}/popular?api_key=${KEY}&language=en-US`
const apiTVListTopRate = `${hostAPI}/${TV}/top_rated?api_key=${KEY}&language=en-US`

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

export const movieListAction = (page) => async dispach => {
    try {
        const resNowPlaying = await Axios.get(`${apiMovieListNowPlaying}&page=${page}`)
        const resTopRate = await Axios.get(`${apiMovieListTopRate}&page=${page}`)
        const resUpcoming = await Axios.get(`${apiMovieListUpcoming}&page=${page}`)
        const res = resNowPlaying.data.results.concat(resTopRate.data.results, resUpcoming.data.results)
        const totalResult = resNowPlaying.data.total_results + resTopRate.data.total_results + resUpcoming.data.total_results
        const totalPage = resNowPlaying.data.total_pages + resTopRate.data.total_pages + resUpcoming.data.total_pages

        dispach({
            type: types.GET_MOVIE_LIST_SUCCESS,
            listMovie: res,
            totalResult: totalResult,
            totalPage: totalPage
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
        const res = await Axios.get(`${hostAPI}/search/movie?api_key=${KEY}&query=${valueSearch}`)
        const { data } = res
        if(!valueSearch) return
        dispach({
            type: types.GET_VALUE_SEARCH_SUCCESS,
            listSearch: data.results
        })

    } catch (error) {
        console.log(error)
    }
}

export const resetSearchMovieAction = () => async dispach => {
    dispach({
        type: types.RESET_VALUE_SEARCH_SUCCESS,
    })
}