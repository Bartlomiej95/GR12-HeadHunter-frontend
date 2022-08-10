import React, {useState} from "react";
import {ChevronLeft, ChevronRight, DownArrow} from "@styled-icons/boxicons-solid";
import './Pagination.css';
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

export const Pagination: React.FC<IPaginationProps> = ({number, setNumber, handleNext, setEnd, pagesCount}) => {
    const [select, setSelect] = useState(false);

    window.onclick = () => setSelect(false);

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
                                setEnd(number === 1 ? 2 : 1 || number === 5 ? 1 : 2)
                            }}>
                            <span>{number === 1 ? 2 : 1}</span></Option>
                        <Option onClick={() => {
                            setNumber(number === 5 ? 2 : 5)
                            setEnd(number === 5 ? 2 : 5)
                        }}>
                            <span>{number === 5 ? 2 : 5}</span></Option>
                    </Options>
                </PaginationSelect>
            </PaginationSelectWrapper>
            <PaginationPrevNext>
                <p>1 z {pagesCount}</p>
                <PaginationBtn><ChevronLeft size={20}/></PaginationBtn>
                <PaginationBtn className={'active'} onClick={()=> handleNext()}><ChevronRight size={20}/></PaginationBtn>
            </PaginationPrevNext>
        </PaginationWrapper>
    )
}