import React, {useState} from "react";
import {ChevronLeft, ChevronRight, DownArrow} from "@styled-icons/boxicons-solid";
import {
    Options,
    PaginationPrevNext,
    PaginationSelect,
    PaginationSelectWrapper,
    PaginationWrapper,
    Select,
    Option,
    PaginationBtn
} from "./Pagination.styles";
import {IPaginationProps} from "./Pagination.types";

export const Pagination: React.FC<IPaginationProps> = ({number, setNumber, handleNext, setSteps, pagesCount, start, handlePrev}) => {
    const [select, setSelect] = useState(false);

    window.onclick = () => setSelect(false);
    const [page, setPage] = useState(1)

    return (

        <PaginationWrapper>
            <PaginationSelectWrapper>
                <p>Ilość elementów</p>
                <PaginationSelect>
                    <Select onMouseEnter={() => setSelect(true)}><span>{number}</span><DownArrow
                        size={10}/></Select>
                    <Options className={select ? 'active' : ''}>
                        <Option
                            onClick={() => {
                                setNumber(number === 1 ? 2 : 1 || number === 5 ? 1 : 2)
                            }}>
                            <span>{number === 1 ? 2 : 1}</span></Option>
                        <Option onClick={() => {
                            setNumber(number === 5 ? 2 : 5)
                        }}>
                            <span>{number === 5 ? 2 : 5}</span></Option>
                    </Options>
                </PaginationSelect>
            </PaginationSelectWrapper>
            <PaginationPrevNext>
                <p>{page} z {pagesCount}</p>
                <PaginationBtn disabled={page === 1} className={page === 1 ? '' : 'active'} onClick={()=> {
                    handlePrev()
                    setPage(page-1)}}>
                    <ChevronLeft size={20}/></PaginationBtn>
                <PaginationBtn disabled={page === pagesCount} className={page === pagesCount ? '' : 'active'} onClick={()=> {
                    handleNext()
                    setPage(page+1)
                }}><ChevronRight size={20}/></PaginationBtn>
            </PaginationPrevNext>
        </PaginationWrapper>
    )
}