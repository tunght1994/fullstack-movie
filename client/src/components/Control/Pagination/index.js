import React, { useMemo, useState } from 'react'
import { WrapPagination } from './index.style';


const Pagination = ({ data, pageSize, currentPage, setCurrentPage }) => {
    let maxPage = Math.ceil(data.length / pageSize)

    let itemNumber = []
    let leftPage = currentPage - 1
    if(leftPage <= 0) leftPage = currentPage
    let rightPage = currentPage + 1
    if(rightPage > maxPage) rightPage = maxPage

    for (let number = leftPage ; number <= rightPage; number++){
        itemNumber.push(
        <div key={number} className={(number === currentPage ? 'round-effect active' : 'round-effect')} onClick={()=>{ setCurrentPage(number)}}>
            {number}
        </div>,
        )
    }

    const nextPage = () => {

    }

    const prevpage = () => {

    }

    return (
        <WrapPagination>
            <div className="flex-container">
                <div className="paginate-ctn">
                    <div className="round-effect" > &lsaquo; </div>
                        {itemNumber}
                    <div className="round-effect"> &rsaquo; </div>
                </div>
            </div>
        </WrapPagination>
    )
}

export default Pagination
