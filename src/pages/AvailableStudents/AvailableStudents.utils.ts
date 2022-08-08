import {getAllStudent} from "../../utils/paths";
import {Dispatch, SetStateAction} from "react";
import {Students} from "./AvailableStudents.types";
import {Filtered} from "../../components/Filter/Filter.types";

export const getStudents = async(setFreeStudents: Dispatch<SetStateAction<Students[]>>) => {
    const res = await fetch(getAllStudent, {
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
        credentials: "include",
    });
    const data = await res.json();
    setFreeStudents(data.data);
}

export const filterStudent = (filtered: Filtered) => {
    const commercialExp = filtered.commercialExp

    const contractType: string[] = [];

    [{...filtered.contractType}].forEach(contract => {
        if (contract.b2b) contractType.push('B2B')
        if (contract.contractOfEmployment) contractType.push('Umowa o pracę')
        if (contract.contractOfMandate) contractType.push('Umowa zlecenie')
        if (contract.contractWork) contractType.push('Umowa o dzieło')
    })
    const freeWork = filtered.freeWork

    const placeWorking: string[] = [];
    if (filtered.placeWork.officeWork) placeWorking.push('Biuro')
    if (filtered.placeWork.remoteWork) placeWorking.push('Praca zdalna')

    const ratingActiveInCourse: number[] = [];
    [{...filtered.ratingActiveInCourse}].forEach(rating => {
        if (rating.fiveStar) ratingActiveInCourse.push(5)
        if (rating.fourStar) ratingActiveInCourse.push(4)
        if (rating.threeStar) ratingActiveInCourse.push(3)
        if (rating.twoStar) ratingActiveInCourse.push(2)
        if (rating.oneStar) ratingActiveInCourse.push(1)
    })

    const ratingCode: number[] = [];
    [{...filtered.ratingCode}].forEach(rating => {
        if (rating.fiveStar) ratingCode.push(5)
        if (rating.fourStar) ratingCode.push(4)
        if (rating.threeStar) ratingCode.push(3)
        if (rating.twoStar) ratingCode.push(2)
        if (rating.oneStar) ratingCode.push(1)
    })

    const ratingCourse: number[] = [];
    [{...filtered.ratingCourse}].forEach(rating => {
        if (rating.fiveStar) ratingCourse.push(5)
        if (rating.fourStar) ratingCourse.push(4)
        if (rating.threeStar) ratingCourse.push(3)
        if (rating.twoStar) ratingCourse.push(2)
        if (rating.oneStar) ratingCourse.push(1)
    })

    const ratingScrum: any[] = [];
    [{...filtered.ratingScrum}].forEach(rating => {
        if (rating.fiveStar) ratingScrum.push(5)
        if (rating.fourStar) ratingScrum.push(4)
        if (rating.threeStar) ratingScrum.push(3)
        if (rating.twoStar) ratingScrum.push(2)
        if (rating.oneStar) ratingScrum.push(1)
    })

    const salaryPrice: any[] = []
    if (filtered.salaryPrice.from) salaryPrice.push(filtered.salaryPrice.from)
    else salaryPrice.push(0)
    if (filtered.salaryPrice.to) salaryPrice.push(filtered.salaryPrice.to)

    return {
        commercialExp,
        contractType,
        freeWork,
        placeWorking,
        ratingActiveInCourse,
        ratingCode,
        ratingCourse,
        ratingScrum,
        salaryPrice,
    }
}