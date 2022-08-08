import Axios from 'axios'
import { hostAPI, KEY } from '../../keys'
import * as types from './type'



export const detailMovieAction = (type, id) => async dispatch => {
    try {
        const res = await Axios.get(`${hostAPI}/${type}/${id}?api_key=${KEY}&language=en-US`)
        const { data } = res
        console.log(data)
        dispatch({
            type: types.GET_DETAIL_MOVIE,
            detailMovie: data
        })
    } catch (error) {
        console.log(error)
    }
}




