// import {StudentCVResponse} from 'types';
export enum ExpectedTypeWork {
    AT_LOCATION = 'atLocation', //praca na miejscu
    CHANGE_OF_LOCATION = 'changeOfLocation', //Gotowość do przeprowadzki
    MANUAL = 'manual', //Wyłącznie zdalnie
    IRRELEVANT = 'irrelevant', //Bez znaczenia (domyślnie)
}

export enum ExpectedContractType {
    UoP = 'UoP', //Tylko UoP
    B2B = 'B2B', //Możliwe B2B
    UZ_UoD = 'UZ/UoD', //Możliwe UZ/UoD
    IRRELEVANT = 'irrelevant', //Brak preferencji (domyślnie)
}

export interface StudentCVResponse {
    bio: string;
    bonusProjectUrls: string[];
    canTakeApprenticeship: boolean;
    courseCompletion: number;
    courseEngagment: number;
    courses: string;
    education: string | null;
    email: string;
    expectedContractType: ExpectedContractType;
    expectedSalary: string | null;
    expectedTypeWork: ExpectedTypeWork;
    firstName: string;
    githubUsername: string;
    hr: string | null;
    id: string;
    lastName: string;
    monthsOfCommercialExp: number;
    portfolioUrls: string[] | null;
    projectDegree: number;
    projectUrls: string[];
    targetWorkCity: string;
    teamProjectDegree: number;
    tel: string;
    workExperience: string;
}

export const getOneStudentData = async (id: string): Promise<StudentCVResponse> => {
    const res = await fetch(`http://localhost:3001/student/getone/${id}`, {
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
        credentials: "include",
    });
    const data = await res.json();
    return data.message;
}
