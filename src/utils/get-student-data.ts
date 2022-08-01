import {HOST} from "./dictionaries";

export const getStudentData = async (id: string) => {
    const res = await fetch(`${HOST}student/getone/${id}`, {
        method: 'GET',
        credentials: "include"
    });
    const data = await res.json();

    return data.message;
}
