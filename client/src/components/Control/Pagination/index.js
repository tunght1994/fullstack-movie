import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { WrapPagination } from './index.style';

function Pagination({ pageCount, handlePageClick }) {

    return (
        <WrapPagination>
            <ReactPaginate
            className="pagination"
            breakLabel="..."
            nextLabel={null}
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel={null}
            renderOnZeroPageCount={null}
            />
        </WrapPagination>
    )
}


export default Pagination