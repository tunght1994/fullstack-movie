import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
//css
import { WrapMovieList } from "./index.style";

// component
import { dataMovieTitle } from "../../../../data/dataMovieTitle";
import {
  movieListAction,
  movieListAllAction,
  TvListAction,
} from "../../../../redux/HomeMovie/action";
import { ALL, MOVIE, TV } from "../../../../keys";
import MovieItem from "./MovieItem";
import Pagination from "../../../Control/Pagination";
import EmptyDataControl from "../../../Control/EmptyDataControl";
import LoadingLocal from "../../../Control/LoadingLocal";

let pageSize = 20;

const MovieList = () => {
  const [keySelect, setKeySelect] = useState(dataMovieTitle[0].key);
  const [currentPage, setCurrentPage] = useState(1);
  const [page, setPage] = useState(1);

  const dispatch = useDispatch();

  const {
    listMovie,
    listMovieAll,
    listTv,
    isSearch,
    listSearch,
    totalPage,
    isLoading,
  } = useSelector((state) => ({
    listMovie: state.homeReducer.listMovie,
    listMovieAll: state.homeReducer.listMovieAll,
    listTv: state.homeReducer.listTv,
    listSearch: state.homeReducer.listSearch,
    totalPage: state.homeReducer.totalPage,
    isSearch: state.homeReducer.isSearch,
    isLoading: state.loading.isLoading,
  }));

  const handleSelect = (item) => {
    setKeySelect(item.key);
  };

  const handlePageClick = (e) => {
    setPage(e.selected + 1);
  };

  useEffect(() => {
    switch (keySelect) {
      case ALL:
        if(!isSearch) dispatch(movieListAllAction(page));
        break;
      case MOVIE:
        if(!isSearch) dispatch(movieListAction(page));
        break;
      case TV:
        if(!isSearch) dispatch(TvListAction(page));
        break;
      default:
        break;
    }
  }, [keySelect, page, isSearch]);

  let currentListMovie;

  switch (keySelect) {
    case ALL:
      currentListMovie = !isSearch ? listMovieAll : listSearch
      break;
    case MOVIE:
      currentListMovie = !isSearch ? listMovie : listSearch
      break;
    case TV:
      currentListMovie = !isSearch ? listTv : listSearch
      break;
  }

  const renderListMovie = useMemo(() => {
    return (
      <>
        {currentListMovie.length === 0 ? (
          <div className="wrap-empty">
            <EmptyDataControl text="Không tìm thấy kết quả" />
          </div>
        ) : isLoading ? (
            <div className="loading">
                <LoadingLocal />
            </div>
        ) : (
          currentListMovie.map((item, index) => (
            <MovieItem item={item} key={index} />
          ))
        )}
      </>
    );
  }, [currentListMovie, isLoading]);

  return (
    <WrapMovieList>
      <div className="movie-title">
        {dataMovieTitle.map((item, index) => (
          <div
            className={`title-item ${item.key === keySelect && "active"}`}
            key={index}
            onClick={() => handleSelect(item)}
          >
            {item.title}
          </div>
        ))}
      </div>
      <div className="movie-list">{renderListMovie}</div>
      <Pagination
        pageCount={totalPage > 500 ? 500 : 0}
        handlePageClick={handlePageClick}
      />
    </WrapMovieList>
  );
};

export default MovieList;
