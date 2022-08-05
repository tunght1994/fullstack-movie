import React, { useCallback, useEffect, useState } from 'react'
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
    const [ currentPage, setCurrentPage ] = useState(1);
    const [ page , setPage ] = useState(1)

    const dispatch = useDispatch()

    const { listMovie, listMovieAll, listTv, isSearch, listSearch, totalResult, totalPage } = useSelector((state) => ({
        listMovie: state.homeReducer.listMovie,
        listMovieAll: state.homeReducer.listMovieAll,
        listTv: state.homeReducer.listTv,
        listSearch: state.homeReducer.listSearch,
        totalResult: state.homeReducer.totalResult,
        totalPage: state.homeReducer.totalPage,
        isSearch: state.homeReducer.isSearch
    }))

    const handleSelect = (item) => {
        setKeySelect(item.key)
    }

    const firstPageIndex = (currentPage - 1) * pageSize
    const lastPageIndex = firstPageIndex + pageSize

    useEffect(() => {
        switch (keySelect) {
            case ALL:
                dispatch(movieListAllAction())
                break;
            case MOVIE: 
                dispatch(movieListAction(currentPage))
                break;
            case TV:
                dispatch(TvListAction())
                break;
            default:
                break;
        }
    }, [keySelect, page])

    let currentListMovie

    switch (keySelect) {
        case ALL:
            currentListMovie = !isSearch ? (listMovieAll.slice(firstPageIndex, lastPageIndex)) : listSearch.slice(firstPageIndex, lastPageIndex)
           break;
        case MOVIE: 
            currentListMovie = !isSearch ? (listMovie.slice(firstPageIndex, lastPageIndex)) : listSearch.slice(firstPageIndex, lastPageIndex)
            break;
        case TV:
            currentListMovie = !isSearch ? (listTv.slice(firstPageIndex, lastPageIndex)) : listSearch.slice(firstPageIndex, lastPageIndex)
            break;
    }

    const handlePageClick = (e) => {
        setPage(e.selected + 1);
    };

    // console.log(cur  rentListMovie)
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
                data={!isSearch ? totalResult : listSearch}
                pageCount={totalPage}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                handleClick={handlePageClick}
            />
        </WrapMovieList>
    )
}

export default MovieList
