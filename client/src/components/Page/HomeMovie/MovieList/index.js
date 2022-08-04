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
    const [ currentListMovie, setCurrentListMovie ] = useState([])
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
    console.log(listMovie)
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
                dispatch(movieListAction(page))
                break;
            case TV:
                dispatch(TvListAction())
                break;
            default:
                break;
        }
    }, [keySelect, page])

    switch (keySelect) {
        case ALL:
            // setCurrentListMovie(!isSearch ? (listMovieAll.slice(firstPageIndex, lastPageIndex)) : (listSearch.slice(firstPageIndex, lastPageIndex)))
           break;
        case MOVIE: 
            setCurrentListMovie((listMovie.slice(firstPageIndex, lastPageIndex)))
            break;
        case TV:
            // setCurrentListMovie(!isSearch ? (listTv.slice(firstPageIndex, lastPageIndex)) : (listSearch.slice(firstPageIndex, lastPageIndex)))
            break;
    }
    
    console.log(currentListMovie)
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
                    currentListMovie?.map((item, index) => (
                        <MovieItem item={item} key={index} />
                    ))
                }

            </div>
            <Pagination 
                data={!isSearch ? listMovie : listSearch}
                pageSize={pageSize}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                page={page}
                setPage={setPage}
                totalPage={totalPage}
            />
        </WrapMovieList>
    )
}

export default MovieList
