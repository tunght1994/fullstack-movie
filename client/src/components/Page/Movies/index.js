import React, { useEffect, useState } from 'react'
import { WrapMovies } from './index.style'
import { useDispatch, useSelector } from 'react-redux'
import { movieListAction } from '../../../redux/HomeMovie/action'
import Pagination from '../../Control/Pagination'
import MovieItem from '../HomeMovie/MovieList/MovieItem'
import LoadingLocal from '../../Control/LoadingLocal'
import EmptyDataControl from '../../Control/EmptyDataControl'

const Movies = () => {

    const dispatch = useDispatch()

    const [page, setPage] = useState(1)

    const { listMovie, totalPage, isLoading, isSearch, listSearch } = useSelector(state => ({
        listMovie: state.homeReducer.listMovie,
        totalPage: state.homeReducer.totalPage,
        isLoading: state.loading.isLoading,
        isSearch: state.homeReducer.isSearch,
        listSearch: state.homeReducer.listSearch,
    }))

    const handlePageClick = (e) => {
        setPage(e.selected + 1)
    }

    useEffect(() => {
        if(!isSearch) dispatch(movieListAction(page))
    },[page, isSearch])

    let currentListMovie = !isSearch ? listMovie : listSearch

    return (
        <WrapMovies>
            <div className="movie-list">
                {
                    isLoading ? (
                        <div className="loading">
                            <LoadingLocal />
                        </div>
                    ) : (
                        currentListMovie.length === 0 ? (
                            <div className="wrap-empty">
                                <EmptyDataControl text='Không tìm thấy kết quả' />
                            </div>
                        ) : (
                            currentListMovie.map((item, index) => (
                                <MovieItem item={item} key={index} />
                            ))
                        )

                    )
                }
            </div>
            <Pagination
                pageCount={totalPage > 500 ? 500 : " "}
                handlePageClick={handlePageClick}
            />
        </WrapMovies>
    )
}

export default Movies
