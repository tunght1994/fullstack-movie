import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { TvListAction } from '../../../redux/HomeMovie/action'
import EmptyDataControl from '../../Control/EmptyDataControl'
import LoadingLocal from '../../Control/LoadingLocal'
import Pagination from '../../Control/Pagination'
import MovieItem from '../HomeMovie/MovieList/MovieItem'
import { WrapTvList } from './index.style'

const TvShows = () => {
    
    const dispatch = useDispatch()
    const [page, setPage] = useState(1)

    const { listTv, isSearch, isLoading, listSearch, totalPage } = useSelector((state) => ({
        listTv: state.homeReducer.listTv,
        isSearch: state.homeReducer.isSearch,
        listSearch: state.homeReducer.listSearch,
        totalPage: state.homeReducer.totalPage,
        isLoading: state.loading.isLoading,
    }))
    
    const handlePageClick = (e) => {
        setPage(e.selected + 1)
    }

    useEffect(() => {
        if(!isSearch) dispatch(TvListAction(page))
    },[page, isSearch])

    let currentListMovie = !isSearch ? listTv : listSearch

    return (
        <WrapTvList>
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
        </WrapTvList>
    )
}

export default TvShows
