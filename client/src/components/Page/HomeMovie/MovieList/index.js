import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
//css
import { WrapMovieList } from './index.style'

// component
import { dataMovieTitle }  from '../../../../data/dataMovieTitle'
import { movieListAction, movieListAllAction, TvListAction } from '../../../../redux/HomeMovie/action'
import { ALL, MOVIE, TV } from '../../../../keys'
import MovieItem from './MovieItem'
import Pagination from '../../../Control/Pagination'


let pageSize = 20


const MovieList = () => {

    const [ keySelect, setKeySelect ] = useState(dataMovieTitle[0].key)
    const [currentPage, setCurrentPage] = useState(1);
    const dispatch = useDispatch()

    const { listMovie, listMovieAll, listTv } = useSelector((state) => ({
        listMovie: state.homeReducer.listMovie,
        listMovieAll: state.homeReducer.listMovieAll,
        listTv: state.homeReducer.listTv
    }))

    const handleSelect = (item) => {
        setKeySelect(item.key)
    }

    useEffect(() => {
        switch (keySelect) {
            case ALL:
                dispatch(movieListAllAction())
                break;
            case MOVIE: 
                dispatch(movieListAction())
                break;
            case TV:
                dispatch(TvListAction())
                break;
            default:
                break;
        }
    }, [keySelect])

    const firstPageIndex = (currentPage - 1) * pageSize
    const lastPageIndex = firstPageIndex + pageSize

    let currentListMovie 
    switch (keySelect) {
        case ALL:
            currentListMovie = listMovieAll.slice(firstPageIndex, lastPageIndex)
           break;
        case MOVIE: 
            currentListMovie = listMovie.slice(firstPageIndex, lastPageIndex)
            break;
        case TV:
            currentListMovie = listTv.slice(firstPageIndex, lastPageIndex)
            break;
    }

    return (
        <WrapMovieList>
            <div className="movie-title">
                {dataMovieTitle.map((item,index) => (
                    <div className={`title-item ${item.key === keySelect && 'active'}`} key={index} onClick={() => handleSelect(item)}>
                        {item.title}
                    </div>
                ))}
            </div>
            <div className="movie-list">
                {
                    currentListMovie.map((item, index) => (
                        <MovieItem item={item} key={index} />
                    ))
                }
            </div>
            <Pagination 
                data={(keySelect === ALL && listMovieAll) || (keySelect === MOVIE && listMovie) || (keySelect === TV && listTv)}
                pageSize={pageSize}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            />
        </WrapMovieList>
    )
}

export default MovieList
