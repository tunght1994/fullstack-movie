import Axios from 'axios'

import * as types from './type'

import { hostAPI, KEY, MOVIE, TRENDING, TV } from '../../keys'
import { showLoading, hideLoading } from '../loading/action'


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

    dispach(showLoading())

    try {
        const resNowPlaying = await Axios.get(`${apiMovieListNowPlaying}&page=${page}`)
        const resTopRate = await Axios.get(`${apiMovieListTopRate}&page=${page}`)
        const resUpcoming = await Axios.get(`${apiMovieListUpcoming}&page=${page}`)

        const res = resNowPlaying.data.results.concat(resTopRate.data.results, resUpcoming.data.results)
        const resMovie = res.map((item) => ({
            ...item,
            resType: 'movie'
        }))

        const totalResult = resNowPlaying.data.total_results + resTopRate.data.total_results + resUpcoming.data.total_results
        const totalPage = resNowPlaying.data.total_pages + resTopRate.data.total_pages + resUpcoming.data.total_pages

        dispach({
            type: types.GET_MOVIE_LIST_SUCCESS,
            listMovie: resMovie,
            totalResult: totalResult,
            totalPage: totalPage
        })
    } catch (error) {
        console.log(error)
    }

    dispach(hideLoading())

}

export const movieListAllAction = (page) => async dispach => {

    dispach(showLoading())

    try {
        const resNowPlaying = await Axios.get(`${apiMovieListNowPlaying}&page=${page}`)
        const resTopRate = await Axios.get(`${apiMovieListTopRate}&page=${page}`)
        const resUpcoming = await Axios.get(`${apiMovieListUpcoming}&page=${page}`)

        const resTvPopular = await Axios.get(`${apiTVListPopular}&page=${page}`)
        const resTvTopRate = await Axios.get(`${apiTVListTopRate}&page=${page}`)

        const resMovieResults = resNowPlaying.data.results.concat(resTopRate.data.results, resUpcoming.data.results)
        
        const resTVResults = resTvPopular.data.results.concat(resTvTopRate.data.results)

        let resMovie = resMovieResults.map((item) => ({
            ...item,
            resType: 'movie'   
        }))

        let resTv = resTVResults.map((item) => ({
            ...item,
            resType: 'tv'
        }))
      
        const totalResult = resNowPlaying.data.total_results + resTopRate.data.total_results + resUpcoming.data.total_results + resTvPopular.data.total_results + resTvTopRate.data.total_results

        const totalPage = resNowPlaying.data.total_pages + resTopRate.data.total_pages + resUpcoming.data.total_pages + resTvPopular.data.total_results + resTvTopRate.data.total_results

        dispach({
            type: types.GET_MOVIE_LIST_ALL_SUCCESS,
            listMovieAll: resMovie.concat(resTv),
            totalResult: totalResult,
            totalPage: totalPage
        })
    } catch (error) {
        console.log(error)
    }

    dispach(hideLoading())

}

export const TvListAction = (page) => async dispach => {

    dispach(showLoading())

    try {
        const resTvPopular = await Axios.get(`${apiTVListPopular}&page=${page}`)
        const resTvTopRate = await Axios.get(`${apiTVListTopRate}&page=${page}`)

        const res = resTvPopular.data.results.concat(resTvTopRate.data.results)
        const resTv = res.map((item) => ({
            ...item,
            resType: 'tv'
        }))
        const totalResult = resTvPopular.data.total_results + resTvTopRate.data.total_results

        const totalPage = resTvPopular.data.total_results + resTvTopRate.data.total_results

        dispach({
            type: types.GET_TV_LIST_SUCCESS,
            listTv: resTv,
            totalResult: totalResult,
            totalPage: totalPage
        })

    } catch (error) {
        console.log(error)
    }
    dispach(hideLoading())
}


export const searchMovieActione = (valueSearch) => async dispach => {
    dispach(showLoading())

    try {
        const res = await Axios.get(`${hostAPI}/search/movie?api_key=${KEY}&query=${valueSearch}`)
        const { data } = res
        const totalPage = 0
        if(valueSearch.length === 0) return
        dispach({
            type: types.GET_VALUE_SEARCH_SUCCESS,
            listSearch: data.results,
            totalPage: totalPage
        })

    } catch (error) {
        console.log(error)
    }
    dispach(hideLoading())

}

export const resetSearchMovieAction = () => async dispach => {
    dispach({
        type: types.RESET_VALUE_SEARCH_SUCCESS,
    })
}