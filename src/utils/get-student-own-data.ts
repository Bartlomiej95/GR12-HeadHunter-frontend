import {ExpectedContractType, ExpectedTypeWork} from "./get-one-student-data";
import {StudentDataUpdate} from "./dictionaries";

export interface StudentData {
    tel: string;
    firstName: string;
    lastName: string;
    githubUsername: string;
    portfolioUrls: string[] | null;
    projectUrls: string[];
    bio: string;
    expectedTypeWork: ExpectedTypeWork;
    targetWorkCity: string;
    expectedContractType: ExpectedContractType;
    expectedSalary: string | number;
    canTakeApprenticeship: string;
    monthsOfCommercialExp: number;
    education: string;
    workExperience: string;
    courses: string;
}

export const getStudentOwnData = async (): Promise<StudentData> => {
    const res = await fetch(StudentDataUpdate, {
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
        credentials: "include",
    });
    return await res.json();
}
