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

export const Pagination = () => {
    const [select, setSelect] = useState(false);
    const [number, setNumber] = useState(10)

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
                            onClick={() => setNumber(number === 10 ? 20 : 10 || number === 50 ? 10 : 20)}>
                            <span>{number === 10 ? 20 : 10}</span></Option>
                        <Option onClick={() => setNumber(number === 50 ? 20 : 50)}>
                            <span>{number === 50 ? 20 : 50}</span></Option>
                    </Options>
                </PaginationSelect>
            </PaginationSelectWrapper>
            <PaginationPrevNext>
                <p>10 z 90</p>
                <PaginationBtn><ChevronLeft size={20}/></PaginationBtn>
                <PaginationBtn className={'active'}><ChevronRight size={20}/></PaginationBtn>
            </PaginationPrevNext>
        </PaginationWrapper>
    )
}